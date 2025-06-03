# What is it?

In [[Software Testing]], *integration tests* are made when [[Unit Testing]] is done and units are **ready to be integrated into the system**. *Integration testing* only happens **when all units are have passed** through [[Unit Testing]].

The objective is to **check any errors or faults between different units** when they **interact among themselves in the integration**.
___
# Methods for integration tests

- ##### Big-bang integration
	The simplest approach: all modules are **put together** and then **tested at once**. Typically used for **smaller projects** with lower degrees of interdependence.

- ##### Bottom-up integration
	Modules at **lower lever are tested with higher modules** until everything is tested, *e.g. interface tested with driver or databases*.

- ##### Top-down integration
	**Simulate the behavior of lower level modules** that are not yet integrated, while **testing high level modules**, and then as they are integrated, goes down a level.

- ##### Mixed integration
	Follows both *bottom-up* and *top-down* methods. Lower and higher modules are tested in parallel, until they meet in the middle.