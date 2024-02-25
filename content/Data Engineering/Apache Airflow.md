# What is it?

*Apache Airflow* is an open-source tool for **developing**, **scheduling**, and **orchestrating** pipelines and workflows. It uses **Python** files for defining the tasks to run.
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

> *If you want to see more components and other **core concepts**, like T**asks and Object Storage**, visit [Airflow's official documentation](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/index.html).*
___
# Creating pipelines in Airflow

To create a pipeline in Airflow, one would use [[DAGs]] for [[Data Orchestration]] and **Operators** for actual *data wrangling*.
___
## DAG

Airflow uses [[DAGs]] to represent pipelines. It defines them **using Python code**. The **DAG** code is **responsible only for orchestrating a pipeline**. 
>*For best practices, if using other python code for the pipeline, **abstract all operations into modules** and then just **import them into the DAG** code. This way the DAG file is left only for **scheduling**.*

Take for example a **basic DAG structure**:

```python
from datetime import datetime, timedelta
from airflow import DAG

default_args = {
    "owner": "lucas",
    "start_date": datetime(2024, 2, 25),
    "retries": 5,
    "retry_delay": timedelta(minutes=1),
}

with DAG(
    dag_id="my_dag_id",
    schedule_interval="@daily",
    default_args=default_args,
) as dag:
	# Do something here
    pass
```
____
## Operators

An **Operator** is a template for a predefined task. There are <u>A LOT</u> of *operators* available and built-in. Some popular ones are: 

___
- ##### BashOperator
>*Executes a bash terminal command.*

- ##### PythonOperator
>*Runs a given python function that may do whatever you see fit.*

- ##### EmailOperator
>*Sends as email.*
___
