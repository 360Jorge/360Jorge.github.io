---
layout: post
title: "Complexes"
comments: true
description: "topological data analysis"
keywords: "TDA"
---

## Introduction

I am interested in the bridge between pure mathematics and its applications to the real world. As an applied math major at GGC, I am required to work on some kind of research before I graduate. I am currently taking classes in Real Analysis, and Topology which is going to be helpful since I want to do my research in Topological Data Analysis. As I read papers, and books to better understand what is going on between packages such scikit-TDA in python, I constantly found words such as simplicial complexes, point cloud data, Cech complex, Rips complex, and persisten homology. In this post, I am going to mathematically describe some of these concepts to better understand and be able to write a paper myself. 

## Simplicial Complexes

#### Simplices

Let $u_0, u_1,...,u_k$ be points in $\mathbb{R}^{d}$. A point $x = \sum_{i=0}^{k} \lambda_i u_i$, with each $\lambda_i \in \mathbb{R}$, is an affine combination of the $u_i$ if the $\lambda_i$ sum to $1$. The affine hull is the set of affine combinations. It is a $k$-plane if the $k+1$ points are affinely independent, by which we mean that any two affine combinations, $x = \sum \lambda_i u_i$ and $y = \sum \mu_i u_i$, are the same iff $ \lambda_i = \mu_i$ for all $i$. The $k+1$ points are affinely independent iff the $k$ vectors $u_i - u_0$, for $1 \leq i \leq k$, are linearly independent. In $\mathbb{R}^{d}$ we can have at most $d$ linearly independent vectors and therefore at most $d+1$ affinely independent points.