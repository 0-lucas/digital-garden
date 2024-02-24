To improve models by improving its data, one should correctly **evaluate the mode**l to determine if it needs [[Data-Centric AI]] approaches and how well they do, and to investigate the model's shortcomings.

> *Take into consideration that this note will use a multi-class classification model.*
___
# Reporting Model Performance

The ***loss function*** is as **fundamental** in training models as it is in **evaluating** them. The loss may be a function of either:
 - The predicted class ***y*** for a given sample ***x***, like *accuracy*, *balanced accuracy*, *precision, and recall*.

 - The predicted ***probability*** of each class for a given sample ***x***, like *log loss*, *AUROC*, *calibration error*.

Each metric shows a *different angle* from *the same scenario*, and should be evaluated depending on the **context** on which the model will be **applied to**. 
Take, for example, a **Fraud vs. NotFraud** classification.  Without checking for *class imbalance*, you train a model and the *accuracy* is 99%. One could say that the model performs very well, but maybe if you look further, you can discover the *balanced accuracy*, which shows the model **is not** that accurate after all.

> *Don't focus on only one metric. Check other metrics based on the context which the model will be applied and the data you're working with.* Try to represent sub-populated classes in your evaluation: a **Confusion Matrix** may help.

___
# Data Leakage

To recap, ***data leakage*** is basically **when information that the model should not have access to is fed into the training data**. 

For example, an *email spam classification*. You might use features such as the frequency of certain words and the length of the email, but you *cannot use* a feature indicating whether the *sender is known to be associated with spam*. The model will learn to associate this feature to the training data, but when used in a production scenario, **won't have access to this feature and won't generalize well**, even though it can show great performance in evaluation.

Another pitfall is not using ***truly** held-out data*. It's very easy to ***overfit*** the model by using the same data for *validation* and *hyperparameter optimization* to also evaluate the model as if it were held out. The sample for *evaluation* should **only** be used for computing scores, **not** for modelling decisions.

