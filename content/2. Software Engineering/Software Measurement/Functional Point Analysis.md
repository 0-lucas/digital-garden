# What is it?

*FPA*, which stands for *functional point analysis*, is a method used in [[Software Measurement]] to **measure the functional size** and **complexity** of the software from the **perspective of the user**. It's based on the requests and responses that the user receives, counting it in terms of *function points*, which is a **dimensionless number**.

>[!caution]  **What it does, not how it's built.**
> *FPA* measures the complexity of **what the software does**, not the complexity or effort needed to **build the software**. Because of that, it's not used for projects which are on the initial stages of development.

___
# FPA concepts

*FPA* establishes names for components and process used in the system:

![[fpa.png]]

- ##### Boundary
	Refers to the limit where the *FPA* will apply in the system, *e.g., just a part of the system, or will include the entire system and other external services?*

- ##### External Inputs — EI
	All data that **enters** the system through **external sources**.

- ##### External Outputs — EO
	All data that **leaves** the system to **external destinations**.

- ##### External Inquiries — EQ
	All data that **enters and leave** the system in response to any **user queries**.

- ##### Internal Logical Files — ILF
	Logical **groups of data** which are **generated and maintained inside** the system.

- ##### External Interface Files — EIF
	Logical **groups of data** that are **used in system**, but are stored and **maintained outside** of it.
___
# Step-by-step

*FPA* is a lengthy process, but the overall view of it is **to classify each component** of the system, **assign a weight**, and then **calculate an adjustment factor** for the complexity of the system.

## Classify components and assign weights

Each **component of a system**, each user interaction, data processing, and so on, should be **taken into consideration**. 
They need to be classified into one of the types shown above, and then **assigned a weight** depending on its complexity, ranging from **simple**, **average**, and **complex**.

![[fpa 1.png]]
___
## Calculate Unadjusted Function Points - UFP

Multiply the count of each type by its given weight and sum the results. This will result in *UFP*, which stands for *unadjusted function points*:

$$
UFP = EI*w + EO*w + EQ*w + ILF*w + EIF*w
$$
___
## Determine the adjustment factor

*VAF*, which stands for *Value Adjustment Factor*, is used to adjust *UFP* by considering **general characteristics of the system**, so that it's complexity estimate is more reliable.
These characteristics are standardized and called *GSC*, which stands for *General System Characteristics*, and each can be given a score from **0 to 5**, depending on **how applicable it is to the system in question**. **0** represents **weak influence**, while **5** represents **strong influence**:

![[gsc.png]]
___
## Calculate TDI and VAF

With the **general characteristics defined**, we can calculate *TDI*, which stands for *Total Degree of Influence*. *TDI* will be the **sum of all points** of the fourteen *influences*.
$$ TDI = \sum_{i_{1}}^{i_{14}} P_{n}$$
Then the *Value Adjusment Factor*, *VAF*, can be calculated:
$$VAF = 0.65 + (0.01 * TDI)$$
## Calculate Adjusted Function Points - AFP

With all the previous values, *AFP* can be calculated, which is the **Adjusted Function Points**, the final result of a *functional point analysis*:

$$ AFP = UFP * VAF$$
___
# Estimating effort

It's possible to determine **function points per month** of a team or a developer, using historical data, resulting in a **productivity rate**. 
$$\text{Productivity Rate} = \frac{\text{function points done}}{\text{months of work}}$$
With this productivity rate, one can estimate the effort of a project by applying *FPA* to it and using the **productivity rate** to discover the **effort required for the project**.
$$\text{Effort} = \frac{AFP}{\text{Productivity Rate}}$$
Then, one could even **estimate the cost needed**:
$$
\text{Cost} = \text{Effort}* \text{Cost per developer}
$$