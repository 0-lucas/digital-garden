# What is it?

Given the *"recent"* rise in social media and data generation, [[SQL]] databases **were not fast and flexible enough** to apply to these huge [[Big Data]] systems. Because of it, the *NoSQL* databases were created to **aggregate all the not relational databases** *(which does not follow [[SQL]] principles)* which were created to solve the problem.
Nowadays, *NoSQL* is used mainly for decentralized and [[Microservices]] application, i.e. [[Big Data]], social media and *IoT*.
___
## Differences between SQL databases

The main differences from *NoSQL* to [[SQL]] databases, is how the data is stored. Instead of complying to fixed table structures, *NoSQL* **allows flexible schema**, even for *schema-less*. This will vary from each chosen database and implementation.

The **method that data is retrieved also differs**. The standard [[SQL]] query language allows to query every [[SQL]] database. However, for *NoSQL*, **each database has its own language of API to retrieve the data**. 
The average transaction in *NoSQL* can be simple, **containing little processing and aggregation**, but mostly **retrieves large volumes of data**.

Also, instead of applying the *ACID* principles, *NoSQL* adapt these principles to a **distributed environment** by using the [[CAP Theorem]].

![[nosql vs sql.png]]

> [!note]  What about *ACID* compliance?
> Instead of applying the *ACID* principles, *NoSQL* adapt these principles to a **distributed environment** by using the [[CAP Theorem]]. **Not all databases follow at a risk**, but most try to implement the [[CAP Theorem]].

___
# Types of NoSQL

However, due to to the **extensive flexibility** of a *NoSQL* system, which does **not conform to a rigid structure**, multiple categories of databases were created:

- ##### Key Value
The *key-value* model is the simplest type. The data can be accessed using the *key*, which will return the *value* that is assigned to it. The *value* itself can be a string, *JSON*, *XML*, or any other object.
e.g. *DynamoDB* and *Redis*, used for web and cache.

- ##### Document-oriented
The *document-oriented* approach is similar to the *key-value* model to retrieve the data, but stores only *XML*, *JSON* and related types. Each document can **contain its own schema and nests**, without definition, which makes this a *schema-free* database.
e.g. [[MongoDB]] and *CouchDB*, used for content management systems.

- ##### Column-oriented
More similar to relational databases, *column-based* databases stores data in a **multi-dimensional *key-value*** store, which is **persistent**, **distributed**, **sorted** and **sparse** *(values for certain dimensions may not be populated)*.
e.g. *Cassandra*, [[Hadoop|HBase]], *Bigtable*, used for business intelligence.

- ##### Graph-oriented
This category is solely dedicated to store [[Graphs|graphs]] and other *graph-oriented* [[Data Structures|data structures]]. These databases are optimized to traverse through [[Graphs|graphs]], **without increasing the complexity and resource cost as the database grows larger**.
e.g. *Neo4J* and *OrientDB*, used for social media, logistics and recommendation engines.
