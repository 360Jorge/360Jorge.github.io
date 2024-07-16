---
layout: post
title: "The Cantor Set"
comments: true
description: "cantor set"
keywords: "topology"
categories: [mathematics, topology]
---

## Introduction

Hello, fellow math enthusiasts! My name is Jorge, and last semester, I had the unique opportunity to dive into the world of topology through an inquiry-based learning approach in my introduction to topology class. This method was a game-changer for me, as it emphasized exploration and discovery, allowing us to develop our own understanding of complex concepts through guided problem-solving and collaboration.

Throughout the semester, we tackled a variety of fundamental topics in topology, such as topological spaces, bijective functions, compactness, Hausdorff spaces, and homeomorphisms. Our ultimate goal was to prove a fascinating and elegant result: the homeomorphism between the Cantor Set and the discrete product topology on a countably infinite set.

This journey was not only intellectually stimulating but also incredibly rewarding. As a class, we collectively wrote a book comprising around 80 pages of proofs and insights we developed along the way. Now, I'd like to share this enriching experience with you through this blog post. I'll provide an overview of the essential concepts we covered and walk you through the proof of the homeomorphism between the Cantor Set and the discrete product topology.

Whether you're a fellow student, a teacher, or simply someone with a curiosity for mathematics, I hope this post will offer you valuable insights and perhaps even inspire you to explore the beauty of topology further. Let's dive in!

## Background Concepts

#### Topological Spaces

A topological space $(X,\mathcal{T})$ is a set $X$ and a collection $\mathcal{T}$ of subsets of $X$ satisfying the following:

1. Both $\varnothing$ and $X$ belong to $\mathcal{T}$.

2. If $A$ and $B$ are in $\mathcal{T}$, then $A \cap B$ is in $\mathcal{T}$.

3. If $\Lambda$ is an indexing set, and if $A_\alpha$ is in $\mathcal{T}$ for each $\alpha \in \Lambda$, then $\bigcup_{\alpha\in \Lambda} A_\alpha$ is in $\mathcal{T}$.

#### Bijective Functions

###### Injective

Let $f: A \rightarrow B$ be a function. We say $f$ is an injection provided for all $x_1$ and $x_2$ $\in A$, if $x_1 \neq x_2$, then $f(x_1) \neq f(x_2).$ For proofs, it is easier to use the contrapositive form. Thus, if $f(x_1) = f(x_2)$, then $x_1 = x_2.$

###### Surjective

Let $f: A \rightarrow B$ be a function. We say $f$ is a surjection provided for every $b \in B$, there exists $a \in A$ so that $f(a) = b.$

###### Bijective

We say $f$ is a bijection provided it is a surjection and an injection.

#### Compactness

###### Definition:

Let $\Lambda$ be an indexing set, and let $\Phi = \\{ A_\alpha \mid \alpha \in \Lambda \\}$
 be a collection of sets. Then $\Phi$ is a cover of the set $Y$ if

$$Y\subseteq \bigcup_{\alpha\in \Lambda} A_\alpha.$$

Any subcollection of $\Phi$ that also covers $Y$ is called a subcover.

###### Definition:

Let $(X,\mathcal{T})$ be a topological space, and let $Y\subseteq X.$ A cover $\Phi$ of $Y$ is called an `open cover` of $Y$ if each member of $\Phi$ is an open subset of $X$.

###### Definition

Let $(X,\mathcal{T})$ be a topological space, and let $K\subseteq X.$ We say that $K$ is `compact` if every open cover of $K$ has a finite subcover.

#### Hausdorff Spaces

Let $(X,\mathcal{T})$ be a topological space. The space $X$ is called a `Hausdorff space` (or a $T_2$-space) if, for each pair of distinct elements $x$ and $y$ of $X$, there are disjoint open sets $U$ and $V$ such that $x \in U$ and $y \in V.$

#### Homeomorphism

Let $(X,\mathcal{T})$ and $(Y,\mathcal{S})$ be topological spaces, and let $f: X\rightarrow Y.$ We say that $f$ is a `homeomorphism` if the following hold.

1. $f$ is bijective.

2. Both $f$ and $f^{-1}$ are continuous.

## The Cantor Set

#### Construction

{:refdef: style="text-align: center;"}
![cantor set](/assets/images/Cantor_set_in_seven_iterations.svg.png)
{: refdef}

The Cantor Set is constructed through an iterative process of removing middle thirds from the interval $[0, 1].$ Here's how the construction proceeds:

1. Start with the closed interval $[0, 1].$

2. Remove the open middle third of the interval $[0, 1],$ which is $(\frac{1}{3}, \frac{2}{3}).$ This leaves two closed intervals $[0, \frac{1}{3}]$, and $[\frac{2}{3}, 1].$

3. Continue this process indefinitely. At each step, remove the open middle third of every ramining interval.

