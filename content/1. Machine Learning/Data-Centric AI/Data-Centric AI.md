# What is it?

Basically, **Data Centric AI** (*DCAI*, for short), is a way to **improve predictions of a [[Machine Learning]] model focusing on the training data of the model**. 
___

![[DCAI.png]]
 ___
# DCAI vs MCAI

The traditional approach for improving a model is to optimize the hyperparameters of a model, or maybe trying to change the algorithm for a better suited one. That might not work if your **training data is flawed to begin with**.

In DCAI, after you evaluate the model performance, instead of trying to change the model itself, you should look into **the quality of the training data**. The principle of _"Garbage In, Garbage Out”_ is the ground truth of *DCAI*. You should first improve the data your model is using, to then change its hyperparameters and so on.

On most cases, a simple model with very accurate training data can probably beat a complex model with bad training data.

So, by fixing your data, you can most probably not *increase the cost of the model and still get better results.* The idea is to systematically diagnose the training data and find ways to improve it, like transforming, augmenting or deleting data, or even changing the way the model trains on the data.

- For example, **[[Curriculum Learning]]**, **in which ML models are *first trained on the easiest samples of data first***, and then as the training data is consumed, it goes to the hardest data. Basically, it *sorts the data on how much complex it is to analyze*, **without actually modifying** the data.

- Or **[[Confident Learning]]**, **in which ML models are trained on a filtered dataset where inaccurate data has been removed**. In other words, you **modify** the dataset, "cleaning” before giving it to the model. 

To recap: **model-centric AI** is based on the goal of _producing the best model for a given dataset_, whereas **data-centric AI** is based on the goal of _systematically & algorithmically producing the best dataset to feed a given ML model_. To deploy the best supervised learning systems in practice, one should do both.
# Examples of data-centric AI
___
- [[Outlier Removal|Outlier detection and removal]] (handling abnormal examples in dataset)
- **Error detection and correction** (handling incorrect values/labels in dataset)
- **Establishing consensus** (determining truth from many crowdsourced annotations)
- **Data augmentation** (adding examples to data to encode prior knowledge)
- **Feature engineering** and selection (manipulating how data are represented)
- **Active learning** (selecting the most informative data to label next)
- **Curriculum learning** (ordering the examples in dataset from easiest to hardest)
___
Here are some notes referring to *Data-centric AI*.

- [[Confident Learning]]
- [[Curriculum Learning]]
- [[Data-Centric Evaluation]]
- [[Class Imbalance]]
- [[Distribution Shift]]
- [[Underperforming Subpopulations]]
___
# References

- ##### [Everyone wants to do the model work, not the data work'': Data Cascades in High-Stakes AI](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/0d556e45afc54afeb2eb6b51a9bc1827b9961ff4.pdf) - Google Paper.

- ##### [Introduction to Data-Centric AI](https://dcai.csail.mit.edu) - MIT Course / Video and Text lecture.

- ##### [Data-Centric AI Hub](https://datacentricai.org)- Andrew Ng's Official Site about DCAI.