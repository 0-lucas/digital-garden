# What is it?

One of the most popular [[Mathematics|mathematical]] applications for [[Differentiation]] is *optimization*, which translates to the **most optimal way** of doing something. Commonly, these problems can be reduced to finding the *maximum and minimum values* of a function.

The concept of finding the *maximum and minimum* of a function is widely used in [[Machine Learning]] and [[Gradient Descent]] methods, to minimize the error of a given algorithm.
___
# Minimum and maximum values

The *absolute maximum/ minimum value* of a function, also called *global maximum/ minimum value*, is the **highest possible value of a function over its entire domain**. So the function cannot output any other value higher/ lower than it. These points are called the **extreme values of a function**.

But there is also the *local maximum/ minimum value*, which is the highest/ lowest value but only **within a specific region or interval**. So one may mistake a *local maximum* and treat as the *global*, but it may not be true.

Some functions **may or not present extreme values**, when its values can go **infinitely lower or higher**. A function also need to be **continuous to have an extreme value**. For example, the function $f(x) = x^3$ has **no local or global** extreme values.

![[minimum and maximum x3.png]]
 ___
## The Fermat Theorem

[*Pierre Fermat*](https://pt.wikipedia.org/wiki/Pierre_de_Fermat) was a French mathematician that founded *analytic geometry* with *[Descartes](https://pt.wikipedia.org/wiki/René_Descartes)*, and part of his importance is for **finding tangents to curves** and **extreme values of functions** <u>before the invention of limits and derivative</u>.

*Fermat* proposed a theorem, called the *Fermat's Theorem*, which states:

>*If $f$ has a local maximum or minimum at $c$, and if $f'(c)$ exists, then $f'(c) = 0$.*

Even though **there are exceptions**, for example, $f(x) = x^3$, *Fermat's Theorem* suggests that we **could start searching** these values at $f'(c) = 0$, or where $f'(c)$ **does not exist**.

These values at these points are called *critical numbers*.
___
### The Closed Interval method

We can then use these **critical numbers** to find the **local extreme values** of a *continuous function* on a closed interval $[a, \, b]$.

- ##### Find the values of $f$ at the critical numbers of $f$ in $(a, \, b)$.
- ##### Find the values of $f$ at the *endpoints* of the interval.
- ##### The largest/ smallest $y$ value found is the local extreme value.

To **test the this value**, one can use the [[First Derivative Test]].
___
# Inflection points

The *point of inflection*, or *inflection point*, describe the **change in movement** from a function $f$, where the **concavity switches**. The point where the concavity of a function goes from **one direction to another** is called the *inflection point*.

![[inflection point.png]]

All *inflection points* have a second derivative of 0, if it exists, but **not all points with a second derivative of 0 are inflection points**.
___
### Finding the inflection point

The **process to find the inflection point** is very similar to finding the **extreme values** of a function. Given a **continuous** function $f$ : 

- ##### Find the second derivative of $f$, $f''(x)$.

- ##### Solve it for $0$ and for x-values where $f''(x)$ is undefined, similar to the critical numbers.

- ##### Plug the value back to the original formula $f$ and get the y-values.

You can also **test this values** similar to the [[First Derivative Test]], but use the **second derivative**, $f''(x)$ for testing. 

With **multiple inflection points** you can plot a *sign graph* and determine the intervals at which the **concavity of a function would be up or down**. Given $f(x) = 3x^5 - 20x^3$ , the plot and sign graph would be:

![[sign graph plot.png]]

![[sign graph.png]]