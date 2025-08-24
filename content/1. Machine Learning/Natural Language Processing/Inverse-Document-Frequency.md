# What is it?

Also called *Term-Frequency Inverse-Document-Frequency*, or *TF-IDF*, for short, is a way of **representing sentences** in [[Vectors]], widely used in [[Natural Language Processing]] and [[Large Language Models]] for [[Deep Learning]] purposes.
___
# How does it work?

*TF-IDF* is another way of applying the standard *[[Term-Frequency]] vectorization*. In the latter, **common words are given higher weights** and end up being more important to the model.
*TF-IDF* solves this problem by **assigning higher weights to rare words**, using a [[Logarithms|log function]] to calculate the weight of any given *token*, or word.

Given $IDF(w)$ as the *IDF* weight of a *token* $w$, $N$ being the **total number of data observations**, and $N_w$ being the **number of observations with $w$ present**:

$$
IDF(w) = \log_{2}{\frac{N}{N_w}}
$$

Now, to calculate *TF-IDF*, one just multiply the known [[Term-Frequency|TF]] value of a *token* by its *IDF*:

$$
\text{TF-IDF}(w) = \text{TF} * \text{IDF}
$$

Now, one can use the resulting value as **the weight of the corresponding *token***.
___
# Applying in Python

One can also apply this in [[Python]], using the [[Machine Learning]] framework [[scikit-learn]]:

```python
from sklearn.feature_extraction.text import TfidfVectorizer

data = [
    'This is the first document.',
    "This document is the second document.",
    'And this is the third one.',
    'Is this the first document?',
]

vectorizer = TfidfVectorizer()

X = vectorizer.fit_transform(data)
print(f"Vector Features: {vectorizer.get_feature_names_out()} \n")

print(f"Vectorized data: \n {X.toarray()}")
```

![[tf idf.png]]