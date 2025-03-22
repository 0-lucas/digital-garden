# What is it?

*Distribution shift* happens when a [[Machine Learning]] model **training data differs** from the one **encountered in a production** environment. This causes the model to **perform poorly when deployed**, even though it can achieve **good results at the training phase**.

For example, a **time series forecasting** problem needs to **continuously train** the model with recent data. If not, then the model can **yield worse results as time passes**, because of the effect of *distribution shift* on production data.

>*This issue is present, to a small degree, in almost every [[Machine Learning]] application, because of the **difficulty to perfectly replicate production conditions at training time**.*
___
# Types of distribution shift

There are three main types of *distribution shift*, that **may happen simultaneously** depending on the context.

![[types of shift.png]]
___
## Covariate shift

*Covariate shift* occurs when **$p(x)$** changes **between training and production** data, but **$p(y | x)$** does not. In other words, the **features may change its distribution**, but the **relationship** between the **features and target stay the same** regardless of training or production data.

![[Covariate shift.png]]

>*For example, a facial recognition model trained with European-only faces may perform poorly when deployed in other continents, even though the relationship $p(y | x)$ stay the same.*
___
## Concept shift

*Concept shift* occurs when **$p(y | x)$ changes between training and production** data, but **$p(x)$** does not. It is quite the opposite of *covariate shift*. Now, the **relationship between features and target change**, but the data distribution stays the same.

This is a **harder shift to detect**, because most times will be related to the business side of the problem, not the model itself.

>*For example, an accurate travel recommendation model might have performed poorly when the pandemic hit, because of an external factor closing borders around the world. This is not **inherent to the model**, but the **context of deployment itself**.*
___
## Label shift

*Label shift* occurs only in situations where $y \to x$ ***($y$ is believed to cause $x$)***, occurring when $p(y)$ changes between training and production data but $p(y | x)$ does not.

In other words, the **target/ labels might change**, but the relationship between the features and target stay the same.
___
# Detecting distribution shifts

To detect *distribution shifts* in a deployed model, one need to have a solid [[MLOps]] workload. Most commonly, *distribution shifts* happens gradually, so one must continually monitor and evaluate the performance of a deployed model.

In general, the most common ways to detect *distribution shifts* is to **monitor model performance** and **data**.

- #### Monitoring model performance
Evaluate **performance metrics** from time to time, like accuracy and precision, or any other **statistical or evaluation metric**. It these change over time, it may be due to *distribution shift*.

- #### Monitor data
It's also possible to evaluate **data shift** by comparing **statistical properties of training and production data**. It also may prove valuable to **store historical properties** of the data.
___
# Dealing with distribution shifts

In general, **fixing data issues** — collecting a better training set or applying [[Data-Centric AI]] methods — and **re-training the model** can address most issues. 

To address *concept shift*, one must have a **solid business understanding** of the problem which the model is deployed. External factors might be in play and only evaluating the model might not prove efficient.
___
# References

- ##### [Class Imbalance, Outliers and Distribution Shift](https://dcai.csail.mit.edu/2023/imbalance-outliers-shift/) — MIT — Introduction to Data-Centric AI — Course.

- ##### [[Dataset Shift in Machine Learning.pdf|Dataset Shift in Machine Learning]] — Book.
