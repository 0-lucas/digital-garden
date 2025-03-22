# What is it?

The *Law of Large Numbers* is a important **[[Limits|limit]] theorem** in [[Statistics]] and [[Probability]], which creates the base for **assuming characteristics from a sample to the entire population**, along with the [[Central Limit Theorem]].

The basic idea behind the *law of large numbers* is that if you **repeat an experiment independently, after some number of times, the average of all results should be close to the expected value of said experiment**. In other words, if you collect **more samples**, you will have a **better estimate**.

>[!tip] Averaging values to get better accuracy
> In general, one **can't just measure a process once** and determine that the measured value is a good estimate. Commonly, statisticians **measure a process a repeated number of times** and **average all values** to get said estimate, which is **less sensitive to uncontrolled variance** of the first case.

Some assumptions are made before applying the *law of large numbers*:
 - ##### Variables must be *i.i.d.* - independent and identically distributed.
 - ##### [[Variance]] should be finite.
___
# Weak law of large of numbers

The *weak law of large numbers* states that the **mean of the sample will converge in probability to the expected value** of its respective probability distribution, **as the number of samples goes to infinity**.

This can be mathematically translated to:
$$
\lim_{n\to\infty} P(|\overline{X}_n - \mu| < \epsilon) = 1
$$
Which, in turn, could be interpreted as the **probability that the difference between the mean and expected value is less than a small error**, is equal to $1$, which is **almost certain**.

>[!caution] Convergence of probability is not equal to convergence of values
>Even though the probability converged to be **almost certain**, there's still a infinitesimally small chance of the **sample mean not being equal to the population mean**.

___
# Strong law of large numbers

The *strong law of large numbers* states that as the **number of samples goes to infinity**, **the sample mean almost surely equals to the population mean**.

This can be mathematically translated to:
$$
P(\lim_{n \to \infty} \overline{X}_n = \mu) = 1
$$This can be interpreted as the **probability of the sample and population means equaling is $1$ as the number of samples tends to infinity**. In other words, the **sample mean with infinite samples is *almost certainly* equal to the population mean**.

This is a much **stronger statement** compared to the *weak law*. This is because it states the **actual expected values** instead of the **error stated in the *weak law***.