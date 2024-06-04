---
layout: post
title: "Topological Data Analysis"
comments: true
description: "topological data analysis"
keywords: "topology, data analysis"
---

## Introduction

The next blog post is what I have learned during my research experience in one of my classes at GGC. Topological Data Analysis(TDA) is a field that lies in the intersection of data analysis, algebraic topology, and statistics. Topological Data Analysis (TDA) is studying the topological properties of data sets such as the connectivity, shape, and holes to uncover meaningful information about the data. In this post, I will discuss the background of how TDA works and apply it to a synthetic data set.

## Understanding TDA

To effectively grasp Topological Data Analysis (TDA), it's helpful to have some intuition about topology and persistent homology. Topology, in simple terms, explores the properties of shapes that remain unchanged under continuous deformations, such as stretching, bending, and twisting, without tearing or gluing. Shapes that can be transformed into each other in this manner are considered topologically equivalent. A classic example often used to illustrate topology is the equivalence between a coffee mug and a torus, as they can both be deformed into each other without losing their essential topological features. 

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/coffeemug-torus (2).png)
{: refdef}

Persistent homology (PH) is a method used in TDA to study qualitative features of data that persists across multiple scales. 

Persistent homology has its roots in the field of algebraic topology. Its computation requires two things: a simplicial complex $K$ and a filtration $\mathcal{F}$ defined on $K$.

Understanding these fundamental concepts of topology lays the groundwork for delving into the intricacies of TDA.


#### Simplices and Simplicial Complexes

A special topological space is a simplex. It can be seen as a generalization of a triangle, or a generalization of a graph. A $0$-simplex is a point, a $1$-simplex is a line, a $2$-simplex is a triangle, and a $3$-simplex is a tetrahedron, up until $k$-simplices, where $k \in \mathbb{N}$ is the dimension of the complex.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/simplicial-complex2.png)
{: refdef}

> A simplicial complex $K$ is an object built by gluing together simplices.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/simplicialcomplex.png)
{: refdef}

A filtration $\mathcal{F}$ on $K$ is a nested sequence $K_0 \subseteq K_1 \subseteq ... \subseteq K_N = K$ of subcomplexes of $K$.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/filtration2.png)
{: refdef}

#### Topological Invariants

One way to distinguish spaces is by their betti numbers, which count `"holes."`

$$
\beta_0 =  \text{number of connected components}
$$

$$
\beta_1 =  \text{number of (independent) loops}
$$

$$
\beta_2 =  \text{number of voids}
$$

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/coffeemug-betti.png)
{: refdef}

As we can see, the torus(the donut shape surface) and the coffee mug have the same betti numbers.
{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/images.jpg)
{: refdef}
## From Data Points to Simplicial Complexes

The journey from raw data points to a fully constructed simplicial complex is a foundational aspect of topological data analysis (TDA). This process transforms a set of individual data points into a geometric structure that encodes their relationships, allowing us to uncover the underlying topological features of the data.

1. Data Points:

We begin with a set of data points, typically represented as coordinates in a high-dimensional space. These points could represent anything from measurements in a scientific experiment to features in an image dataset.

2. Proximity or Similarity Criteria:

To determine which data points are connected, we need a measure of proximity or similarity. Common choices include Euclidean distance, cosine similarity, or other domain-specific metrics. The choice of metric can significantly influence the resulting simplicial complex.

3. Constructing Edges:

The simplest step is to connect pairs of points that are within a certain distance threshold, forming edges. For example, if two points are within a specified radius, we draw an edge between them. This creates a graph structure where each point is a vertex, and each connection is an edge.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/cech.png)
{: refdef}

4. Higher-Dimensional Simplices:

To capture more complex relationships, we extend this idea to higher dimensions:
Triangles (2-Simplices): If three points are pairwise connected by edges, they form a triangle. This triangle represents a 2-simplex. Tetrahedra (3-Simplices): If four points are mutually connected by edges, they form a tetrahedron, representing a 3-simplex. This process can be generalized to higher dimensions, forming k-simplices where 𝑘 + 1 points are mutually connected.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/balls.png)
{: refdef}

5. Filtration:

To analyze data at multiple scales, we construct a sequence of nested simplicial complexes, known as a filtration. Starting with a small distance threshold, we gradually increase this threshold, adding more edges and higher-dimensional simplices as more points become connected. Each step in the filtration corresponds to a different scale, revealing how topological features emerge, persist, and eventually disappear as we move through the sequence.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/sixth-sequence.png)
{: refdef}

Example: Constructing a Simplicial Complex

```python

import numpy as np
import matplotlib.pyplot as plt
from scipy.spatial.distance import pdist, squareform
from scipy.spatial import Delaunay

# Sample data points

data_points = np.random.rand(10, 2)  # 10 points in 2D space

# Compute pairwise distances

distance_matrix = squareform(pdist(data_points))

# Set a distance threshold

threshold = 0.3

# Initialize simplicial complex

edges = []

# Add edges based on the distance threshold

for i in range(len(data_points)):
    for j in range(i+1, len(data_points)):
        if distance_matrix[i, j] < threshold:
            edges.append((i, j))

# Plot the data points and edges

plt.scatter(data_points[:, 0], data_points[:, 1])
for edge in edges:
    point1 = data_points[edge[0]]
    point2 = data_points[edge[1]]
    plt.plot([point1[0], point2[0]], [point1[1], point2[1]], 'b-')

plt.title('Simplicial Complex at Threshold = {}'.format(threshold))
plt.show()

```

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/threshold.png)
{: refdef}

Given a set of points, we `"fatten"` them up to balls and look at intersections to get a simplicial complex. When the balls intersect, we connect the dots.