The Cantor Set is the set of points that remain after infinitely many such steps. It can also be described as the set of all points in $[0, 1]$ that have ternary expansions (base $3$) consisting only of the digits $0$ and $2.$ For example, the number $\frac{1}{3}$ in base $3$ is $0.1,$ which is not in the Cantor Set. However, $\frac{1}{4}$ has a ternary expansion $0.020202...,$ which belongs to the Cantor Set.

#### Properties

The Cantor Set is compact. This follows from the fact that it is a closed subset of the compact space $[0, 1].$ By the Heine-Borel theorem, a subset of $\mathbb{R}$ is compact if and only if it is closed and bounded. The Cantor Set meets both criteria.

## Discrete Product Topology

##### Product Topology

Let $\Lambda$ be an indexing set, and for each $\alpha \in \Lambda$, let $(X_\alpha, \mathcal{T}_\alpha)$ be a topological space. The `product topology` on the Cartesian product is the topology generated by the basis of sets of the form

$$\displaystyle \prod_{\alpha\in \Lambda} U_\alpha,$$

where $U_\alpha$ is open in $X_\alpha$ for each $\alpha\in \Lambda,$ and $U_\alpha=X_\alpha$ except for finitely many indices $\alpha.$

#### Definition

To understand the discrete product topology, we first need to define the basic building blocks involved. Let's consider the set $\\{0, 1\\}.$

Now, let's extend this idea to the infinite product of these sets. The set $\prod_{n\in \mathbb{N}} \\{0,1\\}$ represents all possible sequences where each term in the sequence is either $0$ or $1.$

The discrete product topology on $\prod_{n\in \mathbb{N}} \\{0,1\\}$ is the topology where the basis for open sets is formed by all possible products of open sets in $\\{0, 1\\},$ where $\\{0, 1\\}$ itself is given the discrete topology.

#### Properties

1. The basis for the discrete topology $X=\prod_{n\in \mathbb{N}} \\{0,1\\}$ consists of all sets of the form $\mathcal{U}=\prod_{i=1}^\infty U_i,$ where $U_i$ is open in $X_i$ for each $i \in \mathbb{N}$ and $U_i = \\{0, 1\\}$ except for finitely many indices. Each factor space $U_i$ is either $U_i=\\{0,1\\}$ or $U_i=\\{0\\}$ or $U_i=\\{1\\}$ or $U_i=\emptyset$. (If $U_i=\emptyset$ for any $i\in \mathbb{N},$ then $\mathcal{U}=\emptyset.$)

2. $\prod_{n\in \mathbb{N}} \\{0,1\\}$ is a Hausdorff space. This property is significant because it ensures that points in $\prod_{n\in \mathbb{N}} \\{0,1\\}$ can be separated by open sets.

We will use the next theorem to prove the homeomorphism between the Cantor Set and the discrete product topology:

##### Theorem:

A continuous bijection from a compact space onto a Hausdorff space is a homeomorphism.

##### Proof

Let $X$ be a compact space and let $Y$ be a Hausdorff space.  Let $f:X\rightarrow Y$ be a continuous bijection of $X$ onto $Y.$  We need only show that $f^{-1}:Y\rightarrow X$ is continuous. Let $C\subseteq X$ be closed.  Since $X$ is compact, and since closed subsets of compact spaces are compact, it follows that $C$ is compact.  Since the continuous image of a compact set is compact, we must have $f(C)$ is compact in $Y.$  Since a compact subset of a Hausdorff space is closed, we see that $f(C)$ is closed.  Hence $(f^{-1})^{-1}(C)=f(C)$ is closed, and thus $f^{-1}$ is continuous.

### Theorem:

For each $n \in \mathbb{N},$ let $X_n=\\{0,2\\},$ and endow $X_n$ with the discrete topology. Put $X = \prod_{n \in \mathbb{N}} X_n,$ and endow $X$ with the product topology $T.$  Endow the Cantor set, $\mathcal{C},$ with the topology $S$ it inherits as a subspace of $[0,1].$  Then $(\mathcal{C},S) \simeq (X,T).$

