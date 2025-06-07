# What is it?

A *thread* is a **unique sequence of instructions executed** by a [[Processes|process]]. A single [[Processes|process]] can spawn multiple *threads*, each to take care of a small piece of a *program*. Take a text editor for example:
- ##### Thread 1
	Monitors inputs like the keyboard and retrieves all typed text.
- ##### Thread 2
	Renders all visual elements, along with the typed text in the screen.

The [[Operational Systems|operational system]] handles *threads* and [[Processes|processes]] similarly in **processor time allocation**. However, **memory allocation is responsibility of the application**.

![[tjreads.png]]