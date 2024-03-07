---
layout: post
title: "Set & Function"
comments: true
description: "sets and functions"
keywords: "topology"
---

## Introduction

Let $u_0, u_1,...,u_k$ be points in $\mathbb{R}^{d}$. A point $x = \sum_{i=0}^{k} \lambda_i u_i$, with each $\lambda_i \in \mathbb{R}$, is an affine combination of the $u_i$ if the $\lambda_i$ sum to $1$. The affine hull is the set of affine combinations. It is a $k$-plane if the $k+1$ points are affinely independent, by which we mean that any two affine combinations, $x = \sum \lambda_i u_i$ and $y = \sum \mu_i u_i$, are the same iff $ \lambda_i = \mu_i$ for all $i$. The $k+1$ points are affinely independent iff the $k$ vectors $u_i - u_0$, for $1 \leq i \leq k$, are linearly independent. In $\mathbb{R}^{d}$ we can have at most $d$ linearly independent vectors and therefore at most $d+1$ affinely independent points.

### Hello World

I am interested in the bridge between pure mathematics and its applications to the real world. I usually find myself switching between the two. Some days I enjoy redoing proofs of some theorems I learn in class, othres I enjoing coding. 

I am currently taking classes in Real Analysis, and Topology which is going to be helpful since I want to do my research in Topological Data Analysis. 

 Also, what better way to see what I know and what I dont by writing it down. Also, to give back to the community.

 and books to better understand what is going on in packages such as scikit-TDA in python

  In this post I am going to start writing what I have learnt so far. Since I am still learning, I might make some mistakes that I will fix as I learn more, and if I feel the post starts making too long, or some parts need more detail explanations, I will break it down into smaller posts.