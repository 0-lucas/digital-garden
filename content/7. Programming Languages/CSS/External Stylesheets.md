# What is it?
*External Stylesheets* are standalone [[CSS]] files which are used in [[Web Development]] to style [[HTML]] web pages.
___
# Adding external stylesheets

To **add style to a simple web page**, one must use the `<link>` [[Tags|HTML tag]], defining the `rel` *attribute* as `"stylesheet"` and the `href` *attribute* as the **path to the stylesheet**. 

It's a **good practice** to place the `<link>` [[Tags|tag]] inside the `<head>` [[Tags|tag]], so the the style is **loaded before the elements they style**. If the contrary, the user may see a flash of **unstyled content**.

For example, given a *stylesheet* named *`style.css`*, we can **change the color** and **add an underline** to the [[Tags|tag]] `h1`, and **change the font** of the [[Tags|tag]] `p`. 

```css
h1 {
	color: green;
	text-decoration: underline;
}

p {
	font-size: 25px;
	font-family: 'Trebuchet MS', sans-serif;
}
```

Given that the *CSS* file is placed on the same folder as the [[HTML]] file, you can refer to it like inside the *.html* like this:

```html
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style.css">
		<title>My window</title>
	</head>

	<body>
		<h1>Hello World!</h1>
		<p>I hate web development.</p>
	</body>

</html>
```

![[css hello world.png]]
