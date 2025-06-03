# What is it?

A *graph* is a **non-linear** [[Data Structures|data structure]] consisting of *vertices* and *edges*. A *graph* can be thought of as a [[Binary Trees|binary tree]] with **no hierarchy**. This way, **any element can be connected to another**, granting more flexibility.

*Vertices*, also referred to as *nodes*, contain **relevant data**, or are just **points of interest** to the application.
*Edges* are used to **connect two *nodes*** of the *graph*, in **any possible way**, as long as it **connects a pair of *vertices***.

![[graphs.png]]

___
# Representing graphs

A *graph* can be represented with *adjacency [[Linked Lists|lists]]* and *adjacency [[Matrices|matrices]]*.

## Adjacency lists

An *adjacency list* implements an [[Arrays|array]] of size $|V|$, in which $|V|$ is the **number of *vertices*** of the *graph*. **Each element** will represent a *vertex*, and its value will be a [[Linked Lists|linked list]], chaining **every other *vertex* connected to the *head* value**.

![[adjacency list.png]]
___
## Adjacency matrices

An *adjacency matrix* implements a *square [[Matrices|matrix]]* of size $|V|^2$, in which $|V|$ is the **number of *vertices*** of the *graph*. In this case, the **number of *edges* doesn't matter**.

The [[Matrices|matrix]] is populated with $1$ if the **row has a connection with the column**, and $0$ if **there are no connections between *vertices***.

![[adjacency matrix.jpg]]