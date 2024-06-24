---
id: ROS2构建工具-Colcon
title: ROS2构建工具-Colcon
sidebar_position: 4
---

colcon其实是一个功能包构建工具

1,安装colcon

```jsx
sudo apt-get install python3-colcon-common-extensions
```

2,编个东西

```jsx
mkdir colcon_test_ws && cd colcon_test_ws
git clone <https://github.com/ros2/examples> src/examples -b humble
```

编译工程

```jsx
colcon build
```

3,编完之后的目录结构

```jsx
.
├── build
├── install
├── log
└── src

4 directories, 0 files
```

- `build` 目录存储的是中间文件。对于每个包，将创建一个子文件夹，在其中调用例如CMake
- `install` 目录是每个软件包将安装到的位置。默认情况下，每个包都将安装到单独的子目录中。
- `log` 目录包含有关每个colcon调用的各种日志信息

### 运行一个自己编的节点

1,打开一个终端使用 cd colcon_test_ws进入我们刚刚创建的工作空间，先source 一下资源

```jsx
source install/setup.bash
```

2,运行一个订杂志节点，你将看不到任何打印，因为没有发布者

```jsx
ros2 run examples_rclcpp_minimal_subscriber subscriber_member_function
```

3,打开一个新的终端，先source，再运行一个发行杂志节点

```jsx
source install/setup.bash
ros2 run examples_rclcpp_minimal_publisher publisher_member_function
```

只编译一个包

```jsx
colcon build --packages-select YOUR_PKG_NAME 
```

[**不编译测试单元**](http://d2lros2foxy.fishros.com/#/humble/chapt2/get_started/3.ROS2构建工具之Colcon?id=_52-不编译测试单元)

```jsx
colcon build --packages-select YOUR_PKG_NAME  --cmake-args -DBUILD_TESTING=0
```

[**运行编译的包的测试**](http://d2lros2foxy.fishros.com/#/humble/chapt2/get_started/3.ROS2构建工具之Colcon?id=_53-运行编译的包的测试)

```jsx
colcon test
```

[**允许通过更改src下的部分文件来改变install（重要）**](http://d2lros2foxy.fishros.com/#/humble/chapt2/get_started/3.ROS2构建工具之Colcon?id=_54-允许通过更改src下的部分文件来改变install（重要）)

```jsx
colcon build --symlink-install
```

- colcon官方文档 [**](https://colcon.readthedocs.io/en/released/user/installation.html)https://colcon.readthedocs.io/en/released/user/installation.html**
- ROS2官网文档 [**](https://docs.ros.org/en/foxy/Tutorials/Colcon-Tutorial.html)https://docs.ros.org/en/foxy/Tutorials/Colcon-Tutorial.html**