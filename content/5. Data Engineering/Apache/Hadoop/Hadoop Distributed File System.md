# What is it?

The *HDFS*, which stands for *[[Hadoop|Hadoop]] Distributed File System*, is a data storage technique designed to **handle massive amounts of data**, be **fault tolerable**, while still being able to **[[Scaling|scale]] with standard machines**.

![[hadoop file.png]]
___
# The write-once, read-many approach

*HDFS* is built around the idea that the file will be **written only once**, but will be **read multiple times**. This way, it focuses on **fastest retrieval time**, while **not allowing to edit existing data**. 
This happens because the *writer module* has a lock to ensure **data coherency**, which would be **prejudiced** if a large file was to be **read and written at the same time**.

>[!tip] How to *kinda* update records?
>  While is not possible to update a existing record in-place, one could just **delete the old record** and **insert an updated copy** at the **same place** the old record was.

___
# The architecture of HDFS

*HDFS* has two main components, which is normally divided into a single *Name Node* and multiple *Data Nodes*.

- ##### Data Node
	*Data Nodes* are the components which **store the actual data**, which, for large files, are divided into **sections of 128 MB**. *Data Nodes* also **exchange information between themselves** to ensure correct **data replication** and integrity. 

- ##### Name Node
	The *Name Node* stores **metadata about the registered files**, and **logs** of edited, uploaded and removed files. Basically, the *Name Node* tells application **where to find the desired data**.

## Reading files

**Reading files** is done by a *client node* by **asking the *Name Node*** where a file is stored, and **after retrieving** this information, the **data is read** from 
the selected *Data Nodes*.

![[reading hadoop.png]]
___
## Writing files

**Writing files** is a little more complicated. First, the *client node* asks for the *Name Node* to **create a new file**, which will then **register the file creation** and confirm the operation.
Then, the *client node* communicates with a **single** *Data Node*, which it will **replicate and distribute the file** into different *Data Nodes* by itself. At the end of the process, it **confirms the operation** to the *client node*.
At last, **the file is created**, and the *client node* informs the *Name Node* **where the created file is stored at**.

![[write haddop.png]]