A variable in [[JavaScript]] can be defined using **three different keywords**, `let`, `var` and `const`, or automatically, which is a bad practice.

To declare a variable automatically, one could just **assign a value to it**. Because [[JavaScript]] is loosely typed, it will automatically assign a data type to it.

![[js data types.png]]

```javascript
x = "Hello world!";

console.log(x);
```
___
#  Using var

The `var` keyword was the **original way of declaring variables** until 2015, where the other keywords were introduced.
It's **not a good practice** to use it nowadays, and should be only used when **developing for older browsers and applications**.

```javascript
var x = "This is a var variable. Bad practice!!";

console.log(x);
```
___
# Using let and const

For most use cases, `const` should be **always preferred**. It creates an **immutable variable**, meaning it's value cannot be changed after the definition.

```javascript
const x = "Constant";

x = 1; // Returns an TypeError.
```

For cases where the **variable will be reassigned**, we use the `let` keyword. A variable declared with the `let` keyword **can be reassigned normally**, to any other type.

```javascript
let x = "Mutable variable";

x = 1;

console.log(x);
```
___
# Declaring undefined variables

If declaring a variable using the `let` keyword **without assigning a value to it**, it creates an **undefined variable**, which is a variable that don't have any value.

>[!caution] Undefined vs null
>An *undefined variable* is not the same as a variable assigned to *null*. Each one returns different values.

For example:

```javascript
let x;

console.log(x); // Returns undefined.

x = null;

console.log(x); // Returns null.
```