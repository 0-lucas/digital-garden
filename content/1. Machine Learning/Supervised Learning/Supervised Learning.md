# What is it?

In [[Machine Learning]], *supervised learning* refers to **all algorithms which learn patterns** with data which **provides input / output samples**. The algorithm is trained on this data, using the *input (often called **X**, or features)* to learn the corresponding correct *output (often called label for [[Classification]] problems, or **Y**)*.
These algorithms focuses on [[Inference and Prediction|prediction]] problems, either for [[Classification]] or [[Regression]].

![[supervised learning.png]]

> [!tip] Garbage in, garbage out
> *Supervised learning* biggest weakness is how **clean and correct is the data**. Because the algorithm **fully ingests whatever pattern it finds in the data**, *misleading samples* can cause the **algorithm to not perform accurately**. In these cases, hardly an algorithm-based change will solve the issue, once the **training data in flawed to begin with**.
> When that happens, check for [[Data-Centric AI]] solutions.