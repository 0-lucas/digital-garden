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