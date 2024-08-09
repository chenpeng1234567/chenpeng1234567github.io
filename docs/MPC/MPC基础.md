---
id: MPC基础
title: MPC基础
sidebar_position: 2
---

## 模型预测控制（Model Predictive control,MPC）

离散型状态空间方程：
$$
X_{[k+1]}=f(X_{[k]},U_{[k]})
$$
性能指标：
$$
J=h(X_{[N]},X_d)+\sum_{k=1}^{N_{p-1}}g(X_{[k]},X_{d},U_{k})
$$
预测区间（prediction horizon）定义为$N_p$

控制区间（control horizon）定义为$N_c$

最优控制序列：$U_{[k+1|k]}$,$U_{[k+2|k]}$,$U_{[k+3|k]}$,$U_{[k+4|k]}$,$U_{[k+5|k]}$

状态值变化：$X_{[k+1|k]}$,$X_{[k+2|k]}$,$X_{[k+3|k]}$,$X_{[k+4|k]}$,$X_{[k+5|k]}$(此时Np=Nc=5)

在完成控制量的计算和模型预测后，只对系统施加$U_{[k|k]}$，舍去其他控制序列

注：$U_{[k+i|k]}$代表在k时刻计算得到的k+i时刻的控制策略。$X_{[k+i|k]}$代表在k时刻预测得到的k+i时刻的状态变量的值。

某些情况为节省资源：$Nc<Np$



## 二次规划问题（quadratic programming,QP）

标准形式：

$$
min_{u}J=\frac1 2U^THU+U^Tf
$$

约束条件：
$$
\begin{cases}
            MU\le b\\
            M_{eq}=b_{eq}\\
            LB\le U\le UB\\
        \end{cases}
$$
U:n*1向量，

H:n*n对称矩阵，

f:n*1向量，LB代表下限（lower bound），UB代表上限（upper bound）两者都为n*1向量。

有三种情况求解：

1. 无约束情况解析解
2. 等式约束--拉格朗日乘数法
3. 不等式约束--数值法与现代作图工具