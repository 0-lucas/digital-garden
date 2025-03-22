# What is it?

In [[Statistics]], *inference* and *prediction* are **slightly different** results, that use similar methods, ranging from [[Statistical Modelling]] to [[Machine Learning]], to **achieve its desired output**.
However, **both can be summed** using the same formula:
$$
\hat{Y} = \hat{f}(X) + \epsilon
$$
Where $\hat{f}$ represents the **estimate of the true function** $f$, $X$ represents the input variables, or the **set of predictors**, and $\hat{Y}$ the **resulting prediction** of $Y$.
___
## Inference

*Inference* concerns itself with **deeply understanding the relationship** between the **input variables** $Xi\dots Xn$ and the **output variable** $Y$. The **effect and impact** of each input variable is **valuable** for a *inference* problem, and they studied and tested to rightfully determine what input variables $X$ are the **causes** of [[Variance|variance]] in $Y$, and the **importance of each one** to said [[Variance|variance]].

Because of this, $\hat{f}$ **needs to be completely understood**, and its **exact form** needs to be brought to light. Moreover, one may be interested in the following questions:
	*Which predictors are associated with the response?*
	*What is the relationship between the response and each predictor?*
	*Can the relationship between $Y$ and $X$ be adequately summarized using a linear equation, or is the relationship more complicated?* 

___
## Prediction

*Prediction* can be summed up to a single, fully practical question:
	*With a trained model, is it possible to accurately predict $\hat{Y}$, given a known $X$?*

In *prediction*, $\hat{f}$ is treated like a *black box*. This means that is **not valuable** to **deeply understand** the relationship between a input variable and its impact on the output variable. The **desired output** of a *prediction* problem, however, is to **accurately estimate $Y$**.
The **form or any method used to determine** $\hat{f}$ is generally **not of concern**, provided that $\hat{Y}$ is **close enough** to $Y$.