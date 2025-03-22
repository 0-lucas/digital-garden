# Using the ref keyword

In [[C-Sharp]], it's possible to ***pass arguments as reference***, instead of ***values***.

- The **traditional way** to pass an argument to a method parameter would result in a **copy of the argument** to be used **inside the method.** This is passing the **parameter as a value** *(which will create a copy of it)*.

```csharp
int number = 5;

static int SquareNumber(int number) => number * number;

Console.WriteLine(SquareNumber(number)); // Returns 25.
Console.WriteLine(number); // Returns 5, variable not changed.
```

- To pass a **parameter as reference**, use the ***ref keyword*** to **declare** the method and when **calling** it. This will reference the *memory location* of the *variable*. All changes made inside the code block **will persist after calling the method.**

```csharp
int number = 5;

static void SquareNumber(ref int number)
{
    number = number * number;
    // Note: there're no return statements.
}

SquareNumber(ref number); // The change will be made directly to number.

Console.WriteLine(number); // Returns 25, change made to the variable.
```
___
# Using the out keyword

Similar to *ref*, **out** also passes a *variable by reference*. Using **out**, the variable doesn't need to be initialized **before the calling** the method, but must **be before exiting it**. Using out, it's possible to **return multiple values** from a single method.

```csharp
int number = 5;
int numberSquared; // Not initialized.

static void SquareNumber(int number, out int squared)
{
    squared = number * number;  // Assigning value to variable.
}

SquareNumber(number, out numberSquared);

Console.WriteLine(numberSquared); // Returns 25
```
___
