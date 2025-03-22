# What is it?

*Linear combinations* are used in [[Linear Algebra]] to determine if a [[Vectors|vector]], or a [[Matrices|matrix]], is the **result of the sum of products by a constant**. 
For example, a *linear combination* of $x$ and $y$ would be **any expression** of the form $ax + by$, where $a,b$ are **constants**.

For example, given [[Vectors|vectors]] $\mathbf{u} = (2, 3)$ and $\mathbf{v} = (-1,4)$, we could **get another** [[Vectors|vector]] $\mathbf{w}$ with the **following equation** $\mathbf{w} = 2u + 5v$. This results in a *linear combination*, and we can say that $\mathbf{w}$ is a *linear combination* of the [[Vectors|vectors]] $\mathbf{u,v}$.
___
# Discovering if a vector is a linear combination

Given $\mathbf{w} = (13,22)$, we can verify if it is a *linear combination* from the other [[Vectors|vectors]] $\mathbf{u} = (3, -2)$ and $\mathbf{v} = (1,7)$.
We can use the general form of a *linear combination*:
$$
\begin{align}
&\mathbf{w} = ax + by \\
&\mathbf{w} = a\mathbf{u} + b\mathbf{v} \\
&(13,22) = a(3, -2) + b(1,7) \\ \\
&\text{which can now be rewritten as} \\ \\
&\begin{cases}
3a + b = 13\\
-2a + 7b = 22
\end{cases} \\ \\
\end{align}
$$
Now we can take the [[Linear Systems|linear system]] and solve it normally, as a [[Matrices|matrix]] problem, with the [[Gauss-Jordan Elimination Method]] or the [[Gaussian Elimination Method]].
