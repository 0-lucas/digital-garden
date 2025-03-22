# What is it?

Apart from general [[Mathematics|mathematical]] operations, there are *elementary operations* used in [[Linear Algebra]] that are specific for working with [[Matrices]].

They can be classified as *elementary row operations* for operations **done on each row**, or *elementary column operations* for operations **done on each column**.
___
# Interchange of rows and columns

Any two columns (or rows) of a [[Matrices|matrix]] can be **exchanged**. If the $i^{th}$ and $j^{th}$ **rows** of a [[Matrices|matrix]] are exchanged, it's denoted as $R_i \leftrightarrow R_j$. **For the columns**, the notation is $C_i \leftrightarrow C_j$.

$$
\begin{align}
&A = 
\begin{bmatrix}
1 & 2 & -3 \\
4 & -5 & 6
\end{bmatrix} \qquad\text{Original matrix }\\ \\

& A = 
\begin{bmatrix}
4 & -5 & 6 \\
1 & 2 & -3
\end{bmatrix} \quad \text{Exchanged } R_1 \leftrightarrow R_2
\end{align}
$$
___
# Multiplication by a non-zero number

Any row (or column) can be **added with another** row (or column), **if multiplied by a *non-zero number***. Adding the $i^{th}$ row with the $j^{th}$ row,  with the **latter being multiplied by a *non-zero number* $k$**, could be denoted as $R_i \rightarrow R_i + kR_j$. **For columns** the notation is $C_i \rightarrow C_i + kC_j$.

$$
\begin{align}
&A = 
\begin{bmatrix}
1 & 2 & -3 \\
4 & -5 & 6
\end{bmatrix} \qquad\text{Original matrix }\\ \\

& A = 
\begin{bmatrix}
1 & 2 & -3 \\
8 & 3 & -7
\end{bmatrix} \quad \text{Applied } R_2 = R_2 + 4R_1
\end{align}
$$

It also can be applied to **multiplication of a row, without the sum of another**. While still **needs to be a *non-zero number***, the notation is $R_i \rightarrow kR_i$ for **rows** and $C_i \rightarrow kC_i$ for **columns**.

$$
\begin{align}
&A = 
\begin{bmatrix}
1 & 2 & -3 \\
4 & -5 & 6
\end{bmatrix} \qquad\text{Original matrix }\\ \\

& A = 
\begin{bmatrix}
3 & 6 & -9 \\
4 & -5 & 6
\end{bmatrix} \quad \text{Applied } R_1 = 3R_1
\end{align}
$$