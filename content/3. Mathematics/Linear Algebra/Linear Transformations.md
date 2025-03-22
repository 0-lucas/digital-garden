# What is it?

In [[Linear Algebra]], *linear transformations* (or *linear map*) are *functions* which **linearly transforms [[Matrices|matrices]] and [[Arrays|arrays]]** to different [[Vector Spaces]]. They are widely used in *graphical computing* to transform graphics and *engineering* to work with different physical structures.

![[linear transformatinos.png]]

In fact, [[Matrix Multiplication]] is a form of *matrix transformation* that can be characterized as a *linear transformation*, once it **transforms** a [[Matrices|matrix]] from $\mathbf{R}^n \to \mathbf{R^m}$ *linearly*, and the *function* can be thought as the *second multiplied [[Matrices|matrix]]*.
___
# How does it work?
A *linear transformation* $T: X \to W$can be [[Mathematics|mathematically]] written as:

$$
\begin{align}
& T: \mathbf{R}^n \to \mathbf{R}^m \\

& T(x_{1}, x_{2},\dots, x_{n}) = (w_{1},w_{2},\dots w_{m}) \\
\end{align}
$$

Where $T$ is a *function* which transform any [[Vectors|vector]] $x \in \mathbf{R}^n$ to $w \in \mathbf{R}^m$, given that it **satisfies the following properties**:

$$
\begin{align}
&\text{}T(x + y) = T(x) + T(y) \\
&\text{and} \\
&T(ax) = aT(x)
\end{align}
$$

For transformations which **do not satisfy the above conditions**, it's **not characterized as a *linear transformation***.
___
## Kernel and images of linear transformations

We can define the *kernel* of a *linear transformation* $T:\mathbf{V}\to \mathbf{W}$, as the [[Vectors|vectors]] in the [[Vector Spaces|vector space]] $W$, which when the *function* $T$ was applied, resulted in a *zero vector*. 

This is can be [[Mathematics|mathematically]] written as:
$$
ker(T) = \{
\mathbf{v} \in \mathbf{V}: T(\mathbf{v}) = \vec{0})
\}
$$
___
The *image* of a *linear transformation* $T:\mathbf{V}\to \mathbf{W}$ can be defined as **the resultants** that are [[Vectors|vectors]] in the [[Vector Spaces|vector space]] $\mathbf{V}$. This is [[Mathematics|mathematically]] written as:

$$
im(T) = \{ T(\mathbf{v}): \mathbf{v} \in \mathbf{V} \}
$$
>[!tip] The kernel and image is a subspace of $\mathbf{V}$ and $W$
>Given the *linear transformation* $T:\mathbf{V}\to \mathbf{W}$, both $im(T)$ and $ker(T)$ are [[Vector Spaces|subspaces]] of $\mathbf{W}$ and $\mathbf{V}$, respectively.
>This is written as $ker(T) \subseteq \mathbf{V}$ and $im(T) \subseteq \mathbf{W}$. 

