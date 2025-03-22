# What is it?

In [[Machine Learning]], the *silhouette score* is a metric used for [[Clustering]] [[Algorithms|algorithms]] using the mean *silhouette coefficient* of all data samples, which **does not need labeled data**.

The *silhouette coefficient* measures **how well each data point fits** into its *cluster*. It matches both **cohesion** *(how close a data point is to other points of its own cluster)*, and **separation** *(how far a data point is from points in other cluster)*.

___
## Why silhouette score?

Most metrics for [[Clustering|clustering]] algorithms need *labeled data*, which for [[Clustering|clustering]] problems, the dataset will not contain any *label* for the data.
Instead, *silhouette score* **demands only features data** and the **predicted clusters**.
This **differs** from **other metrics** used for [[Clustering|clustering]] algorithms, which needs *true labels* for evaluation.
## The shortcoming of silhouette score

*Silhouette score* can present **inaccurate scores** for *clusters* which are **not spherical shaped**.
It only considers the **mean distance of a single sample**, while **not taking into account** information about **other samples**. This leads to *clusters* with *abstract shapes* that can have **better [[Clustering|clustering]]**, but **worse scores**.

![[silhouette vs dbcv score.png]]
___
# Calculation

For a specific data point, its *silhouette coefficient* is calculated as:
$$
s_{i} = \frac{b_{i} - a_{i}}{\max (b_{i}, a_{i})}
$$
Where $a$ is **cohesion**, the **mean distance** between $i$ and **all points in its own cluster**, and $b$ is **separation**, the **smallest mean distance** of $i$ to **all points in other clusters**, which can be calculated for **each** data point as:
$$
\begin{align}
&a_{i} = \frac{1}{|C_{I}| - 1} \sum_{j \in C_{I}, i\neq j} d(i,j) \\
&b_{i} = \min_{j\neq i}\frac{1}{|C_{J}|}\sum_{j\in C_{J}}d(i,j)
\end{align}
$$
Where $|C_{I}|$ is the **number of data points belonging to the cluster** $C_{I}$, $d(i,j)$ is the **distance between data points** $i$ and $j$.

![[silhouette score.png]]