---
layout: post
title: "The Pigeonhole Principle"
comments: true
description: "problem solving"
keywords: "problem-solving"
categories: [mathematics, Putnam]
---

## Introduction

Have you ever wondered how something as simple as fitting pigeons into pigeonholes can lead to profound mathematical insights? The pigeonhole principle might seem straightforward at first glance, but its applications can be surprisingly deep and far-reaching. In this blog post, we'll explore what the pigeonhole principle is, delve into some fascinating examples, and see how this principle helps solve complex problems in mathematics.

## What is the Pigeonhole Principle?

The pigeonhole principle is a simple yet powerful concept in combinatorics. It states that if you have more pigeons than pigeonholes, at least one pigeonhole must contain more than one pigeon. Formally, if $n$ items are put into $m$ containers, with $n > m$, then at least one container must hold more than one item.

## Simple Examples to Illustrate the Principle

#### Socks in a Drawer

Imagine you have 10 pairs of socks, each pair a different color, mixed together in a drawer. If you pull out 11 individual socks, at least one pair of socks will match. This is because you have more socks (11) than the number of colors (10), guaranteeing a match.

#### Birthdays in a Group

Consider a group of 13 people. According to the pigeonhole principle, at least two people will share a birth month. There are only 12 months in a year, so having 13 people ensures that one month must accommodate at least two birthdays.

## A more Complex Example

This insightful approach is detailed in 'The Art and Craft of Problem Solving' by Paul Zeitz. Solving most pigeonhole problems is often a three-part process:

1. Recognize that the problem might require the pigeonhole principle.
2. Figure out what the pigeons will be and what the holes must be.This is frequently the crux move.
3. After applying the pigeonhole principle, there is often more work to be done. Sometimes the pigeonhole principle yields only the "penultimate step", and sometimes just an intermediate result. The skilled problem solver plans for this when thinking of a strategy.

Now, let’s look at a more mathematical examples to demonstrate the power of the pigeonhole principle.

#### Problem

Show that among any $n + 1$ positive integers, there must be two whose difference is a multiple of $n$.

#### Solution

1. Consider the $n + 1$ positive integers: $a_1, a_2,..., a_{n+1}$

2. Compute the remainders of these integers when divided by $n$. Let the remainders be $r_1, r_2,..., r_{n+1}$ ($r_i$ is an integer such that $0 \le r_i \le n.$)

3.  Since there are $n + 1$ remainders and only $n$ possible values for these remainders (from $0$ to $n - 1$), by the pigeonhole principle, at least two of these integers must have the same remainder.

4. Let these integers be $a_i$ and $a_j$ with remainders $r$. Therefore, $a_i \equiv r \pmod {n}$ and $a_j \equiv r \pmod {n}$.

5. This means the difference $a_i - a_j$  is a multiple of $n$, i.e., $a_i - a_j = kn$ for some integer $k$.

Thus, we have demonstrated that among any $n + 1$ positive integers, there are at least two whose difference is a multiple of $n$.

#### Problem

(IMO 1972) Prove that from a set of ten distinct two-digit numbers (in the decimal system), it is possible to select two disjoint subsets whose members have the same sum.

> Hint: For a set with $n$ elements, the number of possible subsets is $2^n.$ Thus, for a set of $10$ elements, there are $2^{10} = 1024$ subsets.

#### Solution

We want to have two subsets have the same sum, so it is reasonable to make the subsets the pigeons, and the sums be the holes. We have to make sure that the number of subsets is larger than the number of possible sums. We already know that the number of subsets is $2^{10} = 1024.$ Now, to calculate the number of possible sums, we need the smallest possible sum (which in this case is the smallest element) and the largest possible sum which is the sum of all elements in the set. The only $2$ digits numbers are:

$$10, 11, 12,..., 90, 91, 92, 93, 94, 95, 96, 97, 98, 99$$

We can see that the smallest element is $10.$ The maximum sum for any subset is the sum of all $10$ elements. Let's assume the $10$ largest two-digit numbers to find an upper bound. Using the Gaussian pairing trick:

$$90, 91, 92, 93, 94, 95, 96, 97, 98, 99 = 189 \times 5 = 945$$

Thus, there are $945 - 10 + 1 = 936$ different sums. Since $1024 > 936$, there are more pigeons than holes. Now, we need to make sure that the two subsets are disjoint. Let $A$ and $B$ be two sets, and divide into cases:

1. $A$ and $B$ are disjoint. Done!

2. $A$ and $B$ are not disjoint. From each set, remove the elements that they have in common. Now we have disjoint sets, but the sums are still the same, so we are done! 

###### Observation:

Why the sums are still the same after removing the common element of the sets $A$ and $B$?

Let $C = A \cap B$ be the set of common elements between $A$ and $B$. Then, the sum of elements in $C$ is $\Sigma(C).$ Notice that $\Sigma(A \setminus C) = \Sigma(A) - \Sigma(C)$, and $\Sigma(B \setminus C) = \Sigma(B) - \Sigma(C)$. Since $\Sigma(A) = \Sigma(B),$ $\Sigma(A \setminus C) = \Sigma(B \setminus C).$ 

## Solved Problems

(Putnam 1978)Let $A$ be any set of $20$ distinct integers chosen from the arithmetic progression $1, 4, 7, . . . , 100.$ Prove that there must be two distinct integers in $A$ whose sum is $104.$

#### Solution

Consider the pair of integers from the sequence that sum to $104.$ Thus, we have,

$$(100,4)$$

$$(97, 7)$$

$$(94,10)$$

$$(91,13)$$

$$(88,16)$$

$$(85,19)$$

$$(82,22)$$

$$(79,25)$$

$$(76,28)$$

$$(73,31)$$

$$(70,34)$$

$$(67,37)$$

$$(64,40)$$

$$(61,43)$$

$$(58,46)$$

$$(55,49)$$

$$(52,52)$$

Notice there are $17$ pairs. When we select $20$ distinct integers from the $34$ integers, it is impossible to avoid picking both numbers from at least one of these pairs.$\ \quad \blacksquare\$

## Conclusion

The pigeonhole principle is a fundamental tool in mathematics that, despite its simplicity, can lead to profound and elegant solutions. Whether you’re matching socks or solving complex mathematical problems, the principle shows that sometimes, the simplest ideas can be the most powerful.