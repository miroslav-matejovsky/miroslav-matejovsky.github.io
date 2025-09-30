---
title: PowerShell Fortunes
description: Simple script to display random fortunes in PowerShell.
tableOfContents: false
prev: false
next: false
---

I've read this article about [Fortunes](https://www.judy.co.uk/blog/using-fortune-to-reinforce-habits/) and I wanted to have something similar in PowerShell.

So I created a simple script that displays random fortune from a list of fortunes.

```powershell
<#
.SYNOPSIS
Displays a random fortune message, similar to the Unix fortune tool.

.DESCRIPTION
This function selects and prints a random message from a predefined list of fortunes.
If cowsay is installed, it uses cowsay for ASCII art; otherwise, it highlights commands in yellow.

.EXAMPLE
fortune
Displays a random fortune.

.NOTES
Add more fortunes to the $fortunes array as needed. Install cowsay via scoop for enhanced output.
#>
function Get-Fortune {
  $fortunes = @(
    "Use 'duf' for a better disk usage overview.",
    "Use 'z' (zoxide) for smarter directory navigation.",
    "Use 'xh' for a more user-friendly HTTP client.",
    "Use 'lg' (lazygit) for an improved git interface.",
    "Use 'tldr' to get simplified explanations of commands.",
    "Use 'bat' instead of 'cat' for syntax highlighting and Git integration.",
    "Use 'edit' for console-based text editing."
  )

  $randomFortune = Get-Random -InputObject $fortunes
  $coloredFortune = $randomFortune -replace "'([^']+)'", "`e[33m'$+'`e[0m"

  if (Get-Command cowsay -ErrorAction SilentlyContinue) {
    # Use cowsay for ASCII art if installed
    $coloredFortune | cowsay
  }
  else {
    # Fallback: highlight commands in yellow using ANSI codes
    Write-Host $coloredFortune
  }
}

Set-Alias -Name fortune -Value Get-Fortune
```

Now you add this script for example to your `Commands` folder in
PowerShell profile and you can use `fortune` command to get a random fortune.

```powershell
# Load all scripts from Commands folder
$commandsDir = Join-Path $PSScriptRoot "Commands"
if (Test-Path $commandsDir) {
    Get-ChildItem -Path $commandsDir -Filter *.ps1 -File | ForEach-Object {
        . $_.FullName
    }
}

# Print a random fortune to terminal
fortune
```
