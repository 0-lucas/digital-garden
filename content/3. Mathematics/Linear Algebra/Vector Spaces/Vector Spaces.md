# What is it?

In [[Linear Algebra]], a *vector space* consists of a *set* $\mathbf{V}$ with [[Vectors]] as elements, a field $\mathbb{F}$ with *scalars* as elements and two operations, *vector addition* and *scalar multiplication*.

- ##### Vector addition
	The operation takes two [[Vectors|vectors]] $v, w \in \mathbf{V}$, and **produces a third vector**, written as $v + w | v+ w \in \mathbf{V}$.

- ##### Scalar multiplication
	The operation takes a *scalar* $c \in \mathbb{F}$ and a [[Vectors|vector]] $v \in \mathbf{V}$, **and produces a new vector**, written as $c * v \in \mathbb{F}$.

To be characterized as a *vector space*, $\mathbf{V}$ needs to f**ollow all the following conditions**, also called *axioms*:

- ##### Associativity of vector addition
	$(u + v) + w = u + (v + w)$ for all [[Vectors|vectors]] $u,v,w \in \mathbf{V}$.

- ##### Existence of a zero vector
	There should be a [[Vectors|vector]] in $\mathbf{V}$, written as $0$ and called **zero vector**, which has the property of $u + 0 = u | u \in V$.

- ##### Existence of negatives
	For every $u \in \mathbf{V}$, there should be a [[Vectors|vector]] in $\mathbf{V}$, written $-u$ and called the **negative of $u$**, which has the property of $u + (-u) = 0$.

- ##### Associativity of multiplication
	$(ab)u = a(bu)$ for any $a, b \in \mathbf{ F}$ and $u \in \mathbf{V}$.

- ##### Distributivity
	$(a + b)u = au + bu$ and $a(u+v) = au + av$ for all $a,b \in \mathbf{F}$ and $u,v \in \mathbb{V}$.

- ##### Unitarity
	$1u = u | u \in \mathbf{V}$.

___
# Vector Subspaces

Given a *vector space* $\mathbf{V}$ and a **subset** $\mathbf{W}$ of $\mathbf{V}$, we can define $\mathbf{W}$ as a *vector subspace* of $\mathbf{V}$, only if the following conditions are satisfied:

- ##### If $u, v \in \mathbf{W}$, then $u + v \in \mathbf{ W}$.
- ##### If $v \in W$, then $kv \in W$, where $k$ is a scalar.