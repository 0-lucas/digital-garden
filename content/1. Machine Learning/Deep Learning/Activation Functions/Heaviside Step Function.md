# What is it?

Used for [[Deep Learning]] mainly as an *activation function* of an [[Artificial Neural Networks|Artificial Neural Network]], the *Heaviside step function*, also called as *unit step function*, denoted by $H$ or $\theta$,  normally **outputs 0 for negative arguments**, and **outputs 1 for positive arguments**.
Different conventions may propose that $H(0)$ yield different values, but this is normally treated as the [[Sign Function]].

The *Heaviside function* can be mathematically written as:

$$H(x) := \begin{cases}
1= x \geq 0 \\ 
0=x < 0
\end{cases}$$

Which would yield the following function:

![[Pasted image 20251005115720.png|600]]
___
# Limitations

Because of its binary nature, the *Heaviside function* may **not be the best option for problems where flexibility is needed**. For [[Deep Learning]] purposes, most cases needs models to have greater flexibility to be able to learn from raw data and prevent [[Underfitting]].
It also does not introduce *non-linearity*, which for complex problems with *non-linear* decision boundaries or complicated data, **will not be enough**.

For these cases, other *activation functions* are recommended, like the [[Sigmoid Function]], [[Tanh Function]], and [[ReLU Function]]
 t