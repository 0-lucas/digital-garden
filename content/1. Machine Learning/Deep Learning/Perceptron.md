# What is it?

A *perceptron* is the simplest [[Artificial Neural Networks|neural network unit]], based on the *threshold logic unit (TLU)*. Similar to the biological neuron, there are **signals flowing from the input to the output**. These *signals* interact with three properties: the *bias*, the *weight* and the [[Activation Functions|activation function]].

![[perceptron.png]]

Given, $f$ as the [[Activation Functions|activation function]], $w$ as the *weight* $x, y$ as the *input and output*, and $b$ as the bias, the *perceptron* can be mathematically represented as:

$$
y_{i} = f(w_ix_i + b_i) 
$$

Normally, we can **represent the set of inputs as [[Vectors]]**, and the product of $w * b$ becomes a *dot product*. We can go a step further and write it as a sum:
$$
y_{m}= \delta\left( \sum ^{m}_{i=0}w_{i}x_{i} \right)
$$
___
## The importance of bias

Represented by $b$, the *bias* can increase or decrease the input in the *activation function*, which can displace the whole function, based on the *bias* value. The below image **reflects the displacement** of a [[Sigmoid Function]] for different *bias* values.

![[bias displacement.png]]
___
# Implementing with PyTorch

One can easily implement a *perceptron* algorithm using [[PyTorch]]:

```python
import torch
from torch import nn

class Perceptron(nn.Module):
	def __init__(self, input_dimension):
		super(Perceptron, self).__init__()
		self.fcl = nn.Linear(input_dimension, 1)
		
	def forward(self, x):
		# Using a sigmoid activation function
		return torch.sigmoid(self.fcl(x)).squeeze()
```