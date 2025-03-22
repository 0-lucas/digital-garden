
# What is it?
 
*Linear regression* is a widely used [[Statistical Modelling|statistical model]] used to determine the [[Correlation]] between a *dependent variable*, that you're **trying to predict**, and a *independent variable*, which you're **basing the prediction on**.

In [[Statistics]] and [[Machine Learning]], a *linear regression* model tries to capture the **linear relationship** between **two** or **more variables**, in a way that it produces an **equation** that **approximates a prediction for any point in the known data range**.


![[linear regression example.png]]
___
# The statistical model

The [[Statistical Modelling|statistical model]] for *linear regression* is a **linear function**, given by a pair of data $x$ and $y$. The **dependent variable** is given by $y$, and the **independent variables** is $x$.

Given $\beta$ as the **angular coefficient**, $\alpha$ as the **linear coefficient**, and $\epsilon$ as the **random error**, one can write a *simple linear regression model* as:
$$
y_i = \alpha + \beta * x_i + \epsilon
$$
___
## The assumptions of linear regression

However, there are **four main assumptions** related with a *linear regression model*:

- ##### Linearity
	The **relationship** between $x$ and $y$ **must be linear**.

- ##### Homoscedasticity
	The [[Variance]] of the **residual error** must be the same for any value of $x_i$.

- ##### Independence and Normality
	For any value of $x, y$, the data **must be i.i.d.**, *independent and identically distributed*.

>[!tip] Making data linear
> While it may be not the best choice, it's possible to **linearize data** so that it fits in the assumptions made. The process is called [[Data Linearization]].

___
## Estimating the model parameters

To determine the **best fitting line** that captures the data, one can use **several metrics**. The most used method is the [[Least Squares Method|Least Squares method]], also called *OLS*, standing for *Ordinary Least Squares*.

The idea is to **estimate parameters** that **minimize the error $\epsilon$**, meaning the *fitted line* is close to the observed values. The *sum of squared errors* is given by:

$$
SSE = \sum_{i=1}^{n} \epsilon^{2}_{i} \quad \text{, which can be rewritten as} \quad SSE = \sum_{i=1}^{n} [y_i - (\alpha - \beta * x_i)]^2
$$

To find the values of $\alpha$ and $\beta$ that **minimizes** $SSE$, we can use [[Derivatives]] with [[Differentiation Optimization|optimization techniques]] to find the **critical points**, with:

$$
f'(\alpha) SQE = 0 \quad \text{and} \quad f'(\beta)SQE = 0
$$

Which can be applied the *Chain Rule* from [[Differentiation]]:
$$
\left\{\begin{array}{c}
\sum_{i=1}^n y_i=n \alpha+\beta . \sum_{i=1}^n x_i \\
\sum_{i=1}^n x_i y_i=\alpha \cdot \sum_{i=1}^n x_i+\beta . \sum_{i=1}^n x_i^2
\end{array}\right.
$$
**Simplifying** to:

$$
\beta = \frac
{n * \sum_{i=1}^{n} x_i y_i - (\sum_{i=1}^{n}x_i * \sum_{i=1}^{n}y_i)} 
{n * \sum_{i=1}^{n}x^2_i - (\sum_{i=1}^{n}x_i)^2}
$$

The *linear coefficient* $\alpha$ has an easier calculation with the *linear regression model equation* itself:
$$
\alpha = \overline{y} - \beta *\overline{x}
$$
___
# Evaluating a linear regression model

To **evaluate a *linear regression model***, the most used metric is the [[Coefficient of Determination]], referred as $R^2$, which captures the **explained [[Variance]] in the model**.

One can also use other metrics like [[Mean Squared Error]], or [[Mean Absolute Error]] to determine the *goodness of fit*.
___

# Other reference

- ##### [Sobre a Regressão Linear](https://medium.com/@luccleandro/sobre-a-regressão-linear-74572c602ffc) - Own Medium post.

- ##### [Regressão Linear](https://matheusfacure.github.io/2017/02/15/MQO-formula-analitica/) - Matheus Facure