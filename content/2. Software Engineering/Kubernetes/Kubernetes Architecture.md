[[Kubernetes]] is a **distributed system**, having components distributed across different servers. Let's start by the smallest unit and increasing in size.

![[kubernetes architecture.png]]
___
# Pods

A *Pod* is the **smallest deployable** unit in [[Kubernetes]], containing one or more [[Containers]], but the common practice is to **run a single container per Pod**. They are the **single instance of an application**. 

They contain the specifications to run the container. It **wraps around a single container,** so [[Kubernetes]] **manages the Pod*** rather than the container directly. You can create a Pod explicitly using *YAML*, but the common practice is to use *Deployments*.
### Deployments

[[Kubernetes]] aims to **maintain the desired state of an application at all times**, and a *Deployment* describes this **desired state using YAML**. 

Using *Deployment*, one can determine the **Pod state**, **number of replicas**, **Pod configuration**, specification for **scaling the application** and more.

When creating the *Deployment*, it will also **create the pods for the specified containers**. Once created the *Deployment* configuration, it's redundant to create an explicit configuration for the Pods.

> *Check the official [Kubernetes documentation for Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and the [documentation for Pods](https://kubernetes.io/docs/concepts/workloads/pods/).*
___
# Services

The *Services API* is a method for **exposing** one or more Pods **over a network**. It creates a **stable endpoint for communication** with and between Pods, along with policies about **how to make them accessible**.

Because Pods are **short-lived and have unique IP addresses**, one could not just directly communicate one Pod with another. A Pod may die and others would not know it. That's where the *Service API* enters and **abstracts these network layers** for Pods to be able to fully communicate with themselves.

> *Check the official [Kubernetes documentation for Services](https://kubernetes.io/docs/concepts/services-networking/service/).*
___
# Nodes
[[Kubernetes]] runs a application by placing its containers into Pods, then **running them** on a *Node*. A *Node* contains all **necessary services to effectively run** Pods. It's components are:

- ##### kubelet
The *kubelet* runs on each node, ensuring the **containers inside of Pods** are **running healthy** and managing its resources, also it's the **primary communication agent** of a *Node* with the *API server*.

- ##### kube-proxy
*kube-proxy* is a **network proxy that runs on each node**, handling low-level networking rules and manages traffic sent to a *Service*. *kube-proxy* also manages communication with pods to occur **both inside and outside** a *Cluster*.

- ##### Container Runtime
Is the software responsible for **effectively running the containers**, for example, *[[Docker]] Engine.*

> *Check the official [Kubernetes documentation for Nodes](https://kubernetes.io/docs/concepts/architecture/nodes/).*

All nodes are then, managed by the *Control Plane*.
___
# Control Plane

![[control plane.png]]

The *Control Plane* manages all worker Nodes, being responsible for **container orchestration** and the **desired state** of the *Cluster*. It's componentes are:

- ##### kube-apiserver
Is the central hub of the *Cluster*, handling the all communication between other **Cluster components** and **end users**, and controlling all processes between the *Control Plane* and the Nodes.

- ##### etcd
The *etcd* is the **key-value, distributed database**, that stores information about running the *Cluster*, like configurations, states and metadata of other [[Kubernetes]] objects.

- ##### kube-scheduler
The *kube-scheduler* is responsible for **scheduling the Pods** inside each Node. It chooses the **best Node for a Pod to be ran**, depending on it's requirements and needed resources. It's what effectively **scales the application**.

> *Check the official [Kubernetes documentation for the Control Plane components](https://kubernetes.io/docs/concepts/overview/components/).*
___
# Cluster

Any complete system deployed on *Kubernetes* is called **Cluster**. The *Cluster* groups everything talked about above, having the **Control Plane** and **Nodes** as it's main components. It operates based on its defined **desired state**, that define the **available resources**, **container images**, and which **applications should run**.

![[cluster.png]]