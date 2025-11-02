# What is it?

In [[Distributed Computing]], *OpenMP* is a [[C++]], [[C]] and [[Fortran]] programming interface which **implements [[Multi-Threading|multi-threading]] parallel programming**. It basically consists of a set of *compiler directives*, *routines* and environment variables which will **influence the run-time execution** to spawn **multiple threads to process a certain region of the code**.

For example, for a code which will calculate an [[Integrals|integral]] version of $\pi$, expressed by:
$$\pi = 4\int^1_{0}\frac{1}{1+x^2}dx$$Can be implemented for each [[Threads|thread]] to calculate each set of rectangles separately, improving performance:

```c++
#include<stdio.h>
#include<stdlib.h>
#include<omp.h>
#include<cmath>

constexpr float totalHeight = 4.0f;
constexpr float totalX = 1.0f;
constexpr int rectangles = 1000000;

float calculateX(int rectangleNumber) { // Rectangle center
    float rectangleWidth = totalX / rectangles;
    return (rectangleNumber * rectangleWidth) + (rectangleWidth / 2.0f);
}

float calculateY(float x) {
    return totalHeight / (1 + pow(x, 2.0));
}

float calculateArea(float y)
{
    float rectangleWidth = totalX / rectangles;
    return y * rectangleWidth;
}

int main() {
    double start = omp_get_wtime();
    float heights[rectangles];
    float totalHeight = 0.0f;

    // Calculates height of each rectangle of the integral.
    // Then sums all heights into a single variable for total area calculation.
    #pragma omp parallel for reduction(+:totalHeight)
    for (int i = 0; i < rectangles; i++) {
        double x = calculateX(i);
        double y = calculateY(x);
        totalHeight += y;  // Thread-safe because of the reduction clause
    }

    float totalArea = calculateArea(totalHeight);
    double totalTime = omp_get_wtime() - start;

    printf("Area: %f\n", totalArea);
    printf("Duration: %f\n", totalTime);
}

```


