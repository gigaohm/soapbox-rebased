# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Search.DatabaseSearchTest do
  alias Pleroma.Search.DatabaseSearch, as: Search
  alias Pleroma.Web.CommonAPI
  import Pleroma.Factory

  use Pleroma.DataCase, async: true

  test "it finds something" do
    user = insert(:user)
    {:ok, post} = CommonAPI.post(user, %{status: "it's wednesday my dudes"})

    [result] = Search.search(nil, "wednesday")

    assert result.id == post.id
  end

  test "it finds local-only posts for authenticated users" do
    user = insert(:user)
    reader = insert(:user)
    {:ok, post} = CommonAPI.post(user, %{status: "it's wednesday my dudes", visibility: "local"})

    [result] = Search.search(reader, "wednesday")

    assert result.id == post.id
  end

  test "it does not find local-only posts for anonymous users" do
    user = insert(:user)
    {:ok, _post} = CommonAPI.post(user, %{status: "it's wednesday my dudes", visibility: "local"})

    assert [] = Search.search(nil, "wednesday")
  end

  test "using plainto_tsquery on postgres < 11" do
    old_version = :persistent_term.get({Pleroma.Repo, :postgres_version})
    :persistent_term.put({Pleroma.Repo, :postgres_version}, 10.0)
    on_exit(fn -> :persistent_term.put({Pleroma.Repo, :postgres_version}, old_version) end)

    user = insert(:user)
    {:ok, post} = CommonAPI.post(user, %{status: "it's wednesday my dudes"})
    {:ok, _post2} = CommonAPI.post(user, %{status: "it's wednesday my bros"})

    # plainto doesn't understand complex queries
    assert [result] = Search.search(nil, "wednesday -dudes")

    assert result.id == post.id
  end

  test "using websearch_to_tsquery" do
    user = insert(:user)
    {:ok, _post} = CommonAPI.post(user, %{status: "it's wednesday my dudes"})
    {:ok, other_post} = CommonAPI.post(user, %{status: "it's wednesday my bros"})

    assert [result] = Search.search(nil, "wednesday -dudes")

    assert result.id == other_post.id
  end
end
