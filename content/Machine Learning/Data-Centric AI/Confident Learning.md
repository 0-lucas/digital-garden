# What is it?

[[Confident Learning|Confident Learning]], **CL**, for short, is a framework of methods of [[Data-Centric AI|Data-Centric AI]] to systematically find inaccurate data in a dataset for a [[Classification]] and [[Supervised Learning]] problem. *It also can be used for LLMs, Neural Networks and traditional Machine Learning.* It searches and find label errors in the dataset and then clean the noisy labels, providing better training data for your actual model.
___
## The presumption of class-conditional noise

**Confident Learning assumes class-conditional label noise**. Basically, given a class in a classification problem, after the model was trained you are evaluating the performance, you don't need really to inspect the data itself, because the **_class-conditional_ noise depends on the class itself**, not the data. So if a model always misses **fox**, mistaking it for **dog**, it doesn't really matter how the fox looks, because the nature of the data of this two classes *(foxes and dogs does, in fact, look similar)* will imply in a **class-conditional noise**.

Another great example is the issue about distinguishing arachnids. The overall body, shape, and appearance of spiders, ticks, and scorpions are very similar.
___
![[labelerrors.png]]
> *Examples guessed as tick by ImageNet, but are different insects. Courtesy of labelerrors.com.*
___
### Some methods to solve the above problem:
##### In a Model-Centric traditional method, you could:
- Change and optimize the [[Loss Function]];
- Reweight classes based on importance;
- Use another model to predict the error of the main model.
##### But in DCAI, you could use [[Confident Learning]] to: 
- Changing the training data itself;
- Finding label errors and ranking them;
- Estimate the joint distribution of observed noisy labels and true labels;
- Training a new model without noisy labels, on a cleaner dataset.
___
# How does it work?
## Generate the joint distribution

1. Before applying CL to any model, it should already be trained, preferably using cross-validation to produce ***out-of-sample*** predicted probabilities.

2. It's established a **threshold** *(which is the model self-confidence for a class, calculated by the **average predicted probability of said class**)* for how much the model is confident of a prediction for each possible class.

3. When a data point predicted probability is greater than the per-class threshold, it's counted as belonging to the threshold's class. This will be done to all data points.

4. This count generates a matrix that will have a *(N_class, N_class)* shape, like the one below, **to the left**.

5. Estimate the **joint distribution** on a matrix containing True Labels and Noisy Labels, like the below, **to the right** *(which is just the percentage of the left one)*.

| C<sub>true as T, noisy as N</sub> | T, dog | T, fox | T, cow |  | Q <sub>T, N</sub> | T, dog | T, fox | T, cow |
| :--: | :--: | :--: | :--: | ---- | :--: | :--: | :--: | :--: |
| N, **dog** | 100 | 40 | 20 |  | N, **dog** | 0.25 | 0.1 | 0.05 |
| N, **fox** | 56 | 60 | 0 |  | N, **fox** | 0.14 | 0.15 | 0 |
| N,** cow** | 32 | 12 | 80 |  | N, **cow** | 0.08 | 0.03 | 0.2 |
## Find label errors

Simply put, using the matrix above as an example:

1. **Count** the number of estimated label errors in the dataset. This would be **the sum** of **the off-diagonal** values. *Now you can estimate the percentage of label errors for the entire dataset.*

1.  Multiply the matrix by **100** and divide by a scalar representing the **total number of samples** (for example, there are 10 images of *foxes* labeled as *dogs*).

2. **Rank** all data points true-labeled as fox by their **predicted probability** to pertaining to dog.

3. Mark the top 10 images with **the largest probability** of belonging to dog as **noisy data**, *and most probably, **discard them.***

Now, the dataset it's **cleaner** than at the beginning, and will probably **wield better results**. By using *cross-validation*, it's possible to apply this method to the **entire dataset** with a *folding strategy* of your liking. That way, you can apply Confident Learning for the entire data.
___
## Code example

All the work mentioned above can *-obviously-* be done with a custom algorithm built from scratch, but there's also the [cleanlab](https://pypi.org/project/cleanlab/) python package, which supports any classifier based on scikit-learn/ PyTorch/ TensorFlow. cleanlab automate the process in just one simple line of code:

``` python
label_issues_index = cl.filter.find_label_issues(data, labels)

df.drop(label_issues_index)  # Clean dataset.
```
___
# Reference

- ##### [Confident Learning: Estimating Uncertainty in Dataset Labels](https://arxiv.org/abs/1911.00068) — Cornell University / Journal of Artificial Intelligence Research — Paper — 2019.

- ##### [Learning From Noisy Examples](https://homepages.math.uic.edu/~lreyzin/papers/angluin88b.pdf) - Yale University / NASA Ames Research Center — Paper — 1988.

- ##### [CleanLab Documentation](https://docs.cleanlab.ai/stable/index.html)

- ##### [Label Errors and Confident Learning](https://dcai.csail.mit.edu/2023/label-errors/) — MIT — Introduction to Data-Centric AI — Course.