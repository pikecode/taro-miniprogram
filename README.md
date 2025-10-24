# 督查小程序项目文档

## 项目概述

项目基于 Taro + React + TypeScript 构建，当前聚焦于搭建一个简洁的督查业务原型，包括首页、任务列表、数据上报、分析报表以及个人中心等模块。页面数据均为示例数据，便于后续接入真实接口前的 UI 迭代和交互验证。

## 技术栈

- **框架**：Taro (React)
- **语言**：TypeScript
- **样式**：SCSS
- **状态**：React 组件本地状态
- **构建**：Taro CLI 与 Webpack5 Runner

## 目录结构

```
src/
├── app.config.ts          # 小程序全局配置
├── app.scss               # 全局样式
├── app.ts                 # Taro 应用主体
├── assets/
│   └── home-header.svg    # 首页与个人中心顶部背景
└── pages/
    ├── analytics/         # 分析报表页面
    ├── index/             # 首页
    ├── mytasks/           # 我的任务
    ├── profile/           # 个人中心
    └── report/            # 数据上报
```

> 过去的 API 封装、通用组件、自定义 TabBar 等目录已清理，仅保留演示所需的页面与资源，便于后续按需扩展。

## 核心页面简介

- **首页 (`src/pages/index/`)**：展示欢迎信息、任务概览、快捷入口和示例推广内容，滚动布局为主要结构。
- **我的任务 (`src/pages/mytasks/`)**：通过示例数据模拟不同状态的任务列表，支持标签切换与进度展示。
- **数据上报 (`src/pages/report/`)**：包含部门、报告类型等基础字段的表单示例，并提供提交与保存草稿的交互。
- **分析报表 (`src/pages/analytics/`)**：展示统计指标、趋势图和部门排名等静态分析视图，用于验证信息展示布局。
- **个人中心 (`src/pages/profile/`)**：复用首页部分块状布局，集中展示个人信息与任务统计。

## 开发命令

```bash
# 小程序预览与热更新
npm run dev:weapp

# 构建微信小程序产物
npm run build:weapp
```

根据需要可使用其它平台的 `dev:*` 与 `build:*` 命令。

## 后续扩展建议

1. 接入实际接口前，可为各页面补充 API 调用层与缓存管理。
2. 如需恢复通用组件或自定义 TabBar，可在 `src/components/` 与 `src/custom-tab-bar/` 目录重新创建并按需引入。
3. 若引入路径别名或跨页面状态管理，请同步更新 `tsconfig.json` 与相关配置。
