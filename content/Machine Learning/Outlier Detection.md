# What is it?

An [[Outlier]] is a **data point that doesn't fit the dataset distribution**.

*Outlier detection* is the process to find a [[Outlier|outlier]], **given an unlabeled dataset**, using *statistical methods* or [[Machine Learning]] algorithms. Because of the importance of *outlier detection*, there are many different ways to try and check. 
___
# Outlier detection methods

![[outlier detection ml.png]]
>*A comparison between outlier detection algorithms in [[scikit-learn]].*

*Outlier detection* is a heavily studied field in [[Machine Learning]], with a lot of published research papers and available algorithms. Here are some of them:

## Tukey's Fence

Probably the **simplest method** for **scalar real-valued** data. It uses *interquartile ranges* to **determine limits** where data can be considered an **outlier**  [*John Tukey*](https://pt.wikipedia.org/wiki/John_Tukey) proposed a range which **any data that falls outside of it**, is considered an **outlier**. 

Given $Q_1$ and $Q_3$ as the **first and third quartile**, and $k = 1.5$, the range can be calculated like this:
$$
[Q_1 - k(Q_1 - Q_3), \ Q_3 + k(Q_3 - Q_1)], \quad \text{with  k = 1.5}
$$
___
## Z-score

Another simple method is using *Z-score* to determine whether a value is an **outlier**  To calculate the *Z-score* of a data point $x_i$, given $\mu$ as **the mean** and $\sigma$ as the **standard deviation**:
$$
z_i  = \frac {x_i - \mu}{\sigma}
$$
If $z_i$ is **greater than** a **threshold** $z_{thr}$, then the data point $x_i$ is **considered an outlier**. A **common value** for the threshold is $z_{thr} = 3$. 
___
## KNN distance

**In-distribution data is likely to be closer to its neighbors**. Creating an *KNN algorithm*, you can use the **distance as an score** to determine outliers and **establish a threshold** which will determine if a given data point **is or not** an **outlier**.

This method is **really flexible** and can work well even with **high dimensional** or **unstructured** data, like images.
___
Other techniques used to **detect outliers** are [[Autoencoders]] and [[Isolation Forest]]. In fact, [[Isolation Forest]] can work so well that can be used as an **anomaly detection** method for fraud detection, for example.