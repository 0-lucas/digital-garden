*Cypher* is the used query language for *[[Graphs|graph]]-oriented* [[NoSQL]] databases, like [[Neo4j]].

___
# How does it work?

A simple [[SQL]] query which returns all values of a table, like:

```SQL
SELECT * FROM table
```

could be *"translated"* into *Cypher*, which would return all *nodes*:

```cypher
MATCH (n) RETURN n
```

In *Cypher*, the *n* letter is a variable which **can be given any name**. In the example above, all *nodes* are **selected and stored** in *n* in the command *MATCH (n)*. They are then returned as the query output in the command *RETURN n*.

![[sql vs cypher.png]]

___
# Examples

Below, are some examples using *Cypher* for common operations in any database:

- ##### Creating a isolated node
```cypher
CREATE (node)
```

- ##### Creating a node inside a label
```cypher
CREATE (node: label)
```
