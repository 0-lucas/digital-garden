# What is it?

*Distribution shift* happens when a [[Machine Learning]] model **training data differs** from the one **encountered in a production** environment. This causes the model to **perform poorly when deployed**, even though it can achieve **good results at the training phase**.

For example, a **time series forecasting** problem needs to **continuously train** the model with recent data. If not, then the model can **yield worse results as time passes**, because of the effect of *distribution shift* on production data.

>*This issue is present, to a small degree, in almost every [[Machine Learning]] application, because of the **difficulty to perfectly replicate production conditions at training time**.*
___
# Types of distribution shift

There are three main types of *distribution shift*, that **may happen simultaneously** depending on the context.
___
## Covariate shift

*Covariate shift* occurs when **$p(x)$** changes **between training and production** data, but **$p(y | x)$** does not. In other words, the **features may change its distribution**, but the **relationship** between the **features and target stay the same** regardless of training or production data.

![[Covariate shift.png]]

>*For example, a facial recognition model trained with European-only faces may perform poorly when deployed in other continents, even though the relationship $p(y | x)$ stay the same.*
___
## Concept shift

*Concept shift* occurs when **$p(y | x)$ changes between training and production** data, but  **$p(x)$** does not. Is quite the opposite of *covariate shift*. Now, the **relationship between features and target change**, but the data distribution stay the same.

This is a **harder shift to detect**, because most times will be related to the business side of the problem, not the model itself.

>*For example, an accurate travel recommendation model might have performed poorly when the pandemic hit, because of an external factor closing borders around the world. This is not **inherent to model**, but the **context of deployment itself**.*
___
## Label shift

*Label shift* occurs only in situations where $y \to x$ ***($y$ is believed to cause $x$)***, occurring when $p(y)$ changes between training and production data but $p(y | x)$ does not.

In other words, the **target/ labels might change**, but the relationship between the features and target stay the same.
___
# Detecting distribution shifts
ml monitoring and mlops

# Dealing with distribution shifts