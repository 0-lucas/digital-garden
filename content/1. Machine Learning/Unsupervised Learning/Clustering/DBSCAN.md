# What is it?

*DBSCAN*, which stands for *Density-based Spatial Clustering of Application with Noise*, is a **density-based** [[Clustering]] [[Algorithms|algorithm]], which determine *clusters* as **points which are close together**, hence the **density-based approach**.

*DBSCAN* makes the assumption that **high-density regions have lower-density regions separating them from other high-density regions**, which create a sparse area around all *clusters*, that can be considered **noise data or even [[Outlier|outliers]]**.
___
# How does it work?

Differently from [[K-Means]], *DBSCAN* makes short work of **uneven *clusters*** and *manifolds*, and can **handle large datasets with moderate number of *clusters***, and it **works well with noisy data and [[Outlier|outliers]]**, but not as much as [[BIRCH Clustering]].

![[kmeans vs dbscan.png]]