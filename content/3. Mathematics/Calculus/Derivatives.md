# What is it?

*Derivatives* is a fundamental of [[Calculus]] and [[Differentiation]] which defines the **rate of change in a function** and **the slope of a tangent line at any given point**. Using a *derivative*, one could calculate the **minimum** and **maximum** values of a function, making it a basic [[Mathematics|mathematical]] tool used in [[Machine Learning]] for [[Gradient Descent]] methods.

Another fundamental concept for derivatives is its *tangent line*, which **intersects the curve at a point** and has the **same instantaneous slope** and that point. The slope of this line, it's the **first derivative**! In turn, the *secant line*, touches the curve at **two different points**.

![[Tangent and Secant lines.png]]
___
# Notation and Definition

If we keep building our knowledge after learning [[Limits]], one could draw **two different points** at a given function and **approximate it until one overlaps with the other**. This would, in turn, **make the image also overlap itself**. We could express this as the **limit of the rate of change** of $y$ by $x$. When approximating:
$$
f^{\prime}\left(x_0\right)=\lim _{x \rightarrow x_0} \frac{f(x)-f\left(x_0\right)}{x-x_0}=\lim _{\Delta x \rightarrow 0} \frac{\Delta y}{\Delta x}
$$
>*The notation $f'(x)$, — **with the single quote** — describes the **derivate of $f(x)$**. But it could also use the notation of $\frac{dy}{dx}$, $\frac{d}{dx}f(x)$, $Df$ and so on. For now, **let's use the standard of $f'(x)$.***
___
### Using the secant line
But there's another expression to calculate the **slope of the tangent line**. If we draw a *secant line*, we can use it to **approximate** to the point $(x, f(x))$ as a **limit**, once that as $x \to x_0$, the **value of $h$ also approaches $0$**, resulting in:
$$
f'(x_0) = \lim_{h\to0} \frac{f(x_0 + h) - f(x_0)}{h} 
$$
___
# Finding the derivatives with limits

For example, to **calculate the derivative** of a given a function $f(x) = x ^2 - 1$, at $x_0 =2$:
$$
f^{\prime}\left(2\right)=\lim _{x \rightarrow 2} \frac{f(x)-f\left(2\right)}{x-2} \quad=\quad \lim _{x \rightarrow 2} \frac{x^2 - 4}{x-2} \quad=\quad \lim _{x \rightarrow 2} x+2 \quad=\quad 4
$$
	The **derivative of the function** is $f'(x) = x + 2$, and because $x \to 2$, the derivative of the function at **the given point** would be **4**, which is the **slope** at this given point.

Now that we know $f'(x_0)$, we can find the **equation of the tangent line to the curve** of our polynomial function. To do this, apply the *point-slope formula*, which requires only **one point** and the **slope** of the line. 
$$\begin{align}
&\textit{Point-slope formula: }\quad y - y_0 = m(x - x_0)
\\
\\
&(x_0, y_0) =(x_0,f(x_0)) \quad \text{and} \quad m = f'(x_0) 
\end{align} 
$$
Now, to calculate the **equation of the tangent line to the curve**:
$$
\begin{align*}
&y - f(2) = 4(x - 2)\\
&y - (3) = 4x - 8\\
&y=4x -8 + 3\\
&y= 4x -5
\end{align*}
$$
Finally, to **visualize the curve**, one could easily input the **found solutions** and plot the functions:

```python
x_values = np.arange(-7 ,8 ,1)  
line_values = np.arange(0, 5, 1)  
  
function = lambda x: x**2 - 1  
line_function = lambda x: 4*x - 5  
  
sns.lineplot(x=x_values, y=function(x_values))  
sns.lineplot(x=line_values, y=line_function(line_values));
```

![[Derivate Tangent plot.png]]
# Reference

- #### [Derivada is All You Need](https://medium.com/@anwarhermuche/derivada-is-all-you-need-uma-aplicação-com-o-algoritmo-do-gradiente-descendente-a29510e63cb4) — Anwar Mermuche — Medium.

- #### [[Calculus Early Transcendentals, 6th Edition (James Stewart).pdf|James Stewart's "Calculus - Early  Transcendentals"]] — Section 2.7, p. 141.

- #### [Matemática Essencial](https://www.uel.br/projetos/matessencial/superior/calculo/derivada/derivada1.htm) — Universidade Estadual de Londrina.