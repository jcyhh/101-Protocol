# `CusFloatButton` 使用说明

## 组件位置

`src/components/CusFloatButton/index.vue`

## 组件作用

用于页面悬浮按钮，支持以下能力：

- 手指拖拽移动
- 拖拽结束后自动吸附到左侧或右侧
- 初始位置默认显示在右下区域
- 不依赖第三方拖拽库

## 当前默认行为

- 按钮图片固定使用组件目录下的 `kefu.png`
- 左右和上下安全边距默认是 `30px`
- 初始距离底部默认是 `200px`
- 组件当前使用的是移动端触摸事件：`touchstart`、`touchmove`、`touchend`

## Props

### `edgeGap`

- 类型：`number`
- 默认值：`30`
- 说明：按钮距离屏幕边缘的安全间距，同时影响左右吸附后的边距，以及拖拽时上下左右可活动范围

### `initialBottomGap`

- 类型：`number`
- 默认值：`200`
- 说明：组件首次渲染时距离底部的间距

## 基础用法

```vue
<template>
  <CusFloatButton @click="handleClick" />
</template>

<script setup lang="ts">
import CusFloatButton from '@/components/CusFloatButton/index.vue'

const handleClick = () => {
  console.log('点击了悬浮按钮')
}
</script>
```

## 自定义间距

```vue
<template>
  <CusFloatButton
    :edge-gap="30"
    :initial-bottom-gap="200"
    @click="handleClick"
  />
</template>
```

## 当前项目中的使用方式

```vue
<CusFloatButton @click="openLink(kf_url)" />
```

## 可透传属性

组件内部使用了 `v-bind="$attrs"`，所以可以继续透传原生属性和事件到内部的 `img` 元素，例如：

- `@click`
- `id`
- `data-*`
- `alt`

示例：

```vue
<CusFloatButton
  id="kefu-button"
  alt="客服按钮"
  @click="handleClick"
/>
```

## 注意事项

1. 当前组件图片地址是写死的 `./kefu.png`，不是通过 `props` 传入。
2. 当前组件只处理触摸拖拽，桌面端鼠标拖拽暂未支持。
3. 如果后续要支持不同图片，可以再把图片地址抽成 `src` 参数。
