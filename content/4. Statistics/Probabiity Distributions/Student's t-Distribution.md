# What is it?

The *Student's t-distribution* is a [[Probability]] distribution widely used in [[Statistics]] to estimate **population parameters for small sample sizes or unknown [[Variance]]**.

It's very similar to the [[Normal Distribution]], with a **bell-curve and symmetric shape around 0**, but it differs in its heavier tails. This translates to higher *kurtosis*, meaning that the [[Variance]] is higher and **extreme values are more probable than the [[Normal Distribution]]**.

![[t-distribution.png]]

The *t-distribution*, along with [[Student's t-Test]], plays a important role for [[Hypothesis Testing]] and [[Statistical Significance]].

>[!tip] Student? Weird name.
>The Student distribution was developed by [William Gosset], who signed its research papers with the name *Student*.

___
# Probability Density Function

The *Student t-distribution* has the [[Probability Density Function]] given by:

$$
f(t) = \frac{\Gamma(\frac{v + 1}{2})}{\sqrt{\pi v} * \Gamma(\frac{v}{2})}\left(1 + \frac{t^2}{v}\right)^{-(v + 1) / 2}
$$

Where $\Gamma$ is the [Gamma function](https://en.wikipedia.org/wiki/Gamma_function), $v$ is the number of *degrees of freedom* and $t$ is the [[Student's t-Value]].
___

