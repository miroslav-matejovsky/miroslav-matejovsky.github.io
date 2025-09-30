---
title: PowerShell Profile
description: Track your PowerShell profile in git.
tableOfContents: false
prev: false
next: false
---

I do no remember where is my PowerShell profile located, but there is a variable `$PROFILE`:

```powershell
$PROFILE
```

Open folder with profile in VS Code:

```powershell
code $PROFILE/..
```

Now you can track whole profile directory in git. (aka [dotfiles](https://wiki.archlinux.org/title/Dotfiles) for PowerShell :smile:)
To avoid tracking unnecessary files, you can create `.gitignore` and ignore everything except files you want to track:

```text
/*
!.gitignore
!README.md
!Microsoft.PowerShell_profile.ps1
!powershell.config.json

!.vscode/
!clean-detailed.omp.json
!robbyrussell.omp.json
!Commands/
```

I also created `Commands` folder where I put various PowerShell scripts I want to use.
Then I load all scripts from `Commands` folder in my profile:

```powershell
# Load all scripts from Commands folder
$commandsDir = Join-Path $PSScriptRoot "Commands"
if (Test-Path $commandsDir) {
    Get-ChildItem -Path $commandsDir -Filter *.ps1 -File | ForEach-Object {
        . $_.FullName
    }
}
```

Now you can create various scripts in `Commands` folder and use them in PowerShell.
