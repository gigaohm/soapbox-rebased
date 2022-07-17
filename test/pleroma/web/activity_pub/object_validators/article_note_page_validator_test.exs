# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.ActivityPub.ObjectValidators.ArticleNotePageValidatorTest do
  use Pleroma.DataCase, async: true

  alias Pleroma.Web.ActivityPub.ObjectValidator
  alias Pleroma.Web.ActivityPub.ObjectValidators.ArticleNotePageValidator
  alias Pleroma.Web.ActivityPub.Utils

  import Pleroma.Factory

  describe "Notes" do
    setup do
      user = insert(:user)

      note = %{
        "id" => Utils.generate_activity_id(),
        "type" => "Note",
        "actor" => user.ap_id,
        "to" => [user.follower_address],
        "cc" => [],
        "content" => "Hellow this is content.",
        "context" => "xxx",
        "summary" => "a post"
      }

      %{user: user, note: note}
    end

    test "a basic note validates", %{note: note} do
      %{valid?: true} = ArticleNotePageValidator.cast_and_validate(note)
    end

    test "a note from factory validates" do
      note = insert(:note)
      %{valid?: true} = ArticleNotePageValidator.cast_and_validate(note.data)
    end
  end

  describe "Note with history" do
    setup do
      user = insert(:user)
      {:ok, activity} = Pleroma.Web.CommonAPI.post(user, %{status: "mew mew :dinosaur:"})
      {:ok, edit} = Pleroma.Web.CommonAPI.update(user, activity, %{status: "edited :blank:"})

      {:ok, %{"object" => external_rep}} =
        Pleroma.Web.ActivityPub.Transmogrifier.prepare_outgoing(edit.data)

      %{external_rep: external_rep}
    end

    test "edited note", %{external_rep: external_rep} do
      assert %{"formerRepresentations" => %{"orderedItems" => [%{"tag" => [_]}]}} = external_rep

      {:ok, validate_res, []} = ObjectValidator.validate(external_rep, [])

      assert %{"formerRepresentations" => %{"orderedItems" => [%{"emoji" => %{"dinosaur" => _}}]}} =
               validate_res
    end

    test "edited note, badly-formed formerRepresentations", %{external_rep: external_rep} do
      external_rep = Map.put(external_rep, "formerRepresentations", %{})

      assert {:error, _} = ObjectValidator.validate(external_rep, [])
    end

    test "edited note, badly-formed history item", %{external_rep: external_rep} do
      history_item =
        Enum.at(external_rep["formerRepresentations"]["orderedItems"], 0)
        |> Map.put("type", "Foo")

      external_rep =
        put_in(
          external_rep,
          ["formerRepresentations", "orderedItems"],
          [history_item]
        )

      assert {:error, _} = ObjectValidator.validate(external_rep, [])
    end
  end

  test "Fedibird quote post" do
    insert(:user, ap_id: "https://fedibird.com/users/noellabo")

    data = File.read!("test/fixtures/quote_post/fedibird_quote_post.json") |> Jason.decode!()
    cng = ArticleNotePageValidator.cast_and_validate(data)

    assert cng.valid?
    assert cng.changes.quoteUrl == "https://misskey.io/notes/8vsn2izjwh"
  end

  test "Fedibird quote post with quoteUri field" do
    insert(:user, ap_id: "https://fedibird.com/users/noellabo")

    data = File.read!("test/fixtures/quote_post/fedibird_quote_uri.json") |> Jason.decode!()
    cng = ArticleNotePageValidator.cast_and_validate(data)

    assert cng.valid?
    assert cng.changes.quoteUrl == "https://fedibird.com/users/yamako/statuses/107699333438289729"
  end

  test "Misskey quote post" do
    insert(:user, ap_id: "https://misskey.io/users/7rkrarq81i")

    data = File.read!("test/fixtures/quote_post/misskey_quote_post.json") |> Jason.decode!()
    cng = ArticleNotePageValidator.cast_and_validate(data)

    assert cng.valid?
    assert cng.changes.quoteUrl == "https://misskey.io/notes/8vs6wxufd0"
  end

  test "a Note from Roadhouse validates" do
    insert(:user, ap_id: "https://macgirvin.com/channel/mike")

    %{"object" => note} =
      "test/fixtures/roadhouse-create-activity.json"
      |> File.read!()
      |> Jason.decode!()

    %{valid?: true} = ArticleNotePageValidator.cast_and_validate(note)
  end
end
