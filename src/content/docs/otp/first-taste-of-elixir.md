---
title: First taste of Elixir
description: What you get when you run iex in fresh Elixir project.
tableOfContents: false
prev: false
next: false
---

Let's create new Elixir project:

```powershell
mix new first_taste
code first_taste
```

Open terminal in VS Code and run interactive Elixir shell:

```powershell
iex.bat -S mix
```

On windows you need to run `iex.bat` instead of `iex` as iex is used by PowerShell as alias for `Invoke-Expression`.

You should see something like this:

```text
Erlang/OTP 28 [erts-16.1] [source] [64-bit] [smp:22:22] [ds:22:22:10] [async-threads:1] [jit:ns]

Compiling 1 file (.ex)
Generated first_taste app
Interactive Elixir (1.18.4) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> 
```

## Modules

Everything in Elixir and Erlang is organized in modules.
To distinguish between Elixir and Erlang modules,
Elixir modules are in `CamelCase` and Erlang modules are in `:snake_case`.

Let's see what modules are available:

```elixir
:code.all_available()
:erlang.module_info(:exports)
Logger.module_info(:exports)
```

You can call functions in live system as in the OS terminal,
which is very useful for debugging.
