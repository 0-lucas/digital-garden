# Creating pipelines in Airflow

To create a pipeline in [[Airflow]], one would use [[DAGs]] for [[Data Orchestration]] and **Operators** for actual *data wrangling*.

> *For consulting, check the book [[Data Pipelines with Airflow.pdf|Data Pipeline with Airflow]], from Bas Harenslak and Julian de Ruiter*.
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
    "retries": 2,
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

- ##### BashOperator
>*Executes a bash terminal command.*

- ##### PythonOperator
>*Runs a given python function that may do whatever you see fit.*

- ##### EmailOperator
>*Sends as email.*
___
