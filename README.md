# vscode-plugin-fr-schema

## 安装

* 插件商店搜索 `FormRender` 后安装即可

## 使用

* 点击 JSON 文件右上角工具栏图标切换编辑模式

> 默认对以下文件生效

  - *.fr.json
  - *.schema.json
  - schema/*.json
  - schemas/*.json

## 截图

![overview](./screenshot/overview.png)

## 开发

* 克隆项目

``` sh
git clone https://github.com/F-loat/vscode-plugin-fr-schema.git
```

* 安装依赖

``` sh
npm install
```

* 调试插件

使用 VSCode 打开项目，执行 `yarn build`，然后按下 F5 开始调试

* 调试页面

开启页面调试配置，并执行 `yarn serve`

``` ts
// src/extension/frSchemaEditor.ts
export class frSchemaEditorProvider implements vscode.CustomTextEditorProvider {
  // ...
  private static readonly isDev = true;
  // ...
}
```
