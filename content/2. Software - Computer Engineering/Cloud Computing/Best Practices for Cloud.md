Some core practices can **save you time and effort** when working with [[Cloud Computing]], like **being prepared for errors** and **isolated components**.
___
# Failure prepared

Always develop an application and its implementation with **possible failures and critical errors in mind**. With an **automated recovery from any kind of failure**, the **application can stay online** no matter what happens.
Some examples are:

- ##### Automated backup and recovery
- ##### Critical processes executes at startup
- ##### Synchronization by queue
- ##### Configured and optimized images
- ##### Everything is stored in databases
___
# Isolated components

Components with **no dependencies with each other** can keep the **application running even if a component fails**. This way, the *cloud* can spin up isolated components to help i**n case of critical errors** or **load balancing**.
___
# Scaling and elasticity

Choose the right *scaling strategy*. Most likely, just go with **automated scaling**.

![[cloud scaling.png]]
___
# Load Balancing

With **parallel servers and components**, a great distribution of requests can be **shared different instances of a server**, providing fast access to users. **Goes hand in hand with scaling**.
___
# Dynamic and static data

Keeping data next to a component which will utilize it later can **reduce *latency***. Data which is created and process inside the cloud can be **easily and cheaply stored in the cloud**, while *static data* like audio and image files, are better **locally cached in the user machine**.