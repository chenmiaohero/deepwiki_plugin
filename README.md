# GitHub to DeepWiki Redirector Plugin

[English](README.md) | [中文](README_zh.md)

This is a simple browser extension, compatible with both Edge and Chrome browsers, that redirects GitHub URLs to DeepWiki URLs when the plugin button is clicked.

## Features

- When the plugin button is clicked, it detects if the current URL starts with `https://github.com/`
- If it's a GitHub URL, it directly replaces `https://github.com/` with `https://deepwiki.com/` without confirmation popup
- If it's not a GitHub URL, it displays a small popup with the text "github.com"
- For example: When you are on the page `https://github.com/AsyncFuncAI/deepwiki-open` and click the plugin button, the page will redirect to `https://deepwiki.com/AsyncFuncAI/deepwiki-open`

## Installation Instructions

### Edge Browser

1. Download or clone this repository to your computer
2. In the Edge browser, enter `edge://extensions/` to access the extension management page
3. Turn on "Developer mode" in the top right corner
4. Click "Load unpacked extension"
5. Select this project's folder

### Chrome Browser

1. Download or clone this repository to your computer
2. In the Chrome browser, enter `chrome://extensions/` to access the extension management page
3. Turn on "Developer mode" in the top right corner
4. Click "Load unpacked extension"
5. Select this project's folder

## File Description

- `manifest.json`: Configuration file for the plugin
- `background.js`: Background service script for the plugin
- `popup.html`: Popup window displayed when the plugin icon is clicked
- `popup.js`: Core logic for URL conversion
- `images/`: Folder containing plugin icons
- `icon_generator.html`: Tool for generating icons

## How to Generate Icons

1. Open the `icon_generator.html` file in a browser
2. Click the "Generate Icons" button to generate simple icons
3. Click the "Download All Icons" button to save the icons
4. Place the downloaded icon files in the `images` folder of the project

## Notes

- This plugin requires `tabs` and `activeTab` permissions to function properly
- The plugin only performs conversion when the user clicks the plugin button and the current URL starts with `https://github.com/`
- Users need to manually click the plugin button each time they want to convert a URL
- This plugin uses the standard WebExtension API, fully compatible with Chromium-based browsers (including Edge and Chrome)