By keeping track of when the balls intersect, we can quantify when topological features like connected components, loops or voids are `"born"` or `"die"`. We get a sequence of simplicial complexes by varying the radius of the balls.

## Persistence and Persistent Diagrams

Homology, which is a tool used to detect n-dimensional holes, is a theory in algebraic topology.

> Homology is a theory that takes as input a shape $X$ and outputs a vector space $H_n(X)$ with basis given by the holes(connected components, holes, and voids) of $X$.

We will track both 0-dimensional and 1-dimensional persistence diagrams to gain a deeper understanding of these diagrams. The graphics below illustrates the growth of the balls around data points, demonstrating the changing Betti numbers through a dynamic **persistence diagram**.

We will better ilustrate persistent diagrams in the next section.

#### 0d Persistent Homology

0d persistent homology detects connected components. As the ball radius incresases, 0-dimensional PH records when the ball in one connected component first intersects a ball of a different connected component. At radius $0$, a connected component for each point is born, and once any to balls touch, we have a death of a connected component.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/1_VZAMTElMafRjz4CtVaEqgg.gif)
{: refdef}

#### 1d Persistent Homology

As we recalled, 1-dimensional PH detects loops, and it keeps track of when loops form and vanish.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/1_P8wFt0DqQheT8xEMgx-Z5w.gif)
{: refdef}

The dots close to the diagonal are born and die almost immediately and do not represent `"real"` topological features.

## Example with Code

The next code creates 10 different sets of 2D circular data points using the `make_circles` function from `sklearn.datasets`. Each set has 100 points, and the inner and outer circle radius is randomly determined. The generated datasets are stored in a numpy array.

```python

import numpy as np
np.random.seed(seed=42)
from gtda.homology import VietorisRipsPersistence
from sklearn.datasets import make_circles

X = np.asarray([
    make_circles(100, factor=np.random.random())[0]
    for i in range(10)
])

```

And the next code uses the `plot_point_cloud` function to visualize the first dataset (one of the circular point clouds).

```python

from gtda.plotting import plot_point_cloud
i = 0
plot_point_cloud(X[i])

```

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/concentric-circles.png)
{: refdef}

The next lines of code creates an instance of the `VietorisRipsPersistence` class from the `gtda.homology module`. This is a tool used for computing the persistence diagrams of a point cloud. It computes the persistence diagrams for the datasets stored in `X`. The `fit_transform` method processes the point cloud data to generate the persistence diagrams, which capture topological features like connected components and loops across different scales.

```python

VR = VietorisRipsPersistence()
Xt = VR.fit_transform(X)

```
And it uses the `plot` method of the `VietorisRipsPersistence` instance to visualize the persistence diagrams. The `sample=i` argument specifies which persistence diagram (corresponding to which dataset) to plot. In this case, `i=0` indicates the first dataset.

```python

VR.plot(Xt, sample=i)

```
{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/persistent-diagram.png)
{: refdef}

As we change the value of `𝑖` from 0 to 9, the concentric circles will vary in their radius, and they might get closer as in the picture below. 

```python

import numpy as np
np.random.seed(seed=42)
from gtda.homology import VietorisRipsPersistence
from sklearn.datasets import make_circles

X = np.asarray([
    make_circles(100, factor=np.random.random())[0]
    for i in range(10)
])

```

```python

from gtda.plotting import plot_point_cloud
i = 9
plot_point_cloud(X[i])

```

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/sdt.png)
{: refdef}

```python

VR = VietorisRipsPersistence()
Xt = VR.fit_transform(X)

```

```python

VR.plot(Xt, sample=i)

```
In the next persistent diagrams, the red dots  are closer, indicting that connected components die sooner, and this is because the concentric circles are closer to each other. Remember that in a point cloud, each individual point starts as its own connected component at the smallest scale. As the scale increases (imagine growing balls around each point), these individual components start to merge. The "death" of an $H_0$ feature happens when two or more points become connected, forming a single component.

{:refdef: style="text-align: center;"}
![concentric-circles](/assets/images/sdt2.png)
{: refdef}

## Conclusion

In this exploration of Topological Data Analysis (TDA), we delved into its mathematical foundations and practical applications, uncovering the profound insights it can provide about the structure and features of complex datasets. By leveraging the principles of algebraic topology, TDA enables us to analyze the shape, connectivity, and voids within data, offering a unique perspective that traditional statistical methods might overlook.

Understanding the mathematical underpinnings of TDA is crucial for effectively interpreting and extracting valuable insights from data. This foundational knowledge equips us to apply TDA techniques more accurately, leading to more robust and meaningful analyses. For instance, our exploration of concentric circles and their persistence diagrams illustrated how TDA can reveal nuanced differences in data structure, which can be pivotal in various research and applied contexts.

As we conclude, it’s clear that TDA is a powerful tool with wide-ranging applications, from identifying patterns in high-dimensional data to enhancing machine learning algorithms. I encourage readers to delve deeper into TDA, exploring its rich theoretical background and experimenting with its applications in their own research or projects. By doing so, you can uncover new dimensions of understanding and leverage the full potential of your data. 

## References

https://towardsdatascience.com/persistent-homology-with-examples-1974d4b9c3d0

https://www.youtube.com/watch?v=8qXOdF1_nm8

https://wandb.ai/captain-pool/topoae/reports/Topological-Autoencoders--Vmlldzo1Mjk2MTI

https://giotto-ai.github.io/gtda-docs/latest/notebooks/plotting_api.html

https://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-017-0109-5

https://www2.math.upenn.edu/~ghrist/preprints/barcodes.pdf

