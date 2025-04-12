(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{435:function(t,l,a){"use strict";a.r(l);var s=a(2),e=Object(s.a)({},(function(){var t=this,l=t.$createElement,a=t._self._c||l;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#准备"}},[t._v("准备")])]),a("li",[a("a",{attrs:{href:"#使用"}},[t._v("使用")]),a("ul",[a("li",[a("a",{attrs:{href:"#编译yolo为c-dll文件"}},[t._v("编译yolo为C++ dll文件")])]),a("li",[a("a",{attrs:{href:"#qt编写图形界面，并加载动态链接库"}},[t._v("qt编写图形界面，并加载动态链接库")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),a("p",[t._v("GUI界面的目标检测应用")]),t._v(" "),a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),a("p",[t._v("运行环境:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Windows 10")])]),t._v(" "),a("li",[a("strong",[t._v("QT 5.13")])]),t._v(" "),a("li",[a("strong",[t._v("OpenCV 4.2")])]),t._v(" "),a("li",[a("strong",[t._v("Visual Studio 2017")])]),t._v(" "),a("li",[t._v("Cuda 10.0（optional）")]),t._v(" "),a("li",[t._v("Cudnn >= 7.0（optional）\n黑体为必要的运行环境。其中各大软件都可以去官网下载安装，有的可以转换成清华源等。"),a("br")])]),t._v(" "),a("p",[t._v("需要注意的是VS2017配置opencv环境以及安装Qt vs tools:"),a("br")]),t._v(" "),a("p",[t._v("如果是打开别人的qt项目，由于qt版本可能不一致会导致相关头文件没有默认导入，可以在Qt vs tools打开“qt project settings”，点击“qt modules”，勾选需要的模块（例如：core、gui、widgets）等模块。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200425183646775.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQ0ODIyNg==,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),a("p",[t._v("有时候会导入不正常会有无法解析外部命令的error，这得参考以下链接进行QT相关配置。"),a("br")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("参考链接")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/qq_41175905/article/details/80560429")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/wang18323834864/article/details/78665180")]),t._v(" "),a("p",[t._v("https://crazyang.blog.csdn.net/article/details/81939610?utm_source=app")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/dfy1407/article/details/103922415")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/qq_20661579/article/details/76960275")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/libra_boy/article/details/51593705")])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"编译yolo为c-dll文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译yolo为c-dll文件"}},[t._v("#")]),t._v(" 编译yolo为C++ dll文件")]),t._v(" "),a("p",[t._v("yolov4项目源地址："),a("a",{attrs:{href:"https://github.com/AlexeyAB/darknet",target:"_blank",rel:"noopener noreferrer"}},[t._v("darknet"),a("OutboundLink")],1),t._v(",下载项目到本地."),a("br")]),t._v(" "),a("ul",[a("li",[t._v('GPU版本: 需已安装cuda、cudnn。vs打开  darknet-master\\build\\darknet\\yolo_cpp_dll.sln 文件，右击“项目”->“属性”->"C\\C++"->“预处理器”->"预处理器定义"，首行添加“CUDNN"。接着以“x64  release”方式编译（即菜单栏“生成”->“生成解决方案”）'),a("br")])]),t._v(" "),a("p",[t._v("​ 若cuda版本不是10.0，则以记事本方式打开  darknet-master\\build\\darknet\\yolo_cpp_dll.vcxproj，组合键ctrl+f搜索“cuda 10.0”，将两处“cuda 10.0”修改为自己的cuda版本，例如“cuda 10.1”，之后重新编译yolo_cpp_dll.sln。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果是不经常用vs开发相关cuda项目，那么需要配置相关VS的cuda环境配置。可参考博文"),a("a",{attrs:{href:"https://blog.csdn.net/threefourly/article/details/84492563",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS2017+CUDA10.0+cudnn+tensorflow配置"),a("OutboundLink")],1),t._v("，经验证有效，但是在此项目里，附加依赖项的地方\n改为:"),a("br")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pthreadVC2.lib\ncublas.lib\ncurand.lib\ncudart.lib\ncuda.lib\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("ul",[a("li",[t._v("CPU版本:  vs打开 darknet-master\\build\\darknet\\yolo_cpp_dll_no_gpu.sln 文件，以“x64  release”方式编译（即菜单栏“生成”->“生成解决方案”）。"),a("br"),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020042809520248.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQ0ODIyNg==,size_16,color_FFFFFF,t_70",alt:""}})])]),t._v(" "),a("p",[t._v('编译完成后，将在 darknet-master\\build\\darknet\\x64 路径下得到以下文件，同一时间只能选择”gpu“或者"cpu"版本中的一种编译使用，因为编译生成的文件名字是一样的：')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200425185854261.png",alt:""}})]),t._v(" "),a("p",[t._v("编译得到的文件为备用使用,对于GPU版本，笔者的cuda版本是10.0，若自己的cuda版本不是10.0，那么需要将生成的dll和lib文件分别替换到  ./3rdparty/libdarknet/bin/release/gpu   和   ./3rdparty/libdarknet/lib   文件夹下。")]),t._v(" "),a("h3",{attrs:{id:"qt编写图形界面，并加载动态链接库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qt编写图形界面，并加载动态链接库"}},[t._v("#")]),t._v(" qt编写图形界面，并加载动态链接库")]),t._v(" "),a("p",[t._v("项目地址："),a("a",{attrs:{href:"https://github.com/LJoson/Yolov4_GUIdemo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yolov4-QtGUI"),a("OutboundLink")],1),t._v("\n项目结构：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("3rdparty 存放相关头文件和库文件，解压到Yolov4-QtGUI项目目录下")])]),t._v(" "),a("li",[a("p",[t._v("config 存放属性文件")])]),t._v(" "),a("li",[a("p",[t._v("QtGuiDemo 存放主文件。")])]),t._v(" "),a("li",[a("p",[t._v("x64   下载权重文件："),a("a",{attrs:{href:"https://pan.baidu.com/s/1_utwehFeFzgYgp8aBTeyvw",target:"_blank",rel:"noopener noreferrer"}},[t._v("yolov4_weights"),a("OutboundLink")],1),t._v("  提取码：x6uy "),a("br")])])]),t._v(" "),a("p",[t._v("将下载的权重文件放置在  "),a("strong",[t._v("x64/model")]),t._v("  目录下."),a("br")]),t._v(" "),a("p",[t._v('然后vs打开  Yolov4-QtGUI\\QtGuiDemo.sln 文件对于GPU版本：修改属性文件yolov4.prop，"链接器”->"输入"->"附加依赖项"->yolo_cpp_dll_cpu.lib(这里还有疑问) 。在＂release x64＂模式下，菜单栏点击＂生成＂－>＂生成解决方案＂，并将')]),t._v(" "),a("ul",[a("li",[t._v("3rdparty\\libdarknet\\bin 路径下的  pthreadGC2.dll、pthreadVC2.dll")]),t._v(" "),a("li",[t._v("3rdparty\\libdarknet\\bin\\release\\gpu 路径下的 yolo_cpp_dll.dll")]),t._v(" "),a("li",[t._v("3rdparty\\libopencv\\bin 路径下的  opencv_world420.dll\n复制到Yolov4-QtGUI\\x64\\release目录下。"),a("br"),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200428104322320.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQ0ODIyNg==,size_16,color_FFFFFF,t_70",alt:""}})])]),t._v(" "),a("p",[t._v('​ 而CPU版本：修改属性文件yolov4.prop，"链接器”->"输入"->"附加依赖项"->yolo_cpp_dll_cpu.lib。在＂release x64＂模式下，菜单栏点击＂生成＂－>＂生成解决方案＂，并将')]),t._v(" "),a("ul",[a("li",[t._v("3rdparty\\libdarknet\\bin 路径下的  pthreadGC2.dll、pthreadVC2.dll")]),t._v(" "),a("li",[t._v("3rdparty\\libdarknet\\bin\\release\\cpu 路径下的 yolo_cpp_dll.dll")]),t._v(" "),a("li",[t._v("3rdparty\\libopencv\\bin 路径下的  opencv_world420.dll")])]),t._v(" "),a("p",[t._v("复制到Yolov4-QtGUI\\x64\\release目录下。"),a("br"),t._v("\n最后运行项目，双击x64\\Release目录下的.exe文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/cs/GUI/1.PNG",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("错误日记")]),t._v(" "),a("p",[t._v('另外我也遇到一个error：无法解析的外部符号 WinMain，该符号在函数 "int __cdecl invoke_main(void)”中被引用，原因我判断是没有正确设置输入输出api接口，即console与Windows，可以在链接器->子系统更改。\n可参考：https://blog.csdn.net/u012570056/article/details/74639894')])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("参考链接")]),t._v(" "),a("p",[t._v("https://mp.weixin.qq.com/s/9SR5CUDIBmdJeYEWABASWA")]),t._v(" "),a("p",[t._v("https://github.com/scutlrr/Yolov4-QtGUI#yolov4-qtgui")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/weixin_42448226/article/details/105752224")])])])}),[],!1,null,null,null);l.default=e.exports}}]);