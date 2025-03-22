# What is it?

A *field* is a concept used in [[Mathematics]] to **group numbers with similar characteristics**. In theory, it uses a concept called *commutative ring*, but it goes beyond the scope of this note.

A *field* is a **set of numbers** $\mathbb{F}$, with the property that if $a, b \in \mathbb{F}$, then the **results** of $a+b, a-b, ab$ and $\frac{a}{b} /b\neq{0}$, are also inside $\mathbb{F}$.

>[!tip] Fields. Not sets.
> While it may seem similar, a *field* is not the same as a *set of numbers*. *Sets* are the popular collection of  numbers like $\mathbb{Z}, \mathbb{N}$ and $\mathbb{R}$.
> 
>However while $3$ and $5$ are *natural numbers* the result of $3 -5$ does not belong to $\mathbb{N}$. This disqualifies the *field* concept.

____
# Conditions of a field

A collection of numbers is only a *field* if, for **any possible element**, it follows all of the rules:

- ##### Commutativity of addition
	$x + y = y + x$

- ##### Associativity of addition
	$(x +y) + z = (z + y) + x$

- ##### Existence of an additive identity
	There is an element $0 \in \mathbb{F}$, called zero, such that $x + 0 = x$.

- ##### Existence of additive inverses
	For each $x$, there is an element $-x \in \mathbb{F}$, such that $x + (-x) = 0$.

- ##### Commutativity of multiplication
	$xy = yx$

- ##### Associativity of multiplication
	$(x * y) * z = x * (y * z)$

- ##### Distributivity
	$(x+ y) * z = x* z + y$ and $x * (y + z)= x * y + z$

- ##### Existence of a multiplicative identity
	There is an element $1 \in \mathbb{F}$, such that $1 \neq 0$ and $x * 1 = x$.

- ##### Existence of a multiplicative inverse
	If $x \neq 0$, then there is an element $x^{-1} \in \mathbb{F}$, such that $x * x^{-1} = 1$.
