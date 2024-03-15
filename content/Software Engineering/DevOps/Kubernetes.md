# What is it?

*Kubernetes*, often abbreviated as *K8*, is a **open-source** orchestration tool for managing [[Docker]] containers, workloads and services, allowing for easy **scalability**, **self-healing**, **resource allocation**, and **easy CI/CD implementation**.

It's written in *GO*, being widely used in [[DevOps]] and [[Data Engineering]]. Nowadays, entire companies and services are being maintained using *Kubernetes*.

![[kubernetes warning.png]]
___
# Kubernetes infrastructure

Kubernetes is a **distributed system**, having componentes distributed across different servers. Let's start by the smallest unit and increasing in size.
## Pods

A *Pod* is the **smallest deployable** unit in Kubernetes, containing one or more [[Containers]], but the common practice is to **run a single container per Pod**. They are the **single instance of a application**. 

They contain the specifications to run the container. It **wraps around a single container,** so Kubernetes **manages the Pod*** rather than the container directly. You can create a Pod explicitly using *YAML*, but the common practice is to use *Deployments*.

> *Check the official [Kubernetes documentation for Pods](https://kubernetes.io/docs/concepts/workloads/pods/).*
___
### Deployments

Kubernetes aims to **maintain the desired state of a application at all times**, and a *Deployment* describes this **desired state using YAML**. 

Using *Deployment*, one can determine the **Pod state**, **number of replicas**, **Pod configuration**, specification for **scaling the application** and more.

When creating the *Deployment*, it will also **create the pods for the specified containers**. Once created the *Deployment* configuration, it's redundant to create a explicit configuration for the Pods.
___


# Cluster

Any complete system deployed on *Kubernetes* is called **Cluster**.



