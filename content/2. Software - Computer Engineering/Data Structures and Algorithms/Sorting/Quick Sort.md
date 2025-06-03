# What is it?
*Quick sort* is a [[Sorting Algorithms|sorting algorithm]], based on the principle of the [[Divide and Conquer Algorithm]], which **splits the original problem to smaller sub-problems** easier to calculate.
In [[Big-O Notation]], it runs in $O(n^2)$.

![[quick sort.png]]
___
# How does it work?

The [[Algorithms|algorithm]] makes use of a *pivot* and **classify values as lower or higher** than the *pivot*, placing them on the **left or right**, respectively. This is done [[Recursion|recursively]], until every group is split, making almost every value being a pivot, at some point.

The *pivot* is normally chosen as the **first or the last** value of the [[Arrays|array]]. This can also differ depending if sorting *ascending* or *descending*.

```csharp
public class QuickSort : ISortAlgorithm
{
	// Public method for sorting.
	public List<int> Sort(List<int> Data)
	{	
		Conquer(ref Data, 0, Data.Count - 1);
		return Data;
	}

	
	internal int Divide(List<int> Data, int Start, int End)
	{	
		// Running in ascending, pivot is the last value.
		int pivotValue = Data[End];
		// Index used to store which index should be swapped.
		int index = Start - 1;

		for (int i = Start; i <= End - 1; i++)
		{
			if (Data[i] < pivotValue)
			{
				index++;
				Data = HelperMethods.Swap(Data, i, index);		
			}
		}

		// Changes pivot place.
		Data = HelperMethods.Swap(Data, index + 1, End);

		// Returning the next pivot index.
		return index + 1;
	}

	// Recursive method. Attention: data is passed by reference, not as parameter.
	internal void Conquer(ref List<int> Data, int Start, int End)
	{
		if (Start < End)
		{
			int index = Divide(Data, Start, End);

			Conquer(ref Data, Start, index - 1);
			Conquer(ref Data, index + 1, End);
		}
	}
}
```