# Classes

*Classes* are the *blueprint* of an **object**, defining its *data*, *properties*, and *functionality*. A class is also a ***custom type*** inside [[C-Sharp]]. A class template lies below:

```csharp
<access modifier> class Class_Name
{
    // Class members
    string;  // Field
    int;  // Field

    public void Method(parameters) // Method
    {
        // Do something here
    }
}
```
___
## Constructor

***Constructors*** are called to *instantiate* an *object* passing **initial values** to the *instance*, using the ***new()*** method. It's possible to use the default C# constructor or **create a custom one inside a class.**

A constructor is declared as **a method inside the class**, with the **same name as its class**, **without a return type** *(not even void)*. It's also possible to **overload a constructor**, changing its *parameters*.

```csharp
internal class Person
{
    public string? name;
    public string? job;
    public int age;
    public bool isMarried;

    public Person() { } // Default constructor, fields are null.

    public Person(string name, string job, int age, bool isMarried)
    {
        this.name = name; // Use "this." for referencing the class variable.
        this.job = job;
        this.age = age;
        this.isMarried = isMarried;
    }

    public void Greet()
    {
        Console.WriteLine($"Hi, I am {name}");
    }
}
```

To instantiate the object, the compiler will match the right constructor depending on the arguments passed.

```csharp
Person Lucas = new("Lucas", "Data Scientist", 21, false);
Lucas.Greet(); // Returns "Hi, I am Lucas"
```

One could also use a *primary constructor*, introduced in C# 12.
```csharp
internal class Person(string name, string? job, int age, bool isMarried)
{
    public string? Name { get; set; } = name;
    public string? Job { get; set; } = job;
    public int Age { get; set; } = age;
    public bool IsMarried { get; set; } = isMarried;

    public void Greet()
    {
        Console.WriteLine($"Hi, I am {Name}");
    }
}
```

By convention, use [[Auto Property in C-Sharp|Auto Properties]] , like the *get* and *set* keywords, for *encapsulating* or *setting fields after instantiation*.
___
# Enumerations

The ***enum*** keyword creates *Enumerations*, which is used to store a set of *named numeric **constants** variables*. By default, they start from 0, incrementing by each member, even though it's **possible to assign a custom value**.

```csharp
// Changing the Person class to acomodate job as a enum type.

public enum DataRole  // Enum object definition.
{
    DataAnalyst, DataScientist, DataEnginner, MLEnginner
}

internal class Person
{
    public string? name;
    public DataRole job;  // Change from string type to DataRole type.
    public int age;
    public bool isMarried;

    public Person() { }

	// Changed constructor to accomodate DataRole.
    public Person(string name, DataRole job, int age, bool isMarried)
    {  
        this.name = name;
        this.job = job;
        this.age = age;
        this.isMarried = isMarried;
    }

    public void Greet()  // Added DataRole field job.
    {
        Console.WriteLine($"Hi, I am {name} and I work as {job}.");
    }
}

Person Lucas = new("Lucas", DataRole.DataScientist, 21, false);
Lucas.Greet(); // Returns "Hi, I am Lucas and I work as DataScientist."
```

It's also possible to **assign the value** of a member, **get the string** and **index value** of a member, check if a **string is defined by an enum object** and finally, **calling the member based on its value**.

```csharp
public enum DataRole
{  // Assigning value to a member.
    DataAnalyst, // 0
    DataScientist, // 1
    DataEnginner = 5,
    MLEnginner // 6
}

// Getting "index" and "string" value from member.
Console.WriteLine((int)DataRole.DataEnginner); // Returns 5.

string myString = DataRole.MLEnginner.ToString();
Console.WriteLine(myString); // Returns "MLEnginner".

// Checking if string is defined by enum object.
Console.WriteLine(
	Enum.IsDefined(typeof(DataRole), "DataScientist")); // Returns true.

// Get member based on its value.
Console.WriteLine((DataRole)5); // Returns "DataEnginner"
```
___
# Structs

Similar to how classes are the blueprint of an object, ***structs* are the blueprint of a *custom data structure.*** Structs are similar to classes, but its data is stored **as value** instead of reference *(like classes)*, which make them more **lightweight**. Actually, a struct is a **value type in itself**.

Additionally, ***structs*** can declare *constructors*, *fields* and *methods*, implementing an *interface*.
However, unlike classes, they **can't inherit** or serve as **base** to *another struct*.

```csharp
// Let's refactor the Person class to be struct Persona.

internal struct Persona(string name, DataRole job, int age, bool isMarried)
{
    public string? name;
    public DataRole job;
    public int age;
    public bool isMarried;

    public void Greet()
    {
        Console.WriteLine($"Hi, I am {name} and I work as {job}.");
    }
}

// Declare struct object and initialize variables.
// Without constructor.
Persona Ana;  
Ana.name = "Ana";
Ana.age = 22;
Ana.job = DataRole.DataAnalyst;
Ana.isMarried = false;
Ana.Greet(); // Returns "Hi, I am Ana and I work as DataAnalyst".

// Using constructor.
Persona Luis = new("Luis", DataRole.DataAnalyst, 20, false); 
Luis.Greet();
```
___
# Records

Introduced in **C# 9**, *records* are reference types, very similar to **classes**, but they **excel at encapsulating data**. They are intended for storing **immutable data** and typically used to define simple data structures.
Records are ideal for read-only tasks, once the data **cannot be changed after instantiated**. While it's possible to define methods, it's not in a record use-case.

```csharp
public record Person(string firstName, string lastName);

Person person1 = new("Mike", "Kinsella");

// Trying to change a field after instantiation.
person1.lastName = "Jackson"; // Raises an error.
```

They also have *value-based equality*, whereas classes have *memory-based*. This translates to records being **treated as equal** if they present the **same values**, even if they're not pointing to the **same object in memory**.

```csharp
Person person1 = new("Mike", "Kinsella");
Person person2 = new("Mike", "Dirnt");

if (person1 != person2) // True
	Console.WriteLine("They are different people!"); 

// Create a new record based on a existing one.
// Use with to change a property.
Person person3 = person2 with {lastName = "Kinsella"};

if (person1 == person3) // True, even if they are different objects.
	Console.WriteLine("They cloned Owen!!");
```
___
# Interfaces

*Interfaces* are “blueprints” of a class, specifying the only **required methods**, **properties**, and **parameters**, widely used when implementing [[Polymorphism in C-Sharp|polymorphism]]. When creating a class using an *interface*, the compiler will ensure it follows every requirement from the *interface*.

```csharp
internal interface IPersona
{
    string Name { get; set; }
    int Age { get; set; }

    void Greet();
}
```

Now, every class that *inherits* from the interface should define the properties and methods presented above.
___