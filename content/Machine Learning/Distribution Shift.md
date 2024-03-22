# What is it?

*Distribution shift* happens when a [[Machine Learning]] model **training data differs** from the one **encountered in a production** environment. This causes the model to **perform poorly when deployed**, even though it can achieve **good results at the training phase**.

For example, a **time series forecasting** problem needs to **continuously train** the model with recent data. If not, then the model can **yield worse results as time passes**, because of the effect of *distribution shift* on production data.

>*This issue is present, to a small degree, in almost every [[Machine Learning]] application, because of the **difficulty to perfectly replicate production conditions at training time**.*
___
# Types of distribution shift

There are three main types of *distribution shift*, each one with its intricacies.

# Detecting distribution shifts
ml monitoring and mlops

# Dealing with distribution shifts