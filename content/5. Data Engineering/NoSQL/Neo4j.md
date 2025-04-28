# What is it?

*Neo4j* is a *ACID* compliant, *schema-less* *[[Graphs|graph-based]]* database, which stores data as *nodes*, *relationships*, and *properties* instead of table and documents.  It's mainly used for social networks, geospatial data, and use-cases where the **how data is related is more important** than the data value itself.

![[neo4j.png]]

___
# Modelling

Regardless of the data inputted in *Neo4j*, it **will always follow** a [[Graphs|graph]] structure, which represented as:

- ##### Nodes
	Represent the **entities of a domain** *(discrete objects)*. **Labels are used to group** different ***nodes* to the same set**, and each *node* can **contain multiple labels**.
