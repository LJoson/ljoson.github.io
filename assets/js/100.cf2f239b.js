(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{503:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("用 GitHub Actions 自动打包发布 Python 项目")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("还在手动打包上传 PyPI？GitHub Actions 自动化真香～！")]),t._v(" "),a("p",[t._v("在《Python 代码一键转流程图》一文里，我介绍了我的开源项目 PyFlowchart。最近，几位小伙伴为这个项目提出了建议或报告了 Bug。在他们的帮助下，项目迭代了几个版本。之前，每次版本更新，我都需要做很多编码之外的麻烦事：")]),t._v(" "),a("ol",[a("li",[t._v("在 GitHub 上发布一个 release")]),t._v(" "),a("li",[t._v("手动打包上传 PyPI")])]),t._v(" "),a("p",[t._v("这个过程非常反人类，发布一个版本要做两项工作。更可怕的是，打包上传 PyPI 的工作十分模板化（我在《如何用 pip 安装自己写的包》一文中介绍了这个过程）。我认为作为开发者，不应该把时间浪费在这种套路工作上。")]),t._v(" "),a("p",[t._v("我想起了之前写过的《还在手动发博客？GitHub Actions自动化真香》，介绍了如何利用 GitHub Actions 自动更新博客网站。于是，这次我尝试用 GitHub Actions 搭建了一套在发布新版本时自动打包上传 PyPI 📦 的工作流程。")]),t._v(" "),a("p",[t._v("现在，发布新版本时，只需在 GitHub 上新建一个 Release。GitHub Actions 会自动完成构建、打包、上传 PyPI 的工作。")]),t._v(" "),a("p",[t._v("本文将介绍如何利用 GitHub Actions 自动发布 Python 包到 PyPI。")]),t._v(" "),a("p",[t._v("（注：我在 PyFlowchart 项目中使用的实现和下文略有不同，我根据需求做了一些修改。如果你感兴趣，可以看看我的实现：https://github.com/cdfmlr/pyflowchart/tree/master/.github/workflows）")]),t._v(" "),a("p",[t._v("下文翻译自 PyPA 的文章《Publishing package distribution releases using GitHub Actions CI/CD workflows》")]),t._v(" "),a("p",[t._v("原文链接：https://packaging.python.org/guides/publishing-package-distribution-releases-using-github-actions-ci-cd-workflows/")]),t._v(" "),a("p",[t._v("GitHub Actions CI/CD 允许在 GitHub 平台上特定事件发生时自动运行一系列命令。我们可以用它设置一个响应 push 事件的工作流程。本文将展示如何在 git push 时发布新的 Python 包（到 PyPI）。我们将使用 pypa/gh-action-pypi-publish GitHub Action。")]),t._v(" "),a("p",[t._v("注意：本教程假设你已在 GitHub 上有一个 Python 项目，并且知道如何构建包并发布到 PyPI。")]),t._v(" "),a("h2",{attrs:{id:"在-github-上保存-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-github-上保存-token"}},[t._v("#")]),t._v(" 在 GitHub 上保存 token")]),t._v(" "),a("p",[t._v("在本文中，我们会把项目上传到 PyPI 和 TestPyPI。因此需要生成两个独立的 token，并将它们保存到 GitHub 的仓库设置中。")]),t._v(" "),a("p",[t._v("让我们开始吧！🚀")]),t._v(" "),a("ol",[a("li",[a("p",[t._v('访问 https://pypi.org/manage/account/#api-tokens ，创建一个新的 API token。如果你已在 PyPI 发布过项目，应将 token 范围(token scope) 限定为只能操作该项目。可将新 token 命名为 "GitHub Actions CI/CD —project-org/project-repo" 之类的，便于识别。生成 token 后不要关闭浏览器页面—— token 只会显示一次。')])]),t._v(" "),a("li",[a("p",[t._v("在另一个浏览器标签或窗口中，打开 GitHub 上你的项目页面，点击 Settings 标签，然后点击左侧边栏的 Secrets。")])]),t._v(" "),a("li",[a("p",[t._v("创建一个新的 secret，命名为 PYPI_API_TOKEN，然后复制粘贴第一步生成的 token。")])]),t._v(" "),a("li",[a("p",[t._v("访问 https://test.pypi.org/manage/account/#api-tokens ，重复之前的步骤，将 TestPyPI 的 token 保存为 TEST_PYPI_API_TOKEN。")])])]),t._v(" "),a("p",[t._v("注意：如果你还没有 TestPyPI 账号，应该注册一个。TestPyPI 和 PyPI 的账号是独立的。")]),t._v(" "),a("h2",{attrs:{id:"创建-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-workflow"}},[t._v("#")]),t._v(" 创建 workflow")]),t._v(" "),a("p",[t._v("GitHub CI/CD 工作流程（workflow）是用 YAML 格式的文件存储在仓库的 .github/workflows/ 目录中的。")]),t._v(" "),a("p",[t._v("我们创建一个 .github/workflows/publish-to-test-pypi.yml 文件。")]),t._v(" "),a("p",[t._v("首先，我们用一个有意义的名称开始，然后定义触发 GitHub 运行此工作流程的事件：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish Python 🐍 distributions 📦 to PyPI and TestPyPI\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" push\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"定义工作流程的工作环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义工作流程的工作环境"}},[t._v("#")]),t._v(" 定义工作流程的工作环境")]),t._v(" "),a("p",[t._v("现在，我们为工作（job）添加初始设置。这个过程将执行我们稍后定义的命令。在这里，我们将使用 Ubuntu 18.04：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-n-publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and publish Python 🐍 distributions 📦 to PyPI and TestPyPI\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.04")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"签出项目，构建发行版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签出项目，构建发行版"}},[t._v("#")]),t._v(" 签出项目，构建发行版")]),t._v(" "),a("p",[t._v("然后，在该 build-n-publish 部分下添加以下内容：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Set up Python 3.7\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("python@v1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("python-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.7")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("这些操作会将我们的项目源码下载到 CI 运行容器中，然后安装并激活 Python 3.7 环境。")]),t._v(" "),a("p",[t._v("现在，我们就可以从源码构建 dist 了。在此示例中，我们将使用 build 包，所以假设项目中已正确设置 pyproject.toml（请参见 PEP 517 / PEP 518）。")]),t._v(" "),a("p",[t._v("（注：其实这里不写 pyproject.toml 问题也不大）")]),t._v(" "),a("p",[t._v("提示：你可以使用任何其他方法来构建发行版，只要将准备好上传的包保存到 dist/ 文件夹中即可。")]),t._v(" "),a("p",[t._v("将下面的代码加到 steps 中：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install pypa/build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n    python "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("m\n    pip install\n    build\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build a binary wheel and a source tarball\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n    python "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("m\n    build\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sdist\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("wheel\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("outdir dist/\n    .\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h3",{attrs:{id:"发布到-pypi-和-testpypi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布到-pypi-和-testpypi"}},[t._v("#")]),t._v(" 发布到 PyPI 和 TestPyPI")]),t._v(" "),a("p",[t._v("最后，添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish distribution 📦 to Test PyPI\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pypa/gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("publish@master\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.TEST_PYPI_API_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository_url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//test.pypi.org/legacy/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Publish distribution 📦 to PyPI\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" startsWith(github.ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'refs/tags')\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pypa/gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pypi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("publish@master\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.PYPI_API_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("这两个 step 调用了 pypa/gh-action-pypi-publish GitHub Action：")]),t._v(" "),a("p",[t._v("第一个步骤无条件地将 dist/ 文件夹的内容上传到 TestPyPI。第二个步骤将其内容上传到 PyPI，这一步只会对被打了标签（git tag）的提交执行。")]),t._v(" "),a("p",[t._v("https://github.com/github-actions-x/commit/blob/master/entrypoint.py")]),t._v(" "),a("p",[t._v("https://github.com/actions-x/commit/blob/master/entrypoint.sh")])])}),[],!1,null,null,null);s.default=e.exports}}]);