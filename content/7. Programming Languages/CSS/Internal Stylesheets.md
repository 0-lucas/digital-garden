# What is it?
*Internal Stylesheets* are [[CSS]] information defined within a [[HTML]] document, used in [[Web Development]] to **style web pages**.

The **style definiton** is enclosed in `<style>` [[Tags|tags]] and can only be **applied to the its own document**. This tag must be inside the `<head>` section for *[[HTML]] validation*, even though it will work if it's not.
___
# Defining an internal stylesheet

We must **first** define a [[HTML]] file which **will house the stylesheet**, before defining the style itself.
Given for example, the following [[HTML]] file **without any styling**:

```html
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>My window</title>
	</head>

	<body>
		<h1>Hello World!</h1>
		<p>I hate web development.</p>
	</body>

</html>
```

We can insert the *stylesheet* in the `<head>` *element* using a `<style>` [[Tags|tag]] and defining the *stylesheet* inside of it:

```html
<head>
	<meta charset="UTF-8">
	<style>
		h1 {
			color: green;
			text-decoration: underline;
		}

		p {
			font-size: 25px;
			font-family: "Trebuchet MS", sans-serif;
		}
	</style>
	<title>My window</title>
</head>
```

![[css hello world.png]]
