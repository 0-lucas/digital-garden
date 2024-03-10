
[[PCA]] in itself uses *projection*, which is a **linear method**. Because of it, the performance on **non-linear data** is not optimal. That's where *Kernel PCA* comes in.
___
# What is it?

*Kernel PCA* is an extension of the traditional [[PCA]] method for [[Dimensionality Reduction]]. As the name suggests, it uses the [[Kernel Trick]], which identifies **linear high-dimensional relations** that become **complex non-linear projections** when the dimension is reduced. This works much better than the *traditional PCA* for **non-linear data**. *Kernel PCA* also can cluster instances better than *traditional PCA*.

![[pca vs kpca.png]]

>***Kernel PCA** can cluster and **linearly separate** non-linear data, even if it doesn't reduce dimensionality.*
___
# How does it work?




