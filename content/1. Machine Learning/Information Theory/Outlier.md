# What is it?

A *outlier* is **basically a data point that doesn't fit the dataset distribution** and/ or **differs significantly from other data points**. It may have different meanings depending of the context.

>[!tip] Defining an outlier depends on the context
>For example, in a facial recognition dataset, a dog picture can be determined as an *outlier*, but this rule would be incomprehensible for a normally distributed random variable.

*Outliers* can be caused by **measurement errors**, **bad data collection**, **malicious inputs** and **rare events**.

![[outlier pun.jpg]]
___
# Effects of outliers

*Outliers* can cause issues during model training, adding unrealistic bias, specially with algorithms like *SVMs* and *K-Means*, distorting decision boundaries. It can also cause **bad results** in both **data and statistical analysis**. This is caused by an effect known as [[Distribution Shift]].

**A single outlier can distort the mean of an entire sample**. For example, when Michael Jordan graduated from his Geography degree, the average starting salary in his college became $250.000, which is unrealistic, but Jordan's salary was in fact skewing the mean.
___
# Identifying outliers

[[Outlier Detection]] can be done in a lot of different ways, using **simple statistical methods** like *Tukey's Fence*, [[Machine Learning]] algorithms like [[Isolation Forest]], and so on. 