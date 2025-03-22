# What is it?

In [[JavaScript]], the *object* data type is used to **store key-value collections** and complex data structures. It can be thought as an **entity having *state* and *behavior*, which are implemented as *properties* and *methods***.
___
# Defining objects

To create an *object*, one can create it using the *object literal*, using the `let` or `const` keyword, or with an *object* constructor.

## Using the Object literal

We can create *objects* using the *{ } literal*. This is a fast way to create any object, but not as flexible as other options.

```javascript
let myself = {
	name: "Lucas",
	favoriteBand: "Radiohead",
	Greet: function () {
		console.log(`Hi! I am ${myself.name}.`)

	}
};

myself.Greet(); // Prints "Hi! I am Lucas."
```
___
## Creating instances of Object

Using the `Object` keyword, one can create a *object* directly. This is not a so fast way of declaring *objects*.

```javascript
let myself = new Object();
myself.name = "Lucas";
myself.favoriteBand = "Radiohead";
myself.Greet = function() {
	console.log(`Hi! I am ${myself.name}.`);
};

myself.Greet();
```
___
## Using a object constructor

Using a *object constructor* is a more concise way of creating *objects*, once it can be applied to **multiple different instances** without too much repeated code.

```javascript
function CreatePerson(name, favoriteBand){
	this.name = name;
	this.favoriteBand = favoriteBand;
	this.Greet = function() {
		console.log(`Hi! I am ${this.name}.`);
	};
}

let me = new CreatePerson("Lucas", "Radiohead");
me.Greet();
```

However, one would be better using a [[Object-Oriented Programming|class]] constructor, which would serve the same purpose, but more flexible.

```javascript
class CreatePerson {
	constructor(name, favoriteBand) {
		this.name = name;
		this.favoriteBand = favoriteBand;
		this.Greet = function () {
			console.log(`Hi! I am ${this.name}.`);
		};
	}
}

let me = new CreatePerson("Lucas", "Radiohead");
me.Greet();
```
