# Methods

C# methods are, basically, a *series of instructions* inside a code block that *only run when it's called. Methods, **differently from functions**, are **always associated with an object.**
All instructions of a given method will be inside its code block, and declared within a class or struct.

For a method to be declared, it needs an ***access modifier*** and ***return type***, and optionally can return or not a value, and pass or not parameters values:

![[Method Syntax.png]]
___
For example, let's declare a method that returns the area of a given circle:
```c#
static float AreaOfCircle (float Radius)
{
    float pi = 3.1415f;

    return pi * (Radius * Radius);
}

Console.WriteLine(AreaOfCircle(5.5f)); // Returns 95.03f
```
___
## Method Overloading

For C# to ***call*** a method, it searches for a combination of a **name**, **type**, and **number** of **parameters**. Because of this, it's possible for **different methods** to actually **share the same name**, if they *differ in its parameters*. 

> ***This characteristic is called Method Overloading**, most commonly used to create **different methods** that do the same task, but with different parameters*.

```csharp
class MyMethods
{
	public decimal AreaOfCircle(int Radius)  // Uses int.
	{
		decimal pi = 3.1415m;
		return pi * (Radius * Radius);
	}

	public decimal AreaOfCircle(float Radius)  // Uses float.
	{
		decimal pi = 3.1415m;
		return pi * Convert.ToDecimal(Radius * Radius);
	}
		
}
```
___
## Optional Parameters and Named Arguments

It's possible to create **optional parameters**, that will have **default values** in its declaration. It's not needed to pass an *argument* to said *parameter* when calling the method, as it'll **use its default value.**

To pass arguments that are not in order, it's possible to use **Named Arguments**. This way, it doesn't **matter the order** in which you pass the arguments, as long as all of them are passed.

```csharp
static int CalculateAnnualWage(
int monthlyWage, int numberOfMonthsWorked,int annualBonus = 0
) 
	{
		return monthlyWage * numberOfMonthsWorked + annualBonus;
	}

int annualWage = CalculateAnnualWage(
	numberOfMonthsWorked: 12, monthlyWage:3500, annualBonus: 1000);
	// Note that the order is different from the declaration.

Console.WriteLine(annualWage); // Returns 43000
```
___
## Expression-bodied Methods

Using ***Expression-bodied Syntax*** to declare a method which will return a value from a simple task can be much more **concise**. Basically, we **lose the *curly brackets*** and **replace the return statement** by a ***fat arrow***. Let's take, for example, the method used to calculate the area of a circle.

```csharp
static decimal AreaOfCircle(int Radius) => 3.1415m * (Radius * Radius);
// Still works the same as the one declared before.
```
___
## Parameters as Reference

It's also possible to ***pass arguments as reference***, instead of ***values***. Check [[Parameters as Reference|the ref and out keywords]].
___
## Default Main Method

Every single code in C# comes *wrapped inside* the **Program class and Main method**. Even though, in newer versions of C# the *compiler* might do it **implicitly**, these are fundamental for specifying which file will be **defined as Main** and have ***top-level statements***.

```csharp
class Program
{
    static void Main(string[] args)
    {
        //program execution starts from here
    }
}
```
___
- ### For more information about classes, structs and other custom data types, [[User-Defined Data Types in C-Sharp|check this note!]].