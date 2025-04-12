(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{472:function(t,e,s){"use strict";s.r(e);var a=s(2),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-1-调整ubuntu镜像源-添加公钥"}},[t._v("1.1 调整Ubuntu镜像源,添加公钥")])]),s("li",[s("a",{attrs:{href:"#安装桌面完整版，包含ros、rqt、rviz、机器人通用库、2d-3d-模拟器、导航以及2d-3d感知等"}},[t._v("安装桌面完整版，包含ROS、rqt、rviz、机器人通用库、2D/3D 模拟器、导航以及2D/3D感知等")])]),s("li",[s("a",{attrs:{href:"#配置环境"}},[t._v("配置环境")])]),s("li",[s("a",{attrs:{href:"#测试ros"}},[t._v("测试ROS")])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"_1-安装ros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装ros"}},[t._v("#")]),t._v(" 1. 安装ROS")]),t._v(" "),s("p",[t._v("ROS安装可直接参考"),s("a",{attrs:{href:"http://wiki.ros.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Wiki"),s("OutboundLink")],1),t._v("的说明安装即可，与Ubuntu 18.04对应的ROS版本是ROS-melodic，安装一般没什么问题，但由于网络污染，ROS初始化，一般容易不成功，可以看看对应分享的解决办法，也可以使用第三方提供的“一键安装”方法。")]),t._v(" "),s("p",[t._v("安装ROS参考链接：\n"),s("a",{attrs:{href:"https://blog.csdn.net/qq_43310597/article/details/105756819",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/qq_43310597/article/details/105756819"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://blog.shipengx.com/archives/f969107a.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.shipengx.com/archives/f969107a.html"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_1-1-调整ubuntu镜像源-添加公钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-调整ubuntu镜像源-添加公钥"}},[t._v("#")]),t._v(" 1.1 调整Ubuntu镜像源,添加公钥")]),t._v(" "),s("ul",[s("li",[t._v("在 Software Updater 中设置下载源为 "),s("a",{attrs:{href:"http://mirrors.ustc.edu.cn/ubuntu%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mirrors.ustc.edu.cn/ubuntu。"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("这一步是为了让接下来的下载过程中加快速度，ROS官方推荐软件源设置为中国科技大学（USTC）或清华大学（Tsinghua），下面举例将软件源切换成中科大的源。")]),t._v(" "),s("ul",[s("li",[t._v("添加source.list")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo sh -c 'echo \"deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main\" > /etc/apt/sources.list.d/ros-latest.list'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这一步配置将镜像添加到Ubuntu系统源列表中，建议使用国内的镜像源，这样能够保证下载速度，例子使用的是中国科技大学的源。")]),t._v(" "),s("ul",[s("li",[t._v("加keys")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt install curl # if you haven't already installed curl\ncurl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("公钥是Ubuntu系统的一种安全机制，也是ROS安装中不可缺的一部分。")]),t._v(" "),s("ul",[s("li",[t._v("然后")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt update\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"安装桌面完整版，包含ros、rqt、rviz、机器人通用库、2d-3d-模拟器、导航以及2d-3d感知等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装桌面完整版，包含ros、rqt、rviz、机器人通用库、2d-3d-模拟器、导航以及2d-3d感知等"}},[t._v("#")]),t._v(" 安装桌面完整版，包含ROS、rqt、rviz、机器人通用库、2D/3D 模拟器、导航以及2D/3D感知等")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt install ros-melodic-desktop-full\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("也可以安装某个指定的ROS软件包（使用软件包名称替换掉下面的PACKAGE）：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt install ros-melodic-PACKAGE\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt install ros-melodic-slam-gmapping\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("初始化rosdep")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo -E rosdep init\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("如果出现错误：")]),t._v(" "),s("p",[t._v("● --找不到命令")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt install python-rosdep\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("● --Website may be down")]),t._v(" "),s("p",[t._v("方法一：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo gedit /etc/hosts\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("增加199.232.68.133 raw.githubusercontent.com")]),t._v(" "),s("p",[t._v("raw.githubusercontent.com的ip可以通过"),s("a",{attrs:{href:"https://www.ipaddress.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ipaddress.com/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("方法二：")]),t._v(" "),s("p",[t._v("参考链接\n"),s("a",{attrs:{href:"https://blog.csdn.net/weixin_43311920/article/details/114796748",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/weixin_43311920/article/details/114796748"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/nanianwochengshui/article/details/105702188",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/nanianwochengshui/article/details/105702188"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.cnblogs.com/xuhaoforwards/p/9399744.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/xuhaoforwards/p/9399744.html"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/43345574",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/43345574"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("rosdep update\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("如果有黑科技一般不会报错，如果报错：")]),t._v(" "),s("p",[t._v("解决办法参考：\n"),s("a",{attrs:{href:"https://blog.csdn.net/weixin_43311920/article/details/114796748",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/weixin_43311920/article/details/114796748"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/nanianwochengshui/article/details/105702188",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/nanianwochengshui/article/details/105702188"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/mrh1714348719/article/details/103803110",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/mrh1714348719/article/details/103803110"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://blog.csdn.net/super_sean/article/details/105433250",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/super_sean/article/details/105433250"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"配置环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置环境"}},[t._v("#")]),t._v(" 配置环境")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc\nsource ~/.bashrc\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ul",[s("li",[t._v("构建库依赖")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install python-rosinstall python-rosinstall-generator python-wstool build-essential\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("rosinstall是一个经常使用的命令行工具，它使你能够轻松地从一个命令下载许多ROS包的源码树。")]),t._v(" "),s("h2",{attrs:{id:"测试ros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试ros"}},[t._v("#")]),t._v(" 测试ROS")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("roscore\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("创建ROS工作空间")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mkdir -p ~/catkin_ws/src\ncd ~/catkin_ws/\ncatkin_make\nsource devel/setup.bash\necho "source ~/catkin_ws/devel/setup.bash" >> ~/.bashrc\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("至此，一个ROS工作环境搭建完成。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://wiki.ros.org/melodic/Installation/Ubuntu"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("2、安装gazebo9")]),t._v(" "),s("p",[t._v("（1）添加源")]),t._v(" "),s("p",[t._v("$ sudo sh -c 'echo \"deb "),s("a",{attrs:{href:"http://packages.osrfoundation.org/gazebo/ubuntu-stable",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://packages.osrfoundation.org/gazebo/ubuntu-stable"),s("OutboundLink")],1),t._v(" "),s("code",[t._v("lsb_release -cs")]),t._v(" main\" > /etc/apt/sources.list.d/gazebo-stable.list'\n（2）查询源是否添加")]),t._v(" "),s("p",[t._v("$ cat /etc/apt/sources.list.d/gazebo-stable.list\ndeb "),s("a",{attrs:{href:"http://packages.osrfoundation.org/gazebo/ubuntu-stable",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://packages.osrfoundation.org/gazebo/ubuntu-stable"),s("OutboundLink")],1),t._v(" xenial main\n输入cat指令后，下面正常显示，说明添加源成功！")]),t._v(" "),s("p",[t._v("（3）设置Keys")]),t._v(" "),s("p",[t._v("$ wget "),s("a",{attrs:{href:"http://packages.osrfoundation.org/gazebo.key",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://packages.osrfoundation.org/gazebo.key"),s("OutboundLink")],1),t._v(" -O - | sudo apt-key add -\n（4）开始安装gazebo")]),t._v(" "),s("p",[t._v("$ sudo apt-get update\n$ sudo apt-get install gazebo9\n$ sudo apt-get install libgazebo9-dev\n（5）前边安装的ROS与Gazebo是完全独立的两部分，要使他们之间互相通讯，还需要安装 gazebo_ros_pkgs包和gazebo9-ros-control")]),t._v(" "),s("p",[t._v("$ sudo apt-get install ros-kinetic-gazebo9-ros-pkgs ros-kinetic-gazebo9-ros-control\n注意：这里安装pkgs和control时需要指定版本：gazebo9。")]),t._v(" "),s("p",[t._v("3、测试")]),t._v(" "),s("p",[t._v("$ roscore  # 启动 ros master\n$ gazebo   # 直接启动gazebo，也可以采用下面的方式\n$ rosrun gazebo_ros gazebo  # 用rosrun方式启动gazebo")])])}),[],!1,null,null,null);e.default=r.exports}}]);