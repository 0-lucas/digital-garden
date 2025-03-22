# What is it?

*Functions* are **code blocks designed to perform a task**. It is defined, and then executed when the code calls it.
___
# Function syntax

The main way to define functions is using the `function` keyword, followed by the **function's name**, and its **arguments**.

```javascript
function myFunction (myArg) {
	// Code goes here
	return myArg;
}
```

>[!tip] Anonymous functions
>A function can be also be *anonymous* if no name is passed.

___
## Arrow function

*Arrow functions* allows shorter function syntax. If needed, **you can omit the brackets**, `{ }`. The interpreter hands the `return` statement **behind the scenes**. You can rewrite the above function using *arrow syntax*:

```javascript
let myFunction = myArg => MyArg;

let myFunction = (Arg1, Arg2) => {
	// Do something with the arguments
	return Arg1, Arg2;
}
```