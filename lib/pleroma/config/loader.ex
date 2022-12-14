# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Config.Loader do
  # These modules are only being used as keys here (for equality check),
  # so it's okay to use `Module.concat/1` to have the compiler ignore them.
  @reject_keys [
    Module.concat(["Pleroma.Repo"]),
    Module.concat(["Pleroma.Web.Endpoint"]),
    :env,
    :configurable_from_database,
    :database,
    :swarm
  ]

  @reject_groups [
    :postgrex,
    :tesla
  ]

  @reader Config.Reader

  @spec read(Path.t()) :: keyword()
  def read(path), do: @reader.read!(path)

  @spec merge(keyword(), keyword()) :: keyword()
  def merge(c1, c2), do: @reader.merge(c1, c2)

  @spec default_config() :: keyword()
  def default_config do
    "config/config.exs"
    |> read()
    |> filter()
  end

  defp filter(configs) do
    configs
    |> Keyword.keys()
    |> Enum.reduce([], &Keyword.put(&2, &1, filter_group(&1, configs)))
  end

  @spec filter_group(atom(), keyword()) :: keyword()
  def filter_group(group, configs) do
    Enum.reject(configs[group], fn {key, _v} ->
      key in @reject_keys or group in @reject_groups or
        (group == :phoenix and key == :serve_endpoints)
    end)
  end
end
