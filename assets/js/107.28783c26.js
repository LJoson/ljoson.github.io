(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{516:function(s,e,t){"use strict";t.r(e);var n=t(2),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#wsl安装"}},[s._v("WSL安装")]),t("ul",[t("li",[t("a",{attrs:{href:"#_2022-03-09安装"}},[s._v("2022/03/09安装")])]),t("li",[t("a",{attrs:{href:"#_2020年前安装方式"}},[s._v("2020年前安装方式")])])])]),t("li",[t("a",{attrs:{href:"#win操作"}},[s._v("win操作")]),t("ul",[t("li",[t("a",{attrs:{href:"#wsl1升级为wsl2"}},[s._v("WSL1升级为WSL2")])])])]),t("li",[t("a",{attrs:{href:"#笔记"}},[s._v("笔记")]),t("ul",[t("li",[t("a",{attrs:{href:"#vscode连接wsl，无法创建文件与修改文件"}},[s._v("vscode连接wsl，无法创建文件与修改文件")])]),t("li",[t("a",{attrs:{href:"#wsl2的网络代理配置-https-jiayaoo3o-github-io-2020-06-23-e8-ae-b0-e5-bd-95-e4-b8-80-e6-ac-a1wsl2-e7-9a-84-e7-bd-91-e7-bb-9c-e4-bb-a3-e7-90-86-e9-85-8d-e7-bd-ae"}},[s._v("WSL2的网络代理配置")])]),t("li",[t("a",{attrs:{href:"#shell脚本执行错误-r-command-not-found"}},[s._v("shell脚本执行错误 $'\\r':command not found")])])])])])]),t("p"),s._v(" "),t("h1",{attrs:{id:"引言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[s._v("#")]),s._v(" 引言")]),s._v(" "),t("p",[s._v("由于电脑带不动虚拟机，而WSL可以使用vscode在win10和WSL直接联合开发（香）")]),s._v(" "),t("h2",{attrs:{id:"wsl安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wsl安装"}},[s._v("#")]),s._v(" WSL安装")]),s._v(" "),t("h3",{attrs:{id:"_2022-03-09安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2022-03-09安装"}},[s._v("#")]),s._v(" 2022/03/09安装")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.microsoft.com/zh-cn/windows/wsl/install"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"_2020年前安装方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2020年前安装方式"}},[s._v("#")]),s._v(" 2020年前安装方式")]),s._v(" "),t("p",[s._v("1.在设置->更新与安全->开发者选项中开启开发人员模式\n"),t("img",{attrs:{src:"https://dl-harmonyos.51cto.com/images/202010/d74a30341632605a81396183e556d339bb135e.PNG",alt:""}}),s._v("\n2.在控制面板开启 “适用于 Linux 的 windows 子系统”\n"),t("img",{attrs:{src:"https://dl-harmonyos.51cto.com/images/202010/0317d658993af1bd61f0861fe0ab062ded9115.PNG",alt:""}}),s._v("\n3. 通过Windows应用商店，可以安装自己喜欢的 Linux 发行版，例如Ubuntu 20.04 LTS及以上版本\n初次进入Linux子系统需要设置Linux的用户名及密码，之后就不能在输入了，不过用户名密码还是需要记住的，特别是密码\n安装完成可以换源加快wsl下载速度，以清华源为例。")]),s._v(" "),t("p",[s._v("一：备份原来的源")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo cp /etc/apt/sources.list /etc/apt/sources_init.list\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("注意，我们操作Ubuntu一般都是要在管理员权限下进行操作的，尤其是要对系统文件进行更改。sudo就是告诉系统使用管理员权限运行后面的命令。敲入回车后输入我们之前设置的密码即可运行。\n二:更换apt源,查看系统版本：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("lsb_release -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改 /etc/apt/sources.list")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo vim /etc/apt/sources.list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将文件里的内容全部删除（可在vim的命令模式下，使用gg将光标移到文件首行，使用dG命令清空文件），敲入i进入编辑模式，将下面内容粘贴进文件")]),s._v(" "),t("p",[s._v("18.04清华软件源：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse\n\n# 预发布软件源，不建议启用\n# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("20.04清华软件源：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#添加阿里源\ndeb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse\n#添加清华源\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse\ndeb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse multiverse\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("按ESC（或Ctrl + [）退出编辑模式进入命令模式，然后先按“:”，再输入wq，敲入回车，文件即写入成功。")]),s._v(" "),t("p",[s._v("三：更新系统\n输入下列命令，等待更新完毕~")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt-get update\nsudo apt-get upgrade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("20.04默认源")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to\n# newer versions of the distribution.\ndeb http://archive.ubuntu.com/ubuntu/ focal main restricted\n# deb-src http://archive.ubuntu.com/ubuntu/ focal main restricted\n\n## Major bug fix updates produced after the final release of the\n## distribution.\ndeb http://archive.ubuntu.com/ubuntu/ focal-updates main restricted\n# deb-src http://archive.ubuntu.com/ubuntu/ focal-updates main restricted\n\n## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu\n## team. Also, please note that software in universe WILL NOT receive any\n## review or updates from the Ubuntu security team.\ndeb http://archive.ubuntu.com/ubuntu/ focal universe\n# deb-src http://archive.ubuntu.com/ubuntu/ focal universe\ndeb http://archive.ubuntu.com/ubuntu/ focal-updates universe\n# deb-src http://archive.ubuntu.com/ubuntu/ focal-updates universe\n\n## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu\n## team, and may not be under a free licence. Please satisfy yourself as to\n## your rights to use the software. Also, please note that software in\n## multiverse WILL NOT receive any review or updates from the Ubuntu\n## security team.\ndeb http://archive.ubuntu.com/ubuntu/ focal multiverse\n# deb-src http://archive.ubuntu.com/ubuntu/ focal multiverse\ndeb http://archive.ubuntu.com/ubuntu/ focal-updates multiverse\n# deb-src http://archive.ubuntu.com/ubuntu/ focal-updates multiverse\n\n## N.B. software from this repository may not have been tested as\n## extensively as that contained in the main release, although it includes\n## newer versions of some applications which may provide useful features.\n## Also, please note that software in backports WILL NOT receive any review\n## or updates from the Ubuntu security team.\ndeb http://archive.ubuntu.com/ubuntu/ focal-backports main restricted universe multiverse\n# deb-src http://archive.ubuntu.com/ubuntu/ focal-backports main restricted universe multiverse\n\n## Uncomment the following two lines to add software from Canonical's\n## 'partner' repository.\n## This software is not part of Ubuntu, but is offered by Canonical and the\n## respective vendors as a service to Ubuntu users.\n# deb http://archive.canonical.com/ubuntu focal partner\n# deb-src http://archive.canonical.com/ubuntu focal partner\n\ndeb http://security.ubuntu.com/ubuntu/ focal-security main restricted\n# deb-src http://security.ubuntu.com/ubuntu/ focal-security main restricted\ndeb http://security.ubuntu.com/ubuntu/ focal-security universe\n# deb-src http://security.ubuntu.com/ubuntu/ focal-security universe\ndeb http://security.ubuntu.com/ubuntu/ focal-security multiverse\n# deb-src http://security.ubuntu.com/ubuntu/ focal-security multiverse\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br")])]),t("p",[s._v("(二)设置远程连接")]),s._v(" "),t("p",[s._v("一、系统本身自带的SSH有问题，需要remove一下，重新install一下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt-get remove openssh-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("二、然后重新安装")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo apt-get install openssh-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("三.然后就是配置ssh的配置文件:")]),s._v(" "),t("p",[s._v("打开配置文件:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo vim /etc/ssh/sshd_config\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("写入:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Port 2222   #设置ssh的端口号, 由于22在windows中有别的用处, 尽量不修改系统的端口号\nPermitRootLogin yes   # 可以root远程登录\nPasswordAuthentication yes     # 密码验证登录\nAllowUsers user # 远程登录时的用户名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("重启服务:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" sudo service ssh restart\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个时候你自己电脑上的xhell等远程工具是可以连接的了, 但是想要在其他的计算机上访问, 就需要系统开放端口了.")]),s._v(" "),t("p",[s._v("这是后需要到防火墙设置开放2222端口")]),s._v(" "),t("p",[s._v("防火墙->高级设置->入站规则->新建规则")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20180928162108931?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xjdXdi/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),s._v(" "),t("p",[s._v("端口->下一步")]),s._v(" "),t("p",[s._v("选择tcp  特定本地端口")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20180928162242346?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xjdXdi/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),s._v(" "),t("p",[s._v("允许连接, 默认都选上, 下一步填个名字\n完成就可以远程或者本地进行wsl开发，原理及过程就相当于一台Linux，可能还有远程的时候可能需要在wsl重启一下ssh,有时使用xshell连接会connect failed,只要sudo service ssh restart一下就行，所以既然都打开了wsl，为啥不直接在wsl的Ubuntu上搞呢。。。。。")]),s._v(" "),t("p",[s._v("3.远程sftp服务\nhttp://filezilla-project.org/download.php?type=client")]),s._v(" "),t("ul",[t("li",[s._v("xftp")])]),s._v(" "),t("p",[s._v("https://www.netsarang.com/zh/all-downloads/")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("https://docs.microsoft.com/zh-cn/windows/wsl (官方文档，遇事不决，找他可以解决99%问题)")]),s._v(" "),t("p",[s._v("https://www.cnblogs.com/jetttang/p/8186315.html")]),s._v(" "),t("p",[s._v("https://dowww.spencerwoo.com")])]),s._v(" "),t("h2",{attrs:{id:"win操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#win操作"}},[s._v("#")]),s._v(" win操作")]),s._v(" "),t("p",[s._v("Shit+右键——Linux shell")]),s._v(" "),t("p",[s._v("https://www.cnblogs.com/jetttang/p/8186315.html")]),s._v(" "),t("p",[s._v("#停止LxssManager服务\nnet stop LxssManager")]),s._v(" "),t("p",[s._v("#启动LxssManager服务\nnet start LxssManager")]),s._v(" "),t("h3",{attrs:{id:"wsl1升级为wsl2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wsl1升级为wsl2"}},[s._v("#")]),s._v(" WSL1升级为WSL2")]),s._v(" "),t("ul",[t("li",[s._v("查看当前WSL版本号")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wsl -l -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("检查运行WSL2的系统要求\nWSL2对系统版本有一定要求，键盘选择Win + R，输入winver，点击回车，便可查看当前系统的详细版本。看一下是否满足要求，如果不满足要求，则需要对系统进行升级")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("系统要求")]),s._v(" "),t("p",[s._v("×64：version>=1903,build>=18362\narm64:version>=2004,build>=19041")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("下载 Linux 内核更新包\n根据系统进行选择：\nx64：https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi\narm64：https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi")])]),s._v(" "),t("li",[t("p",[s._v("运行上一步下载的更新包。")])]),s._v(" "),t("li",[t("p",[s._v("设置分发版版本\n打开PowerShell，执行命令 ：")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wsl --set-version 分发版名称 版本号\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例如，将Ubuntu20.04 设置为WSL2的命令为")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wsl --set-version Ubuntu-20.04 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("wsl2简介\nhttps://docs.microsoft.com/zh-cn/windows/wsl/about")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("备注")]),s._v(" "),t("p",[s._v("WSL1更新到WSL2之后发现以前可以从Window文件系统中直接访问的Linux文件的方式不能用了后来在对比了"),t("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/compare-versions",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("的描述之后，原来是WSL2 建议不要跨操作系统使用文件。但是我们仍然可以通过以下方式直接在Window系统的基础上访问到Linux的文件,比如我安装的是Ubuntu-18.04，那么可以通过以下方式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\\\\wsl$\\Ubuntu-18.04\\\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("值得一提的是，微软为我们提供了一个默认的变量(wsl$ )可以直接指向WSL的目录，我们可以在运行(win+R)或资源管理器的路径里直接输入\\wsl$进入Ubuntu的目录")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("更新wsl2之后可能会出现dns解析错误（也许是），目前还没有找到一个好的解决办法，而该问题会引起apt update 失败，导致很多奇怪的问题")])]),s._v(" "),t("h2",{attrs:{id:"笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#笔记"}},[s._v("#")]),s._v(" 笔记")]),s._v(" "),t("h3",{attrs:{id:"vscode连接wsl，无法创建文件与修改文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode连接wsl，无法创建文件与修改文件"}},[s._v("#")]),s._v(" vscode连接wsl，无法创建文件与修改文件")]),s._v(" "),t("p",[s._v("使用wsl进行开发时遭遇问题：无法创建文件与修改文件，提示：没有权限\n解决方法：在wsl控制台将你需要的目录赋予你账户的权限")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo chown -R wsl系统用户名 /home/wsl系统用户名或目录/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("请将用户名换成自己系统用户名,且目录换成需要操作的目录\n但是如果不熟悉Linux操作系统，会出现用户被更改无法正常使用wsl,比如更改了root用户，出现以下报错")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo: /etc/sudoers is owned by uid 1000, should be 0\nsudo: no valid sudoers sources found, quitting\nsudo: unable to initialize policy plugin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这时首先运行以下命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("su -root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("它会要求输入密码，然后一一运行以下命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("chown root:root /etc/sudoers\nchmod 440 /etc/sudoers\nchown -R root:root /etc/sudoers.d\nchmod  755 /etc/sudoers.d\nchmod  440 /etc/sudoers.d/*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"wsl2的网络代理配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wsl2的网络代理配置"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://jiayaoo3o.github.io/2020/06/23/%E8%AE%B0%E5%BD%95%E4%B8%80%E6%AC%A1WSL2%E7%9A%84%E7%BD%91%E7%BB%9C%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE/",target:"_blank",rel:"noopener noreferrer"}},[s._v("WSL2的网络代理配置"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("目的是使用win下的代理实现科学上网。")]),s._v(" "),t("h4",{attrs:{id:"方法一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),t("p",[s._v("1.WSL2获取Win10的ip\n在Win10 -> WSL2这个方向, 是可以直接通过Localhost来访问的, 但是WSL2 -> Win10这个方向就不能直接访问Localhost了, 需要指定Win10的ip, 想要查看WSL2中Win10的ip, 只需要查看resolve.conf文件 :")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cat /etc/resolv.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以得到输出信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.conf:\n# [network]\n# generateResolvConf = false\nnameserver 172.17.224.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("其中172.17.224.1就是在WSL2中Win10的ip.")]),s._v(" "),t("p",[s._v("想要方便获取这个IP, 可以直接使用下方命令 :")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cat /etc/resolv.conf|grep nameserver|awk '{print $2}'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2.WSL2设置环境变量\n由于上面已经可以获取到Win10的ip, 这个时候就可以很方便的对各种环境变量进行设置, 因为默认socks5端口为7890, 所以可以直接设置环境变量 :")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("export windows_host=`cat /etc/resolv.conf|grep nameserver|awk '{print $2}'`\nexport ALL_PROXY=socks5://$windows_host:7890\nexport HTTP_PROXY=$ALL_PROXY\nexport http_proxy=$ALL_PROXY\nexport HTTPS_PROXY=$ALL_PROXY\nexport https_proxy=$ALL_PROXY\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("git也可以设置为使用代理 :")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git config --global proxy.https socks5://$windows_host:7890\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果想要这些环境变量和设置每次启动终端都生效, 可以在~/.bashrc文件最下方添加上述内容 :")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('export windows_host=`cat /etc/resolv.conf|grep nameserver|awk \'{print $2}\'`\nexport ALL_PROXY=socks5://$windows_host:7890\nexport HTTP_PROXY=$ALL_PROXY\nexport http_proxy=$ALL_PROXY\nexport HTTPS_PROXY=$ALL_PROXY\nexport https_proxy=$ALL_PROXY\n\nif [ "`git config --global --get proxy.https`" != "socks5://$windows_host:7890" ]; then\n            git config --global proxy.https socks5://$windows_host:7890\nfi\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"方法二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),t("p",[s._v("WSL2配置代理的时候设置所有代理为clash 虚拟机映射IP加上clash里面的端口,默认是7890。首先在WSL每次启动的时候，获取当前的ip，并设置代理")]),s._v(" "),t("p",[s._v("可编辑/etc/profile")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo vim /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("转到文件最末尾，添加以下两行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('host_ip=$(cat /etc/resolv.conf |grep "nameserver" |cut -f 2 -d " ") export ALL_PROXY="http://$host_ip:7890"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("$host_ip即为配置代理的时候需要设置的ip地址,注意第二行，最后的7890，这是clash默认代理的端口号,最后")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("source /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("检查代理是否生效")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("curl google.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("两个办法最后都要在win系统设置代理允许局域网链接，且代理可以通过win防火墙")]),s._v(" "),t("h3",{attrs:{id:"shell脚本执行错误-r-command-not-found"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本执行错误-r-command-not-found"}},[s._v("#")]),s._v(" shell脚本执行错误 $'\\r':command not found")]),s._v(" "),t("p",[s._v("出现这种错误是因为编写的 shell脚本是在win下编写的，每行结尾是\\r\\n 的而Unix结果行是\\n")]),s._v(" "),t("p",[s._v("所以在Linux下运行脚本 会任务\\r 是一个字符，所以运行错误，需要把文件转换下，")]),s._v(" "),t("p",[s._v("运行脚本 :")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" dos2unix  脚本名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("备注")]),s._v(" "),t("p",[s._v("还有一些安装界面的部分可以查看"),t("a",{attrs:{href:"https://ljoson.github.io/views/ee/ARMcortex/armenv.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("WSL上基于Ubuntu18.04搭建arm交叉编译环境"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("还有记得一定要多看官方文档！！！")])])])}),[],!1,null,null,null);e.default=a.exports}}]);