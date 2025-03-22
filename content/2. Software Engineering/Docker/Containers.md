# What is it?

A *container* is an **isolated environment to run applications**, containing everything the code needs in order to run, **down to the operating system**, totally **isolated from any external factors or other containers**.

One might think a *container* is the same as a *virtual machine*. They are indeed, very similar, but *containers* are **incredibly faster**. Instead of *virtualizing* hardware, as *virtual machines* does, **a *container* virtualizes only the software**. 
If multiple containers are needed, they can **run on a single [[Kernel]]**. In other words, *containers* don't replicate the hardware, but all the **operating system and dependencies** needed.

This creates a **standardized unit** that can run on any system with a **container runtime engine**, like [[Docker]].

![[container vs vm.png]]
___
# Creating containers

*Containers* are most commonly associated with [[Docker]], which is the **most popular** *containerization* tool. However, there're a lot of open-source alternatives, like [*podman*](https://podman.io/).

##### To check out how to create *containers* with [[Docker]], see the related note, [[Containerization]].