# What is it?

An [[Outlier]] is a **data point that doesn't fit the dataset distribution**.

*Outlier detection* is the process to find a [[Outlier]], **given an unlabeled dataset**, using *statistical methods* or [[Machine Learning]] algorithms. Because of the importance of *outlier detection*, there are many different ways to try and check. 
___
# Outlier detection methods

![[outlier detection ml.png]]
>*A comparison between outlier detection algorithms in [[scikit-learn]].*

*Outlier detection* is a heavily studied field in [[Machine Learning]], with a lot of published research papers and available algorithms. Here are some of them:

## Tukey's Fence

Probably the **simplest method** for **scalar real-valued** data. It uses *interquartile ranges* to **determine limits** where data can be considered an [[Outlier]].  [*John Tukey*](https://pt.wikipedia.org/wiki/John_Tukey) proposed a range which **any data that falls outside of it**, is considered an [[Outlier]]. 

Given $Q_1$ and $Q_3$ as the **first and third quartile**, and $k = 1.5$, the range can be calculated like this:
$$
[Q_1 - k(Q_1 - Q_3), \ Q_3 + k(Q_3 - Q_1)], \quad \text{with  k = 1.5}
$$
___
## Z-score