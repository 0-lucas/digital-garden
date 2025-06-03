# What is it?

In [[Software Engineering]], the *waterfall model* is part of the **prescriptive** [[Process Models]], being categorized as a **sequential**, **plan-driven** process where all **actions are planned before starting the project** itself.

In principle, each stage should be **documented thoroughly** and **approved before the following stage starts**. However, because **[[Requirements|requirements]] are frozen** in a early stage, this creates a **inflexible architecture**, and **software that does not attend the user's needs**. 

![[waterfall.png]]
___
# Stages / step-by-step
Each stage of the *waterfall model* reflects the activities performed:

 - ### Requirements analysis and definition
	It's **business usage**, **problems to be solved**, **services**, **constraints** and **goals** are established with the team of developers and potential users, **defining each [[Requirements|requirements]] in detail** to serve as a **system specification**.

- ### System and software design
	The *architecture* and *software* design allocate each requirement as a **hardware issue** or **software issue**. Then, abstract the entire system with its relationships.

- ### Implementation and unit testing
	*Software* is actually developed as *program units*, where [[Unit Testing]] verifies if **each unit meets its specification** based on its requirements.

- ### Integration and system testing
	Each *program unit* is integrated to the complete system and tested, to **ensure that requirements have been met**. Then, the *software* is delivered to the customer.

- ### Operation and maintenance
	After the system is deployed, this stage concerns to **correct errors not discovered in past stages**, and adding new functionality as **new requirements are discovered**.

>[!tip] Do not content with this method!
> If a developer really wants to follow a *waterfall-based model*, it doesn't need to be the **traditional waterfall model**. Other models were created to fix some problems, like the [[V Model]] or [[Spiral Model]].
