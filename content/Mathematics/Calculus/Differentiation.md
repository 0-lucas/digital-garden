# What is it?
*Differentiation* is a fundamental of [[Calculus]] which studies **rates of change** and **slopes of curves**. It allows determining how a **function's output changes** when its **input changes ever so slightly**. 
Basically, *differentiation* is the **process of finding** the [[Derivatives|derivative]] of a function.
___
# Differentiation rules

[[Derivatives]] are used to define the **rate of change** and **instantaneous slope at a given point**. But using the definitions takes too much time, so there are some **rules** that help to **find the derivatives** of a function.

![[Differentiation rules.png]]
>*These are some of the most commonly used rules. To see a list **containing all of them**, [[Differentiation formulas.pdf|click here]].*
___
## Polynomial and exponential functions

Let's start with the most basic ones, some simple **polynomial functions**, **power functions** and **exponential functions**.
### Constant function

The easiest of all functions, the *constant function*, is given by the general form  $f(x) = c$, meaning that $y = c$. It gives a **straight line** in a graph, with **slope equal to 0**, resulting in a *derivative o* $f'(x) = 0$.
$$
f^{\prime}(x)=\lim _{h \rightarrow 0} \frac{f(x+h)-f(x)}{h}=\lim _{h \rightarrow 0} \frac{c-c}{h}=\lim _{h \rightarrow 0} 0=0
$$
![[constant function diff.png]]

___
### Power function

Functions of the general form $f(x) = x^n$, where $n$ is a **positive integer,** are *power functions*. If $n = 1$, then $f(x) = x$, which would result in $f'(x) = 1$.
If $n \neq 1$, we can use the *Power Rule*, which states:
$$
f'(x^n) = nx^{n-1}, \quad x \in \mathbf{R}
$$
This is a **general case**, which can be proven using the definition:

![[power rule definition.png]]
___
### Exponential functions

*Exponential derivatives* are a very specific. One of the popular forms of an *exponential function* is $f(x)=e^x$, where $e$ is the *Euler's number*, which is its own derivative. For details, check out [this link](https://www.cuemath.com/calculus/derivative-of-exponential-function/).

For functions that follow the general form $f(x) = a^x$, the **derivative of an exponential function** is the **product of the exponential function** $a^x$ and $\ln{a}$, that is:
$$
f'(x) = a^x \, \ln{a} \ , \quad  a > 0
$$
___
## Derivatives between functions

When there are functions in a **sum** and **subtraction** between itself, or **multiplication** by a constant, the **derivatives of the result can be calculated using the old functions**.
### Multiplication by a constant



___
# References

- #### [[James Stewart - Calculus_ Early transcendentals-Brooks Cole (2016) (1).pdf|James Stewart's "Calculus - Early  Transcendentals"]] — Section 3.1, p. 171.

- #### [Derivative of Exponential Function](https://www.cuemath.com/calculus/derivative-of-exponential-function/) — Cuemath — Blog post.

