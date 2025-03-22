# How does it work?

A [[HTML]] [[Document Object Model]], also called as *DOM*, houses every element of the [[HTML]] with respect to its order, and then [[JavaScript]] can **access *DOM* to retrieve and change dynamically each element**.
___
# The document object

The *document object* represents a **open [[HTML]] document in the browser**, and when any [[HTML]] is loaded, it creates the *document object*, which can be accessed with [[JavaScript]].

For example, using the *document object*, one can **access a given element** using its *id*, **retrieving its content**, and appending a new element to a page:

```html
<html>
	<body>
		<p id="p_tag">This is a paragraph.</p>
		<p class="p_class">This is another paragraph.</p>
		<button onclick="CreateHeader()">Create header</button>
		<script>
			// Append a header element with the text of both paragraphs

			// Retrieves the elements by Id and Class
			let firstParagraph = document.getElementById("p_tag");
			let secondParagraph =
				document.getElementsByClassName("p_class")[0];

			// Defines a function that appends a header on call
			function CreateHeader() {
			const heading = document.createElement("h1");

			heading.innerHTML = firstParagraph.textContent +
				secondParagraph.textContent;
				
			document.body.appendChild(heading);
			};
		</script>
	</body>
</html>
```