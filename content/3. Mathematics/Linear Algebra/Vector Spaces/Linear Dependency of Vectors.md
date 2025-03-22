# What is it?

In [[Linear Algebra]], it's possible to **classify different sets of [[Vectors]]** inside of a [[Vector Spaces|vector space]] as *linearly dependent* or *linearly independent*.

*Linearly dependent* [[Vectors|vectors]], in a $\mathbf{R^2}$ space, **would be on the same line**, with the **same direction**.

![[ld vectors.png]]

However, *linearly independent* [[Vectors|vectors]], in a $\mathbf{R^2}$ space, have **different directions**.

![[li vectors.png|260]]
___
# How does it work?

A set of [[Vectors|vectors]] $\{\mathbf{v}_{1}, \mathbf{v}_{2},\dots \mathbf{v}_{n}\}$ belonging to a [[Vector Spaces|vector space]] $\mathbf{V}$ is **said to be *linearly dependent***, if:

$$
\begin{align}
&c_{1}\mathbf{v}_{1} + c_{2}\mathbf{v}_{2} + \dots + c_{n}\mathbf{v}_{n} = 0 \\ \\
& \text{where }c_i \text{ are constants and not all are null}
\end{align}
$$
And the same set is **said to be *linearly independent***, if:

$$
\begin{align}
&c_{1}\mathbf{v}_{1} + c_{2}\mathbf{v}_{2} + \dots + c_{n}\mathbf{v}_{n} = 0 \\ \\
&\text{where } c_{1}=c_{2}=c_{n}=0
\end{align}
$$
Writing the above *equation* will result in a [[Homogeneous Systems|homogeneous system]]. If the system **has only a trivial solution**, then the set of [[Vectors|vectors]] is ***linearly independent***, otherwise, **not trivial solutions** indicate that the set is ***linearly independent***.

For example, given the [[Vectors|vectors]] $\mathbf{v}_{1} = (1, 2)$ and $\mathbf{v}_{2} = (2, 4)$, we can assume they are *linearly dependent* because $\mathbf{v}_{2}$ is a multiple of $\mathbf{v}_{2}$. However, we can check this:

$$
\begin{align}
&c_{1}\mathbf{v}_{1} + c_{2}\mathbf{v}_{2} = 0 \\
&c_{1}(1,2) + c_{2}(2,4) = 0 \\
&(c_{1} + 2c_{1}) + (2c_{2} + 4c_{2}) = 0 \\ \\
&\text{which results in} \\
&\begin{cases}
c_{1} + 2c_{1} = 0 \\
2c_{2} + 4c_{2} = 0
\end{cases}
\end{align}
$$

From the resultant [[Linear Systems|linear system]], we can solve it and determine if it is an *inconsistent*, *independent* or *dependent* system, which will then result if it's **linearly independent or dependent***.


