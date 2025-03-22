# What is it?

A *binary search tree* is a particular case of [[Binary Trees]], being another [[Data Structures]] which is made specially for **organizing and storing data in a sorted manner**, using [[Recursion|recursive]] [[Algorithms|algorithms]] to quickly access data.

A *binary search tree* is basically a **way to structure** a [[Binary Trees|Binary Tree]], in which values are **inserted accordingly to rules** to create a structure **optimized for retrieving and working with data**.

![[bst.png]]
___
# How does it work?

When *inserting* data to the tree, **two rules must be followed**:

- ##### In case the value is less than its root node, we insert it on the left side.

- ##### In case the value is greater than its root node, we insert it on the right side.

These rules must be followed by **order of insertion**. So **values inserted first are going to define the rest of the tree**. Also, **every value** must check these conditions going from the *root* of the tree until its corresponding place.
We can implement a rudimentary *binary search tree* structure in [[C-Sharp]]:

```csharp
public class TreeElement(int Value)
{
    public int Value = Value;
    
    public TreeElement? LeftChild = null;
    
    public TreeElement? RightChild = null;
}

public class BinarySearchTree
{
    private TreeElement? head;

    public void Insert(int value)
    {
        // Base case of empty tree, adds as the head element.
        if (head == null)
        {
            TreeElement newElement = new(value);
            head = newElement;
        }
        else
        {
            Insert(value, ref head);
        }
    }

    private void Insert(int value, ref TreeElement node)
    {
        if (node == null)
        {
            TreeElement newElement = new(value);
            node = newElement;
        }

        else
        {
            if (value < node.Value)
            {
                Insert(value, ref node.LeftChild);
            }

            if (value > node.Value)
            {
                Insert(value, ref node.RightChild);
            }
        }
    }
}
```