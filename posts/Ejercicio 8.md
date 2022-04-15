---
title: 'Ejercicio 8'
matter: '#MatematicaDiscretaI'
metaTitle: 'Introducción a los algoritmos'
metaDesc: 'Introducción a los algoritmos - Clase 23-03-22'
date: '23-03-2022'
metaTags:
  - induccion
  - sumatoria
  - recursion
tags:
  - Induccion
  - Sumatoria
---
# Ejercicio 8

**Demostrar por inducción las siguientes igualdades:**

## Ejercicio 8a

a) $\sum_{j=1}^{n}j=\frac{n(n+1)}{2}$


**Caso base:** Se muestra que es válida para $n=1$
Entonces para $P(1)$:
$$
1=\frac{1(1+1)}{2}
$$
$$
1=\frac{2}{2}
$$
$$
1=1
$$
**Paso inductivo**
Entonces si $P(n)$ es verdadera. Se debe entonces mostrar que $P(n+1)$ es verdadera:
$$
P(n): \sum_{j=1}^{n}j=\frac{n(n+1)}{2} \Rightarrow  P(n+1): \sum_{j=1}^{n+1}j=\frac{(n+1)(n+2)}{2}
\\
\sum_{j=1}^{n+1}j = \sum_{j=1}^{n}j + (n+1)
\\
\sum_{j=1}^{n+1}j = \frac{n(n+1)}{2} + (n+1)
\\
\sum_{j=1}^{n+1}j = \frac{n(n+1)+2(n+1)}{2}
\\
\sum_{j=1}^{n+1}j = \frac{(n+2)(n+1)}{2}
$$
Puesto que se han realizado los dos pasos de la inducción matemática tanto la base como el paso inductivo, la declaración $P(n)$ se cumple $\forall n\in \mathbb{N}$ Q.E.D.

## Ejercicio 8b

b) $\sum_{i=1}^{n}i^{2}=\frac{n(n+1)(2n+1)}{6}$


**Caso base:** Se muestra que es válida para $n=1$
Entonces para $P(1)$:
$$
1^{2}=\frac{1(1+1)(2(1)+1)}{6}
$$
$$
1=\frac{6}{6}
$$
$$
1=1
$$
**Paso inductivo**
Entonces si $P(n)$ es verdadera. Se debe entonces mostrar que $P(n+1)$ es verdadera:
$$
P(n): \sum_{i=1}^{n}i^{2}=\frac{n(n+1)(2n+1)}{6} \Rightarrow  P(n+1): \sum_{i=1}^{n+1}i^{2}=\frac{(n+1)(n+2)(2n+3)}{6}
\\
\sum_{i=1}^{n+1}i^{2} = \sum_{i=1}^{n}i^{2} + (n+1)^{2}
\\
\sum_{i=1}^{n}i^{2} = \frac{n(n+1)(2n+1)}{6} + (n+1)^{2}
\\
\sum_{i=1}^{n}i^{2} = \frac{n(n+1)(2n+1)+6(n+1)^{2}}{6}
\\
\sum_{i=1}^{n}i^{2} = \frac{(n+1)(n(2n+1)+6(n+1))}{6}
\\
\sum_{i=1}^{n}i^{2} = \frac{(n+1)(2n^{2}+n+6n+6)}{6}
\\
\sum_{i=1}^{n}i^{2} = \frac{(n+1)(2n^{2}+7n+6)}{6}
\\
\sum_{i=1}^{n}i^{2} = \frac{(n+1)(n+2)(2n+3)}{6}
$$
Puesto que se han realizado los dos pasos de la inducción matemática tanto la base como el paso inductivo, la declaración $P(n)$ se cumple $\forall n\in \mathbb{N}$ Q.E.D.

## Ejercicio 8c

b) $\sum_{i=0}^{n}(2k+1)=(n+1)^{2}$


**Caso base:** Se muestra que es válida para $n=0$
Entonces para $P(0)$:
$$
(2(0)+1)=(0+1)^{2}
$$
$$
0+1=1^{2}
$$
$$
1=1
$$
**Paso inductivo**
Entonces si $P(n)$ es verdadera. Se debe entonces mostrar que $P(n+1)$ es verdadera:
$$
P(n): \sum_{i=0}^{n}(2k+1)=(n+1)^{2} \Rightarrow  P(n+1): \sum_{i=0}^{n+1}(2n+1)=(n+2)^{2}
\\
\sum_{i=0}^{n+1}(2k+1) = \sum_{i=0}^{n}(2k+1) + (2(n+1)+1)
\\
\sum_{i=0}^{n+1}(2k+1) = (n+1)^{2} + 2n+3
\\
\sum_{i=0}^{n+1}(2k+1) = n^{2}+2n+1 + 2n+3
\\
\sum_{i=0}^{n+1}(2k+1) = n^{2} + 4n + 4
\\
\sum_{i=0}^{n+1}(2k+1) = (n+2)^{2}
\\
$$
Puesto que se han realizado los dos pasos de la inducción matemática tanto la base como el paso inductivo, la declaración $P(n)$ se cumple $\forall n\in \mathbb{N}_{0}$ Q.E.D.

## Ejercicio 8d

d) $\sum_{i=1}^{n}i^{3}=(\frac{n(n+1)}{2})^{2}$


