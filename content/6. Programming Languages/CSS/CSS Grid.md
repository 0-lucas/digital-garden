# What is it?

The *grid layout* is a [[CSS]] layout system which allows to divide a [[HTML]] web page in columns and rows. The elements are then **placed inside the spaces which were created using the grid**.

![[css grid.png]]

An alternative to using *[[CSS]] grid layouts* is to use [[CSS Flexbox]], which also allows for advanced positioning of web pages elements.
___
# Creating grid layouts

You can specify that the **wrapper element**, which can be the **body of the page or any other element**, and this **element will house the specified grid** to house every other sub-element within it.

```html
<html>
	<style>
		.wrapper {
			font: 40px Arial, serif;
			height: 500px;
			display: grid;
			grid-gap: 10px;
			background-color: beige;
			grid-template-areas:
				"header header header"
				". box1 box1"
				". box1 box1"
				" box2 box2 box2";
		}

		header {
			grid-area: header;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			background-color: lightgreen;
			text-align: center;
		}

		.one {
			grid-area: box1;
			background: pink;
			text-align: center;
			padding: 4em 0px 4em 0px;
		}

		.two {
			grid-area: box2;
			background: blue;
			text-align: center;
			padding: 4em 0px 4em 0px;
		}
	</style>
	<body class="wrapper">
		<header>
			<div>Header 1</div>
			<div>Header 2</div>
			<div>Header 3</div>
		</header>

		<div class="one">Box1</div>
		<div class="two">Box2</div>
	</body>
</html>
```

![[css grid 1.png]]