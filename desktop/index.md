---
layout: default
title: Desktop Memo
order: 1
---

## Windows Applications

### System

```sh
winget install --exact --id=7zip.7zip
winget install --exact --id=Balena.Etcher
```

- [Turn Off Monitor](https://sourceforge.net/projects/turnoffmonitor/)
- [Flexible Renamer](http://www.vector.co.jp/soft/winnt/util/se131133.html)
- [Stirling](http://www.vector.co.jp/soft/win95/util/se079072.html)
- [単ZIP](http://kurohane.net/seisanbutu.html)
- [VirtualBox](https://www.virtualbox.org/)

### Browser

```sh
winget install --exact --id=Mozilla.Firefox
winget install --exact --id=Google.Chrome
```

### Editor

```sh
winget install --exact --id=Microsoft.VisualStudioCode
winget install --exact --id=LibreOffice.LibreOffice
winget install --exact --id=GIMP.GIMP
winget install --exact --id=Inkscape.Inkscape
```

- [PNGcutdown](http://www.vector.co.jp/soft/win95/prog/se277095.html)
- [@icon変換](http://www.towofu.net/soft/aicon.php)

### Viewer

```sh
winget install --exact --id=Videolan.Vlc
```

- [Leeyes](http://www3.tokai.or.jp/boxes/leeyes/)

### Study

```sh
winget install --exact --id=Anki.Anki
```

### CLI

- [ExifTool](https://exiftool.org/)
- [jhead](https://www.sentex.ca/~mwandel/jhead/)

### Development

```sh
winget install --exact --id=Git.Git
winget install --exact --id=Atlassian.Sourcetree
winget install --exact --id=OpenJS.Nodejs
winget install --exact --id=Python.Python
winget install --exact --id=GoLang.Go
```

## macOS Applications

<https://brew.sh>

### System

```sh
brew cask install appcleaner
brew cask install bettertouchtool
brew cask install karabiner-elements
brew cask install openinterminal-lite
brew cask install keka
brew cask install balenaetcher
brew cask install virtualbox
```

### Browser

```sh
brew cask install firefox
brew cask install google-chrome
```

### Editor

```sh
brew cask install visual-studio-code
brew cask install libreoffice
brew cask install gimp
brew cask install hex-fiend
```

- [Inkscape](https://inkscape.org/)

### Viewer

```sh
brew cask install vlc
```

### Study

```sh
brew cask install anki
```

### CLI

```sh
brew install exiftool
brew install jhead
```

### Development

```sh
brew install git
brew cask install sourcetree
brew install anyenv
```

### Font

```sh
brew tap homebrew/cask-fonts
brew cask install font-source-han-sans
brew cask install font-source-han-serif
brew cask install font-source-han-mono
```

## Anyenv

<https://github.com/anyenv/anyenv>

```sh
anyenv install nodenv
anyenv install pyenv
anyenv install goenv
```

## Config

### Common

- [.ssh/config](ssh/config)
- [.gitconfig](gitconfig)

### Windows Registries

- [Change 7-zip icons to system default](reg/change_7zip_icons.reg)
- [Hide onedrive folder from Windows10 Explorer](reg/hide_onedrive.reg)

## Scripts

### Batch Files

- [Delete temporary files](bat/delete_temp.bat)

## Fonts

- Sans Serif
  - [Source Han Sans](https://github.com/adobe-fonts/source-han-sans)
  - [Source Han Mono](https://github.com/adobe-fonts/source-han-mono)
  - [Noto Sans CJK JP](https://www.google.com/get/noto/#sans-jpan)
  - [MotoyaLCedar](https://github.com/android/platform_frameworks_base/blob/marshmallow-release/data/fonts/MTLc3m.ttf)
- Serif
  - [Source Han Serif](https://github.com/adobe-fonts/source-han-serif)
  - [Noto Serif CJK JP](https://www.google.com/get/noto/#serif-jpan)
- Rounded Sans Serif
  - [MotoyaLMaru](https://github.com/aosp-mirror/platform_frameworks_base/blob/marshmallow-release/data/fonts/MTLmr3m.ttf)
