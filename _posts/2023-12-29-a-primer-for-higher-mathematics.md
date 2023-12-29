---
layout: post
title: "Exploring Functions in Mathematics: A Primer for Higher Mathematics"
comments: true
description: "functions"
keywords: "math"
---

## Introduction

During my recent semester, I took a class on introduction to proof base mathematics. Direct proofs, contrapositive, proof by contradiction, and induction. I also learned about functions, but in a more abstract way. The traditional image of functions as simple mappings from one set to another evolves into a more nuanced concept. Injective, surjective, and bijective functions, along with inverse and composite functions, emerge not merely as tools for calculations but as foundational elements for exploring the intricacies of spaces, continuity, and convergence in higher mathematics.

## Definition

Let $f: A \rightarrow B$ be a function. So given $a \in A$, there exists unique  $b \in B$ so that $f(a) = b$.

## Types of Functions

#### Injective

Let $f: A \rightarrow B$ be a function. We say $f$ is an injection provided for all $x_1$ and $x_2$ $\in A$, if $x_1 \neq x_2$, then $f(x_1) \neq f(x_2).$ For proofs, it is easier to use the contrapositive form. Thus, if $f(x_1) = f(x_2)$, then $x_1 = x_2.$

#### Surjective

Let $f: A \rightarrow B$ be a function. We say $f$ is a surjection provided for every $b \in B$, there exists $a \in A$ so that $f(a) = b.$

#### Bijective

Let $f: A \rightarrow B$ be a function. We say $f$ is a bijection provided it is a surjection and an injection.

## Composite Functions

Let $A, B$ and $C$ be sets and $f: A \rightarrow B$, $g: B \rightarrow C$ be functions. The composition of $f$ and $g$ is the function $g \circ f: A \rightarrow C$, and is defined by $(g \circ f)(x) = g(f(x))$ for all $x \in A$.

##### Theorem

Let $A, B, C$ be sets, and $f: A \rightarrow B$, $g: B \rightarrow C$ be functions:

1. If $f, g$ are injections, then so is $g \circ f.$

2. If $f, g$ are surjections, then so is $g \circ f.$

3. If $f, g$ are bijections, then so is $g \circ f.$

##### Theorem

Let $A, B, C$ be sets, and $f: A \rightarrow B$, $g: B \rightarrow C$ be functions:

1. If $g \circ f$ is injective. so is $f$.

2. If $g \circ f$ is surjective, so is $g$.

## Inverse Functions

Let $f: A \rightarrow B$ be a function. 
The inverse of $f$ is $$f^{-1} = \{ (b, a) \in B \times A | f(a) = b \}.$$ Said another way, $$f^{-1} = \{ (b, a) \in B \times A | (a, b) \in f \}.$$ Note that $f^{-1}$ is not always a function.

##### Theorem

Let $A$ and $B$ be nonempty sets. Let $f: A \rightarrow B$ be a function. Then the inverse of $f$ is a function $f^{-1}: B \rightarrow A$ if and only if $f$ is a bijection.

## Conclusion

Looking ahead to my next semester, I’m gearing up to tackle Real Analysis and Topology. These courses promise a deeper dive into the fascinating world of math. While I didn’t get into heavy formal proofs in this piece, the foundational principles behind these theorems are tucked away in many math books. With excitement fueling my curiosity, I’m ready to venture further, exploring the abstract intricacies of math and uncovering new discoveries along the way!