---
sidebar_position: 1
---

# 模型预测控制-MPC

摘要：这篇文章讲的是MPC二次规划问题的求解推导，深入了解二次规划问题MPC求解过程，深入了解每一个变量对最后结果的影响，可以根据改变变量，来达到自己所想要的效果，在文章后文中附带了MATLAB与Octave的代码，可以让你能够通过改变变量，来了解曲线的变化过程。

Optimal Control：Get the best performace within certain limitation

在约束条件下达到最优的系统表现

目标/代价函数  objective/cost function
$$
J = \int_{0}^{t}qe^2+ru^2\,dt\qquad
$$
使代价函数达到最小值minJ，
$$
\int_{0}^{t}e^2\,dt\qquad
$$
越小，追踪越好。
$$
\int_{0}^{t}=u^2\,dt\qquad
$$
越小，输入越小。

q>>r，看重误差          r>>q，看重输入

![mpc-20](https://crpimg.oss-cn-wuhan-lr.aliyuncs.com/img/202408051255303.jpg)



# MPC：模型预测

通过模型来预测系统在某一未来时间段内的表现来进行优化控制。

多用于数位控制，离散型状态空间表达。
$$
X_{k+1}=AX_{k}+BU_{k}
$$
![mpc-21](https://crpimg.oss-cn-wuhan-lr.aliyuncs.com/img/202408051255037.jpg)

![mpc-22](https://crpimg.oss-cn-wuhan-lr.aliyuncs.com/img/202408051255809.jpg)

![mpc-23](https://crpimg.oss-cn-wuhan-lr.aliyuncs.com/img/202408051255929.jpg)

![mpc-25](https://crpimg.oss-cn-wuhan-lr.aliyuncs.com/img/202408051256888.png)



## octave代码

MPC_Test.m

```matlab
%% 清屏
clear ; 
close all; 
clc;

%% 加载 optim package,若使用matlab，则注释掉此行
pkg load optim;

%%%%%%%%%%%%%%%%%%%%%%%%%%
%% 第一步，定义状态空间矩阵
%% 定义状态矩阵 A, n x n 矩阵
A = [1 0.1; -1 2];
n= size (A,1);
%% 定义输入矩阵 B, n x p 矩阵
B = [ 0.2 1; 0.5 2];
p = size(B,2);
%% 定义Q矩阵，n x n 矩阵
Q=[100 0;0 1];
%% 定义F矩阵，n x n 矩阵
F=[100 0;0 1];
%% 定义R矩阵，p x p 矩阵
R=[1 0 ;0 .1];
%% 定义step数量k
k_steps=100; 
%% 定义矩阵 X_K， n x k 矩 阵
X_K = zeros(n,k_steps);
%% 初始状态变量值， n x 1 向量
X_K(:,1) =[20;-20];
%% 定义输入矩阵 U_K， p x k 矩阵
U_K=zeros(p,k_steps);
%% 定义预测区间K
N=5;
%% Call MPC_Matrices 函数 求得 E,H矩阵 
[E,H]=MPC_Matrices(A,B,Q,R,F,N);
%% 计算每一步的状态变量的值
for k = 1 : k_steps 
%% 求得U_K(:,k)
U_K(:,k) = Prediction(X_K(:,k),E,H,N,p);
%% 计算第k+1步时状态变量的值
X_K(:,k+1)=(A*X_K(:,k)+B*U_K(:,k));
end

%% 绘制状态变量和输入的变化
subplot  (2, 1, 1);
hold;
for i =1 :size (X_K,1)
plot (X_K(i,:));
end

legend("x1","x2")
hold off;
subplot (2, 1, 2);
hold;
for i =1 : size (U_K,1)
plot (U_K(i,:));
end

legend("u1","u2")
```

MPC_Matrices.m

```matlab
function  [E , H]=MPC_Matrices(A,B,Q,R,F,N)

n=size(A,1);   % A 是 n x n 矩阵, 得到 n
p=size(B,2);   % B 是 n x p 矩阵, 得到 p
%%%%%%%%%%%%
M=[eye(n);zeros(N*n,n)]; % 初始化 M 矩阵. M 矩阵是 (N+1)n x n的， 
                         % 它上面是 n x n 个 "I", 这一步先把下半部
                         % 分写成 0 
C=zeros((N+1)*n,N*p); % 初始化 C 矩阵, 这一步令它有 (N+1)n x NP 个 0
% 定义M 和 C 
tmp=eye(n);  %定义一个n x n 的 I 矩阵
%　更新Ｍ和C
for i=1:N % 循环，i 从 1到 N
    rows =i*n+(1:n); %定义当前行数，从i x n开始，共n行 
    C(rows,:)=[tmp*B,C(rows-n, 1:end-p)]; %将c矩阵填满
    tmp= A*tmp; %每一次将tmp左乘一次A
    M(rows,:)=tmp; %将M矩阵写满
end 

% 定义Q_bar和R_bar
Q_bar = kron(eye(N),Q);
Q_bar = blkdiag(Q_bar,F);
R_bar = kron(eye(N),R); 
% 计算G, E, H
G=M'*Q_bar*M; % G: n x n
E=C'*Q_bar*M; % E: NP x n
H=C'*Q_bar*C+R_bar; % NP x NP 
end 
```

Prediction.m

```matlab
function u_k= Prediction(x_k,E,H,N,p)
U_k = zeros(N*p,1); % NP x 1
U_k = quadprog(H,E*x_k);
u_k = U_k(1:p,1); % 取第一个结果
end 
```



## MATLAB代码：

```
MPC_Test.m
% 清屏
clear;
close all;
clc;
% 第一步，定义状态空间矩阵
% 定义状态矩阵 A, n*n 矩阵
A = [1 0.1; -1 2];
n = size(A,1);
% 定义输入矩阵 B, n*p 矩阵
B = [0.2 1;0.5 2];
p = size(B,2);
% 定义Q矩阵，n*n 矩阵
Q = [100 0;0 1];
% 定义F矩阵，n*n 矩阵
F = [100 0;0 1];
% 定义R矩阵，p*p 矩阵
R = [1 0;0 0.1];
% 定义step数量k
k_steps = 100;
% 定义矩阵 X_K， n*k 矩 阵
X_K = zeros(n,k_steps);
% 初始状态变量值， n*1 向量
X_K(:,1) = [20;-20];
% 定义输入矩阵 U_K， p*k 矩阵
U_K = zeros(p,k_steps);
% 定义预测区间K
N = 5;
% Call MPC_Matrices 函数 求得 E,H矩阵
[E,H] = MPC_Matrices(A,B,Q,R,F,N);
% 计算每一步的状态变量的值
for k = 1 : k_steps
    % 求得U_K(:,k)
    U_K(:,k) = Prediction(X_K(:,k),E,H,N,p);
    % 计算第k+1步时状态变量的值
    X_K(:,k+1) = (A*X_K(:,k) + B*U_K(:,k));
end
% 绘制状态变量和输入的变化
subplot(2, 1, 1);
hold;
for i = 1 : size(X_K,1)
    plot(X_K(i,:));
end
legend("x1","x2")
hold off;
subplot(2, 1, 2);
hold;
for i = 1 : size(U_K,1)
    plot(U_K(i,:));
end
MPC_Matrices.m
function [E,H] = MPC_Matrices(A,B,Q,R,F,N)
    n=size(A,1); % A是n*n矩阵,得到n
    p=size(B,2); % B是n*p矩阵,得到p
    M=[eye(n);zeros(N*n,n)]; % 初始化M矩阵,M矩阵是(N+1)n*n的,
                             % 它上面是n*n个"I",这一步先把下半部分写成0
    C=zeros((N+1)*n,N*p); % 初始化C矩阵,这一步令它有(N+1)n*NP个0
    % 定义M和C
    tmp=eye(n); % 定义一个n*n 的 I 矩阵
    % 更新Ｍ和C
    for i=1:N % 循环,i从1到N
        rows =i*n+(1:n); %定义当前行数,从i*n开始，共n行
        C(rows,:)=[tmp*B,C(rows-n, 1:end-p)]; %将c矩阵填满
        tmp= A*tmp; %每一次将tmp左乘一次A
        M(rows,:)=tmp; %将M矩阵写满
    end
    % 定义Q_bar和R_bar
    Q_bar = kron(eye(N),Q);
    Q_bar = blkdiag(Q_bar,F);
    R_bar = kron(eye(N),R);
    % 计算G,E,H
    G=M'*Q_bar*M; % G: n*n
    E=C'*Q_bar*M; % E: NP*n
    H=C'*Q_bar*C+R_bar; % NP*NP
Prediction.m
function u_k= Prediction(x_k,E,H,N,p)
    U_k = zeros(N*p,1); % NP x 1
    U_k = quadprog(H,E*x_k);
    u_k = U_k(1:p,1); % 取第一个结果
end 
```



## 参考与致谢

DR_CAN:[【MPC模型预测控制器】1_最优化控制和基本概念_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1cL411n7KV/)