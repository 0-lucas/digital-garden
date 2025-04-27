# What is it?

*MongoDB* is a *document-oriented* [[NoSQL]] database, used mainly for web systems, when **minimal access to the database is required** and where the the elements of a document are dynamic and changed frequently.
A collection of similar documents **don't necessarily need to share the same fields**, and a document can contain other documents inside of it *(implying a embedded model)*. This **greatly improves read performance**, once *joins* between documents are not needed, but **may worsen write performance**.

![[mongo db tempalte.png]]

___
# Modelling

*Document-oriented* databases are commonly modeled for performance, which can focus either on **read performance** or **write performance**.