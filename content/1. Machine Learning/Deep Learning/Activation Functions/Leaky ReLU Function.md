# What is it?

Used for [[Deep Learning]], as a variation of the [[ReLU Function|ReLU activation function]], the *leaky ReLU function* is suited for training of [[Artificial Neural Networks]] where the standard [[ReLU Function|ReLU function]] **has not yielded good results**, or has encountered the *dying ReLU* problem.
The *leaky ReLU* function is designed to overcome the *dying ReLU* problem and **avoid dead neurons in the learning process**, independent of the input value and resulting convergence.

![[leaky relu.png]]

The biggest feature of the *leaky ReLU*, is the **slope on the negative part** of the function. This slope ensures that **negative inputs are not mapped directly to zero**, but another negative continuous value.