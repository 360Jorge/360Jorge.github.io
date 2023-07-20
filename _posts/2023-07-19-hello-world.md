---
layout: post
title: "Hello World!"
comments: true
description: "My first post"
keywords: "math"
---

## A Very Short Story on How I Got Where I Am

Ever since I finished high school, I knew I wanted to pursue research. I was fascinated by how theoretical physicists could understand the Universe using only paper, a pencil, and some thinking. Initially, I aspired to become a physicist, but I grew disinterested because of the way the subject was taught. Despite my lack of enthusiasm, I continued attending college, but I decided to explore topics on my own. It was during this time that I realized my passion for mathematics, but I yearned to witness its real-world applications. Since my college experience didn't provide the practical aspect I craved, I sought it online. There, I became captivated by how equations and ideas came to life through software.

This is a brief account of my journey so far. It hasn't been easy, and I've made mistakes along the way, but I cannot change the past. Currently, I am attending Georgia Gwinnett College, and I'm only a year and a half away from graduation. The upcoming semester is crucial because it will bring me close to conducting research, and so, I wanted to document all my experiences and learnings. That's the primary purpose of this blog.

## Let's put it to test

I am using Jekyll, and the thinkSpace theme for my blog. While learning on my own, I learned some web programming, and so I feel enough confidence to set up a simple static website using GitHub Pages. I also add latex support. The next part is just for testing:

#### This is some latex:

The Lagrangian equation of motion is a fundamental equation in classical mechanics that describes the dynamics of a system based on its Lagrangian function.

The Lagrangian function, denoted by L, is defined as the difference between the kinetic energy "T" and potential energy "V" of a system:

L = T - V

The Lagrangian equation of motion is derived from the principle of least action, which states that the true path taken by a system between two points in time
is the one the minimizes the action integral along the path.

The action integral "S" is defined as the integral of the Lagrangian function over time "t" from the initial time "t1" to the final time "t2":

$$
S = \int_{t_1}^{t_2} L\, dt
$$

The Lagrangian equation of motion is expressed as follows:

$$
\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q_i}} \right) - \frac{\partial L}{\partial q_i} = 0
$$

In this equation, the term $$ \frac{\partial L}{\partial \dot{q_i}}$$ is called the generalized momentum, and $$ \frac{\partial L}{\partial q_i} $$ is called the generalized force.

#### An now some code:

This is a function write in Python that prints a chessboard pattern:

```python
def print_chessboard(size):
    for i in range(size):
        for j in range(size):
            if (i + j) % 2 == 0:
                print("X", end=" ")  # Print X for black squares

            else:
                print("O", end=" ")  # Print O for white squares

        print()  # Move to the next line after each row
```
