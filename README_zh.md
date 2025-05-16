# GitHub 到 DeepWiki 重定向插件

这是一个简单的浏览器扩展，兼容Edge和Chrome浏览器，点击插件按钮时将 GitHub 网址转换为 DeepWiki 网址。

## 功能

- 点击插件按钮时，检测当前网址是否以 `https://github.com/` 开头
- 如果是 GitHub 网址，直接将 `https://github.com/` 替换成 `https://deepwiki.com/`，无需弹窗确认
- 如果不是 GitHub 网址，显示一个小弹窗，提示“github.com”
- 例如：当您位于 `https://github.com/AsyncFuncAI/deepwiki-open` 页面并点击插件按钮时，页面会直接跳转到 `https://deepwiki.com/AsyncFuncAI/deepwiki-open`

## 安装方法

### Edge浏览器

1. 下载或克隆这个仓库到您的电脑中
2. 在 Edge 浏览器中，输入 `edge://extensions/` 进入扩展管理页面
3. 打开右上角的"开发人员模式"
4. 点击"加载解压缩的扩展"
5. 选择这个项目的文件夹

### Chrome浏览器

1. 下载或克隆这个仓库到您的电脑中
2. 在 Chrome 浏览器中，输入 `chrome://extensions/` 进入扩展管理页面
3. 打开右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择这个项目的文件夹

## 文件说明

- `manifest.json`：插件的配置文件
- `background.js`：插件的后台服务脚本
- `popup.html`：点击插件图标时显示的弹出窗口
- `popup.js`：处理网址转换的核心逻辑
- `images/`：存放插件图标的文件夹
- `icon_generator.html`：用于生成图标的工具

## 如何生成图标

1. 在浏览器中打开 `icon_generator.html` 文件
2. 点击"生成图标"按钮生成简单的图标
3. 点击"下载所有图标"按钮保存图标
4. 将下载的图标文件放入项目的 `images` 文件夹中

## 注意事项

- 此插件需要 `tabs` 和 `activeTab` 权限才能正常工作
- 插件仅在用户点击插件按钮且当前 URL 以 `https://github.com/` 开头时才会进行转换
- 每次需要转换网址时，用户都需要手动点击插件按钮
- 此插件使用了标准的WebExtension API，完全兼容基于Chromium的浏览器（包括Edge和Chrome）
