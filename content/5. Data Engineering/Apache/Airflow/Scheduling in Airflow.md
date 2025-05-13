Scheduling in [[Airflow]] can be a bit confusing at times. One should always keep in mind the intricacies of Airflow and work around it.

![[airflow schedule patric.png]]
___
# Scheduling Logic

Airflow will **schedule the first execution** of a DAG to run at the **first schedule interval after the start date** *(start + interval)*. Subsequent runs will continue executing at schedule intervals **following this first interval**.

At start date, the *DAGRun* is scheduled, but **the DAG is not executed**. It remains in this state until it reaches the time specified in **schedule interval**.  For example, if you define the *start date* as **Nov. 1, 2020** and *interval* as **@daily**, the DAG will have its first run at **Nov. 2, 2020**.

![[DAG Scheduling.png]]
___
# Scheduling using Cron

One could use *timedelta*, but should prefer *Cron expressions* for defining schedules. They can be specified in the *schedule_interval* parameters as *plain Cron expressions* or using an Airflow **@decorator** for easier to use syntax.

```python
from datetime import datetime, timedelta
from airflow import DAG

# Let's create a DAG that runs everyday at 6:00AM.
default_args = {
    "owner": "lucas",
    "depends_on_past": False,
    "start_date": datetime(2024, 2, 25),
}

with DAG(
    dag_id="scheduling_dag",
    schedule_interval="0 6 * * *", #6AM - Everyday
    default_args=default_args,
    catchup=False,
) as dag:
	pass
```

> *Always refer to a Cron generator site like [Crontab](https://crontab.cronhub.io) or [Cronguru](https://crontab.guru).*
___
# Depend on past

The DAG parameter *depends_on_past* is very important for dependency management.
If this is set as *True*, it keeps a DAG from **getting triggered** if the previous schedule **hasn't been succeeded**.