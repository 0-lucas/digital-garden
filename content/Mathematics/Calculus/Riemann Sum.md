# What is it?

The *Riemann Sum*, named after [*Bernhard Riemann*](https://pt.wikipedia.org/wiki/Bernhard_Riemann), is a method for **approximating areas under a curve** or any **general shape that can be simplified using rectangles**, using only **the sum of said rectangles**. These rectangles can follow a equal width rule or not.

*Riemann Sum* is one of the building blocks of [[Integration]], even though it can be done without involving [[Calculus]] at all. When **used to sum rectangles with infinitesimally widths**, **it behaves the same** as [[Integrals]].

# Approximating Areas

The main principle is to **draw rectangles that follow the shape of a curve**, and then **calculate the sum of areas**. This is used to give an estimate of the actual area.

But then, one could **increase the number of rectangles** with the objective of minimizing the errors, that could **over-estimate** or **under-estimate**. This increase in rectangles can be *ad infinitum*, until it reaches a satisfying solution.

![[riemann sum comparison.png|700]]
___

# Types of approximation

There are three ways to perform a *Riemann Sum*, *left*, *right* and *midpoint* sum. These will determine the height of the rectangles, also influencing if the end result is **over-estimated** or **under-estimated**.

![[riemann sum.png]]
___
# Left point sum

Using the *Left point rule*, the **height of each rectangle** is determined by where the **upper left corner touches the curve**.
You can approximate the exact area under a curve between $a$ and $b$,