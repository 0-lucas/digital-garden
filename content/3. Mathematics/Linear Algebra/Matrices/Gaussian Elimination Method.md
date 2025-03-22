# What is it?

In [[Mathematics]], the *Gaussian elimination method* is used in [[Linear Algebra]] as a **row reduction [[Algorithms|algorithm]]** for solving [[Linear Systems]]. All operations are made on **the [[Matrices|matrix]] of coefficients**.

The objective is to **reduce the [[Matrices|matrix]] to a *upper triangular matrix***, with the **first element being equal to $1$.** That way, each **equation can be rewritten** in a way that is possible to solve for each variable. This is done using the [[Elementary Operations of Matrix]].
___
# How does it work?

Given a [[Linear Systems|linear system]], let's apply the *Gaussian elimination method*, in a matrix-based way:
$$
\begin{cases}
2x +2y = 20 \\
3x + y = 22
\end{cases} \qquad \text{rewritten as } \qquad
A =\
\begin{pmatrix}
2 & 2 & |20 \\
3 & y & |22
\end{pmatrix}
$$
We can apply two [[Elementary Operations of Matrix]], one on each row. The first will transform the **first element to be equal to $1$**. The second will transform the the [[Matrices|matrix]] to a *upper triangular matrix*.
$$
\begin{align}
&A_{R_1 \rightarrow R_1/2} =
\begin{pmatrix}
1 & 1 & |10 \\
3 & 1 & |22
\end{pmatrix} \\
\\
&A_{R_2 \rightarrow R2 -3R_1} = 
\begin{pmatrix}
1 & 1 & | \ \ \ 10 \\
0 & -2 & |-8
\end{pmatrix}
\end{align}
$$
Now, we can write to a [[Linear Systems|linear system]] of equations again:
$$
\begin{cases}
&x + y = 10 \\
&\quad \ \ \ y = 4 
\end{cases}
$$
A simple replacement of $y =4$ on the **first equation** would reveal that $x = 6$.
___
# Other methods

One could also consider the [[Gauss-Jordan Elimination Method]], which is an improvement over the *Gaussian method*.
