# What is it?

*Tensors* are the basis of every [[Deep Learning]] framework, like [[PyTorch]] and [[TensorFlow]], being used to **store almost everything**, like input data, weights, biases, etc.
*Tensors* in other fields, like [[Mathematics]], are objects with properties, similar to the *object* paradigm used in [[Object-Oriented Programming]].

In [[Deep Learning]], however, *tensors* can be interpreted as **n-dimensional arrays with the assumption that they can run on a GPU**.
This is important because, although you can also created multi-dimensional arrays with [[NumPy]], it can't be processed on the *GPU*.

![[tensors.png]]