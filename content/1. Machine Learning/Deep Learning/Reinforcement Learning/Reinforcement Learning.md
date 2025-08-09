# What is it?

*Reinforcement learning* is a type of [[Deep Learning]] model which uses [[Artificial Neural Networks]] to **train itself** using the **reaction of the environment to its actions**. The agent **can be previously trained** and user *reinforcement learning* only as a way to **continuously improve its performance**.

![[Pasted image 20250809084449.png]]
___
# How does it work?

For **any action that the agent performs**, the environment will **react positively or negatively**, and if this action receives a *positive reward*, the **model will repeat the same action whenever possible**.
However, if it receives a **negative reward** *(also called punishment)*, the model will **avoid repeating the same action**.

>[!tip] Types of environments
>Environments where *agents* take action, can **differ in its characteristics**. Depending on the the **type of environment**, even a well trained *agent* can perform poorly if not well adjusted to it.
>See more in [[Learning Environments]].

