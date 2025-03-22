# What is it?

*PCA* stands for *Principal Component Analysis*, being one of the most popular [[Dimensionality Reduction]] algorithms, used in [[Unsupervised Learning]] to **examine relations between variables**, transform a set of **correlated variables** to an **uncorrelated linear combination of the original variables**, lowering dimensionality and **retaining information**. Is most commonly used in [[Statistics]] and [[Machine Learning]].

>***PCA** is a **linear method** and works great for linear-separable data. For **non-linear data**, check out [[Kernel PCA]].*
___
# How does it work?

The *PCA* algorithm uses the **projection method** described in [[Dimensionality Reduction]] to find the **hyperplane that lies closest to the data**, and then it **projects the data** to the identified hyperplane.

The idea is to select the hyperplane which minimizes the [[Mean Squared Error]], and preserve the **maximum variance possible.** It does this by **identifying the axis** which account for **the largest variance**, for each **possible axis** in the high dimension, using a technique called *Singular Value Decomposition*. It basically **decomposes the data** to a set of *principal components*.

![[PCA.png]]

These *principal components*, also called *PC*s, are the [[Eigenvectors|eigenvectors]] with the highest [[Eigenvectors|eigenvalues]]. In other words, they are the **vectors**/axis of hyperplane of the original data which **capture the most variance**, and the amount of chosen *eigenvectors* will be the **chosen dimension**.
___
# Using scikit-learn

To apply a *PCA* in [[scikit-learn]], one should follow these steps:

1. Create a *baseline model* and **check training time** and **performance**.
2. If not used before, **scale data** before adding *PCA* in the pipeline.
3. Apply *PCA* and **check components variance** and **performance.

*PCA* is also great for **data visualization** and **clustering** higher dimensionality data for other algorithms in the end of the pipeline:

```python
from sklearn.datasets import make_blobs  
from sklearn.pipeline import make_pipeline  
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler  

X, y = make_blobs(random_state=42, n_features=3)  

pca = PCA()  
scaler = StandardScaler()  
pipeline = make_pipeline(scaler, pca)  
  
X_trans = pipeline.fit_transform(X)  
  
fig = plt.figure(figsize=(14, 6))  
ax1 = fig.add_subplot(121, projection='3d')  
ax1.scatter(
	X[:, 0], X[:, 1], X[:, 2], c=y, cmap="viridis", s=50, alpha=0.75
	) 
ax1.set_title("3D original feature space")  
  
ax2 = fig.add_subplot(122)  
ax2.scatter(
	X_trans[:, 0], X_trans[:, 1], c=y, cmap="viridis", s=50, alpha=0.75
	)  
ax2.set_title("PCA transformation")  

plt.suptitle("Make Blobs dataset")  
plt.show()
```

![[pca demonstration.png]]

You can check each **component captured variance** with *explained_variance_ratio*. The returning table show how much each **component explains the percentage of variance** of the original dataset. One could want to return the components which accumulate to an **$n$ explained variance ratio**. To do this, just replace *n_components* for a *float* argument. 

```python
PCA = PCA(n_components=0.9) # Will return explained_variance total of 90%

pipeline = make_pipeline(scaler, PCA)
pipeline.fit(X_train)
pca.explained_variance_ratio
```

![[variance pca table.png]]
___
