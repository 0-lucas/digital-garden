# What is it?

*Apache Airflow* is an open-source tool for **developing**, **scheduling**, and **orchestrating** pipelines and workflows widely used in [[Data Engineering]] and [[Data Orchestration]]. It uses [[Python]] files as an **abstraction of the pipeline itself**, through [[DAGs]].

> *For consulting, check the book [[Data Pipelines with Airflow.pdf|Data Pipeline with Airflow]], from Bas Harenslak and Julian de Ruiter*.
___
# Components
Let's see the components which, **put together**, form the **Airflow environment**.

![[Airflow architecture.png]]
___
- #### Scheduler
The *scheduler* is the component that **alerts when tasks need to run**, **manages tasks failures**, **notifications**, and other pipelines intricacies. Basically, is the logical *"back-end"* of Airflow.

- #### Web server
The *Web server* basically provides the **UI component** of Airflow. The user can have a visual representation of the *scheduler* and check the tasks' status.

- #### Meta Database
The *Meta Database* stores all information you see on Airflow, storing all **records from pipelines executions**, **users and roles**, and **connections** outside of Airflow. Basically, it connects **all other components with itself**.

- #### Executor
The *Executor* gets the tasks from the scheduler and actually **runs it**. It handles all **tasks executions**, reporting back to the scheduler the **state of the task**.

> *If you want to see more components and other **core concepts**, like **Tasks and Object Storage**, visit [Airflow's official documentation](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/index.html).*
___

Check some other links regarding Airflow:

- [[Data Orchestration]]
- [[Creating pipelines in Airflow]]
- [[Scheduling in Airflow]]
- [[XCOMs]]
- [[Airflow Connections]]
- [[Airflow Variables]]