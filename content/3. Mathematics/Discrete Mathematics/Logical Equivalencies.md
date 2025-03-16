In [[Discrete Mathematics]], a [[Propositions|proposition]] **$p$ logically implies in $q$** if and only if, each **value of the hypothesis $p$ makes the conclusion $q$ a truth**. When this *logical equivalency* exists, it's  denoted as $p \equiv q$, meaning that while $p$ and $q$ are not equal *(because they represent different statements)*, they **share the same truth value**.

___
## Tautology and Contradiction

By definition, a *tautology* is a [[Propositions|proposition]] that **is always true**, regardless of the truth value of the variables it contains, while a *contradiction* is a [[Propositions|proposition]] that **is always false**.

___

## Logical equivalency properties

- ##### Commutative: $$\begin{align}
p \vee q \equiv q \vee p \\
p \wedge q \equiv q \wedge p
\end{align}$$
- ##### Associative: $$\begin{align}
(p\vee q) \vee r \equiv p \vee (q\vee r) \\
(p \wedge q) \wedge r \equiv p \wedge (q \wedge r)
\end{align}$$
- ##### Distributive:
$$
\begin{align}
p \vee (q \wedge r) \equiv (p \vee q) \wedge (p \vee r) \\
p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge q)
\end{align}
$$
- ##### Idempotent laws:
$$
\begin{align}
p \vee p \equiv p \\
p \wedge p \equiv p
\end{align}
$$
- ##### De Morgan's laws:
$$\begin{align}
\overline{p \vee q} \equiv \neg p \wedge \neg q \\
\overline{p \wedge q} \equiv \neg p \vee \neg q

\end{align}$$
- ##### Double negation:
$$\neg \neg p \equiv p
$$
- ##### Contrapositive
$$
\begin{align}
p \rightarrow q \equiv \neg q \rightarrow \neg p
\end{align}
$$
- ##### Conditional elimination
$$\begin{align}
&p \rightarrow q \equiv \neg p \rightarrow q \\
&p \rightarrow q \equiv \neg (p \wedge \neg q)
\end{align}$$
- ##### Bi-conditional elimination
$$
\begin{align}
&p \leftrightarrow q \equiv (p \wedge q) \vee (\neg p \wedge \neg q) \\
	& p \leftrightarrow q \equiv (\neg p \vee q) \wedge (\neg p \vee q)
\end{align}
$$