**Caso base:** Se muestra que es válida para $n=1$
Entonces para $P(1)$:
$$
1^{3}=(\frac{1(1+1)}{2})^{2}
$$
$$
1=1^{2}
$$
$$
1=1
$$
**Paso inductivo**
Entonces si $P(n)$ es verdadera. Se debe entonces mostrar que $P(n+1)$ es verdadera:
$$
P(n): \sum_{i=1}^{n}i^{3}=(\frac{n(n+1)}{2})^{2} \Rightarrow  P(n+1): \sum_{i=1}^{n+1}i^{3}=(\frac{(n+1)(n+2)}{2})^{2}
\\
\sum_{i=1}^{n+1}i^{3} = \sum_{i=0}^{n}i^{3} + (n+1)^{3}
\\
\sum_{i=1}^{n+1}i^{3} = (\frac{n(n+1)}{2})^{2} + (n+1)^{3}
\\
\sum_{i=1}^{n+1}i^{3} = \frac{n^{2}(n+1)^{2}}{4} + (n+1)^{3}
\\
\sum_{i=1}^{n+1}i^{3} = \frac{n^{2}(n+1)^{2}+4(n+1)^{3}}{4}
\\
\sum_{i=1}^{n+1}i^{3} = \frac{(n+1)^{2}(n^{2}+4(n+1))}{4}
\\
\sum_{i=1}^{n+1}i^{3} = \frac{(n+1)^{2}(n^{2}+4n+4)}{4}
\\
\sum_{i=1}^{n+1}i^{3} = \frac{(n+1)^{2}(n+2)^{2}}{4}
\\
\sum_{i=1}^{n+1}i^{3} = (\frac{(n+1)(n+2)}{2})^{2}
$$
Puesto que se han realizado los dos pasos de la inducción matemática tanto la base como el paso inductivo, la declaración $P(n)$ se cumple $\forall n\in \mathbb{N}$ Q.E.D.

## Ejercicio 8e

e) $\sum_{k=0}^{n}a^{k}=\frac{a^{n+1}-1}{a-1}$, donde $a\in \mathbb{R}$, $a\neq 0$, $a\neq 1$, $n\in \mathbb{N}_{0}$


**Caso base:** Se muestra que es válida para $n=0$
Entonces para $P(0)$:
$$
2^{0}=\frac{2^{0+1}-1}{2-1}
$$
$$
1=1
$$
**Paso inductivo**
Entonces si $P(n)$ es verdadera. Se debe entonces mostrar que $P(n+1)$ es verdadera:
$$
P(n): \sum_{k=0}^{n}a^{k}=\frac{a^{n+1}-1}{a-1} \Rightarrow  P(n+1): \sum_{k=0}^{n+1}a^{k}=\frac{a^{n+2}-1}{a-1}
\\
\sum_{k=0}^{n+1}a^{k}=\sum_{k=0}^{n}a^{k} + a^{k+1}
\\
\sum_{k=0}^{n+1}a^{k}=\frac{a^{n+1}-1}{a-1} + a^{n+1}
\\
\sum_{k=0}^{n+1}a^{k}=\frac{a^{n+1}-1+(a-1)(a^{n+1})}{a-1}
\\
\sum_{k=0}^{n+1}a^{k}=\frac{a^{n+1}-1+a^{n+2}-a^{n+1}}{a-1}
\\
\sum_{k=0}^{n+1}a^{k}=\frac{-1+a^{n+2}}{a-1}
$$
Puesto que se han realizado los dos pasos de la inducción matemática tanto la base como el paso inductivo, la declaración $P(n)$ se cumple $\forall n\in \mathbb{N}_{0}$ Q.E.D.


## Ejercicio 8f

f) $\sum_{i=1}^{n}(i^{2}+1)i!=n(n+1)!$


**Caso base:** Se muestra que es válida para $n=1$
Entonces para $P(1)$:
$$
(1^{2}+1)1!=1(1+1)!
$$
$$
2=2
$$
**Paso inductivo**
Entonces si $P(n)$ es verdadera. Se debe entonces mostrar que $P(n+1)$ es verdadera:
$$
P(n): \sum_{k=0}^{n}a^{k}=\frac{a^{n+1}-1}{a-1} \Rightarrow  P(n+1): \sum_{k=0}^{n+1}a^{k}=\frac{a^{n+2}-1}{a-1}
\\
\sum_{k=0}^{n+1}a^{k}=\sum_{k=0}^{n}a^{k} + a^{k+1}
\\
\sum_{k=0}^{n+1}a^{k}=\frac{a^{n+1}-1}{a-1} + a^{n+1}
\\
\sum_{k=0}^{n+1}a^{k}=\frac{a^{n+1}-1+(a-1)(a^{n+1})}{a-1}
\\
\sum_{k=0}^{n+1}a^{k}=\frac{a^{n+1}-1+a^{n+2}-a^{n+1}}{a-1}
\\
\sum_{k=0}^{n+1}a^{k}=\frac{-1+a^{n+2}}{a-1}
$$
Puesto que se han realizado los dos pasos de la inducción matemática tanto la base como el paso inductivo, la declaración $P(n)$ se cumple $\forall n\in \mathbb{N}_{0}$ Q.E.D.