# Proof

  Observe that if $x=0.x_1x_2x_3\ldots\in \mathcal{C},$ then this number has a unique ternary expansion such that $x_k\in \{0,2\}$ for all $k\in \mathbb{N}.$  Henceforth we will assume this ternary expansion for all $x\in \mathcal{C}$.

  Define a function $f:\mathcal{C}\rightarrow X$ by 
  $f(0.x_1x_2x_3\ldots)=(x_1,x_2,x_3,\ldots).$  We claim that $f$ is a bijection.  Let $f(x)=f(y)$ for some $x,y\in \mathcal{C}.$  Since two sequences are equal if and only if each of their corresponding entries are equal, it follows that $x_i=y_i$ for each $i\in \mathbb{N}.$  Hence $$x=0.x_1x_2x_3\ldots=0.y_1y_2y_3\ldots=y.$$  Now let $y=(x_1,x_2,x_3,\ldots)\in X.$  Then for $x=(0.x_1x_2x_3\ldots)\in \mathcal{C}$ we have $f(x)=y.$  Thus $f$ is bijective as claimed.

  We claim that $\mathcal{C}$ is compact.  At each stage of construction of the middle-thirds Cantor set, a union of open intervals is subtracted from $[0,1].$  Thus for each $n\in \mathbb{N},$ we have that $C_n$ is closed.  Since the intersection of arbitrarily many closed sets is closed in a topological space, it follows that $\mathcal{C}=\cap_{i=1}^\infty C_n$ is closed.  The interval $[0,1]$ bounds $\mathcal{C}$, so we infer from the Heine-Borel Theorem that $\mathcal{C}$ is compact.

  We claim that $X$ is Hausdorff.  Under the discrete topology, any two distinct points $x$ and $y$ can be separated by the open sets $\\{x\\}$ and $\\{y\\}$, so $X_n=\\{0,2\\}$ is Hausdorff for each $n\in \mathbb{N}.$  From a theorem, we see that $X$ must be Hausdorff as well.

  Finally, we claim that $f$ is continuous.  Let $n\in \mathbb{N}$ and let $p_n:X\rightarrow X_n$ be the projection onto the $n$-th factor space in $X$.  By a theorem, it suffices to show that $p\circ f:\mathcal{C}\rightarrow X_n$ is continuous.  Let $\epsilon>0$ and set $\delta=\frac{1}{3^n}.$  Suppose that $|x-y|<\delta$ for two elements $x,y\in X_n.$   Then $x$ and $y$ are equal in their $n$-th decimal places, so we have
  $$
  |p(f(x))-p(f(y))|=|x_n-y_n|=0<\epsilon.
  $$
  Therefore $f$ is continuous.

  Since $f$ is a continuous bijection from a compact space into a Hausdorff space, it follows that $f$ is a homeomorphism.  Therefore, 
  $(\mathcal{C},S)\simeq (X,T)$.$\ \quad \blacksquare\$
  
## Conclusion

My journey through the world of topology has been an eye-opening experience, filled with challenges, discoveries, and profound insights. The inquiry-based learning approach allowed me to explore complex concepts through a process of guided problem-solving and collaboration, which was both intellectually stimulating and incredibly rewarding.

As we delved into fundamental topics such as topological spaces, bijective functions, compactness, Hausdorff spaces, and homeomorphisms, we worked towards proving the elegant result of the homeomorphism between the Cantor Set and the discrete product topology on a countably infinite set. This goal was not just an academic exercise but a deep dive into the essence of mathematical beauty and rigor.

Through this journey, I learned several valuable lessons:

1. The Role of Images in Topology: Visual aids can be incredibly helpful when working on proofs in topology, providing intuitive insights that can make abstract concepts more tangible. However, there are times when these images can be misleading or insufficient, emphasizing the need for precise mathematical reasoning.

2. Multiple Proof Methods: There are often several ways to prove a theorem. This diversity in approach highlights the creativity and flexibility inherent in mathematical problem-solving. Exploring different methods can provide a deeper understanding of the underlying concepts and strengthen your problem-solving skills.

3. Historical Context of Proofs: Behind every proof, there is a rich history of intellectual effort and perseverance. Many of the theorems we study today took brilliant minds years to develop and refine. Appreciating this historical context can inspire respect and admiration for the field of mathematics.

4. Understanding and Mastery Take Time: Mastering a proof and being able to reproduce it yourself takes time and effort. Even after you think you understand a proof, you may encounter parts that challenge you or offer new insights upon further study. This iterative process of learning and re-learning is a natural and essential part of mathematical growth.

In conclusion, my experience with topology has been profoundly enriching, and I hope this blog post has conveyed some of the excitement and satisfaction that comes from exploring this fascinating field. Whether you're a student, a teacher, or simply curious about mathematics, I encourage you to delve deeper into topology and discover the beauty it holds. Thank you for joining me on this journey, and I look forward to sharing more mathematical adventures in the future.

## Appendix

1. Heine-Borel Theorem: Equip $\mathbb{R}$ with the standard topology. A subset $K$ of $\mathbb{R}$ is compact if and only if $K$ is closed and bounded.

2.  Theorem: Let $\Lambda$ be an indexing set, and for each $\alpha \in \Lambda$, let $(X_\alpha, \mathcal{T}_\alpha)$  be a topological space. Let $(X, \mathcal{T})$ be the product space, and let $(Y, \mathcal{S})$ be another topological space. 

A function $f: Y \to X$ is continuous if and only if the composition $p_\alpha \circ f: Y \to X_\alpha$ is continuous for each $\alpha \in \Lambda$.

3. Let $\\{X_\alpha\\}_{\alpha\in \Lambda}$ be a collection of Hausdorff spaces.  Then 

$$\displaystyle \prod_{\alpha\in \Lambda} X_\alpha$$ 

is Hausdorff with respect to the product topology.

## References

1. https://github.com/360Jorge/Topology_Book/blob/main/Topology_Book.pdf

2. https://en.wikipedia.org/wiki/Cantor_set
