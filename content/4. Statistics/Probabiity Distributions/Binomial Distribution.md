# What is it?

The *binomial probability distribution* is a [[Statistical Distribution]] user in [[Statistics]] for [[Statistical Modelling|modelling]] events that have *discrete binomial variables*, which can **only take two values**, positive or negative.

When applied to a series of events, **with two possible outcomes**, it describes the [[Probability]] of getting a certain **number of successes in a series of trials**. 

For example, what is the probability of getting 4 heads in 10 coin tosses? We can easily **plot the binomial distribution** using [[SciPy]] and [[Python]]:

```python
import numpy as np
import seaborn as sns
from scipy.stats import binom

number_tosses = 10
probability_success = 0.5  # Assuming a fair coin

x_values = np.arange(0, n + 1)

probabilities = binom.pmf(x_values, n, p)

# Plot the binomial distribution
sns.barplot(y=probabilities, x=x_values)
plt.title("Binomial distribution for 10 coin tosses");
```

![[binomial plot.png]]
___
# Bernoulli trials and its assumptions

Each coin toss in the past example can be referred as a *Bernoulli trial*. In reality, each event of a *binomial distribution* is a *Bernoulli trial*, which in itself **makes some assumptions** to properly model the events.

- ##### There must be only two possible outcomes. If the **success rate is $p$, then the failure rate is $1 - p$.
- ##### Each outcome must have a fixed probability of occurring.
- ##### Each trial is completely independent of all others.

>[!tip] Modelling non-independent events
>*Binomial distribution* experiments are made **with replacement** so each event is **independent from one another**. For **modelling non-independent events**, one can use the [[Hypergeometric distribution]].

___
# Calculating the probability

Given the **number of successes** $x$, **number of trials** $n$, **probability of success** $p$, and **probability of failure** $q$, one could use the [[Probability Mass Function]] of the *binomial distribution* to calculate the distribution of a experiment:
$$
P(x) = \frac{n!}{(n - x)!x!}p^x q^{n-x}
$$

![[binomial forumla.png]]

Because the **average always tend to $p$**, the mean of the *binomial probability distribution* is $\overline{x} = np$, and [[Variance]] is $\sigma ^ 2 = npq$.