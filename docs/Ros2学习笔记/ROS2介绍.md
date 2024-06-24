---
id: ROS2介绍
title: ROS2介绍
sidebar_position: 1
---

视频连接：https://www.bilibili.com/video/BV1gr4y1Q7j5?p=1&vd_source=372e65dcafcd24fd43faf6d855023be1

Robot Operating System

功能：简化在各种机器人平台上创建复杂而强大机器人行为的任务即不重复造轮子

### 做一个机器人涉及到多个部分，并且各个部分之间还要通信

```
  感知部分：激光雷达，深度相机，IMU，里程计，碰撞感知

  决策部分：建图，路径规划算法，定位算法

  控制部分：驱动轮子
ros2 run
ros2 launch
ros2 topic list
rqt
rviz2
```

[**扩展阅读3-ROS2VSROS详细对比**](https://fishros.com/d2lros2foxy/#/chapt1/扩展阅读3-ROS2VSROS详细对比)

ROS2游戏：你听我说

# 1,启动一个终端Ctrl+Alt+T

# 2,启动倾听者

```jsx
ros2 run demo_nodes_py listener
```

# 3,启动说话者

```jsx
ros2 run demo_nodes_cpp talker
```

ROS2游戏：小乌龟

```jsx
ros2 run turtlesim turtlesim_node
```

遥控器

```jsx
ros2 run turtlesim turtle_teleop_key
```

ROS2游戏照妖镜

Ctrl+Alt+T打开终端,输入下面的指令

```
ros2 run image_tools cam2imageCopy to clipboardErrorCopied
```

## [**启动rqt**](https://fishros.com/d2lros2foxy/#/chapt2/2.4动手玩ROS2?id=_32-启动rqt)

Ctrl+Alt+T打开终端,输入下面的指令

```
rqtCopy to clipboardErrorCopied
```

将Image View下面的复选框选中/image

Vscode编辑器

https://fishros.org.cn/forum/topic/1274/vscode国内下载地址?lang=zh-CN

打开vscode

```
code ./
```

