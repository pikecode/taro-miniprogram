# 督查小程序项目文档

## 项目概述

这是一个基于 Taro 框架开发的微信小程序，主要用于数据填报和质控督查管理。项目采用 React + TypeScript 技术栈，支持多种表单类型的数据收集和管理。

## 技术栈

- **框架**: Taro.js (React)
- **语言**: TypeScript
- **样式**: SCSS
- **状态管理**: React State + Taro Storage
- **网络请求**: 封装的 API Client
- **UI组件**: Taro Components

## 项目目录结构

```
src/
├── api/                           # API配置和接口定义
│   └── config.ts                  # API配置文件
├── app.config.ts                  # 应用全局配置
├── app.scss                       # 全局样式
├── app.tsx                        # 应用入口文件
├── components/                    # 通用组件
│   ├── BaseTabPage/              # TabBar页面基类
│   │   └── index.tsx
│   ├── Breadcrumb/               # 面包屑导航组件
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── DataForm/                 # 数据表单组件
│   │   ├── index.scss
│   │   ├── index.tsx
│   │   └── types.ts
│   └── ImageViewer/              # 图片查看器组件
│       ├── index.scss
│       └── index.tsx
├── config/                        # 配置文件
│   └── apiConfig.json            # API配置JSON
├── custom-tab-bar/               # 自定义TabBar
│   ├── index.scss
│   └── index.tsx
├── pages/                        # 页面目录
│   ├── ai/                       # AI聊天页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── caseList/                 # 病例列表页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── dataForm/                 # 数据填报表单页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── dataReportDetail/         # 数据上报详情页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── dataReportList/           # 数据上报列表页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── departmentForm/           # 部门表单页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── departmentList/           # 部门列表页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── index/                    # 首页
│   │   ├── index.config.ts       # 自定义导航配置
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── login/                    # 登录页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── patientAdd/               # 患者添加页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── patientDetail/            # 患者详情页面
│   │   ├── index.config.ts
│   │   ├── index.scss
│   │   └── index.tsx
│   └── qualityControl/           # 质控督查页面
│       ├── index.config.ts
│       ├── index.scss
│       └── index.tsx
└── utils/                        # 工具函数
    ├── api.ts                    # API客户端封装
    ├── auth.ts                   # 认证管理
    ├── logger.ts                 # 日志工具
    └── miniProgramConfig.ts      # 小程序配置管理
```

## 核心功能模块

### 1. 用户认证 (Authentication)

**文件位置**: `src/utils/auth.ts`

**核心功能**:
- 用户登录状态管理
- Token管理和自动刷新
- 用户信息本地存储
- 自动跳转登录页面

**关键API**:
- `authManager.login()` - 用户登录
- `authManager.logout()` - 用户退出
- `getUserInfo()` - 获取用户信息
- `isLoggedIn()` - 检查登录状态

### 2. 首页 (Homepage)

**文件位置**: `src/pages/index/`

**核心功能**:
- 动态背景图片配置
- 快捷操作入口（数据上报、质控督查）
- 用户信息展示
- 自定义导航栏

**配置来源**:
- 主图片: `main_pic_url` 配置项
- 导航配置: `nav_data_*` 和 `nav_inspect_*` 配置项
- 用户部门: 从登录API的 `departmentName` 获取

### 3. 数据填报系统

#### 3.1 数据上报列表 (`src/pages/dataReportList/`)
- 展示不同类型的填报任务
- 支持搜索和筛选
- 动态配置显示内容

#### 3.2 数据填报详情 (`src/pages/dataReportDetail/`)
- 填报任务列表展示
- 已填报数据管理
- 支持数据编辑和查看

#### 3.3 数据表单 (`src/pages/dataForm/`)
- 动态表单生成
- 支持多种表单类型：
  - `njkqkzkzzbyd`: 口腔科质控指标报表(月度)
  - `njkqkzkzzbnd`: 口腔科质控指标报表(年度)
- 表单验证和数据提交
- 填报单位动态获取（从用户 `departmentName`）

### 4. 质控督查系统

#### 4.1 质控督查列表 (`src/pages/qualityControl/`)
- 督查任务管理
- 部门督查进度跟踪
- 流程状态监控

#### 4.2 部门管理 (`src/pages/departmentList/`, `src/pages/departmentForm/`)
- 部门列表展示
- 部门督查表单填写
- 督查结果记录

### 5. 配置管理系统

**文件位置**: `src/utils/miniProgramConfig.ts`

**核心功能**:
- 小程序配置动态加载
- 配置缓存管理
- 单例模式避免重复请求

**主要配置项**:
```typescript
// 系统配置
system_name: '督查小程序'
logo_url: 'Logo地址'
main_pic_url: '首页主图地址'

// TabBar配置
bar_main_*: '首页TabBar配置'
bar_data_*: '数据上报TabBar配置'
bar_inspect_*: '督查TabBar配置'
bar_ai_*: 'AI TabBar配置'

// 导航配置
nav_data_*: '数据上报导航配置'
nav_inspect_*: '质控督查导航配置'

// AI配置
ai_api_url: 'AI API地址'
ai_appkey: 'AI应用密钥'
```

### 6. API管理

**文件位置**: `src/utils/api.ts`

**核心功能**:
- 统一的HTTP请求封装
- 自动Token处理
- 请求/响应拦截器
- 错误统一处理

**主要接口**:
```typescript
// 用户相关
POST /api/v1/users/login - 用户登录
POST /api/v1/users/logout - 用户退出

// 配置相关
GET /api/v1/sys/config/category/miniprogram - 获取小程序配置

// 数据填报相关
GET /api/v1/data/task-info/list/{taskType} - 获取填报任务列表
GET /api/v1/data/list/{appkey} - 获取数据列表
POST /api/v1/data/save - 保存填报数据
POST /api/v1/data/update - 更新填报数据

// 质控督查相关
GET /api/v1/inspect/task/list - 获取督查任务列表
GET /api/v1/department/list - 获取部门列表
```

### 7. 自定义TabBar

**文件位置**: `src/custom-tab-bar/`

**核心功能**:
- 动态TabBar配置
- 路由状态同步
- 配置化显示控制

**TabBar配置逻辑**:
1. 从小程序配置获取各Tab的显示状态
2. 动态生成TabBar列表
3. 根据当前路由自动选中对应Tab

## 数据流架构

### 1. 配置数据流
```
启动应用 → 检查配置缓存 → 请求配置API → 更新本地缓存 → 应用配置
```

### 2. 用户认证流
```
用户登录 → 验证凭据 → 保存Token和用户信息 → 跳转首页 → 自动Token刷新
```

### 3. 数据填报流
```
选择填报任务 → 加载表单配置 → 填写表单数据 → 验证数据 → 提交保存 → 返回列表
```

### 4. 督查管理流
```
查看督查任务 → 选择部门 → 填写督查表单 → 上传附件 → 提交审核 → 流程跟踪
```



## 部署和配置

### 1. 环境配置
```bash
# 安装依赖
npm install

# 开发模式
npm run dev:weapp

# 构建生产版本
npm run build:weapp
```

### 2. API配置
在 `src/api/config.ts` 中配置API基础地址:
```typescript
const API_BASE_URL = 'https://bi.hskj.cc'
```



