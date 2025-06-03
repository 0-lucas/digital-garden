# What is it?

In [[Software Engineering]], most [[Process Models|process models]] are better used when the **software and its context is correspondent to the model** itself. [[Process Models|Process models]] itself are **very hard to be universal** and to work for every possible software and business.

However, *RUP*, which stands for *Rational Unified Process*, was created with this exact thought in mind: **to be a universal, flexible and hybrid [[Process Models|process model]]**. 
___
# RUP phases

*RUP* has four main phases, which are:

- ### Inception
	This phase gathers all information about **user's [[Requirements|requirements]], **potential risks**, and **contribution of the project to the business**. In other words, it's about understanding **what is being developed and for what**.
	
- ### Elaboration
	This phase analyzes the [[Requirements|requirements]] to **design the system architecture and features**, also planning how it's going to **work in the insides.** In other words, it's about understanding **how it will be developed**.

- ### Construction
	This phase is about **creating a prototype of the product**. Most development will be done here, **building the product in ascending iterations** until most of the product is done.

- ### Transition
	After the product is operational and ready to be used, it should be **deployed to the user**, being **strategically introduced to its end user**.

![[rup iteration.png]]
___
# Workflows in RUP

**For each** of the four phases demonstrated above, the *RUP model* also presents **nine main workflows**, which are **elements of the iteration of each phase**. Each *workflow* can be **more or less used** depending on which of the main phase is the project at. But most commonly, it follows the following pattern:

![[rup workflows.png]]

- ### Business modelling
	Studies the business which the product will be used, **determining the business needs.**

- ### Requirements
	Creates the **functionality requirements** and the **interface for interaction with the user**.

- ### Analysis and design
	Focuses on **detailing the [[Requirements|requirements]]** for better elaboration of the system.

- ### Implementation
	Actual development work: **coding and [[Unit Testing]].

- ### Testing
	Removes the [[Unit Testing|unit tests]] of the past workflow, and adds **integration tests** which focus on **connecting different modules** and *program units*.

- ### Deployment
	Development of **production-ready versions** of the system.

- ### Configuration and change management
	Management of **multiple developers working together**, tracking build versions, and **enforcement of development rules and policies**.

- ### Project management
	Planning of the project as a whole, applying a **framework for managing software projects**, like [[Agile]].

- ### Environment
	Support the developer with **infrastructure and tools** for development. Basically, [[DevOps]].


