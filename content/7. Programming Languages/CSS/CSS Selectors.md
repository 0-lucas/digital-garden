*CSS selectors* are used to **specify [[HTML]] elements to apply [[CSS]] styles**. There are a **multitude of different selection methods** offered by [[CSS]].
___
## Universal selector

The **universal selector** `*` applies the *style* to all elements, **regardless of the tags**, present in the document. This may be used to set the **default properties of a web page**, for example **fonts** and **background colors**.

```css
* {
	text-align: center;
	color: red;
}
```
___
## Element selector

The **element selector** `<element>` applies the *style* only to the **elements with corresponding *tags***. For example, if specified the `<p>` element, all `<p>` elements **will be stylized**.

```css
p {
	text-align: center;
	color: red;
}
```
___
## Id selector

The **id selector** `#id-name` applies the *style* only to the **element with corresponding *id***. Because in [[HTML]] each element **has his own unique id**, the style will be **applied only to a specific element**.

```html
<head>
	<style>
		#element-id {
			text-align: center;
			color: red;
		}
	</style>
</head>

<body>
	<h1 id="element-id">
		Hello World!
	</h1>
</body>
```
___
## Class selector

The **class selector** `.class` applies the *style* only to the **elements from a specific class**. You can **define the class as an attribute of the element**, and specify it from [[CSS]].

```html
<head>
	<style>
		.right-align {
			text-align: right;
		}

		.violet {
			color:violet;
		}
	</style>
</head>

<body>
	<!-- You can combine multiple classes simultaneously -->
	<h1 class="right-align violet">
		Hello World!
	</h1>
</body>
```