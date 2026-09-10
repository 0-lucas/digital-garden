# What is it?

An *embedding* model maps objects such as **texts**, **images**, **audio**, or **documents** to points in a [[Vector Spaces|vector space]], which then are able to be processed by [[Artificial Neural Networks|neural networks]] and other [[Deep Learning]] models.

For **text data**, while *word embedding* are the most common form, it's also possible to *embed* **sentences**, **paragraphs** and whole **documents**. These are popular choices for [[Retrieval-Augmented Generation]] — *RAG* techniques.
___
# How does it work?

Words with **similar contextual significance stay close to each other** in the [[Vector Spaces|vector space]], which can be visualized when reducing the space to a two-dimensional plane *(commonly using [[PCA]])*:

![[Embedding-1789046046338.webp]]

One of the foundational examples of *embedding [[Algorithms|algorithms]]* is *Word2Vec*.