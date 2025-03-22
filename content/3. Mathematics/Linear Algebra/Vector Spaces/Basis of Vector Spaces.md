# What is it?

In [[Linear Algebra]], the *basis* of a [[Vector Spaces|vector space]] $\mathbf{V}$ consists on the **smallest number of [[Vectors|vectors]]** in $\mathbf{V}$, which are the [[Generators of Vector Spaces|generators]] of $\mathbf{V}$.
In other words, the *basis* of $\mathbf{V}$ is a set of [[Vectors|vectors]] $\mathbf{S}$, if $\mathbf{S}$ is the [[Generators of Vector Spaces|generator]] of $\mathbf{V}$ **and** is [[Linear Dependency of Vectors|linearly independent]].

>[!tip] Dimension of vector spaces
> The *dimension* of a not null [[Vector Spaces|vector space]] $\mathbf{V}$, corresponds to the **number of [[Vectors|vectors]]** of a *basis* of $\mathbf{V}$.

___
## Canonical Bases

A *canonical basis*, also known as *standard basis*, uses of *canonical [[Vectors|vectors]]*, which are *"one-hot encoded vectors"*. For example, the *standard*, or *canonical basis* of $\mathbf{R}^4$ would be:

$$
\begin{align}
&S_{\mathbf{R}^4} = \{
(1, 0, 0, 0),  \\
&\qquad \quad \ (0, 1, 0, 0), \\
&\qquad \quad \ (0, 0, 1, 0), \\
&\qquad \quad \ (0, 0, 0, 1) \}
\end{align}

$$

We can also apply **the same concept** for [[Matrices]]. A *standard basis* for a [[Vector Spaces|vector space]] $\mathbf{M}_{2}$, based on [[Matrices|matrices]] of order $2\times 2$, would be:

$$
\mathbf{S}_{\mathbf{M}_{2}} = 
\biggl\{
\begin{vmatrix}
1 & 0 \\
0  & 0
\end{vmatrix},
\begin{vmatrix}
0 & 1 \\
0  & 0
\end{vmatrix},
\begin{vmatrix}
0 & 0 \\
1  & 0
\end{vmatrix},
\begin{vmatrix}
0 & 0 \\
0  & 1
\end{vmatrix}
\biggr\}
$$
___
# Checking the basis of a vector space

Given $\mathbf{S} = \{\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}\}$, with $\mathbf{v}_{1} = (1,2,0)$,  $\mathbf{v}_{2} = (0,4,1)$, and $\mathbf{v}_{3} = (2,0,2)$, we can **check if these [[Vectors|vectors]] are the *basis*** of $\mathbf{R}^3$, by proving they are [[Linear Dependency of Vectors|linearly independent]], and that they [[Generators of Vector Spaces|generate]] $\mathbf{R}^3$.
