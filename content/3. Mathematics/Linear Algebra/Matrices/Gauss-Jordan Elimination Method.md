[](Matrices.md)[](Matrices.md)[](Matrices.md)# What is it?

In [[Mathematics]], the *Gauss-Jordan elimination method* is used in [[Linear Algebra]] as an *row reduction [[Algorithms|algorithm]]* for solving [[Linear Systems]], and finding the **inverse of a [[Matrices|matrix]]**. All operations are made on **the [[Matrices|matrix]] of coefficients**, using the three [[Elementary Operations of Matrix]].

The objective is to **reduce the [[Matrices|matrix]]** to a *reduced-row echelon form*, also known as *row canonical form*, which will **automatically solve the coefficients** for each corresponding value. A [[Matrices|matrix]] is in *reduced-row echelon form* when all conditions are satisfied:

 - ##### All rows with zero entries are at the bottom.
 
 - ##### The leading entry of a row is to the right of the leading entry of the row above it.
 
 - ##### The leading entry of any non-zero row is equal to $1$.
 
 - ##### All other entries in the column containing a leading entry are equal to $0$.

>[!tip] What is the leading entry?
> When working with [[Matrices|matrices]], the *leading entry* refers to the **first non-zero entry in a row**. It's also called the *pivot entry*. 

___
# Examples of[](Matrices.md)form matrix

If the [[Matrices|matrix]] satisfies all four conditions said above, it's characterized as a *reduced-row echelon form* [[Matrices|matrix]]. Some examples are:

$$
A = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 3 \\
0 & 0 & 0
\end{pmatrix}
\qquad \qquad
B = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

And some examples **which are NOT** satisfying the requirements. The [[Matrices|matrix]] $C$ violates the second and third condition, and $D$ violates the fourth condition.

$$
C = \begin{pmatrix}
0 & 7 & 3 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
\qquad \qquad
D = \begin{pmatrix}
1 & 7 & 3 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

>[!tip] Work with identity matrices
> In general, if found easier, one could just transform the [[Matrices|matrix]] to a *identity [[Matrices|matrix]]*, which is a [[Matrices|matrix]] with all elements of the main diagonal equal to $1$ and the rest filled with $0$.

___
