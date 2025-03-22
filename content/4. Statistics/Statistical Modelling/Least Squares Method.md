# What is it?

The *least squares method* is a [[Mathematics|mathematical]] method used in [[Statistics]] and [[Machine Learning]] to **find the best-fitting line** of a set of data.
It's a method widely used for [[Linear Regression]] and other *regressive* [[Statistical Modelling|statistical models]], to find the **relation between variables** and **estimating outcomes**.

The objective is to **find a best-fitting line** based on the **deviation from all measured data points**, and the deviation itself is **measured with the squared error** $\epsilon^2$.

![[least squares line.png]]

____
# Applying the Least Squares method

We can use [[Linear Algebra]] concepts on collected data to find the **best-fitting line**. Given a set of data, we can map the **line function** $y = ax +b$ to the **known data of $x, y$**, and then we would discover the $a, b$ coefficients:

| X   | Y   |
| --- | --- |
| 1   | 2   |
| 2   | 3   |
| 3   | 2   |
| 4   | 4   |

$$
\begin{cases}
a + b = 2 \\
2a + b = 3 \\
3a + b = 2 \\
4a + b = 4
\end{cases} \qquad \text{rewritten as } \qquad
A
\begin{pmatrix}
1 & 1 \\
2 & 1 \\
3 & 1 \\
4 & 1 
\end{pmatrix}
*
x
\begin{pmatrix}
a \\
b
\end{pmatrix}
=
b
\begin{pmatrix}
2 \\
3 \\
2 \\
4
\end{pmatrix}
$$
Because it's a [[Linear Systems|overdetermined system]], with **more equations than unknown variables**, we solve $A^T Ax = A^T b$. Calculating $A^T A$ and $A^Tb$, we can write the equivalent system:
$$
\begin{cases}
30a + 10b = 30 \\
10a + \ \ 4b = 11 \\
\end{cases}
$$
Which then, we can solve using the [[Gauss-Jordan Elimination Method]] to conclude that $a=0.53, b=1.43$. Replacing the value of $a, b$ in the original function, we can **discover the best-fitting line** of $y=0.53x + 1.43$, which would result in the following graph:

![[least squares linear algebra result.png]]