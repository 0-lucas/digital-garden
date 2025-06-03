# What is it?

*SLOC*, which stands for *Source Lines of Code*, is a [[Software Measurement]] technique used to **estimate the number of lines of code** that a software will have once it has been implemented.
Because a software **commonly reach thousands of lines**, some prefixes can be attached so that it refers to the **right order of magnitude**:

- ##### KSLOC
	**Thousands of lines** - 1000 SLOCs.
- ##### MSLOC
	**Millions of lines** - 1000000 SLOCs.
- ##### GSLOC
	**Billions of lines** - 1000000000 SLOCs.

___
# Estimating KSLOC

A way to estimate *KSLOC* of a project, is to unite the development team, and discuss the requirements and implementation. Then, each member will estimate the number of *KSLOC* necessary to implement the system.

Most probably, the team will not reach a unique value. Because of that, each member should give a **pessimistic value**, an **optimistic value**, and the **expected value** of *KSLOC*.

- ##### Pessimistic KSLOC
	Number of *KSLOC* expected for **not favorable** conditions.

- ##### Expected KSLOC
	Number of *KSLOC* expected for **normal** conditions.

- ##### Optimistic KSLOC
	Number of *KSLOC* expected for **favorable** conditions.

Then, the **average of each category** for all team members is plugged into the formula:

$$
\text{KSLOC} = \frac{4 * \text{KSLOC}_{expected} + \text{KSLOC}_{optimistic} + \text{KSLOC}_{pessimistic}}{6}
$$