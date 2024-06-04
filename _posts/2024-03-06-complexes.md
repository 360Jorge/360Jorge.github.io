---
layout: post
title: "Complexes"
comments: true
description: "topological data analysis"
keywords: "TDA"
---

## Introduction

As an applied mathematics major at GGC, I am required to conduct research before graduation. My current interest lies in algebraic topology and its practical applications. While delving into papers on topological data analysis, I encountered terms like simplicial complexes, point cloud data, Cech complex, Rips complex, and persistent homology. In this series of posts, I will share my insights and understanding of these concepts, beginning with an exploration of simplicial complexes

## Simplicial Complexes

#### Simplices

In simple words, a simplex is a generalization of a triangle. A $0$-simplex is a point, a $1$-simplex is a line, a $2$-simplex is a triangle, and a $3$-simplex is a tetrahedron, and it goes up to more dimesions that is harder to visualize.

> The boundary of a $k$-simplex has $k+1$ $0$-faces, $\frac{k(k+1)}{2}$ $1$-faces, and $\binom{k+1}{i+1}$ $i$-faces where $\binom{n}{k}$ is a binomial coefficient.

#### Convex Set

A set $A$ is convex means if $x, y \in A$, then $\overline{xy} \in A$.

#### Convex Hull

A set $A$ is the convex hull of a set $X$ if $A$ is the smallest convex set covering $X$. In other words,

$A$ is convex

$X \subseteq A$ (covering)

If $B$ is a convex covering $X$, then $A \subseteq B$.

> A $k$-simplex is the convex hull of $k+1$ vertices. For instance, the $2$-simplex is the convex hull of the equilateral triangle ($3$ vertices), and the $3$-simplex is the convex hull of the tetrahedron ($4$ vertices).

Now, before I write the definiton of a simplicial complex, I will write the definition of a face of a k-simplex.

#### Face of a k-simplex

A face of a $k$-simplex is a sub-simplex. For instace, take a $2$-simplex (a triangle)

{:refdef: style="text-align: center;"}
![2-simplex](/assets/images/simplicial-complex.png)
{: refdef}

In the image of the triangle above, we have 3 $0$-faces ($v_0, v_1, v_2$), 3 $1$-faces $e_0 = [v_0, v_1]$, $e_1 = [v_1, v_2]$, and $e_2 = [v_0, v_2]$, and 1 $2$-face $S_0 = [e_0, e_1, e_2]$.

I will now write the definiton of a simplicial compelex.

#### Simplicial Complex

A simplicial complex is a space with a [triangulation](https://mathworld.wolfram.com/Triangulation.html). Formally, a simplicial complex $\Sigma$ is a union of simplices such that

If $\sigma$ is a simplex in $\Sigma$, then each face of $\sigma$ is a simplex in $\Sigma$.

If $\sigma_1, \sigma_2$ are simplices in $\Sigma$, then $\sigma_1 \cap \sigma_2$ is a simplex in $\Sigma$.

## Conclusion

In conclusion, delving into the realm of algebraic topology and topological data analysis has been an enlightening journey. Through my exploration of concepts like simplicial complexes and persistent homology, I've gained a deeper understanding of the mathematical structures underlying complex data analysis. As I continue my research and writing, I look forward to sharing further insights and discoveries in this fascinating field.

## References

https://www.youtube.com/watch?v=8qXOdF1_nm8