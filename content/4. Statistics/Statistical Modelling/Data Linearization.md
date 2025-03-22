# What is it?

*Data linearization* is the process of taking **non-linear data and transforming it to linear**. This is most commonly used in [[Statistics]], to fit **non-linear data to linear models**.
___
## Linearizing $y = a * x^\alpha$ 

For  $y = a * x^\alpha$ models, we can apply [[Logarithms]] to *linearize* the data.

$$
\begin{align}
&\ln y =\ln a *x^a \\
&\ln y = \ln a + a* \ln x
\end{align}
$$

The idea is that we can now collect $(\ln x_i, \ln y_i)$, and the model will **behave like a linear equation**. In fact, this is the idea behind every *linearization method* demonstrated here.
___
## Linearizing $y = a\sqrt{x}$

For $y = a\sqrt{x}$ models, we can just transform $\sqrt{x}$ to a **different variable**, like $t$. That way, $y = at$, and we collect $(\sqrt{x_i}, y_i)$.
___
## Linearizing $y = a * e^{bx}$

For $y = a * e^{bx}$ models, one can apply [[Logarithms]] once again:

$$
\begin{align}
&\ln y = \ln a * e^{bx} \\
&\ln y = \ln a + \ln e^{bx} \\
&\ln y = \ln a + bx \\ 
\end{align}
$$
That way, we can collect $(x_i, \ln y_i)$ data.