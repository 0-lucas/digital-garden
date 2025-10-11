# What is it?

Used for [[Deep Learning]] mainly as an *activation function* of an [[Artificial Neural Networks|Artificial Neural Network]], the *sigmoid function*, also called *logistic function*, maps any *real-valued number* to a value between **0 and 1**, which makes it naturally useful for **binary classification problems**.

![[sigmoid.png]]

It ensures **smooth continuous outputs**, which is the base of *gradient-based optimization* and models with complex data, due to the introduction of *non-linearity*.
Due to the **steep gradient** in $-2 < x < 2$, the function is **sensitive to small changes in this range**, which can cause a **significant change in the output**.
___
# Mathematical definition

Given $x$ as an input value, and $e$ as the *Euler number(≈2.718)* , the *sigmoid function* can be mathematically defined as:
$$
\sigma = \frac{1}{1+ e^{-x}}
$$

Due to it being [[Differentiation|differenciable]], it's **very useful for calculations of gradient optimizations**.