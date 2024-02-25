# What is it?

*XCOM* stands for **cross-communication**. They are used in [[Apache Airflow]] to **exchange data between tasks** with the objective of sharing the same state between different tasks.
___
# How it works?

**XCOMs** lives in the Airflow's *Meta Database*, being **pushed** from the first task, stored in the *Meta Database*, and then **pulled** for the second task. They **aren't made to hold large amounts of data**, so no passing DataFrames using them. Also, all values **should be JSON serializable**.

![[XCOM diagram.png]]
___
# Using TaskFlow API

To pass data around tasks, one could use **return statements** and **dependency management**. If you create a task that is **expecting a parameter**, and another **returning the same parameter**, it's possible to implement this behavior inside the **tasks dependencies**.

One could easily build it using the **TaskFlow API**:
```python
from airflow import DAG
from airflow.decorators import task
from datetime import datetime

with DAG("xcom_dag", start_date=datetime(2024,2,25), schedule_interval=None, catchup=False):

    @task
    def return_task():
        return "retuning_value"

    @task
    def dependent_task(value):
        print(f"I got the value: {value}!")

    dependent_task(return_task())
```

Resulting in the following graph:
![[xcom_graph.png]]

And because the XCOM is implicit, it creates a default *key value* in the *Web Server's* XCOMs tab:

![[xcom list.png]]
___
