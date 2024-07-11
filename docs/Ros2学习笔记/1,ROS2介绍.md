---
id: ROS2介绍
title: ROS2介绍
sidebar_position: 1
---

Ros：Robot Operating System

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
ros2 run image_tools cam2image

## [**启动rqt**](https://fishros.com/d2lros2foxy/#/chapt2/2.4动手玩ROS2?id=_32-启动rqt)

Ctrl+Alt+T打开终端,输入下面的指令

```
rqt 
```

将Image View下面的复选框选中/image

Vscode编辑器

https://fishros.org.cn/forum/topic/1274/vscode国内下载地址?lang=zh-CN

打开vscode

```
code ./
```

# 2,ROS2节点

四种通信方式

话题-topics

服务-services

动作-action

参数-parameters

运行一个节点

```jsx
ros2 run <package_name> <executable_name>
```

样例

```jsx
ros2 run turtlesim turtlesim_node
```

### ros2命令行

CLI命令行界面

GUI图形用户界面

查看节点列表

```jsx
ros2 node list
```

查看节点信息

```jsx
ros2 node info <node_name>
```

重映射节点名称

```jsx
ros2 run turtlesim turtlesim_node --ros-args --remap __node:=my_turtle
```

运行节点时设置参数

```jsx
ros2 run example_parameters_rclcpp parameters_basic --ros-args -p rcl_log_level:=10
```

• ROS2命令行工具源码;[**ros2/ros2cli: ROS 2 command line interface tools (github.com)**](https://github.com/ros2/ros2cli)