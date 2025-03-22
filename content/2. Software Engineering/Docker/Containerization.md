# What is it?

*Containerization* is the act of creating a **self-contained box** for your application, ensuring it **runs consistently regardless of the environment** it's used in. In other words, it's putting an existing application in [[Containers]].
___
# Creating containers with Docker

[[Docker]] is the most popular *containerization* tool available. [[Docker]] uses a **code abstraction** called [[Dockerfile]] to build *images*. The *image* is the *snapshot* of the [[Containers|container]].

Given an example [[Dockerfile]], which uses a *slimmed Debian image*, with [[Python]] already installed, copies all code to a new directory and runs it:

```dockerfile
FROM python:3.11-slim

WORKDIR /NewFolder

COPY requirements.txt .
COPY main.py /main.py

RUN pip install -r requirements.txt

CMD ["python", "main.py"]
```

To **build the *image***, one only needs to run in a terminal:

```bash
docker build -t <container_name> ./
```

And after the *image* is built, you can **spin up** the [[Containers|container]]:

```bash
docker run <container_name>
```
___