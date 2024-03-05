# What is it?

*Dimensionality reduction* is the process of **decreasing the amount of features** in a [[Machine Learning]] problem. Normally, one would think *the more data, the merrier*, but when this data reaches the millions of features that **may or not be important** to the algorithm, a good idea is to **keep only the valuable features**, that can give the **best information about the problem**.

Another issue that *dimensionality reduction* can help, is **slow training times**. Having too **much features** with some **specifics algorithms** can lead to **ridiculously slow training**. One could also reduce the features to **improve training times**.

![[dimension reduction.png]]

About *dimensionality*, yeah, it's the **geometry dimension** concept, meaning it's possible to have those unfathomably high dimensions that scare the human brain. In other words, it also **works great with data visualization**, making it possible to **render comprehensible visualizations of higher-dimensions data**.
___
# How does it work?

The goal of *dimensionality reduction* is not too just discard features, but actually **trim the data** so **only the relevant ones stay.** But because of the nature of higher dimensions, training data becomes **very sparse** with high-dimensional spaces, causing issues for the performance of algorithms, specially for **distance-based** ones, like [[Linear Regression]]. This is called the **Curse of Dimensionality**.
___
## The curse of dimensionality
