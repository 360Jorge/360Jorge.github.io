---
layout: post
title: "Exploring Classical Mechanics: A Journey of Self-Learning"
comments: true
description: "Classical Mechanics"
keywords: "physics"
---

## Introduction

A frame of reference is a coordinate system used to describe the position, motion, and interactions of objects in physics. And an inertial reference frame is one where the observer cannot distinguish between uniform rectilinear motion and a state of rest. This principle is called Galilean relativity, and lays the foundation for the development of classical mechanics.

This blog post is a segment extracted from the first part of the book "Classical Mechanics - 3rd ed. - Goldstein, Poole & Safko," widely recognized as a standard text for an introduction to Classical Mechanics at the graduate level.

The purpose of this post is to deepen my comprehension of classical mechanics and to acquire proficiency in using LaTeX. I attempted to summarize the content, but I found every word from the book to be of utmost importance. My goal is also to enhance my writing skills for future blog posts.

In this initial section, the authors provide a quick review of fundamental concepts typically covered in an introductory college physics course. Additionally, they demonstrate how many vital conclusions of mechanics can be expressed in the form of conservation theorems.

## Mechanics of a particle

Let $\mathbf{r}$ be the radius vector of a particle from some given origin and $\mathbf{v}$ its vector velocity

$$
\begin{align}
\mathbf{v} = \frac{d\mathbf{r}}{dt}
\end{align}
$$

The linear momentum $\mathbf{p}$ of the particle is defined as the product of the particle mass and its velocity:

$$
\begin{align}
\mathbf{p} = m \mathbf{v}
\end{align}
$$

In consequece of interactions with external objects and fields, the vector sum of these forces exerted on the particle is the total force $\mathbf{F}$. The mechanics of a particle is contained in Newton's second law of motion, which states that there exist frames of reference in which the motion of the particle is described by the differential equation

$$
\begin{align}
\mathbf{F} = \frac{d\mathbf{p}}{dt} \equiv \dot{\mathbf{p}}
\end{align}
$$

or

$$
\begin{align}
\frac{d}{dt} (m\mathbf{v})
\end{align}
$$

In most instances, the mass of the particle is constant, and the equation reduces to

$$
\begin{align}
\mathbf{F} = m \frac{d\mathbf{v}}{dt} = m \mathbf{a}
\end{align}
$$

where $\mathbf{a}$ is the vector acceleration of the particle defined by

$$
\begin{align}
\mathbf{a} = \frac{d^2\mathbf{r}}{dt^2}
\end{align}
$$

A reference frame in which Eq. (3) is valid is called an inertial or Galilean system. Even within classical mechanics the notion of an inertial system is something of an idealization. However, it is usually feasible to set up a coordinate system that comes as close to the desired properties as may be required.

Many of the important conclusions of mechanics can be expressed in the form of conservation theorems, which indicate under what conditions various mechanical quantities are constant in time. Equation (3) directly furnishes the first of these,

> Conservation Theorem for the Linear Momentum of a Particle: If the total force, $\mathbf{F}$, is zero, then $\dot{\mathbf{p}} = 0$ and the linear momentum $\mathbf{p}$, is conserved.

### Angular Momentum of a Particle

The angular momentum of a particle about point O, denoted by $\mathbf{L}$, is defined as

$$
\begin{align}
\mathbf{L} = \mathbf{r} \times \mathbf{p}
\end{align}
$$

where $\mathbf{r}$ is the radius vector from O to the particle. We now define the moment of force or torque about O as

$$
\begin{align}
\mathbf{N} = \mathbf{r} \times \mathbf{F}
\end{align}
$$

The equation analogous to (3) for $\mathbf{N}$ is obtained by forming the cross product of $\mathbf{r}$ with Eq. (4):

$$
\begin{align}
\mathbf{r} \times \mathbf{F} = \mathbf{N} = \mathbf{r} \times \frac{d}{dt} (m\mathbf{v})
\end{align}
$$

Equation (9) can be written in a different form by using the vector identity:

$$
\begin{align}
\frac{d}{dt} (\mathbf{r} \times m\mathbf{v}) = \mathbf{v} \times m\mathbf{v} + \mathbf{r} \times \frac{d}{dt} (m\mathbf{v})
\end{align}
$$

where the first term on the right obviously vanishes. In consequence of this identity, Eq. (9) takes the form

$$
\begin{align}
\mathbf{N} = \frac{d}{dt} (\mathbf{r} \times m\mathbf{v}) = \frac{d}{dt} (\mathbf{L}) \equiv \dot{\mathbf{L}}
\end{align}
$$

