(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{530:function(v,_,s){"use strict";s.r(_);var a=s(2),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#vi插入模式下的backspace键和方向键-不正常-使用解决方法"}},[v._v("vi插入模式下的backspace键和方向键“不正常”使用解决方法")])])])]),s("p"),v._v(" "),s("h1",{attrs:{id:"vim-笔录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim-笔录"}},[v._v("#")]),v._v(" vim 笔录")]),v._v(" "),s("p",[v._v("vi命令是UNIX操作系统和类UNIX操作系统中最通用的全屏幕纯文本编辑器。\nLinux中的vi编辑器叫vim，它是vi的增强版（vi Improved），与vi编辑器完全兼容，而且实现了很多增强功能。")]),v._v(" "),s("p",[v._v("vi编辑器支持编辑模式和命令模式，编辑模式下可以完成文本的编辑功能，命令模式下可以完成对文件的操作命令，要正确使用vi编辑器就必须熟练掌握着两种模式的切换。默认情况下，打开vi编辑器后自动进入命令模式。从编辑模式切换到命令模式使用“esc”键，从命令模式切换到编辑模式使用“A”、“a”、“O”、“o”、“I”、“i”键。")]),v._v(" "),s("p",[v._v("Ctrl+u：向文件首翻半屏；")]),v._v(" "),s("p",[v._v("Ctrl+d：向文件尾翻半屏；")]),v._v(" "),s("p",[v._v("Ctrl+f：向文件尾翻一屏；")]),v._v(" "),s("p",[v._v("Ctrl+b：向文件首翻一屏；")]),v._v(" "),s("p",[v._v("Esc：从编辑模式切换到命令模式；")]),v._v(" "),s("p",[v._v("ZZ：命令模式下保存当前文件所做的修改后退出vi；")]),v._v(" "),s("p",[v._v(":行号：光标跳转到指定行的行首；")]),v._v(" "),s("p",[v._v("😒：光标跳转到最后一行的行首；")]),v._v(" "),s("p",[v._v("x或X：删除一个字符，x删除光标后的，而X删除光标前的；")]),v._v(" "),s("p",[v._v("D：删除从当前光标到光标所在行尾的全部字符；")]),v._v(" "),s("p",[v._v("dd：删除光标行正行内容；")]),v._v(" "),s("p",[v._v("ndd：删除当前行及其后n-1行；")]),v._v(" "),s("p",[v._v("nyy：将当前行及其下n行的内容保存到寄存器？中，其中？为一个字母，n为一个数字；")]),v._v(" "),s("p",[v._v("p：粘贴文本操作，用于将缓存区的内容粘贴到当前光标所在位置的下方；")]),v._v(" "),s("p",[v._v("P：粘贴文本操作，用于将缓存区的内容粘贴到当前光标所在位置的上方；")]),v._v(" "),s("p",[v._v("/字符串：文本查找操作，用于从当前光标所在位置开始向文件尾部查找指定字符串的内容，查找的字符串会被加亮显示；")]),v._v(" "),s("p",[v._v("？name：文本查找操作，用于从当前光标所在位置开始向文件头部查找指定字符串的内容，查找的字符串会被加亮显示；")]),v._v(" "),s("p",[v._v("a，bs/F/T：替换文本操作，用于在第a行到第b行之间，将F字符串换成T字符串。其中，“s/”表示进行替换操作；")]),v._v(" "),s("p",[v._v("a：在当前字符后添加文本；")]),v._v(" "),s("p",[v._v("A：在行末添加文本；")]),v._v(" "),s("p",[v._v("i：在当前字符前插入文本；")]),v._v(" "),s("p",[v._v("I：在行首插入文本；")]),v._v(" "),s("p",[v._v("o：在当前行后面插入一空行；")]),v._v(" "),s("p",[v._v("O：在当前行前面插入一空行；")]),v._v(" "),s("p",[v._v(":wq：在命令模式下，执行存盘退出操作；")]),v._v(" "),s("p",[v._v(":w：在命令模式下，执行存盘操作；")]),v._v(" "),s("p",[v._v(":w！：在命令模式下，执行强制存盘操作；")]),v._v(" "),s("p",[v._v(":q：在命令模式下，执行退出vi操作；")]),v._v(" "),s("p",[v._v(":q！：在命令模式下，执行强制退出vi操作；")]),v._v(" "),s("p",[v._v(":e文件名：在命令模式下，打开并编辑指定名称的文件；")]),v._v(" "),s("p",[v._v(":n：在命令模式下，如果同时打开多个文件，则继续编辑下一个文件；")]),v._v(" "),s("p",[v._v(":f：在命令模式下，用于显示当前的文件名、光标所在行的行号以及显示比例；")]),v._v(" "),s("p",[v._v(":set number：在命令模式下，用于在最左端显示行号；")]),v._v(" "),s("p",[v._v(":set nonumber：在命令模式下，用于在最左端不显示行号；\n全选（高亮显示）：按esc后，然后ggvG或者ggVG")]),v._v(" "),s("p",[v._v("全部复制：按esc后，然后ggyG")]),v._v(" "),s("p",[v._v("全部删除：按esc后，然后dG")]),v._v(" "),s("p",[v._v("解析：")]),v._v(" "),s("p",[v._v("gg：是让光标移到首行，在vim才有效，vi中无效")]),v._v(" "),s("p",[v._v("v ： 是进入Visuala(可视)模式")]),v._v(" "),s("p",[v._v("G ：光标移到最后一行")]),v._v(" "),s("p",[v._v('选中内容以后就可以其他的操作了，比如：\nd  删除选中内容\ny  复制选中内容到0号寄存器\n"+y  复制选中内容到＋寄存器，也就是系统的剪贴板，供其他程序用')]),v._v(" "),s("h2",{attrs:{id:"vi插入模式下的backspace键和方向键-不正常-使用解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vi插入模式下的backspace键和方向键-不正常-使用解决方法"}},[v._v("#")]),v._v(" vi插入模式下的backspace键和方向键“不正常”使用解决方法")]),v._v(" "),s("p",[v._v("在新装的ubuntu系统使用vi编辑器编辑文本时，会出现退格键（backspace）和上下左右方向键不好用情况，例如退格键不能删除前面的字母，方向键不能移动光标（在命令模式下可以用h、j、 k、 l键盘作为方向键），而是出现～AD字母等现象，这种情况是因为ubuntu默认安装的版本是vim-tiny简易版本，所以出现了“不正常现象”。")]),v._v(" "),s("p",[v._v("若想正常使用方向键和backspace键有两种方法：")]),v._v(" "),s("p",[v._v("方法一：安装vim full 版本：")]),v._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("sudo apt-get remove vim-common\nsudo apt-get install vim\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br")])]),s("p",[v._v("建议是安装vim 的 full版本，若没网或者不想安装则使用下面的")]),v._v(" "),s("p",[v._v("方法二：\n在root用户下，打开在/etc/vim/vimrc：")]),v._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("gedit    /etc/vim/vimrc\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br")])]),s("p",[v._v("并加入以下内容：")]),v._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[v._v("set nocompatible\nset backspace=2\n")])]),v._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[v._v("1")]),s("br"),s("span",{staticClass:"line-number"},[v._v("2")]),s("br")])])])}),[],!1,null,null,null);_.default=e.exports}}]);