# What is it?

*DAGs* are an acronym for **Directed Acyclic Graph**, which is a representation of a series of activities. It can be considered the **mathematical abstraction of a data pipeline**.
___
# Deciphering DAGs

The *DAG* acronym stands for:

- #### Directed
The activities described must be defined **in sequence of each other**. So if multiple activities are required, they must **follow a logical sequence**, having a defined *upstream* and *downstream* activity.

- #### Acyclic
**You can't have loops and cycles in a DAG**. No task can create data which references itself. A *DAG* needs to have a very well-defined **beginning** and **ending**.

- #### Graph
A graph is a **finite** set of **nodes**, with **lines** connecting them. All tasks should be laid out in a **concise representation**, with **processes occurring at set points** and clear **relationships between tasks**.

![[DAG example.png]]