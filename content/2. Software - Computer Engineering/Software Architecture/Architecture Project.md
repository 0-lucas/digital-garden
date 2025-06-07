# What is it?

In [[Software Engineering]], the [[Software Architecture]] should be thought of as soon as the project is created and communicated. The *software architect* should be able to **transform the software [[Requirements|requirements]]** into an abstraction that will **solve the business problems** and be **technically viable to developers**.
___
# The step-by-step

An *architecture project* typically conforms to the following steps:

- ##### Database modelling
	All other pieces of software are **developed based on the database and it's characteristics**. In this case, the external entity the software will interact the most is its database, which should be **modeled accordingly to the project [[Requirements|requirements]]**.
	![[database arc.png]]

- ##### Abstraction of the system
	*Archetypes* are identified, which are **generic models of each element of the system**. These are **abstractions of the system** and should be defined accordingly.
	![[uml arc.png]]

- ##### Architecture Patterns
	The [[Architecture Patterns|architecture pattern]] to be **implemented on the system** should be defined, depending on its **context and business logic**. After deciding the [[Architecture Patterns|architecture pattern]], the **system can be implemented**.

___