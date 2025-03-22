This is the mechanism in which ***one object reuses the functionality, properties, and methods of another object***. This brings **reusability** to the table, so instead of creating another very similar object, create a base, and from that inherit all the children objects.

Take, for example, the following class in [[C-Sharp]]:

```csharp
public class Employee(string Name, int Wage, string Department)
{
    public string Name { get; init; } = Name;
    protected int Wage { get; set; } = Wage;
    public string Department { get; set; } = Department;

    public void Greet() => Console.WriteLine($"Hi, I'm {Name} and I work at {Department}!");
}
```

One could **derive** a *Developer child class* from the *Employee parent class*, using **:** to refer to the *parent class*. 
Note that you should include the *parent class* inside the constructor using the ***base keyword***. There's no need to redefine the fields from the *parent class*.
For **overriding** already existent methods or fields, check the note [[Polymorphism in C-Sharp]].

```csharp
public class Developer: Employee
{
    public string Stack;
    public int YearsExperience;
    public virtual int Wage;

    // Creating a constructor for readability.
    public Developer(string Name, string Department, string Stack, int YearsExperience, int Wage) : base(Name, Wage, Department)
            {
                this.Stack = Stack;
                this.YearsExperience = YearsExperience;
            }

	    public virtual void Greet() =>
        Console.WriteLine(
            $"Hi, i'm {Name} and have been working with {Stack} at {Department} for {YearsExperience} years."
        );
}
```

Refactoring using primary constructors, it would end up like this:

```csharp
public class Employee(string Name, int Wage, string Department)
{
    public string Name { get; init; } = Name;
    protected int Wage { get; set; } = Wage;
    public string Department { get; set; } = Department;

    public void Greet() => Console.WriteLine($"Hi, I'm {Name} and I work at {Department}!");
}


public class Developer(string Name, string Department, string Stack, int YearsExperience, int Wage) : Employee(Name, Wage, Department)
{
    public string Stack { get; set; } = Stack;
    public int YearsExperience { get; set; } = YearsExperience;
    public new int Wage { get; set; } = Wage;

    public new void Greet() =>
        Console.WriteLine(
            $"Hi, i'm {Name} and have been working with {Stack} at {Department} for {YearsExperience} years."
        );
```
___
- # The protected keyword

Using protected, like the code snippet above, it **blocks access from outside the class**, except for **other classes inheriting from the parent**.
___
