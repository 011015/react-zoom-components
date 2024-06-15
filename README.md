<div align="center">
<h1 align="center">react-zoom-components</h1>
一款 React 缩放组件库

![npm](https://img.shields.io/npm/v/react-zoom-components)
![license](https://img.shields.io/github/license/011015/react-zoom-components)
![language](https://img.shields.io/github/languages/top/011015/react-zoom-components)
![last](https://img.shields.io/github/last-commit/011015/react-zoom-components)

<a href="https://011015.github.io/react-zoom-components/index.html" target="_blank">在线体验</a>

</div>

## 安装步骤

1. `npm install react`
2. `npm install react-zoom-components`

## Drag

#### 代码演示

```react
import { Drag } from "react-zoom-components";
function Test() {
    return (
        <>
          <div style={{ width: "200px", height: "200px" }}>
            <Drag
              children={[<div>left</div>, <div>right</div>]}
              width={["30%", "70%"]}
            />
          </div>
        </>
    );
}
export default Test
```

#### API

##### Drag

补充：

(1)建议在Drag组件外包裹一个父组件，可以更好地控制宽度和高度。

(2)目前仅支持两个children，width和children的个数要一致。

| 参数     | 说明     | 类型        | 默认值 |
| -------- | -------- | ----------- | ------ |
| children | 子组件   | ReactNode[] | -      |
| width    | 默认宽度 | string[]    | -      |

## RowFold

#### 代码演示

```react
import { RowFold } from "react-zoom-components";
function Test() {
    return (
        <>
          <div style={{ width: "200px", height: "200px" }}>
            <RowFold
              children={[<div>left</div>, <div>middle</div>, <div>right</div>]}
              height={["30%", "40%", "30%"]}
            />
          </div>
        </>
    );
}
export default Test
```

#### API

##### RowFold

补充：

(1)建议在Drag组件外包裹一个父组件，可以更好地控制宽度和高度。

(2)height和children的个数要一致。

| 参数     | 说明     | 类型        | 默认值 |
| -------- | -------- | ----------- | ------ |
| children | 子组件   | ReactNode[] | -      |
| height   | 默认高度 | string[]    | -      |

## ColumnFold

#### 代码演示

```react
import { ColumnFold } from "react-zoom-components";
function Test() {
    return (
        <>
          <div style={{ width: "200px", height: "200px" }}>
            <ColumnFold
              children={[<div>left</div>, <div>middle</div>, <div>right</div>]}
              width={["30%", "40%", "30%"]}
            />
          </div>
        </>
    );
}
export default Test
```

#### API

##### ColumnFold

补充：

(1)建议在Drag组件外包裹一个父组件，可以更好地控制宽度和高度。

(2)width和children的个数要一致。

| 参数     | 说明     | 类型        | 默认值 |
| -------- | -------- | ----------- | ------ |
| children | 子组件   | ReactNode[] | -      |
| width    | 默认宽度 | string[]    | -      |