> *A great way to deal with this is to split the data in three different parts: **train**, **validation** and **test**. [Click this link for reference.](https://mlu-explain.github.io/train-test-validation/)*
___
# Underperforming Samples

For a given model, it's possible for the loss of a **specific subpopulation** of the data to be **significantly higher** than the rest of the dataset. For example, *Generative AI* is known to have issues in human-centric data, like race, gender and socio-economical factors, i.e., some races may perform better in facial recognition than others.
A model prediction **should not depend on which subpopulation a data point belongs to**, and needs to be able to generalize proportionally well across the **entire distribution.**
___
## Discovering Underperforming Samples

It may not be easy to identify the **characteristics of the underperforming subpopulation**, so one should be able to **strategize ways to find these subgroups** where the model underperform.

A common strategy is ***error analysis*** and ***clustering***, i.e., ***Slice Discovery***
### Error Analysis

Evaluate your model using **validation data**, and sort the examples by **loss value**, which would be the ones where the model is performing poorly. Then try to **identify** any **patterns**, **mislabels** or **noisy data**.
### Error Clustering

Apply ***clustering techniques*** only to the examples identified by the step above, and figure out **subgroups** and **patterns** among the examples.
[Clustering](https://scikit-learn.org/stable/modules/clustering.html) can be done by applying a single distance metric between two examples, using *unsupervised learning*. **Plotting and inspecting the resulting clusters** can expose **patterns** the model struggles to capture. 

> *It's also possible to make this method be label-aware, instead of unsupervised. Which is done by using **SDMs**.*
### Slice Discovery Methods — SDMs

*Slice Discovery* is the task of mining input data for meaningful subpopulations on which the model performs poorly. Any automated technique that performs this task can be called a **Slice Discovery Method**. 

![[SDM.png]]
> *A recent SDM using **cross-modal embeddings*** is [**Domino**](https://ai.stanford.edu/blog/domino/).
## Improving model performance

Here are some ways to improve model performance for a specific sample:
- ##### Trying a more flexible model;
- ##### Over-sample or up-weight the subpopulation;
- ##### Collect additional data;
- ##### Measure or engineer extra features for the specific sample.
___
# Inspecting Isolated Data Points

There are a lot of reasons on why a classifier might output a **bad prediction** for a **given example**. Some of them are:

- ##### The given label is incorrect, and the model actually predicted right.
>*This can happen if the dataset is not accurate and clean enough. One way to remedy this is by using [[Confident Learning]] for **label correction**.*

- ##### The example does not belong to any of the classes or is fundamentally not predictable.
> *For example, a **blurry** image or data of something the model doesn't know yet. If it doesn't **take part in the deployment context**, **delete** from the model or **create** an **“Other”** category for aggregating such classes.*

- ##### The example doesn't conform to the training data distribution.
> *It may be an outlier, or **noisy data**, as there's nothing similar in the dataset. You can either use a [[Outlier Removal]] technique, or **collect and engineer additional features** for this particular case. Also, consider a **preprocessing operation that normalize the data**.*

- ##### The model may be suboptimal or underfitting.
> *To diagnose this, **up-weight the example** or **duplicate it many time**s in the dataset. If the model still can't capture it, it's not data related. Try to mess around with the **modelling itself**.*

- ##### The dataset contains similar examples with different labels.
> *It's possible that may exist **other data points nearly identical** to the one being wrongfully predicted, but containing **different labels**.  In this scenario, there's little you can do to improve performance, besides **feature engineering** and **calibration techniques**.*
___
# Influence of Individual Data Points

Certain data points might exert a significant influence on the model by being unique examples. This influence can be quantified by the **Influence Function *I(x)***, which can measure the change in the model's prediction vs. the change in its loss *(i.e., its performance)*. 
*Influence* reveals which data points **impacts the most**. If you were to correct a label from a **very influential data point**, it would produce a **much better result** than to correct a low influence data point.
## Leave-One-Out Influence — LOO

> *After training and evaluating the model with all the data, omit a specific data point and check how the **predictions**, **accuracy**, and **parameters** changed as a result.*
> ***One data point alone** may not have a **huge impact** on the model, but together with its subgroups, can **define an entire class**.*

![[Leave One Out Influence.png]]
___
## Data Shapley

Another form of influence is the **LOO influence** of a given data point in any **subset** that **contains it**. Averaging this quantity over all **subsets** exposes a value that **better represents** the influence. This approach is called ***Data Shapley***.

>*e.g, if there are two identical data points in a dataset where omitting **both severely harms** model accuracy, **LOO influence** may still conclude that **neither is too important** **(unlike the Data Shapely value)**.*
___
## Monte-Carlo Influence for Classification

For an arbitrary classifier, it's possible to **approximate influence** via Monte-Carlo sampling:

1. Subsample **T** different data subsets **D<sub>t</sub>** from the **original training** dataset (**without replacement**).

2. Train a **separate copy of your model** on each subset **D<sub>t</sub>** and report its accuracy on **held-out validation data**.

3. To assess the value of **a given data point**, compare the **average** accuracy of models for those subsets that **contained** the data point vs. those **that did not**. 

> ***Accuracy here could be any kind of loss function*.**
___
## Closed-form Computation of Influence

For [[Linear Regression]] with ***Least Ordinary Squares***—*MSE*, the **LOO Influence *I(x)*** can be easily calculated via a formula known as ***Cook's Distance***, which shows the influence of **each data point** on the **fitted response values**. This happens because the parameters of a linear regression model are, mathematically, a closed form function of the data itself.
___
# Reference

- ##### [Data-Centric Evaluation of ML Models](https://dcai.csail.mit.edu/2023/data-centric-evaluation/#E22) — MIT — Introduction to Data-Centric AI — Course.


- ##### [Why Is My Classifier Discriminatory?](https://arxiv.org/abs/1805.12002) — Cornell University — Paper — 2018.

- ##### [Boosting Model Performance Through Error Analysis](https://landing.ai/blog/boosting-model-performance-through-error-analysis/) — Landing AI — Blog post.

- ##### [Using SHAP Values to Explain How Your Machine Learning Model Works](https://towardsdatascience.com/using-shap-values-to-explain-how-your-machine-learning-model-works-732b3f40e137) — Towards Data Science — Medium post.