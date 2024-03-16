# What is it?

One of the most popular applications for [[Differentiation]] is *optimization*, which translates to the **most optimal way** of doing something. Commonly, these problems can be reduced to finding the *maximum and minimum values o*f a function.
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
### The Closed Interval Method

We can then use these **critical numbers** to find the **local extreme values** of a *continuous function* on a closed interval $[a, \, b]$.

- ##### Find the values of $f$ at the critical numbers of $f$ in $(a, \, b)$.
- ##### Find the values of $f$ at the *endpoints* of the interval.
- ##### The largest/ smallest $y$ value found is the local extreme value.

To **test the this value**, one can use the [[First Derivative Test]].

