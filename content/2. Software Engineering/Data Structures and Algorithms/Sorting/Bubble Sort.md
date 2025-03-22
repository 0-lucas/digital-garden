# What is it?

*Bubble sort* is one of the simplest [[Sorting Algorithms]], based in **repeatedly swapping pair of elements** if they are in the wrong order.
It can be applied to both **ascending and descending** order, just by changing comparison operators. In [[Big-O Notation]], it runs on $O(n^2)$.

![[bubble sort.png]]
___
# How does it work?

Given a numerical [[Arrays|array]], the [[Algorithms|algorithm]] starts by **iterating through the whole array**, checking if the **current element and the next is out of order** and **swapping if necessary**.
For **each data point**, it iterates through the whole [[Arrays]]. This creates an $O(n^2)$ complexity, **running through every single data point twice**, in a worst-case scenario, making it **very slow for large datasets**.

One of the benefits of *bubble sorting* is that because everything is made *in place*, **no additional available memory is required**. This is most important for memory-restricted devices, once **no additional variable is needed** to perform the [[Algorithms|algorithm]].
___
# Implementation

```csharp
public class BubbleSort: ISortAlgorithm
{
    // Passes one time through entire array, swapping any corresponding elements.
    private static List<int> SortUnitIteration(List<int> Data)
    {
        for (int i = 0; i < Data.Count - 1; i++)
        {
            if (Data[i] > Data[i + 1])
            {
                Data = HelperMethods.Swap(Data, i, i + 1);
            }
        }

        return Data;
    }

    // Applies one sorting iteration for each data point.
    public List<int> Sort(List<int> Data)
    {
        for (int n = 0; n < Data.Count; n++)
        {
            List<int> Data = SortUnitIteration(Data);
        }
        
        return Data;
    }
}
```
