# What is it?
By definition, ***limits*** are related to *functions* and *graphs*, and it describes the ***behavior of a function*** as it approaches a *given value*.
___
# Notation and definition

Given **$f(x)$ defined around $x _{0}$**, except at $x_{0}$ itself, **the limit of $f(x)$ when $x$ tends to $x_{0}$ is $L$**, denoted by the formula below:
$$\lim_{{x \to a}} f(x) = L$$
In other words, if we have a function where a **given number** makes it ***undefined***, it's established a limit on the **given number**. Take for example the function below:
$$
f(x) = \frac{x-1}{x-1} \qquad \qquad f(x) = 1,\, x \neq 1.
$$
The function is *always **1** despite any values inputted* as $x$, but when $f(x) = 1$, the function becomes **undefined**, as $0 \, / \, 0$ does not have a definition. Because of that, *any other value* is accepted, **except for the value of 1**. We can get infinitely close to **1**, as long as it *never actually reaches it*, the **function is still defined**.

Rewriting it so it matches the *limit notation* presented up above, it would be:
$$\begin{aligned}
\scriptsize\text{"The limit of\unicode{0x2026}"}&\qquad\scriptsize\text{"\unicode{0x2026}the function }f\text{\unicode{0x2026}"}
\\
\searrow\qquad&\qquad\swarrow
\\
\LARGE\displaystyle\lim_{x\to 1}&\LARGE f(x) = 1
\\
\nearrow\qquad
\\
\scriptsize\text{"\unicode{0x2026}as }x\text{ approaches }1\text{."}
\end{aligned}$$
___
# Approaching infinitesimally closer

Limits are about a **range of numbers** that **get closer and closer** to a specified value, but ***never quite reaches it***. 
Let's analyze another function:
$$f(x) = x^{2}, \, x \neq 2 $$
In this case, the **function is undefined** at *$x = 2$*, so its established **a limit** on this point. Let's rewrite the function taking the limit into account:
$$
\lim_{{x \to 2}} \, x ^ {2} \text{, \qquad resulting in the graph below:}
$$
![[Limits Parabola.png]]

As *$x$* approaches *2* from **either side**, *$f(x)$* also gets closer and closer to **4**. This happens to both sides **infinitely**. 
## A limit must be the same from both sides

For example, $f(x) = \frac{1}{x - 2}$, is defined for all real numbers **except** at *$x = 2$* . In this case, it would create a [[Asymptote]] at $x = 2$, where the values would get ***infinitesimally closer and closer*** but never **reaching 2**. However, this would not classify as a limit, ***because it's not possible to approach the same value from both sides.***

![[Limits Asymptote.png]]
> *When approaching from the left, $y \to -\infty$ and from the right, $y \to +\infty$.*
___
# Solving a limit

Let's solve the following equation:
$$
\lim _{x \rightarrow 1}\left[\frac{2 x^2-3}{3 x+1}\right] = \quad ?
$$
It asks for the limit of the function *— inside the square brackets —*. We can solve the function using $x = 1$ to discover its image *— **y.***
$$
\lim _{x \rightarrow 1}=\left[\frac{2 x^2-3}{3 x+1}\right]=\frac{2 \cdot(1)^2-3}{3 \cdot 1+1}=-\frac{1}{4}
$$
It means that when $x \to 1$, the **function will result in** $y = -1/4$.  