		# Properties and Encapsulation

When defining a private field in an object, one should pay attention to the ***property*** of the field. A *property* is like an **intermediate for accessing the private field** — let's call it *backing field* —.

To do that, you also need ***accessors***, which are defined by the keyword ***get*** and ***set***.

For accessing a private field, a **public property** is created using the same name as the field, but in *PascalCase*, by convention. Applying the *get-set* implementation, it's only possible to access the private field **through the property**, even when **instantiating** the object.

> ***Keep in mind:** using a primary constructor might not work with properties. One should create its own constructor **referencing the property**.*

```csharp
public struct Genre
{
    public Genre(string name) => this.Name = name;

    private string name; // Backing field
    public string Name // Property - Always use PascalCase for properties.
    {
        get
        {
            Console.WriteLine("Returning!!!");
            return name;
        }
        set
        {
            Console.WriteLine("Setting!!!");
            name = value;
        }
    }
}

Genre genre = new("Rock and Roll");
Console.WriteLine(genre.Name); // Returns "Returning" and "Rock and Roll"
```
___
# Validating data

One great feature of using *properties*, is to **validate the data before making a change**. For example, let's check if the genre there are any white spaces in the string and replace by an underscore. Commonly, one would **raise an exception on invalid data.**

```csharp
public struct Genre
{
    public Genre(string name) => this.Name = name;

    private string name; 
    public string Name
    // Refactored get-set for readability
    { 
        get => name;
        set => name = value.Replace(' ', '_');
    }
}

Genre genre = new("Rock and Roll");
Console.WriteLine(genre.Name);  // Returns Rock_and_Roll

genre.Name = "Trip Rock";
Console.WriteLine(genre.Name);  // Returns Trip_Rock
```
___
# Using init

There is also the ***init keyword***, which is useful for creating immutable properties. Using *init* in the place of *set*, removes the **possibility of changing the value** of the *backing field* **after instantiation**. In other words, the field is only set during *object construction*, and any attempt to change it afterward will **result in a compile error**.

```csharp
public struct Genre
{
    public Genre(string name) => this.Name = name;

    private string name; 
    public string Name
    {
        get => name;
        init => name = value.Replace(' ', '_');  // Replaced set by init
    }
}

Genre genre = new("Rock and Roll");
Console.WriteLine(genre.Name);

genre.Name = "Jazz"; // Raises compile error CS8852
```
___