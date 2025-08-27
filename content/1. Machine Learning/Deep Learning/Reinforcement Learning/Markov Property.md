# What is it?

In [[Probability]] and [[Reinforcement Learning]], the *Markov property* states that the [[Conditional Probability|conditional probability distribution]] of the **future state of a random process** depends only on its **present state**, and not on any past states.
In other words, the **future is independent from the past, given the present**. However, this **assumes** a [[Learning Environments#Types of environments|stochastic]] process.

The *Markov property* can be written as:

$$P(S_{t+1}|S_{t}) = P(S_{t+1}|S_{1},S_{2},\dots,S_{t})$$

Which equals the **probability of going to state $S_{t+1}$ given $S_{t}$**  and the **probability of going to state $S_{t+1}$ given all past states**. In short, the information of previous states does not contribute to predict the future state: only the present state.