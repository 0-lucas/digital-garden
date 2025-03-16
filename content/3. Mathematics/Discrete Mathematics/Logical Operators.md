In [[Discrete Mathematics]], the use of [[Propositions|propositions]] alone is too limiting to describe complex and dynamic logical scenarios. *Operators* make it possible to combine multiple *propositions*:

___
## Negation operator

Taking for example the *propositions* $r, p, q$ , we can negate all of them using the *negation operator*, noted as $\neg$, $\sim{}$, or  $\bar{}$ . It's possible to use it with any *proposition* to declare the opposite of it. If the **$r$ is true, then $\neg  r$ is false**. One could consider $\neg r$ as **'not $r$'**.

For already false *propositions*, when negating it, they are declared as *true propositions*, e.g. :

- $p = \text{'Today is NOT going to rain.'}$
- $\neg p = \text{'Today is going to rain.'}$

___
## Conjunction operator

*Conjunctions* evaluates the **truth value of both propositions**, similar to the *AND logical operator*. In this case, the used notation is $\wedge$.
Let $p$ and $q$ as *propositions*, $p \wedge q$ will be the conjunction of both *propositions*, interpreted as **$p$ and $q$**.

A **conjunction will be true only if both propositions are true**, otherwise the proposition can be considered as false.

- $p = \text{true}$ and $q = \text{false}$. $p \wedge q = \text{false}$
- $p = \text{false}$ and $q = \text{false}$. $p \wedge q = \text{false}$
- $p = \text{true}$ and $q = \text{true}$. $p \wedge q = \text{true}$

___
# Disjunction operator

*Disjunction* also **evaluates two propositions**, but it's similar to the *OR logical operator*. It declared as true if **at least one of the propositions are true**. In this case, the used notation is $\vee$. e.g. :

- $p = \text{true}$ and $q = \text{false}$. $p \vee q = \text{true}$
- $p = \text{false}$ and $q = \text{false}$. $p \vee q = \text{false}$
- $p = \text{true}$ and $q = \text{true}$. $p \vee q = \text{true}$

### Exclusive Disjunction

There's also the *exclusive disjunction*, which will **evaluate the statement as false** if **both *propositions* are true**, similar to the *XOR logical operator*. In this case, the used notation is $\oplus$. e.g. :

- $p = \text{true}$ and $q = \text{false}$. $p \oplus q = \text{true}$
- $p = \text{false}$ and $q = \text{false}$. $p \oplus q = \text{false}$
- $p = \text{true}$ and $q = \text{true}$. $p \oplus q = \text{false}$

___
## Conditional Operator

*Conditional operators* can also be used to connect [[Propositions|propositions]] and create complex logic and relationships between different [[Propositions|propositions]]. Also known as *implications*.

Given two propositions $p$ and $q$, the *conditional proposition* $p \rightarrow q$ declares **"if $p$, then $q$"**. In other words: $p$ **implies** $q$, where $p$ is a *premise* and $q$ is the *conclusion*. $p \rightarrow q$ is **only false when $p$ is true and $q$ is false**, and **is true otherwise**. 

- $p = \text{true}$ and $q = \text{false}$. $p \rightarrow q = \text{false}$
- $p = \text{false}$ and $q = \text{false}$. $p \rightarrow q = \text{true}$
- $p = \text{true}$ and $q = \text{true}$. $p \rightarrow q = \text{true}$
- $p = \text{false}$ and $q = \text{true}$. $p \rightarrow q = \text{true}$

___
## Biconditional Operator

The *biconditional statement* **"$p$ if and only if $q$"**, denoted as $p \Leftrightarrow q$, is only true when $p$ and $q$ **carry the same truth value**, and is false otherwise. Also abbreviated as **"$p$ iff $q$"**.

In other words, the *biconditional operator* evaluates if both $p$ and $q$ share the same value.

- $p = \text{true}$ and $q = \text{false}$. $p \Leftrightarrow q = \text{false}$
- $p = \text{false}$ and $q = \text{false}$. $p \Leftrightarrow q = \text{true}$
- $p = \text{true}$ and $q = \text{true}$. $p \Leftrightarrow q = \text{true}$
- $p = \text{false}$ and $q = \text{true}$. $p \Leftrightarrow q = \text{false}$
