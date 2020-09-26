# vscode-plugin-fr-schema

## 截图

![screenshot](https://img.alicdn.com/tfs/TB1b53cmGNj0u4jSZFyXXXgMVXa-2740-1748.gif)

## 安装

插件商店搜索 `FormRender` 或访问[此链接](https://marketplace.visualstudio.com/items?itemName=F-loat.vscode-plugin-fr-schema)即可安装

## 功能

> 可通过 examples 目录下的文件进行测试

* 可视化编辑表单配置
  
  - 右键任意 `json` 文件，选择 `可视化编辑表单配置`
  - 点击任意 JSON 文件右上角工具栏图标快速切换编辑模式

* 转换表单数据为表单配置

  右键任意 `json` 文件，选择 `转换数据为表单配置`

* 解析 React PropTypes 为表单配置

  右键任意 `jsx` 文件，选择 `解析组件为表单配置`，具体说明可查看 [proptypes-to-json-schema](https://github.com/form-render/proptypes-to-json-schema) 相关文档

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

使用 VSCode 打开项目，执行 `yarn dev`，然后按下 F5 开始调试

