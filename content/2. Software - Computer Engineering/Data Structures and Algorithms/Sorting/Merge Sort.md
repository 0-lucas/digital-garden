# What is it?

*Merge sort* is a [[Sorting Algorithms|sorting algorithm]], based on the principle of the [[Divide and Conquer Algorithm]], which **splits the original problem to smaller sub-problems** easier to calculate.
It works by [[Recursion|recursively]] **splitting** the dataset to **unit elements**, and **merging them** backing together, **sorting in the way**. This makes it run in $O(n \log{n})$, in [[Big-O Notation]].

![[merge sort.png]]
___
# How does it work?

Given a numerical [[Arrays|array]] the [[Algorithms|algorithm]] starts [[Recursion|recursively]] **dividing the array** in half, until **only single parts remains**. Then it starts to **merge each part**, **swapping elements in order**, if necessary. This is done until the whole [[Arrays]] is **merged together and sorted**.

```csharp
public class MergeSort : ISortAlgorithm
{
	// Compliance to ISortAlgorithm interface
	public List<int> Sort(List<int> Data) => Divide(Data);

	// Splits the array into two sub-arrays recursively, leftList and rightList.
	internal List<int> Divide(List<int> Data)
	{
		// If list has no data points, return itself.
		if (Data.Count <= 1)
			return Data;

		int middlePosition = HelperMethods.GetMiddlePosition(Data);

		// Divides list in half, to left list and right list.
		List<int> leftList = Data.GetRange(0, middlePosition);
		List<int> rightList = Data.GetRange(middlePosition, Data.Count - middlePosition);

		leftList = Divide(leftList);
		rightList = Divide(rightList);

		// Merges lists into one, sorting in the way.
		return Conquer(leftList, rightList);

	}

	// The actual sorting. Get each smaller subarray and sort step-by-step.
	internal List<int> Conquer(List<int> LeftList, List<int> RightList)
	{
		List<int> resultList = [];

		// While one of the lists still has data points.
		// Only stops when all values have been transfered to resultList.
		while (LeftList.Count > 0 || RightList.Count > 0)
		{
			// Get first value from each list. If no value, returns null.
			int leftValue = LeftList.FirstOrDefault();
			int rightValue = RightList.FirstOrDefault();

			// If both lists have data points.
			if (LeftList.Count > 0 && RightList.Count > 0)
			{
				// If left value is lower, add to result list and remove from original list.
				if (leftValue <= rightValue)
				{
					resultList.Add(leftValue);
					LeftList.Remove(leftValue);
				}
				// If right value is lower, add to result list and remove from original list.
				else
				{
					resultList.Add(rightValue);
					RightList.Remove(rightValue);
				}
			}

			// If just left list has data points.
			if (LeftList.Count > 0 && RightList.Count == 0)
			{
				resultList.Add(leftValue);
				LeftList.Remove(leftValue);
			}

			// If just right list has data points.
			if (LeftList.Count == 0 && RightList.Count > 0)
			{
				resultList.Add(rightValue);
				RightList.Remove(rightValue);
			}
		}
		return resultList;
	}
}
```