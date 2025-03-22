# What is it?

*scikit-learn*, also called *sk-learn* is an open-source [[Python]] library for [[Machine Learning]], built on top of [[SciPy]] and [[NumPy]], currently maintained by volunteers.

It features various [[Classification]], [[Regression]] and [[Clustering]] algorithms, including [[SVMs]], [[Decision Trees]], [[Gradient Boosting]], and many others.
___
# Using scikit-learn

To start with *scikit-learn*, one must ensure that [[Python]] is installed. Then run the following command to **retrieve the library** from [[PyPi]]:

```python
pip install scikit-learn
```

[[Machine Learning]] [[Algorithms|algorithms]] and models that **returns predicted values** are called *estimators*, and the ones that **process data** are called *transformers*.
*scikit-learn* also makes available various tools for creating **end-to-end** models, like *pipelines*, and tools for **model evaluation** and **hyper-parameter optimization**.

Here is a simple [[Linear Regression]] model using *scikit-learn*:

```python
import matplotlib.pyplot as plt  
from sklearn.pipeline import make_pipeline  
from sklearn.linear_model import LinearRegression  
from sklearn.preprocessing import StandardScaler  
from sklearn.datasets import make_regression  
  
# Generate dummy data  
X, y = make_regression(n_features=1, noise=25, random_state=42)  
  
# Create a pipeline and fit the model  
model = make_pipeline(StandardScaler(), LinearRegression())  
model.fit(X, y)  
  
# Predicted values based on our data points  
predicted = model.predict(X)  
  
# Plot the data points and the fitted line  
plt.scatter(X[:, 0], y)  # Plot data points  
plt.plot(X[:, 0], predicted)  # Plot fitted line  
  
# Label the axes and add a title  
plt.xlabel("Feature 1")  
plt.ylabel("Target Variable")  
plt.title("Linear regression example")  
  
# Show the plot  
plt.show()
```

![[scikit learn example.png]]

___
# Official documentation

It's impossible to work with *scikit-learn*'s **API** without using its **documentation** as a guide. Refer to it by [clicking here](https://scikit-learn.org/stable/modules/classes.html).