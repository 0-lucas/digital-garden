# What is it?

*Neo4j* is a *ACID* compliant, *schema-less* *[[Graphs|graph-based]]* database, which stores data as *nodes*, *relationships*, and *properties* instead of table and documents.  It's mainly used for social networks, geospatial data, and use-cases where the **how data is related is more important** than the data value itself.

![[neo4j.png]]

___
# Modelling

Regardless of the data inputted in *Neo4j*, it **will always follow** a [[Graphs|graph]] structure, which can be represented as:

- ##### Nodes
	Represent the **entities of a domain** *(discrete objects)*. **Labels are used to group** *(or classify)* different ***nodes* to the same set**, and each *node* can **contain multiple labels**. A *node* can also contain a set of *key-value* properties.

```cypher
CREATE (:FirstLabel:SecondLabel {first: 'My value', second: 123})
```

- ##### Relationships
	Describes the **connection between two nodes**, or the same node to itself. It's **normally the main data** component of a *graph-based* database. This are also known as *edges*.

___
# Querying

*Neo4j* uses [[Cypher]] as it's **query language**. [[SQL]] is to relational databases as [[Cypher]] is to *Neo4j* and other *graph-oriented* databases.