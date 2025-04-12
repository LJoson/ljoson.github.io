(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{444:function(t,a,e){"use strict";e.r(a);var v=e(2),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#背景介绍"}},[t._v("背景介绍")])]),e("li",[e("a",{attrs:{href:"#主要特点"}},[t._v("主要特点")])]),e("li",[e("a",{attrs:{href:"#技术创新"}},[t._v("技术创新")])]),e("li",[e("a",{attrs:{href:"#环境准备"}},[t._v("环境准备")]),e("ul",[e("li",[e("a",{attrs:{href:"#必需工具"}},[t._v("必需工具")])]),e("li",[e("a",{attrs:{href:"#环境配置注意事项"}},[t._v("环境配置注意事项")])])])]),e("li",[e("a",{attrs:{href:"#编译步骤"}},[t._v("编译步骤")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-准备工作"}},[t._v("1. 准备工作")])]),e("li",[e("a",{attrs:{href:"#_3-项目生成与编译"}},[t._v("3. 项目生成与编译")])])])]),e("li",[e("a",{attrs:{href:"#常见问题解决"}},[t._v("常见问题解决")]),e("ul",[e("li",[e("a",{attrs:{href:"#opencv相关问题"}},[t._v("OpenCV相关问题")])]),e("li",[e("a",{attrs:{href:"#编译后的使用"}},[t._v("编译后的使用")])])])])])]),e("p"),t._v(" "),e("h1",{attrs:{id:"yolov4简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yolov4简介"}},[t._v("#")]),t._v(" YOLOv4简介")]),t._v(" "),e("h2",{attrs:{id:"背景介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[t._v("#")]),t._v(" 背景介绍")]),t._v(" "),e("p",[t._v("2020年4月，YOLOv4重磅发布。该版本由俄罗斯开发者Alexey Bochkovskiy和台湾开发者Chien-Yao Wang、Hong-Yuan Mark Liao共同开发。这一发布引起了计算机视觉领域的广泛关注，特别是在YOLO之父Joseph Redmon宣布退出CV界后，YOLOv4的发布为YOLO系列带来了新的生机。")]),t._v(" "),e("h2",{attrs:{id:"主要特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要特点"}},[t._v("#")]),t._v(" 主要特点")]),t._v(" "),e("p",[t._v("YOLOv4的主要创新点在于：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("性能提升")]),t._v("：在MS COCO数据集上实现了43.5% AP（65.7% AP50）的优秀成绩")]),t._v(" "),e("li",[e("strong",[t._v("速度优化")]),t._v("：在Tesla V100 GPU上可达到约65 FPS的处理速度")]),t._v(" "),e("li",[e("strong",[t._v("实用性强")]),t._v("：整合了近年来CNN领域的多项改进技术")]),t._v(" "),e("li",[e("strong",[t._v("工程优化")]),t._v("：在保持高精度的同时实现了更快的推理速度")])]),t._v(" "),e("h2",{attrs:{id:"技术创新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术创新"}},[t._v("#")]),t._v(" 技术创新")]),t._v(" "),e("p",[t._v("YOLOv4主要在以下几个方面进行了优化：")]),t._v(" "),e("ul",[e("li",[t._v("数据处理方面的改进")]),t._v(" "),e("li",[t._v("网络训练策略的优化")]),t._v(" "),e("li",[t._v("损失函数的改进")]),t._v(" "),e("li",[t._v("网络结构的优化")])]),t._v(" "),e("h1",{attrs:{id:"windows环境下编译yolov4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows环境下编译yolov4"}},[t._v("#")]),t._v(" Windows环境下编译YOLOv4")]),t._v(" "),e("h2",{attrs:{id:"环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),e("h3",{attrs:{id:"必需工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#必需工具"}},[t._v("#")]),t._v(" 必需工具")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("CUDA和cuDNN")])]),t._v(" "),e("ul",[e("li",[t._v("CUDA版本要求：10.0及以上")]),t._v(" "),e("li",[t._v("对应版本的cuDNN")]),t._v(" "),e("li",[t._v("安装验证："),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("nvidia-smi  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看CUDA版本")]),t._v("\nnvcc -V     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看CUDA编译器版本")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("OpenCV")])]),t._v(" "),e("ul",[e("li",[t._v("版本要求：4.2及以上")]),t._v(" "),e("li",[t._v("推荐使用预编译版本而非源码编译")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("CMake-GUI")])]),t._v(" "),e("ul",[e("li",[t._v("从官网下载最新版本")]),t._v(" "),e("li",[t._v("用于生成Visual Studio项目文件")])])])]),t._v(" "),e("h3",{attrs:{id:"环境配置注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境配置注意事项"}},[t._v("#")]),t._v(" 环境配置注意事项")]),t._v(" "),e("ul",[e("li",[t._v("确保CUDA和cuDNN正确安装并配置环境变量")]),t._v(" "),e("li",[t._v("OpenCV环境变量配置（如需要）")]),t._v(" "),e("li",[t._v("Visual Studio需安装C++开发组件")])]),t._v(" "),e("h2",{attrs:{id:"编译步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译步骤"}},[t._v("#")]),t._v(" 编译步骤")]),t._v(" "),e("h3",{attrs:{id:"_1-准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备工作"}},[t._v("#")]),t._v(" 1. 准备工作")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("下载YOLOv4源码：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/AlexeyAB/darknet.git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("打开CMake-GUI工具")])]),t._v(" "),e("li",[e("p",[t._v("设置源码和生成目录：")]),t._v(" "),e("ul",[e("li",[t._v("Source code：选择darknet源码目录")]),t._v(" "),e("li",[t._v("Build：选择生成目录（建议在源码目录下创建build文件夹）")])])]),t._v(" "),e("li",[e("p",[t._v("点击Configure，选择Visual Studio版本")])]),t._v(" "),e("li",[e("p",[t._v("配置选项：")]),t._v(" "),e("ul",[e("li",[t._v("WITH_CUDA：启用CUDA支持")]),t._v(" "),e("li",[t._v("CUDA_ARCH_ALL：根据显卡选择对应架构")]),t._v(" "),e("li",[t._v("OPENCV：启用OpenCV支持")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-项目生成与编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-项目生成与编译"}},[t._v("#")]),t._v(" 3. 项目生成与编译")]),t._v(" "),e("ol",[e("li",[t._v("点击Generate生成Visual Studio项目文件")]),t._v(" "),e("li",[t._v("点击Open Project打开VS项目")]),t._v(" "),e("li",[t._v("在VS中：\n"),e("ul",[e("li",[t._v("选择Release配置")]),t._v(" "),e("li",[t._v("右键生成ALL_BUILD")]),t._v(" "),e("li",[t._v("右键生成INSTALL")])])])]),t._v(" "),e("h2",{attrs:{id:"常见问题解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题解决"}},[t._v("#")]),t._v(" 常见问题解决")]),t._v(" "),e("h3",{attrs:{id:"opencv相关问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opencv相关问题"}},[t._v("#")]),t._v(" OpenCV相关问题")]),t._v(" "),e("p",[t._v("如果同时安装了源码编译和预编译的OpenCV，可能会遇到以下问题：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('but it set OpenCV_FOUND to FALSE so package "OpenCV" is considered to be NOT FOUND.\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("解决方案：")]),t._v(" "),e("ol",[e("li",[t._v("在CMake配置时指定OpenCV目录")]),t._v(" "),e("li",[t._v("修改OpenCVConfig.cmake文件：\n"),e("ul",[e("li",[t._v("找到OpenCV安装目录下的OpenCVConfig.cmake")]),t._v(" "),e("li",[t._v("在文件末尾添加："),e("code",[t._v("set(OpenCV_FOUND 1)")])])])])]),t._v(" "),e("h3",{attrs:{id:"编译后的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译后的使用"}},[t._v("#")]),t._v(" 编译后的使用")]),t._v(" "),e("p",[t._v("编译成功后，在darknet目录下会生成darknet.exe文件。使用时需要：")]),t._v(" "),e("ol",[e("li",[t._v("确保所有依赖DLL在系统路径中")]),t._v(" "),e("li",[t._v("准备好预训练模型")]),t._v(" "),e("li",[t._v("按照官方文档进行目标检测任务")])]),t._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/AlexeyAB/darknet",target:"_blank",rel:"noopener noreferrer"}},[t._v("YOLOv4官方代码仓库"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://arxiv.org/pdf/2004.10934.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("YOLOv4论文"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/3vdhQ5wsacxuvmpQ4Jl5pw",target:"_blank",rel:"noopener noreferrer"}},[t._v("YOLOv4详细解读"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/Discoverhfub/article/details/79951480",target:"_blank",rel:"noopener noreferrer"}},[t._v("在Windows下编译Darknet"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/yapifeitu/article/details/105749693",target:"_blank",rel:"noopener noreferrer"}},[t._v("YOLOv4训练自定义数据集指南"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);