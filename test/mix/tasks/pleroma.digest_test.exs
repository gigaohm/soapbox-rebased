defmodule Mix.Tasks.Pleroma.DigestTest do
  use Pleroma.DataCase

  import Pleroma.Factory
  import Swoosh.TestAssertions

  alias Pleroma.Web.CommonAPI

  setup_all do
    Mix.shell(Mix.Shell.Process)

    on_exit(fn ->
      Mix.shell(Mix.Shell.IO)
    end)

    :ok
  end

  describe "pleroma.digest test" do
    test "Sends digest to the given user" do
      user1 = insert(:user)
      user2 = insert(:user)

      Enum.each(0..10, fn i ->
        {:ok, _activity} =
          CommonAPI.post(user1, %{
            "status" => "hey ##{i} @#{user2.nickname}!"
          })
      end)

      Mix.Tasks.Pleroma.Digest.run(["test", user2.nickname])

      assert_received {:mix_shell, :info, [message]}
      assert message =~ "Digest email have been sent"

      assert_email_sent(
        to: {user2.name, user2.email},
        html_body: ~r/new mentions:/i
      )
    end
  end
end
