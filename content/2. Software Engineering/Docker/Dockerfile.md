# What is it?

*Dockerfiles* are responsible for determining the steps taken to create [[Docker]] images.

For example, take a *dockerfile* for [[Containerization|containerize]] a [[Python]] program:

```dockerfile
FROM python:3.11-slim

WORKDIR /NewFolder

COPY requirements.txt .
COPY main.py /main.py

RUN pip install -r requirements.txt

CMD ["python", "main.py"]
```