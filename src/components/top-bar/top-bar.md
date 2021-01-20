# topBar

## Attributes

|     参数     |                       说明                       |  类型   | 可选值 | 默认值 |
| :----------: | :----------------------------------------------: | :-----: | :----: | :----: |
|    title     |                       标题                       | String  |   --   |   ""   |
|    image     | 标题栏右侧图片，需用 require("图片地址")方式引入 | Object  |   --   |  null  |
|  isBackShow  |                 是否展示返回按钮                 | Boolean |   --   |  true  |
| barBackColor |                   标题栏背景色                   | String  |   --   | "#fff" |
|  barHeight   |                    标题栏高度                    | String  |   --   | "45px" |
|    zIndex    |                     z-index                      | String  |   --   | "999"  |
|  fontColor   |                  标题栏字体颜色                  | String  |   --   | "#333" |
|   fontSize   |                  标题栏字体大小                  | String  |   --   | "21px" |

## Events

|   事件   |      说明      | 参数 |
| :------: | :------------: | :--: |
|  onLeft  | 点击标题栏左侧 |  --  |
| onMiddle | 点击标题栏中间 |  --  |
| onRight  | 点击标题栏右侧 |  --  |

## Slot

|    name    |      说明      |
| :--------: | :------------: |
|  bar-left  | 标题栏左侧插槽 |
| bar-middle | 标题栏中间插槽 |
| bar-right  | 标题栏右侧插槽 |
