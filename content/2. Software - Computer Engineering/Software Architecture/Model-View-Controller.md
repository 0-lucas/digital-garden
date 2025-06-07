# What is it?

*MVC* stands for *Model-View-Controller*, which is a [[Architecture Patterns|architecture pattern]] used for developing software that divides a program in **three connected elements**, the *model*, the *view* and the *controller*.
This way, the **front-end code is separated from the back-end**, allowing for efficient parallel development.

![[mvc example.png]]
___
# Models

The *model* is a *stateless* **representation of data and business logic**. It defines the **data structure in the database**, and **handles any interaction with data sources** and APIs.
The *model* also limits what data is allowed to be passed in by the [[HTTP]] request, exposing only the data used by the *view*.

___
# Controllers

The [[Controllers|Controller]] is a intermediary between the *model* and the *view*. It **receives requests from the *view***, **interprets it** and interact with the *model* to retrieve data necessary. Once it has processed the data, it instructs the *view* to **update itself accordingly with the processed data**.

___
# Views

The *view* houses the user interface, **controlling all visual aspects of the application**. The *view* captures **user interaction and input**, but all complex logic and processing goes to the *controller*.
