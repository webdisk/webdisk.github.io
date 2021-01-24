---
layout: default
title: Desktop Memo
order: 1
---

## Windows Applications

<https://github.com/microsoft/winget-cli>

### Browser

```sh
winget install --exact --id=Mozilla.Firefox
winget install --exact --id=Google.Chrome
```

### Tool

```sh
winget install --exact --id=7zip.7zip
winget install --exact --id=Balena.Etcher
```

- [Turn Off Monitor](https://sourceforge.net/projects/turnoffmonitor/)
- [Flexible Renamer](http://www.vector.co.jp/soft/winnt/util/se131133.html)
- [Stirling](http://www.vector.co.jp/soft/win95/util/se079072.html)
- [単ZIP](http://kurohane.net/seisanbutu.html)
- [VirtualBox](https://www.virtualbox.org/)

### Document

```sh
winget install --exact --id=Microsoft.VisualStudioCode
winget install --exact --id=LibreOffice.LibreOffice
winget install --exact --id=GIMP.GIMP
winget install --exact --id=Inkscape.Inkscape
```

### Image

- [Leeyes](http://www3.tokai.or.jp/boxes/leeyes/)
- [PNGcutdown](http://www.vector.co.jp/soft/win95/prog/se277095.html)

### Photo

- [Google Backup and Sync](https://www.google.com/drive/download/)
- [Amazon Photos](https://www.amazon.co.jp/b?node=5262651051)
- [ExifTool](https://exiftool.org/)
- [jhead](https://www.sentex.ca/~mwandel/jhead/)

### Video

```sh
winget install --exact --id=VideoLAN.VLC
```

- [Amazon Prime Video](https://www.microsoft.com/ja-jp/p/amazon-prime-video-for-windows/9p6rc76msmmj)

### Study

```sh
winget install --exact --id=Anki.Anki
```

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

### Browser

```sh
brew cask install firefox
brew cask install google-chrome
```

### Tool

```sh
brew cask install appcleaner
brew cask install bettertouchtool
brew cask install karabiner-elements
brew cask install openinterminal-lite
brew cask install openineditor-lite
brew cask install keka
brew cask install balenaetcher
brew cask install virtualbox
brew cask install hex-fiend
```

- [OpenInTerminal-Lite README](https://github.com/Ji4n1ng/OpenInTerminal/blob/master/Resources/README-Lite.md)

### Document

```sh
brew cask install visual-studio-code
brew cask install libreoffice
brew cask install gimp
```

- [Inkscape](https://inkscape.org/)

### Video

```sh
brew cask install vlc
```

- [Amazon Prime Video](https://apps.apple.com/jp/app/id545519333)

### Study

```sh
brew cask install anki
```

### Photo

```sh
brew cask install google-backup-and-sync
brew cask install amazon-photos
brew install exiftool
brew install jhead
```

### Development

```sh
brew install git
brew cask install sourcetree
brew install anyenv
brew cask install docker
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

### Common Config

- [.ssh/config](ssh/config)
- [.gitconfig](gitconfig)

### Windows Config

- [Disable lock workstation](reg/disable_lock_workstation.reg)
- [Change 7-zip icons to system default](reg/change_7zip_icons.reg)
- [Windows sandbox configration](windows-sandbox.wsb)

## Fonts

- [Source Han Sans](https://github.com/adobe-fonts/source-han-sans)
- [Source Han Mono](https://github.com/adobe-fonts/source-han-mono)
- [Source Han Serif](https://github.com/adobe-fonts/source-han-serif)
