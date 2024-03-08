---
title: 从0开始配置我的Mac
date: 2024-01-04T00:00:00Z
lang: zh
type: blog
tags:
  - Mac
  - Cli
---

> 我的电脑重装了系统，重新梳理了下软件和工具，以及配置，用了大概5个小时，使用起来爽多了

### 安装clashX

### 安装APP和Cli工具

1. 安装HomeBrew 并用它安装app和cli工具。App 可以在 homebrew-cask — Homebrew Formulae 里找有没有，Cli 工具可以在 homebrew-core — Homebrew Formulae 找有没有。

```bash
# 先开代理
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890

# 安装 HomeBrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 用 HomeBrew 安装 App，以下是我可以用 HomeBrew 安装的 App 列表
brew install --cask  battery-buddy  espanso google-chrome gas-mask obsidian visual-studio-code Paycast Picsee

# 安装 Cli 工具
brew install autojump diff-so-fancy  fd gh git nvm pnpm tree
```

1. 用 Mac App Store 安装额外 App。

- Bob
- RunCat
- Influse

### 准本本地目录

在 ~/Documents 下建目录Code, SoftwareConfigurationCode和Notes。（后续添加更多）Code用于存代码；SoftwareConfiguration 用于保存各种软件配置，把 Espanso 等的配置放在这里。

### 配置App

1. Karabiner-Elements
   参考 Karabiner-Element 配置 F19 键 - HackMD 。在 Karabiner-Elements complex_modifications rules 搜「Change caps_lock key」，import 后只保留一条和 F19 相关的，然后在命令行里编辑「~/.config/karabiner/karabiner.json」，把刚才那条规则的「caps_lock」换成「right_command」（两处）。这样你就把基本不会用到的「右⌘」废物利用变成了「F19」键，然后你的快捷键组合会多很多。

   如果你仔细看配置，会发现「F19」是由四个键「⌘⇧⌃⌥」组成的，在一些 App 的快捷键配置里你会看到四个键，不要奇怪，这也是他。

2. Raycast
   快捷键操作集成窗口，超级好用，用来组合F19可以玩出很多花样

3. zsh
   安装 zsh 和 starship，starship 是 rust 写的 prompt 工具，极快

```bash
brew install starshipecho 'eval "$(starship init zsh)"' >> ~/.zshrc
```

安装 zsh 的插件 zsh-autosuggestions、zsh-completions 和 fast-syntax-highlighting。

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-$HOME/Documents/SoftwareConfiguration/zsh}/zsh-autosuggestionsgit ÏÏÏclone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-$HOME/Documents/SoftwareConfiguration/zsh}/zsh-completionsgit clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git ${ZSH_CUSTOM:-$HOME/Documents/SoftwareConfiguration/zsh}/fast-syntax-highlighting
```

```bash
export HOMEBREW_NO_AUTO_UPDATE=1

# Alias
alias ip="ipconfig getifaddr en0"
alias sshconfig="vim ~/.ssh/config"
alias gitconfig="vim ~/.gitconfig"

# chore
alias br="bun run"
alias c='code .'
alias pi="echo 'Pinging Baidu' && ping www.baidu.com"
alias ip="ipconfig getifaddr en0 && ipconfig getifaddr en1"
alias cip="curl cip.cc"
alias hosts="vi /etc/hosts"
alias cdtemp="cd `mktemp -d /tmp/ajiu9-XXXXXX`"

function grandom() {
	# 获取当前日期
	current_date=$(date "+%Y-%m-%d")
	# 生成4个随机数字
	random_number=$(( RANDOM % 676 ))
	# 将随机数转换为A-Z随机字符
	random_chars=""
	for (( i=0; i<4; i++)); do
		random_char_index=$(( RANDOM % 26 ))
		random_char=$(printf \\$(printf '%03o' $((65 + random_char_index))))
		random_chars="${random_chars}${random_char}"
	done
	# 格式化为指定格式的字符串
	formatted_string="${current_date}-${random_chars}"
	if [[ -n $1 ]]; then
		echo `git checkout -b "$1"/ajiu9-"$formatted_string"`
	else
		echo `git checkout -b ajiu9-"$formatted_string"`
	fi
}

## system
alias showFiles="defaults write com.apple.finder AppleShowAllFiles YES && killall Finder"
alias hideFiles="defaults write com.apple.finder AppleShowAllFiles NO && killall Finder"

# cd
alias ..='cd ../'
alias ...='cd ../../'
alias ..l.='cd ../../ && ll'
alias ....='cd ../../../'
alias ~="cd ~"
alias -- -="cd -"
alias ll="ls -alhG"
alias ls="ls -G"

