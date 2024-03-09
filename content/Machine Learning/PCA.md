# What is it?

*PCA* stands for *Principal Component Analysis*, being one of the most popular [[Dimensionality Reduction]] algorithms, used in [[Unsupervised Learning]] to **examine relations between variables**, transform a set of **correlated variables** to an **uncorrelated linear combination of the original variables**, lowering dimensionality and **retaining information**.

>***PCA** is a **linear method** and works great for linear-separable data. For **non-linear data**, check out [[Kernel PCA]].*
___
# How does it work?

The *PCA* algorithm uses the **projection method** described in [[Dimensionality Reduction]] to find the **hyperplane that lies closest to the data**, and then it **projects the data** to the identified hyperplane.

The idea is to select the hyperplane which minimizes the [[MSE|mean squared error]], and preserve the **maximum variance possible.** It does this by **identifying the axis** which account for **largest variance**, for each **possible axis** in the high dimension, using a technique called *Singular Value Decomposition*. It basically **decomposes the data** to a set of *principal components*.

![[PCA.png]]

These *principal components*, also called *PC*s, are the *eigenvectors* with the highest *eigenvalues*. In other words, they are the **vectors**/axis of hyperplanes of the original data which **capture the most variance**, and the amount of chosen *eigenvectors* will be the **chosen dimension**.
___
# Using scikit-learn

To apply a *PCA* in [[scikit-learn]], one should follow these steps:

1. Create a *baseline model* and **check training time** and **model performance**.
2. If not used before, **scale data** before adding *PCA* in the pipeline.
3. Apply *PCA* and **check components variance** and **model performance**.
4. Decide if it is worth it or not.

*Step 3* can easily be done in scikit-learn, using the *explained_variance_ratio* attributes of the *PCA class*:

```python
from sklearn.decomposition import PCA  
from sklearn.pipeline import make_pipeline  
from sklearn.preprocessing import StandardScaler  
# X_train is a table of 100rows x 100features.

PCA = PCA(n_components=5)
scaler = StandardScaler()  

pipeline = make_pipeline(scaler, PCA)  # Remember to scale data.  
pipeline.fit(X_train)  

PCA.explained_variance_ratio_
```

![[PCA explained variance ratio.png]]

The returning table show how much each **component explains the percentage of variance** of the original dataset. One could want to return the components which accumulate to a **$n$ explained variance ratio**. To do this, just replace *n_components* for a *float* argument. 

```python
PCA = PCA(n_components=0.95) # Will return explained_variance total of 95%

pipeline = make_pipeline(scaler, PCA)
pipeline.fit(X_train)
```
___
