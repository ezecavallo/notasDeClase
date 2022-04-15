---
title: 'Ejercicio 7'
matter: '#MatematicaDiscretaI'
metaTitle: 'Matematica Discreta'
metaDesc: 'Matematica Discreta - Induccion'
date: '23-03-2022'
metaTags:
  - induccion
  - sumatoria
  - recursion
tags:
  - Induccion
  - Sumatoria
---
# Ejercicio 7

Probar que $\sum_{i=0}^{n}2^{i} = 2^{n+1}-1$ para todo $n\in \mathbb{N}_{0}$.
$$
\sum_{i=0}^{n}2^{i} = 2^{n+1}-1
\\
$$

$$
\sum_{i=0}^{n}2^{i} = 2^{n+1}-1
\\
$$
**Caso base:** Se muestra que es válida para $n=0$
Entonces para $P(0)$:
$$
2^{0}=2^{0+1}-1
\\
1=2-1
\\
1=1
\\
$$
**Paso inductivo**
Entonces si $P(n)$ es verdadera. Se debe entonces mostrar que $P(n+1)$ es verdadera:
$$
P(n): x_{n}=2^{n+1}-1 \Rightarrow  P(n+1): x_{n+1}=2^{n+2}-1
\\
\sum_{i=0}^{n+1} = \sum_{i=0}^{n}2^{i} + 2^{n+1}
\\
\sum_{i=0}^{n+1} = 2^{n+1}-1 + 2^{n+1}
\\
\sum_{i=0}^{n+1} = 2*2^{n+1}-1
\\
\sum_{i=0}^{n+1} = 2^{n+2}-1
$$
Puesto que se han realizado los dos pasos de la inducción matemática tanto la base como el paso inductivo, la declaración $P(n)$ se cumple $\forall n\in \mathbb{N}_{0}$ Q.E.D.