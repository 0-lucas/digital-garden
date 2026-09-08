# What is it?

The *transformer architecture* has become a synonym with [[Large Language Models]]. Most current popular models rely on this architecture, introduced in the 2017 paper [Attention Is All You Need](https://arxiv.org/abs/1706.03762). 

It consists of two main parts: the *encoder* and *decoder*.

- ##### Encoder
	The *encoder* is responsible by taking the input text and **transforming into vectors which capture the contextual information** of the input. This process can also be called [[Embedding]].

- ##### Decoder
	The *decoder* receives the **vectors from the *encoder*** and decode them to generate the output text.

Inside each, there is going to be the *self-attention mechanism*. It's responsible to **provide semantic and contextual meaning**, providing the **relationship of tokens and words** between each other. This is what makes the output **coherent**, striking as a conversation instead of a robot.

![[Transformers-1788868318043.webp]]