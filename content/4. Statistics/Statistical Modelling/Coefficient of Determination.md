# What is it?

The *coefficient of determination*, or $R^2$, is a [[Statistics|statistical]] measure that provides the **goodness of fit** of a [[Statistical Modelling|statistical model]]. It's most commonly used with [[Linear Regression]] models, both in [[Statistics]] and [[Machine Learning]].

![[r squared.png]]

It takes a value of $0 \leq R^2 \leq 1$, with $R^2 = 0$ being a **model that does not explain any [[Variance]]** of the predicted variable, and $R^2 = 1$ being a **model that explains all [[Variance]]**.

>[!caution] Beware the bias
>Even though a model can have a good $R^2$ score, **it can still be overly biased**. Remember that $R^2$ does not account for bias (or [[Overfitting]]).

___
# Calculating R squared

To calculate $R^2$, one need to already **have developed the model**, once it uses the **residual of the predictions**. 
Given $RSS$ as the *residual sum of squares*, and $SST$ as the *total sum of squares*, one can calculate $R^2$ using:

$$
\begin{align}
&R^2 =1- \frac {RSS} {SST}, \\
& R^2 =1 - \frac{\sum(y_i - \hat y )^2} {\sum ( y_i - \overline{y})^2}
\end{align}
$$
Which will result in a **percentage**, with range $0 \leq R^2 \leq 1$.

>[!tip] Variables in $R^2$
> The normal $R^2$ takes only two variables. If more are used in the model, then consider using [[Adjusted R Squared]].
