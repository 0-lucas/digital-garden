# What is it?
*CSS* stands for *Cascading Styling Sheets*, and in [[Web Development]], it's used with [[HTML]] to **create the design and visual style of web pages**. While [[HTML]] defines the bare bones structure, *CSS* adds all **visual cues**, **layout**, and **animations**.

>[!tip] Creating *CSS* files
>We can work with *CSS* **inside** [[HTML]] files, defining the structure along with the style, or **create an [[External Stylesheets]]** to use as **reference** in a *.html* file.
>
>To **create an standalone *CSS* file**, create a **text file** ending with the ***.css* extension**.

___
# CSS syntax

A *CSS* rule consists of a *[[CSS Selectors|selector]]* and a *declaration block*. The *[[CSS Selectors|selector]]* points to the **HTML element to be styled**, while the **declaration block contains style declarations** separated by **semicolons**.

Each *declaration* contains a [[CSS Properties|CSS property]] name and a value, separated by a **colon**, for example:

```css
/*
You can use multiple selectors and sub-selectors. More in-depth later.
You can also commment using /* and */

selector1, selector2, selector3 sub-selector {
	property-name: property-value;
	second-property: second_value;
}
```

>[!tip] *CSS* selectors
>There are various different *selectors* in *CSS*, each with its intricacies. Check them out on the note **[[CSS Selectors]]**.

___
# Adding CSS to a web page

There are three different ways of adding *stylesheets* using *CSS*:

- ##### External Stylesheets
	[[External Stylesheets]] are by far the best way to manage *CSS* in a web page, which can **avoid a lot of refactoring** when using it **with multiple web pages** and a lot of styling **between different elements**.

- ##### Internal Styles
	[[Internal Stylesheets]] are used to define the styling within the [[HTML]] document and **will only work with its own document**.

- ##### Inline Styles
	*Inline styling* is bound to a **unique *element***, the one which defines the styling. Instead of using a [[Tags|tag]] inside the *element*, *inline styles* uses the *style attribute* to define [[CSS Properties]].

>[!tip] *CSS* hierarchy with multiple styles
>If multiple styles are **specified to the same element**, the one with **highest *specificity*** will be applied.

___
