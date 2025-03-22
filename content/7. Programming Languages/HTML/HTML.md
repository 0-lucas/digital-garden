# What is it?

*HTML* stands for **Hyper Text Markup Language**, which is the standard **markup language** used in [[Web Development]]. It describes the **entire structure of a web page**, down to all present elements, while [[CSS]] defines the **visual style**. In other words, it describes ***what* is presented**, not **how**.

>[!tip] Creating *HTML* files
>To create a *HTML* file, one needs only to **create a text file** with the **.html** **extension**. This way, other software can recognize the text is, in fact, *HTML*.

While *HTML* is most commonly used to **create websites**, it can also be applied to  **different use-cases**, like **building custom e-mails** and **formatting text**. To achieve all that, *HTML* uses *tags* and to define *elements*

___
# Tags and elements

[[Tags]] are instructions that **define the structure** and **meaning** of an *element*, providing **semantic meaning** and **readability** to define different *elements*. 

*Elements* are the **result of interpreting** a [[Tags|tag]]. By writing [[Tags|tags]], we can **define *elements***, which the browser will show the structure to the user.

An *element* is defined by using an **opening [[Tags|tag]]**, the **closing [[Tags|tag]]** and the *element **content*** in between the [[Tags|tags]]. [[Tags]] are opened with `< >` and closed with `</ >`. An **arbitrary** example would be:

```html
<element_name> element_content </element_name>
```

>[!tip] Forget the closing tags with *void elements*
>There are some *elements* that don't have **closing tags** or any **content**. These are the *void elements*. They include **`<img>`**, **`<meta>`**, **`<link>`** and **`<input>`**.

___
# Creating a simple web page

A minimal template to create the structure of a web page using *HTML*:

```html
<!-- Specifying the browser interpreter that this code is HTML -->
<!DOCTYPE html> 
<html lang="en">

<!-- The head element define metadata, like the enconding and title -->
<head>
	<meta charset="UTF-8">
	<!-- This is the window upper title, in the browser tabs -->
	<title>My page title</title>
</head>

<!-- Everything the user sees is inside the body element-->
<body>
	<h1>Hello World!</h1>
	<p>This is a simple paragraph.</p>
</body>

</html>
```