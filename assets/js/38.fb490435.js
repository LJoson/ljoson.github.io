(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{435:function(e,s,t){"use strict";t.r(s);var n=t(2),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"tensorrt-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tensorrt-安装"}},[e._v("#")]),e._v(" tensorrt 安装")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.nvidia.com/deeplearning/tensorrt/install-guide/index.html#installing",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方安装文档"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.nvidia.com/tensorrt-download",target:"_blank",rel:"noopener noreferrer"}},[e._v("tensorRT下载链接"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("选择对应的平台，以及所需要的版本，win11选择win10的zip包（需要注意自己安装的 cuda 版本），下载下来之后，解压找到 python 文件夹，里面有现成的 whl 二进制文件，直接使用 pip 安装 whl 文件就好")]),e._v(" "),t("h2",{attrs:{id:"torch2trt安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#torch2trt安装"}},[e._v("#")]),e._v(" torch2trt安装")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/NVIDIA-AI-IOT/torch2trt\ncd torch2trt\npython setup.py install\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" faq")]),e._v(" "),t("p",[e._v("FileNotFoundError: [WinError 2] 系统找不到指定的文件")]),e._v(" "),t("p",[e._v("根据报错链接跳转，找到 subprocess.py 文件，并打开找到以下函数")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   def __init__(self, args, bufsize=-1, executable=None,\n                 stdin=None, stdout=None, stderr=None,\n                 preexec_fn=None, close_fds=True,\n                 shell=True, cwd=None, env=None, universal_newlines=None,\n                 startupinfo=None, creationflags=0,\n                 restore_signals=True, start_new_session=False,\n                 pass_fds=(), *, user=None, group=None, extra_groups=None,\n                 encoding=None, errors=None, text=None, umask=-1)\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("将 shell=False ,改为 shell=True")])])}),[],!1,null,null,null);s.default=r.exports}}]);