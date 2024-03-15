# What is it?

[[Kubernetes]] main efforts is to maintain a given **desired state**, which is defined by a *YAML* file that describes the **state itself**, and **not the operations used** to get to this state. Mostly all components in [[Kubernetes Architecture]] try to **maintain this given state**.
___
# How does it work?

[[Kubernetes]] consistently watches how it's working, creating the **observed state**. When the **observed state** differs from the *desired state,* for example, a Pod crashed, all components work together to bring up another Pod, and then reconciling the **observed state** to be equal as the *desired one*.

The *desired state* can be defined and described using the **Deployment** object, expressing what the **system should look and behave like**. Here's an example of a **Deployment** object, that defined **3 replicas** of a application at all times:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-container
          image: my-image
```
___