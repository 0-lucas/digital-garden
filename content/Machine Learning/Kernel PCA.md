
[[PCA]] in itself uses *projection*, which is a **linear method**. Because of it, the performance on **non-linear data** is not optimal. That's where *Kernel PCA* comes in.

# What is it?

*Kernel PCA* is an extension of the traditional [[PCA]] method for [[Dimensionality Reduction]]. As the name suggests, it uses the [[Kernel Trick]], which identifies **linear high-dimensional relations** that becomes **complex non-linear projections** when the dimension is reduced. This works much better than the *traditional PCA* for **non-linear data** and **helps clustering**.
