[[JavaScript]] is the go-to language for adding logic and programming into a website. You have two main options to add the code itself to the [[HTML]] file, an *internal* or *external* file.
___
# JavaScript internally in HTML

Similar to [[Internal Stylesheets]], we can define our functions directly inside the [[HTML]] file. This can be done with the `<script>` [[Tags|tag]]. For example, we can create an **alert popup every time the page is loaded** with the `alert()` method:

```html
<!DOCTYPE html>
<html lang="en">

	<head>
		<title>JS intro</title>
	</head>

	<body>
		<script>alert("This is a popup")</script>
	</body>

</html>
```

There are two options to where place the `<script>` [[Tags|tag]], in the `<body>` or `<head>` sections.

When placed in the `<head>` section, the script will be ran **before the *DOM* is fully loaded**, which can **increase the user's loading time perception**. Normally, one would use this option only **if the script loads global variables or writes content** to the [[HTML]] file itself.

The **best practice**, however, is to **place the script in the `<body>` section**. This way, the **script runs only after the *DOM* is loaded**, which can improve the speed to load the web page. It also works better when the scripts add *event listeners* or **interact with page layout and elements**.script runs only after the *DOM* is loaded.
___
# External JavaScript files

To add an *external [[JavaScript]] file* to an [[HTML]] file, one must **use the `src` parameter** within the already known `<script>` element. External files work best when it should be **applied to various [[HTML]] files simultaneously**, or are too large too be inserted in [[HTML]] in a concise way.

```html
<!-- HTML file -->
<!DOCTYPE html>
<html lang="en">

	<head>
		<title>JS intro</title>
		<script src="app.js"></script>
	</head>
	
</html>
```

```javascript
// JavaScript file
alert("This is a popup");
```