Note that both $\mathbf{N}$ and $\mathbf{L}$ depend on the point O, about which the moments are taken.

As was the case for Eq. (3), the torque equation, (11), also yields an immediate conservation theorem, this time the

> Conservation Theorem for the Angular Momentum of a Particle: If the total torque, $\mathbf{N}$, is zero then $\dot{\mathbf{L}} = 0$, and the angular momentum $\mathbf{L}$ is conserved.

### Energy Conservation

Consider the work done by the external force $\mathbf{F}$ upon the particle in going from point 1 to point 2. By definition, this work is

$$
\begin{align}
W = \int_{1}^{2} \mathbf{F} \cdot d\mathbf{s}
\end{align}
$$

For constant mass (as will be assumed from now on unless otherwise specified), the integral in Eq.(12) reduces to

$$
W = \int \mathbf{F} \cdot d\mathbf{s} = m \int \frac{d\mathbf{v}}{dt} \cdot \mathbf{v} dt = \frac{m}{2} \int  \frac{d}{dt} (v^2) dt
$$

and therefore

$$
\begin{align}
W_{12} = \frac{m}{2} (v_{2}^2 - v_{1}^2)
\end{align}
$$

The scalar quantity $mv^2/2$ is called the kinetic energy of the particle and is denoted by T, so that the work done is equal to the change in the kinetic energy:

$$
\begin{align}
W_{12} = T_{2} - T_{1}
\end{align}
$$

If the force field is such that the work $W_{12}$ is the same for any physically possible path between points 1 and 2, then the force (and the system) is said to be _conservative_. An alternative description of a conservative system is obtained by imagining the particle being taken from point 1 to point 2 by one possible path and then being returned to point 1 by another path. The independence of $W_{12}$ on the particular path implies that the work done around such a closed circuit is zero, i.e.:

$$
\begin{align}
\oint \mathbf{F} \cdot d\mathbf{s}
\end{align}
$$

Physically it is clear that a system cannot be conservative if friction or other disipation forces are present, because $\mathbf{F} \cdot d\mathbf{s}$ due to friction is always positive and integral cannot vanish.

By a well-known theorem of vector analysis, a necessary and sufficient condition that the work, $W_{12}$, be independent of the physical path taken by the particle is that $\mathbf{F}$ be the gradient of some scalar function of position:

$$
\begin{align}
\mathbf{F} = - \nabla V(\mathbf{r})
\end{align}
$$

where $V$ is called the _potential_, or _potential energy_. The existence of V can be inferred intuitively by a simple argument. If $W_{12}$ is independent of the path of integration between the end points 1 and 2, it should be possible to express $W_{12}$ as the change in a quantity that depends only upon the positions of the end points. This quantity may be designated by $-V$, so that for a differential path length we have the relation

$$
\mathbf{F} \cdot d\mathbf{s} = -dV
$$

or

$$
F_{s} = - \frac{\partial V}{\partial s},
$$

which is equivalent to Eq.(16). Note that in Eq.(16) we can add to $V$ any quantity constant in space, without affecting the results. Hence _the zero level of V is arbitrary_.

For a conservative system, the work done by the force is

$$
\begin{align}
W_{12} = V_{1} - V_{2}
\end{align}
$$

Combining Eq.(17) with Eq.(14), we have the result

$$
\begin{align}
T_{1} + V_{1} = T_{2} + V_{2}
\end{align}
$$

which states in symbols the

> Energy Conservation Theorem for a Particle: If the forces acting on a particle are conservative, then the total energy of the particle, $T + V$ is conserved.

The force applied to a particle may in some circumstances be given by the gradient of a scalar function that depends explicitly on both the position of the particle and the time. However, the work done on a particle when it travels a distance $ds$,

$$
\begin{align}
\mathbf{F} \cdot d\mathbf{s} = - \frac{\partial V}{\partial s} ds
\end{align}
$$

is then no longer the total change in $-V$ during the displacement, since $V$ also changes explicitly with time as the particle moves. Hence, the work done as the particle goes from point 1 to point 2 is no longer the difference in the function $V$ between those points. While a total energy $T + V$ may still be defined, it is not conserved during the course of the particle's motion.

## Conclusion

When I seek a deeper understanding of a topic, I find it helpful to type or write down my thoughts and insights with a pencil. In the past, I used to write down my notes in a personal notebook, but I realized the value of sharing my knowledge with others. By making my notes public, not only can others benefit from them, but I also have easy access to them from anywhere. Additionally, to truly deepen my understanding, I know that simply reading isn't enough; I need to engage further by reading more extensively and practicing problems. Working through problems helps reinforce the concepts I've learned and serves as a gauge to test my comprehension.
