# vreo-vite-scaffold

> 基于 [Five](https://unpkg.com/@realsee/five/docs/index.html)、[Vreo](https://github.com/realsee-developer/vreo)、[React](https://reactjs.org/)、[TypeScript](https://www.typescriptlang.org/) 及 [Vite](https://vitejs.dev/) 实现的 **音视频导览讲解** 前端开发脚手架。

## 快速开始

```bash
# 拉取源码
git clone git@github.com:realsee-developer/vreo-vite-scaffold.git

# 切换目录
cd vreo-vite-scaffold

# 安装依赖
yarn install

# 执行
yarn run
```

就绪后，访问 [http://localhost:3000/](http://localhost:3000/) 可以查看调试页面。

## 目录说明

```bash
.
├── components # 组件集
│   └── ResponsiveFullScreenFiveCanvas.tsx
├── data  # 数据：演示用途，真实数据可能得通过 Ajax 方式异步获取
│   ├── floorplan.ts # 户型图数据
│   ├── vreo-units  # VreoUnit 剧本数据
│   └── work        # Work 数据(Five 渲染)
├── modules         # 页面模块
│   ├── MainPanel   # 底部主面板
│   ├── PanoFloorplanRadar  # 全景户型雷达图
│   ├── PanoVreoTags        # 全景 Vreo 标签
│   └── TopBar              # 顶部栏
├── shared-utils    # 公共工具集
├── stores # 基于 Mobx 管理的数据层
│   ├── MainPanelStore.ts # 底部主面板数u
│   └── index.tsx
└── vite-env.d.ts   # vite 环境配置
```

### 户型雷达图

详见：[@realsee/dnalogel:PanoFloorplanRadarPlugin](http://dnalogel.developers.realsee.com/storybook/?path=/docs/plugins-floorplan-panofloorplanradarplugin--floorplan-plugin-tpl)，默认已集成至脚手架。

源码位置：[resources/modules/PanoFloorplanRadar/index.tsx](https://github.com/realsee-developer/vreo-vite-scaffold/tree/main/resources/modules/PanoFloorplanRadar/index.tsx)。

### "宝箱"盒子

详见：[@realsee/dnalogel:TreasurePlugin](http://dnalogel.developers.realsee.com/storybook/?path=/docs/plugins-treasureplugin--treasure-plugin-tpl)，默认已集成至脚手架。

源码位置：[resources/modules/TreasureBox/index.tsx](https://github.com/realsee-developer/vreo-vite-scaffold/tree/main/resources/modules/TreasureBox/index.tsx)。

### 语音导览

详见：[@realsee/vreo](https://github.com/realsee-developer/vreo)，讲全屋和单品均有样例。

源码参考：

- 讲全屋：[resources/modules/MainPanel/index.tsx#L37](https://github.com/realsee-developer/vreo-vite-scaffold/tree/main/resources/modules/MainPanel/index.tsx#L37)
- 讲单品：[resources/modules/PanoVreoTags/PanoVreoTag.tsx](https://github.com/realsee-developer/vreo-vite-scaffold/tree/main/resources/modules/PanoVreoTags/PanoVreoTag.tsx)
