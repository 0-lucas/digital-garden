# What is it?

In [[Deep Learning]], and especially in [[Reinforcement Learning]] models, the *type of environment* which these models are **either trained or act in**, can be **decisive to its performance**. Models trained in past data of a environment that is **rapidly changing** will **never be able to perform well in it**, once that characteristics of this environment is not the same from the training data.
This is also **one of the reason** of the [[Distribution Shift]] problem in **deployed models**.

To better understand how to handle problems with *unpredictable and dynamic environments*, and perform well in them, **one must adjust its strategy to it**.
___
# Types of environments

Environments can be differ its characteristics in seven distinct dimensions: *observability*, *determinism*, *episodicity*, *action space*, *agent-environment interaction*, 

- ##### Observability
	- ###### Fully observable
		Agent has **complete knowledge** of the environment current state *(classic MDP situation)*.
	- ###### Partially observable
		Agent has **incomplete or noisy observations** of the environment . 

- ##### Determinism
	- ###### Deterministic
		Given a set of state and action, the next state and reward are **fixed and predictable**.
	- ###### Stochastic
		The next state and reward are **[[Probability|probabilistic]] and not easily predictable**.

- ##### Episodicity
	- ###### Episodic
		The interaction can be broken into **set of episodes** with clear beginning and ending states. *e.g. phases in a video game*
	- ###### Continuous
		No clear episodes boundaries. Interactions **continues indefinitely with no clear separation** of episodes.

- ##### Action space
	- ###### Discrete
		Finite and countable set of actions. *e.g. grid navigation*
	- ###### Continuous
		Action and states are real-values. *e.g. controlling a drone's pitch, roll and yaw.*
	- ###### Hybrid
		Some parts and discrete and some are continuous. *e.g. autonomous driving*
