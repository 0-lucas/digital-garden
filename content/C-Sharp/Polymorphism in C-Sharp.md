For changing **pre-existing methods and field** inside a class, [[C-Sharp]] uses the *virtual* and *override* keywords.
- **Virtual** is used inside parent classes, for specifying a given method can be overridden by an inheriting class.
- **Override** is used inside child classes for specifying the compiler to use the new definition.

Take a look:
```csharp
public class Parent
{
    public virtual void HelloWorld()  // Base method using virtual.
        => Console.WriteLine("Hello World!");
}

public class Child : Parent
{
    public override void HelloWorld() // Overridden method using override.
        => Console.WriteLine("New Hello World!");
}

Parent parent = new();
Child child = new();


parent.HelloWorld();  // Returns "Hello World!"
child.HelloWorld();  // Returns "New Hello World!"
```
___
