# What is it?

*MongoDB* is a *document-oriented* [[NoSQL]] database, used mainly for web systems, when **minimal access to the database is required** and where the the elements of a document are dynamic and changed frequently.
A collection of similar documents **don't necessarily need to share the same fields**, and a document can contain other documents inside of it *(implying a embedded model)*. This **greatly improves read performance**, once *joins* between documents are not needed, but **may worsen write performance**.

![[mongo db tempalte.png]]

___
# Modelling

*Document-oriented* databases are commonly modeled for performance, which can focus either on **read performance** or **write performance**, respectively:

- ##### Embedded Modelling
	A **parent document contains all related documents within itself**, which removes the need of *join operations*, and improves **read performance by keeping related data together**. However, **data can be easily duplicated** and be limited by document size *(MongoDB sets a size limit of 16MB)*.

```json
{
	"id": 1,
	"name": "User X",
	"contact": {
		"phone": "(01) 23456-7890",
		"email": "userx@email.com"
	},
	"profile": {
		"level": 1,
		"group": "admin"
	} 
}
```

- ##### Normalized Modelling
	**Related documents are connected by using relational references**, similar to [[SQL]], which **reduces duplicated data** and may be a simpler approach to model large hierarchical data. Both **read** and **write performance can be faster** if only some fields of a document are **frequently read and updated**. However, **retrieving the full document is slower.**

```json
{ // Person 
	"id": 1,
	"name": "User X"
}
{ // Contact 
	"id": 1,
	"personID": 1,
	"phone": "(01) 23456-7890",
	"email": "userx@email.com"
}
{ // Profile
	"id": 1,
	"personID": 1,
	"level": 1,
	"group": "admin"
}
```

___
# Use case

*MongoDB* is used primarily for **content management and web systems** which are based on catalogs as data sources. Any system that **uses documents as a base data source** and would benefit from a flexible schema, is a great use-case for *MongoDB*.