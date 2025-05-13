# What is it?

*XCOM* stands for **cross-communication**. They are used in [[Airflow]] to **exchange data between tasks** with the objective of sharing the same state between different tasks. They are similar to [[Airflow Variables]], but much more flexible.
___
# How it works?

**XCOMs** lives in the Airflow's *Meta Database*, being **pushed** from the first task, stored in the *Meta Database*, and then **pulled** for the second task. They **aren't made to hold large amounts of data**, so no passing DataFrames using them. Also, all values **should be JSON serializable**.

![[XCOM diagram.png]]
___
# Explicitly declaring XCOMs

Passing data around is not hard, but it needs to comply with the **Airflow standard for XCOMs**. You need to call a *push method* for sending the XCOM data from a task, **specifying its parameters,** and them a *pull method* for retrieving the same data, using the **parameters you just defined**.

The **XCOM** is unique dependent on the **XCOM key ID**, **DAG ID**, **task ID**, and **logical date**.

```python
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime


def return_task(**context):
    my_value = "returning_value"
    context["task_instance"].xcom_push(
        key="my_xcom_key", value=my_value)  # Pushing XCOM


def dependent_task(**context):
    my_value = context["task_instance"].xcom_pull(
        task_ids="pushing_task", key="my_xcom_key")
    print(f"I got the value: {my_value}!")


with DAG(
    dag_id="xcom_dag",
    start_date=datetime(2024, 2, 27),
    schedule_interval="@once"
) as dag:
    pushing_task = PythonOperator(
        task_id="pushing", python_callable=return_task)

    pulling_task = PythonOperator(
        task_id="pulling", python_callable=dependent_task)

    pushing_task >> pulling_task
```

This DAG would result in the following XCOM:
![[Explicit XCOM.png]]
___
# Implicitly XCOMs with TaskFlow API

To pass data around tasks, one could use **return statements** and **dependency management**. If you create a task that is **expecting a parameter**, and another **returning the same parameter**, it's possible to implement this behavior inside the **tasks dependencies**.

One could easily build it using the **TaskFlow API**:
```python
from airflow.decorators import task, dag
from datetime import datetime


@dag(
    "xcom_dag", start_date=datetime(2024, 2, 25), schedule_interval=None, catchup=False
)
def xcom_dag():
    @task
    def return_task():
        return "retuning_value"

    @task
    def dependent_task(value):
        print(f"I got the value: {value}!")

    dependent_task(return_task())
```

And because the XCOM is implicit, it creates a default *key value* in the *Web Server's* XCOMs tab:

![[xcom list.png]]
> *However, while it's possible to pass data to another Operator that isn't a PythonOperator, combining the traditional approach and **TaskFlow** may prove counter-productive.
___
