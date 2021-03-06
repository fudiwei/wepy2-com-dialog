# wepy2-com-dialog

一个对话框组件。

此组件依赖 [wepy](https://github.com/Tencent/wepy) 2.0.0+。

如果你正在使用 wepy 1.x，请移步 [wepy-com-dialog](https://github.com/fudiwei/wepy-com-dialog)。

---

## 用法

安装：

``` shell
npm install @skit/wepy2-com-dialog --save
```

导入：

``` html
<template>
    <ui-dialog ref="ui-dialog" />
</template>
<config>
{
    usingComponents: {
        'ui-dialog': 'module:@skit/wepy2-com-dialog'
    }
}
</config>
<script>
    import Wepy from 'wepy';
    
    Wepy.page({
        onShow() {
            this.$refs['ui-dialog'].alert('hello world');
        }
    });
</script>
```

> 注意：当前版本的 wepy-cli 存在 Bug，无法打包通过 `node_modules` 引入的 wpy 组件，解决方案请参考 [Issue#2554](https://github.com/Tencent/wepy/issues/2554)。

### 可配置项

#### 属性

参数项 | 说明 | 类型 | 是否必填 | 默认值
:---: | :--: | :--: | :---: | :---:
primaryTextColor | 确认按钮文字颜色<br>（支持 16 进制色或 RGB/RGBA 色） | String | 否 | #90241a |

#### 方法

``` javascript
/**
 * 显示提示对话框。
 * @param {Object} options 配置项。
 * @param {String} options.title 提示标题。
 * @param {String} options.content 提示文本。
 * @param {String} options.confirmText 确定按钮的文字，默认为"好的"。
 * @param {String} options.confirmTextColor 确定按钮的文字颜色（会覆盖 primaryTextColor 属性）。
 * @param {String} options.textAlign 提示文本的对齐方式，支持“left”、“center”、“right”，默认值为“center”。
 * @param {Function} options.success 点击按钮后的回调方法。
 */
this.$refs['ui-dialog'].alert({
    title: '这是标题',
    content: '这是内容',
    confirmText: '确认',
    confirmTextColor: '#1fb8ca',
    textAlign: 'left',
    success: (res) => {
        // 点击确定按钮后执行操作
    }
});

/**
 * 显示提示对话框。
 * @param {String} content 提示文本。
 */
this.$refs['ui-dialog'].alert('这是内容');

/**
 * 显示确认对话框。
 * @param {Object} options 配置项。
 * @param {String} options.title 提示标题。
 * @param {String} options.content 提示文本。
 * @param {String} options.confirmText 确定按钮的文字，默认为"好的"。
 * @param {String} options.confirmTextColor 确定按钮的文字颜色（会覆盖 primaryTextColor 属性）。
 * @param {String} options.cancelText 取消按钮的文字，默认为"取消"。
 * @param {String} options.textAlign 提示文本的对齐方式，支持“left”、“center”、“right”，默认值为“center”。
 * @param {Function} options.success 点击按钮后的回调方法，该方法将接收一个表示被点击按钮索引的参数。
 */
this.$refs['ui-dialog'].confirm({
    title: '这是标题',
    content: '这是内容',
    confirmText: '确认',
    confirmTextColor: '#1fb8ca',
    cancelText: '取消',
    textAlign: 'left',
    success: (res) => {
        switch (res.index) {
            case 0:
                // 点击取消按钮后执行操作
                break;
            case 1:
                // 点击确定按钮后执行操作
                break;
        }
    }
});

/**
 * 显示确认对话框。
 * @param {String} content 提示文本。
 */
this.$refs['ui-dialog'].confirm('这是内容');
```
