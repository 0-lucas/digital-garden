# What is it?

The *Bayes Theorem* is an important rule in [[Probability]] for calculating [[Conditional Probability|conditional probability]] of an event **given previous information about this event**. [*Thomas Bayes*](https://pt.wikipedia.org/wiki/Thomas_Bayes) described how to **update the [[Probability|probability]] of an hypothesis $P(H)$** , **given new evidence $P(E)$** about the same hypothesis, which can be written as: 

$$
P(H|E) = \frac{P(E|H) * P(H)}{P(E)}
$$

where:
- $P(H|E)$ = *posterior probability* - the probability of $H$ given the evidence $E$.
- $P(E|H)$ = *likelihood* - the probability of observing the **evidence $E$ given $H$ is true**.
- $P(H)$ = *prior probability* - **initial belief/ probability** of $H$ before seeing new evidence.
- $P(E)$ = *marginal probability* - the probability of $E$ under all possible hypothesis.
___
# Multiple evidences

One can also **update the probability of a hypothesis given multiple new evidences**. Given the exclusive events $H_{1}, H_{2},\dots,H_{m}$ are *disjoint* and $H_{1} \cup H_{2} \cup\dots\cup H_{m} = \Omega$ *(all outcomes in a [[Sample Space|sample space]])*, the [[Conditional Probability|conditional probability]] of $H_{i}$ given an **arbitrary event** *(or evidence)* $E$, can be written as:

$$
P(H_{i}|A) = \frac{P(E|H_{i}) * P(H_i)}{P(E|H_{1})P(H_{1}) + P(E|H_{2})P(H_{2})+\dots+P(E|H_{m})P(H_{m})}
$$

This is also the **traditional form** of the *Bayes' formula*. It combines the [[Law of Total Probability]] applied to the denominator $P(E)$ of the *single evidence form*. For shortcuts, one can use the highest $P(E|H_{i})$ to determine $P(H_{i}|E)$, even if it's not academically rigorous.