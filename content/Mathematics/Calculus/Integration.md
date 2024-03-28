# What is it?

*Integration* is to [[Integrals]] the same [[Differentiation]] is to [[Derivatives]]. Both involve shrink a number down to its infinitesimal scale to calculate something. In the case of *Integration*, they are the about **adding up infinitesimal pieces of something** and **calculating the area under a curve**.

The objective of *integration* is to discover the [[Integrals|integral]] of a function, also commonly named as *anti-derivative* and *primitive function*. In other words, if you have a derivative $f'(x)$, the original function $f(x)$ is our *anti-derivative*, the function *integration* wants to discover.
___
# How does it work?

Let's start with an example. Given a function $f(x) = x + 1$, we can calculate the *integral*, using the same rules used in [[Differentiation]]:
$$
\int (x+1) = \frac{x^2}{2} + x + C
$$
>*Because the rules used in integration are just the reverse of the ones used in [[Differentiation]], consult the [[Calculus formulas.pdf|Integration Rules]]* for easier calculations.

**To prove that**, one could just calculate the [[Derivatives|derivative]] of the result, and would result in our first function $f(x)$. Now, you could be asking yourself where did that $C$ come from?
___
# Definite and indefinite integral

An *integral* is **definite** if the **lower and upper limit of the area** to be calculated is also defined. If no **limits are specified**, the integral can be considered **indefinite**.
$$
\begin{align}
&\int(x)dx \quad \text{is indefinite. No limits defined.} \\
&\int_0^2 (x)dx \quad \text{is definite. Defined limits.}
\end{align}
$$
The methods to integrate a function is the **same** for both **definite and indefinite integrals**. However, a additional last step is required for **definite integrals**. 
___
## Indefinite integrals

**Indefinite integrals** don't specify limits to the integration. That way, it appeals to a **more general integration of a function**, instead of integrating to specific points.

Given a **derivative** $f'(x) = x + 1$, one could integrate it, resulting in $\int (x+1)dx = \frac{x^2}{2} + x$, and that's already known. But now, **we should also add $C$** to the result. $C$ represents any **independent variable from the original function**, which we **can't retrieve its exact value**, so we use $C$ as a **placeholder**.
___
## Definite integrals

Different from **indefinite integrals**, now we have **specified limits** to integrate upon. Because we have a defined area in our function, we can now **calculate the area under the function**.

Before, we stopped at $\int (x+1)dx = \frac{x^2}{2} + x$. But when we insert the limit into the *integral*, we cal evaluate the **definite integral**. We will evaluate the result with $x$ as the **upper and lower limit** and get the difference between them. This would result in the area.
$$
\begin{align}
&\int_0^2(x+1)dx = \frac{x^2}{2} + x \\
&\text{AUC} = (\frac{0^2}{2} + 0) - (\frac{2^2}{2} + 2)\\
&\text{AUC} = 0 - 4\\
&\text{AUC} = 4\ \text{square units}
\end{align}
$$

