# What is it?

In [[Linear Algebra]], *eigenvalues* are *scalars* associated with **square [[Matrices|matrices]]**, such that exists a **non-zero [[Vectors|vector]]**, called the [[Eigenvectors|eigenvector]], which satisfies the following equation:
$$
\mathbf{Av} = \lambda \mathbf{v}
$$
In this case, when a [[Matrices|matrix]] is multiplied by a [[Eigenvectors|eigenvector]] $\mathbf{v}$, the result is a **scaled version of $\mathbf{v}$**, **scaled by** the *eigenvalue* $\lambda$.

# How to discover eigenvalues

To discover *eigenvalues* of a square [[Matrices|matrix]], one would **need to isolate $\lambda$** from the past formula, resulting in:

$$
\begin{align}
&\mathbf{Av} - \lambda \mathbf{v} = 0 \\
&(\mathbf{A} - \lambda \mathbf{I} )\mathbf{v} = 0
\end{align}
$$

Where $\mathbf{I}$ is a *identity [[Matrices|matrix]]*, of the **same dimensions** as $\mathbf{A}$. This happens because **identity [[Matrices|matrices]]** have **the same property as $1$** in [[Matrix Multiplication]].

$$

\begin{align}
&A = \begin{pmatrix}
2 & 9 \\
1 & 4
\end{pmatrix}
 , \quad \lambda \mathbf{I} = \begin{pmatrix}
\lambda & 0 \\
0 & \lambda
\end{pmatrix} \\ \\

&A - \lambda \mathbf{I} = \begin{pmatrix}
2 - \lambda & 9 \\
1 & 4-\lambda
\end{pmatrix}
\end{align}
$$
Now, **we can solve for $\lambda$**. When calculating the *determinant* of the [[Matrices|matrix]], we will get its *characteristic polynomial*, which its **roots** would be the *eigenvalues* itself.

$$
\begin{align}
&\det(A - \lambda \mathbf{I}) = [(2-\lambda)(4-\lambda)] - (9 * 1) \\
&\det(A - \lambda \mathbf{I}) = 8 -2\lambda-4\lambda + \lambda^2 - 9 \\
&\det(A - \lambda \mathbf{I}) = \lambda^2 - 6\lambda - 1
\end{align}

$$

Now, with the *characteristic polynomial* on hands, we just **need to find its roots**.

$$
\begin{align}
&\lambda_{1} = 3 + \sqrt{10 } \\
&\lambda_{2} = 3 - \sqrt{ 10 }
\end{align}


$$