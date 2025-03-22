# What is it?

The *divide and conquer* [[Algorithms|algorithm]] strategy is based on **reducing the original dimension $n$ of a problem** to other sub-problems, which are **recursively divided** to other sub-problems.

![[divide conquer.png|550]]

This commonly reduces the [[Big-O Notation]] of a $O(n)$ [[Algorithms|algorithm]] to $O(\log n)$. This happens because instead of going to every possible data point, we can **recursively solve smaller problems** and **combine them** to find the **answer of the original problem.**