---
id: ROS2基本使用
title: ROS2基本使用
sidebar_position: 2
---

# 1,ROS2节点

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