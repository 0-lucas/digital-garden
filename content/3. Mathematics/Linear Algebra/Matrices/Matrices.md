# What is it?

*Matrices* are used in [[Mathematics]], mainly in [[Linear Algebra]] to represent a *mathematical object*, or the property of said subject. They can **store various different values** inside of them.

*Matrices* can be thought of just like *tables*. They have a **two-dimensional** projection with $m \times n$ elements organized in $m$ *rows* and $n$ *columns*.
It forms a **rectangular [[Arrays|array]]**, which in itself, can also be used to build *matrices*.****

>[!tip] A special case of a matrix: [[Vectors]]
> *[[Vectors]]* are a special case of a *matrix* where a *matrix* **has only a single column**. It may not seem to special, but it's probably the most used *matrix* in [[Mathematics]].

[](Vectors.md)tation is $A = m \times n$, where $A$ is the *matrix variable*, $m$ the number of *rows* and $n$ the number of *columns*. We can also **express a filled *[](Mathematics.md)2 \times 3$ like this:

$$

A_{2\times3}=
\begin{bmatrix}  
1 & 2 & 3\\  
a & b & c  
\end{bmatrix}
$$

You can also **identify each element of the *matrix***, using the notation $x_{mn}$, where $x$ is the **element name**. Applied to the above *matrix*:

$$
A_{2\times3}=
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23}
\end{bmatrix}
$$___
# Special cases of matrices

*Matrices* can be given **different names** if they are presented in a given way. These are some of those special cases:

## Diagonal matrix

A *square matrix*, with **equal length in both sides**, which the **elements that don't pertain to the main diagonal** are equal to $0$, is called a *diagonal matrix*. For example:
$$
A_{2\times2} =
\begin{bmatrix}
-10 & 0 \\
0 & 4
\end{bmatrix}
\qquad \qquad
B_{3\times3} = 
\begin{bmatrix}
3 & 0 & 0 \\
0 & 12 & 0 \\
0 & 0 & 2
\end{bmatrix}
$$___
## Identity matrix

An *identity matrix* is similar to the *diagonal matrix*, but the elements from the **main diagonal are equal to $1$**, and the rest must be **equal to $0$**.
$$
I_{2} = 
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
\qquad \qquad
I_{3} = 
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$
___
## Transposed matrix

To **transpose a *matrix***, change its *rows* by the *columns*, and the *columns* in the place of the *rows*, represented by an upper $T$.
$$
A =
\begin{bmatrix}
20 & 16 & 5 \\
2 &  6 & 11
\end{bmatrix}
\qquad \qquad 
A^T = 
\begin{bmatrix}
20 & 2 \\
16 & 6 \\
5 & 11
\end{bmatrix}
$$
___
## Triangular matrices

If the elements **below the main diagonal** are all equal to $0$, we have an *upper triangular matrix*. If the elements **above the main diagonal** are all equal to $0$, we have a *lower triangular matrix*. For example:
$$
\text{Upper triangular} = 
\begin{bmatrix}
8 & 33 & 11 \\
0 & 6 & 12 \\
0 & 0 & 21
\end{bmatrix}
\qquad
\text{Lower triangular} =
\begin{bmatrix}
5 & 0 \\
7 & 1
\end{bmatrix}
$$
___
# Matrix Operations

Some basic operations like **sum and subtraction** are made on an element-by-element basis in *matrices*. However, other operations like [[Matrix Multiplication]] have their specific methods.