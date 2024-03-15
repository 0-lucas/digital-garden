# What is it?

In [[Machine Learning]], *entropy* measures the level of **disorder or uncertainty** of a **given dataset**. A **higher *entropy*** corresponds to **mixed and messy data**, where you don't have a clear separation of data. On the other hand, **low *entropy*** shows a more **clear and organized** separation of data.

![[entropy example.png]]

The concept of *entropy* comes from **19th century thermodynamics**, introduced by [Ludwig Boltzmann](https://pt.wikipedia.org/wiki/Ludwig_Boltzmann), who statistically showed how the *entropy* of an isolated system can never decrease with time. 

*Entropy* was formerly a **measure of chaos** of particles in a system, but nowadays, it is widely used in [[Machine Learning]], especially in [[Decision Trees]] and [[Neural Networks]]. 
___
# Entropy in Machine Learning

When used in [[Machine Learning]], *entropy* stand together with [Information theory](https://en.wikipedia.org/wiki/Information_theory), where it takes a **new meaning**. 

In this context, it refers to the **amount of data and uncertainty present in a variable**, or when applied, the **amount of information learned on average from one instance of the variable**. It's given by the formula:

$$
H(X) = - \sum_{i=1}^{n}P(x_i) \log P(x_i)
$$
>*Given a discrete random variable $X$, with possible outcomes $x_n$ with probability of occurring $P(x_n)$, and $i$ as the number of possible categories.*
___

- When working with *feature engineering*, one might use *entropy* for exploring [[Mutual Information]] of features.

- Or maybe, use *entropy* as the *cost-function* of [[Decision Trees]], splitting based on the **purity of data** determined by *entropy*.
___
# References 

- ##### [Entropy and mutual information](https://www.ece.tufts.edu/ee/194NIT/lect01.pdf) - Information Theory lecture - Tufts University.