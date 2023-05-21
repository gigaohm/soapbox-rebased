# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Language.Translation.Provider do
  @callback configured?() :: boolean()

  @callback translate(
              content :: String.t(),
              source_language :: String.t(),
              target_language :: String.t()
            ) ::
              {:ok,
               %{
                 content: String.t(),
                 detected_source_language: String.t(),
                 provider: String.t()
               }}
              | {:error, atom()}

  @callback supported_languages(type :: :string | :target) ::
              {:ok, [String.t()]} | {:error, atom()}

  @callback languages_matrix() :: {:ok, Map.t()} | {:error, atom()}

  @callback name() :: String.t()
end
