# What is it?

The *resilient distributed dataset*, also known as *RDD*, is [[Spark]]'s core **abstraction for working with data**. All work in [[Spark]] is done by either **creating**, **transforming**, or **calling actions** on *RDDs*, with the objective of computing a result, while [[Spark]] handle all [[Distributed Computing|workload distribution]] under the hood.

The *RDD* is simply a **immutable distributed collection of objects**. These are split into **multiple partitions**, which could be computed on **different nodes** of a *cluster*. A *RDD* can be any [[Python]], [[Java]], or [[Scala]] object, including **custom user-defined classes**. In short, a *RDD* can house a **collection of anything** inside of it.