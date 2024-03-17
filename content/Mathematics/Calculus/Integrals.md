# What is it?

An *Integral* is the main [[Mathematics|mathematical]] concept in [[Integration]], having the same relationship as [[Derivatives]] being the operation of [[Differentiation]]. *Integrals* are heavily used in *analytical geometry* and [[Machine Learning]] for metrics like *ROC-AUC*.

An *integral* is the reverse of a [[Derivatives|derivative]]. In fact, the process of finding the *anti-derivative* of a function is called [[Integration]]. In other words, if you have a derivative $f'(x)$, the original function $f(x)$ is our *anti-derivative*, also called *integrals*.

You can interpret an *integral* as a **continuous sum of infinitesimally small numbers**, used to calculate **curved areas and volumes**. An *integral* is the representation of the **area under a curve of a function**. For example, an *integral* could be used to calculate the area $A(x)$ below:

![[integral area.png]]
___
# Notation and Definition

The exact definition of a *integral* is the **function of the area bounded by a curve, the x-axis and two points that limit the area**. 

So, given a function $f$ **defined** for $a \leq x \leq b$, we can **divide the interval** $[a, b]$ into **infinite** $n$ subintervals of width $\Delta x = (b - a)/n$. Taking $x{_i}{^*}$ as **any sample point** in the subintervals, **the *definite integral* of $f$ from $a$ to $b$ is**:
$$
\int_{a}^{b} f(x)dx = \lim _{n \to \infty} \sum _{i = 1}^{n}f(x{_i}{^*})\Delta x
$$
The symbol $\int$ was introduced by [*Leibniz*](https://pt.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz), and is called the *integral sign*. The elongated *S* representes the **limit of sums**. In the notation above, $f(x)$ is called the *integrand*, which is the **function to integrate**. The points $a$ and $b$ are the *limits of integration*. $dx$ implies that the **independent variable** which will be *"sliced"* is $x$.