# git
alias gps="git push"
alias gpl="git pull"
alias gt="git status -sb"
alias ga="git add ."
alias gc="git commit -av"
alias gcr="git checkout master && git fetch && git rebase"
alias gclean="git reset --hard && git clean -df"
alias grebase="git fetch && git rebase -i"
alias glg="git log --pretty='%C(red)%h%Creset%C(yellow)%d%Creset %s %C(cyan)(%ar)%Creset'"
alias gdel="git branch --merged master | egrep -v '(\*|master|release|bug$|dev)' | xargs -n 1 -r git branch -d"
alias gck="git checkout"
function gb() {
	echo `git checkout "$1" && git pull && git checkout -b "$2"`
}

function record() {
cd ~/screencapture/jpg;
RES_WIDTH=$(/usr/sbin/system_profiler SPDisplaysDataType | grep Resolution);
RES_WIDTH=(${RES_WIDTH:22:4});
RES_WIDTH=$((RES_WIDTH/2));
while :
NOW=$(date +"%y%m%d%H%M%S");
do screencapture -C -t jpg -x ~/screencapture/jpg/$NOW.jpg;
sleep 7 & pid=$!
NOW=$(date +"%y%m%d%H%M%S");
wait $pid
done
}

function movie() {
NOW=$(date +"%y%m%d%H%M%S");
cd ~/screencapture/jpg;
cnt=0
rm -rf .DS_Store;
for file in *
do
if [ -f "$file" ] ; then
ext=${file##*.}
printf -v pad "%05d" "$cnt"
mv "$file" "${pad}.${ext}"
cnt=$(( $cnt + 1 ))
fi
done;
rm -rf 00000.jpg;
for pic in *.jpg;
do convert $pic -resize 50% $pic;
done;
ffmpeg -r 24 -i %05d.jpg -b 20000k ~/screencapture/mov/$USER-$NOW.mov;
rm -rf ./*.jpg;
}

function mcd {
mkdir $1 && cd $1;
}

function pfd() {

osascript 2>/dev/null <<EOF

tell application "Finder"

return POSIX path of (target of window 1 as alias)

end tell

EOF

}

function cdf() {
cd "$(pfd)"
}

function ,touch {
mkdir -p "$(dirname "$1")" && touch "$1"
}

function ,take() {
mkdir -p "$(dirname "$1")" && touch "$1" && take "$(dirname "$1")"
}

# load zsh-completions
autoload -U compinit && compinit
source ~/Documents/SoftwareConfiguration/zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/Documents/SoftwareConfiguration/zsh/zsh-completions/zsh-completions.plugin.zsh
source ~/Documents/SoftwareConfiguration/zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.bash_profile

[ -f "/usr/local/etc/profile.d/autojump.sh" ] && . "/usr/local/etc/profile.d/autojump.sh" # This loads autojump

# bun completions
[ -s "/Users/wulongbiao/.bun/_bun" ] && source "/Users/wulongbiao/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles
# pnpm
export PNPM_HOME="/Users/wulongbiao/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"

# use starship theme (needs to be at the end)
eval "$(starship init zsh)"
```

4. 额外的命令行工具：Bun 和 Projj

安装 Bun。主要是用他的 run 命令，极快，上面也有别名 `br`，比如执行比如 `br dev` 即 `npm run dev`。

```
curl -fsSL https://bun.sh/install | bash
```

安装 PROJJ，用他来管理 Code 下的仓库，按「domain/group/repo」这样组织，找起来会比较容易。

```bash
pnpm i projj projj-hooks -g
projj init
```

5. 然后编辑 ~/.projj/config.json

```json
{
  "base": [
    "/Users/wulongbiao/Documents/Code"
  ],
  "hooks": {
    "postadd": "projj_git_config_user",
    "clean": "clean"
  },

  "postadd": {
    "github.com": {
      "name": "ajiu9",
      "email": "615944323@qq.com"
    }
  },
  "alias": {
    "github://": "https://github.com/"
  }
}
```

然后就可以愉快地用 PROJJ 添加项目了，比如。

```bash
projj add git@github.com:ajiu9/eslint-config.git
```

6. Espanso
   在 ~/Documents/SoftwareConfiguration/Espanso 下建了个 base.yml，并软链到 Espanso 原来的配置文件夹里。

```yml
# espanso match file
# For a complete introduction, visit the official docs at: https://espanso.org/docs/
# You can use this file to define the base matches (aka snippets)
# that will be available in every application when using espanso.
# Matches are substitution rules: when you type the "trigger" string
# it gets replaced by the "replace" string.
matches:
# Simple text replacement
# NOTE: espanso uses YAML to define matches, so pay attention to the indentation!
# But matches can also be dynamic:
# Print the current date
- trigger: ":date"
  replace: "{{mydate}}"
  vars:
	- name: mydate
	type: date
	params:
	  format: "%m/%d/%Y"
	# Print the output of a shell command
- trigger: ":shell"
  replace: "{{output}}"
  vars:
  - name: output
	type: shell
	params:
	  cmd: "echo 'Hello from your shell'"
# And much more! For more information, visit the docs: https://espanso.org/docs/
# misc
- trigger: ";>>"
  replace: ➡
- trigger: ";vv"
  replace: ⬇
- trigger: ";^^"
  replace: ⬆
- trigger: ";<<"
  replace: ⬅
# life
- trigger: ";mobi"
  replace: 我的手机号
- trigger: ";mail"
  replace: 我的邮箱
- trigger: ";addr"
  replace: 我的家庭住址
- trigger: ";officeAddr"
  replace: 公司地址
# faq
- trigger: "chongt"
  replace: 冲突了，merge 下 master。
# code
- trigger: ";log"
  replace: console.log($|$)
- trigger: ";delay"
  replace: const delay = (ms) => new Promise((res) => setTimeout(res, ms));
# mac symbols
- trigger: ":cmd"
  replace: "⌘"
- trigger: ":shift"
  replace: "⇧"
- trigger: ":ctrl"
  replace: "⌃"
- trigger: ":alt"
  replace: "⌥"
- trigger: ":opt"
  replace: "⌥"
- trigger: ":left"
  replace: "←"
- trigger: ":right"
  replace: "→"
- trigger: ":up"
  replace: "↑"
- trigger: ":down"
  replace: "↓"
- trigger: ":caps_lock"
  replace: "⇪"
- trigger: ":esc"
  replace: "⎋"
- trigger: ":eject"
  replace: "⏏"
- trigger: ":return"
  replace: "↵"
- trigger: ":enter"
  replace: "⌅"
- trigger: ":tab"
  replace: "⇥"
- trigger: ":backtab"
  replace: "⇤"
- trigger: ":pgup"
  replace: "⇞"
- trigger: ":pgdown"
  replace: "⇟"
- trigger: ":home"
  replace: "↖"
- trigger: ":end"
  replace: "↘"
- trigger: ":space"
  replace: "␣"
- trigger: ":del"
  replace: "⌫"
- trigger: ":fdel"
  replace: "⌦"
```

7. VSCode
   略

8. Git

先配 name 和 email。

```
git config --global user.name "Your Name"git config --global user.email "you@your-domain.com"
```

再执行这两条命令。

```
git config --global --add push.default currentgit config --global --add push.autoSetupRemote true
```

你会收获两个好处。1）不需要「git push origin xxx」，只要「git push」，2）再也不会遇到「no upstream branch」的报错，也不需要「git push --set-upstream origin test && git push」。因为我们执行 git push 的大部分场景都是 push 到同名的 remote branch。来源是 Auto setup remote branch and never again see an error about the missing upstream | pawelgrzybek.com。

再修改 ~/.gitignore_global，加入和你 IDE 相关的 ignore 配置。我会把 .idea 加进去，这是和你相关的专有配置，如果给其他用 VSCode 的作者的项目提交时，都加上 .idea 的 .gitignore 配置，其实并不太礼貌。反之，VSCode 或其他编辑器工具的用户也要加上自己的。

```
*~.DS_Store.idea
```

9. NVM 和 Node

```
nvm install 18node -v
```

## 系统设置

1. General。1）Default Web Browser 用「Google Chrome」
2. Siri。直接禁掉。
3. Keyboard。1）Keyboard 里把 Key Repeat 调到「Fast」，把 Delay Util Repeat 调到「Short」，需要一点时间适应，适应后会感受到光标快速移动带来的效率提升，2）Text 里 use `"` for double quotes，use `'` for single quotes，然后把其他都禁掉，不需要系统帮忙改，基本都是帮倒忙的，3）Shortcuts 里，Mission Control 用「⌥A」,Application windows 用「⌥S」，Show Desktop 用「⌥D」
4. Spotlight。只开 Applications、Bookmarks & History、Documents、Folders、System Preferences。
5. Mission Control。把 Hot Corners 里的全部关掉，不需要，因为有 Thor 了，可以更快切除应用。
6. Notification。不必要的全关掉，我只开了 Calendar、Find By。
7. 执行 `defaults write -g NSWindowShouldDragOnGesture -bool true`，然后就可以按住「⌘+⌃」然后鼠标点击任意地方拖动窗口了。
