 *[[Matrices|Matrix]] multiplication* is quite an extensive  [[Mathematics|mathematical]] operation to do. When multiplying a [[Matrices|matrix]] $A$ by another [[Matrices|matrix]] $B$, each **element from the result matrix** $C$ is calculated by the *rows* of $A$ times the *columns* of $B$.

Before attempting, one should guarantee that **the numbers of *columns* from $A$ is equal to the number of *rows* from $B$**. The result $C$ will have the number of rows from $A$ and the columns from $B$.
$$
\begin{align}
&A_{m\times n} * B_{p\times q} = C_{m\times q} \\
&\text{given that } n= p. 
\end{align}
$$
___
# Dot product

When multiplying [[Matrices|matrices]], one use the *dot product*, which is when **matching members are multiplied, and then summed up**. When working with [[Matrices|matrices]], a *row* is multiplied by a *column*, element-wise, and then summed up. For example:

![[dot product.png]]

$$(1, 2, 3) * (8, 10, 12) = 1*8 + 2*10 + 3*12  
    = 64$$
Doing this for every combination of $A$ *rows* and $B$ *columns*, we can build the entire $C$ result. 