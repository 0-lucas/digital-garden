# What is it?

The *Markov Decision Process (MDP)*  is a [[Mathematics|mathematical]] decision-making model widely used in [[Probability]] and [[Reinforcement Learning]] to determine the **best policy** of an *agent*, which is the **strategy that maximizes rewards over time**. *MDP* assumes a [[Learning Environments#Types of environments|stochastic]] process that satisfies the [[Markov Property]].

![[MDP.png]]

The *Markov Process* is normally used in [[Learning Environments#Types of environments|discrete action spaces]], with which its **finite set of actions and spaces**, categorizes a [[Markov Chain]].
___
# How does it work?

An *agent* in a *Markov Decision Process* always tries to **find the optimal *policy*** $\pi^*$, which is the the **rule for choosing the actions**, maximizing rewards over time by using *value functions* to **estimate the expected reward**.
However, *discounts factors* are added into the equation to **prevent an infinite policy**, which can also weigh some rewards, making it more valuable than others, or  
