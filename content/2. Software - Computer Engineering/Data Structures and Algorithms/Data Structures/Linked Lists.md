# What is it?

*Linked lists* are a linear [[Data Structures|data structure]], very similar to *dynamic [[Arrays]]*. However, *linked lists* work with *non-sequential memory allocation*. This means that the **data is sparsely stored inside memory**, instead of a *sequential allocation*, which happens in [[Arrays]].

This makes *linked lists* offer *memory efficiency* and *scalability*, once it can use any *leftovers* inside memory, and also can **add and remove elements at any position**.
___
# How does it work?

*Linked lists* needs to **store additional information inside each *element***, besides the *element's* actual value. In this case, it stores the *memory address* of other *elements*. 
For example, the *head element* - the first element of a *linked list* - points to the second *element*, which points to the *third*, and so on. The last *element* points to a *null value*.

To find to a *element*, a program **may need to run through** the *linked list* until it finds what it's searching for, which can add [[Algorithm Complexity|time complexity]] to a program. Unlike [[Arrays]], it's **not possible to jump straight to the desired element**, because *linked lists* simply do not know where the element is stored.

![[linked list.png]]

Also, when programming the *linked list*, one can just create *methods* and *helper properties* on the *linked list* object. The actual **data and address will be referenced by each** *element* object.

```csharp
public class Element
{
    public int Value;
    public Element? NextElement;

    public Element(int Value)
    {
        this.Value = Value;
        this.NextElement = null;
    }
}

public class SinglyLinkedList
{
    public Element? Head;
    public int Count;

    public void InsertAtBeginning(int Value)
    {
        Element newElement = new(Value);
        newElement.NextElement = Head;
        Head = newElement;

        Count++;
    }

    public void InsertAtEnd(int Value)
    {
        if (Head == null) // If linked list is already empty, we can just insert wherever.
            InsertAtBeginning(Value);

        Element newElement = new(Value);
        Element lastElement = GetLastElement();

        lastElement.NextElement = newElement;
        Count++;
    }

    public Element GetLastElement()
    {
        if (Head == null)
            throw new EntryPointNotFoundException("No HEAD element");

        return GetLastElement(Head, 1);
    }

    private Element GetLastElement(Element element, int count)
    {
        if (count == this.Count)
            return element;

        count++;
        return GetLastElement(element.NextElement, count);
    }
}
```
___
# Types of linked lists

*Linked lists* could be classified as *singly linked*, *doubly linked*, and *circular linked*.

- #### Singly linked lists
	Each *element* know only the **position of the next *element***, and the last *element* returns a null *element*. So each *element* have two Information, it's value and the address of the next *element*.

- #### Doubly linked lists
	Each *element* knows the **position of the next *element* and the position of the previous *element***. In this case the first *element* return a **null address for the previous** one, and the **last returns a null address for the next** one.

- #### Circular linked lists
	The last *element* is linked to the *first* element, creating a **link between the last and first *element* of the list**. 

![[types of linked list.png]]
___

