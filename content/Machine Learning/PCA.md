# What is it?

*PCA* stands for *Principal Component Analysis*, being one of the most popular [[Dimensionality Reduction]] algorithms, used in [[Unsupervised Learning]] to **examine relations between variables**, transform a set of **correlated variables** to a **uncorrelated linear combination of the original variables**, lowering dimensionality and **retaining information**.
___
# How it works?

The *PCA* algorithm uses the **projection method** described in [[Dimensionality Reduction]] to find the **hyperplane that lies closest to the data**, and then it **projects the data** at the identified hyperplane.

The idea is to select the hyperplane which minimizes the [[MSE|mean squared error]], and preserve the **maximum variance possible.** It does this by **identifying the axis** which account for **largest variance**, for each **possible axis** in the high dimension, using a technique called *Singular Value Decomposition*. It basically **decomposes the data** to a set of *principal components*.

![[PCA.png]]

These *principal components*, also called *PC*s, are the *eigenvectors* with highest *eigenvalues*. In other words, they are the **vectors**/axis of hyperplanes of the original data which **capture the most variance**.