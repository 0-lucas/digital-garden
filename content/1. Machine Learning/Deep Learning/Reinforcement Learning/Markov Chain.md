# What is it?

In [[Probability]] and [[Reinforcement Learning]], a *Markov Chain* represents dynamic [[Learning Environments#Types of environments|stochastic]] **processes which changes with time**, which assumes the [[Markov Property]]. *Markov Chains* care about the **states** of an environment, instead of performing actions *(this is the job for the [[Markov Decision Process]]*.

![[markov chain.png]]

___
# How does it work?

Given a set of states $q_{1},q_{2},\dots,q_{n}$ , which the **transition between states are *non-deterministic*** and *stochastic*, the *probability of transitioning from current state $q_{i}$ to $q_{j}$* is:

$$
P(S_{t} = q_{j}|S_{t-1} = q_{j})
$$

Given also :
	a [[Vectors|vector]] of *probabilities of occurrence of each state* $\Gamma = \{\gamma_{1},\gamma_{2},\dots,\gamma_{n}\}$, where $\gamma_{i}=P(S_{o}=q_{i})$ and;
	 a [[Matrices|matrix]] of *transition probabilities (probabilities of change from a state to another)* $A = \{a_{ij}\},i=[1\dots n], j=[1\dots n]$ and $a_{ij}=P(S_{t}=q_{j}|S_{t-1}=q_{i})$;

One can model a *Markov Chain* similar to the one in the image above.
