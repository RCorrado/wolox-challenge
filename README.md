# Wolox Code Challenge

Code Challenge de React.JS

## Horas totales destinadas al challenge: 12

## Tecnologías utilizadas

Para el desarrollo e implementación del code challenge se utilizó:

### React.JS

### React-router-dom 

para Ruteo entre Screens

### SASS

para estilado

### Create-React-App

para building de Front-End

### Firebase

para Deploy

### Git + GitHub

para versionado

## Deudas técnicas y especificaciones

En base a los requerimientos pasados se detalla lo siguiente

### Botón "Login" lleva a registro

Si bien se reconoce que dicha decisión atentaría contra la Ux del sitio, se decidió utilizar ese criterio para respetar en la mayor medida posible el diseño enviado.

### Listado de países y provincias

Para agilizar el proceso de carga de países y provincias (principalmente, para dar más realismo al contenido sin tener que investigar sobre departamentos/provincias de los países en cuestión) se implementa el package de npm country-state-city [https://www.npmjs.com/package/country-state-city]

### No se implementaron React.lazy/suspense ni linters

Respecto al primero, se implementó el concepto de dynamic imports referente a ES2020 y que también se encuentra en el apartado "División de código" de React [https://es.reactjs.org/docs/code-splitting.html]

### Verbosidad de Views

Se reconoce que las vies Register y Techs podrían (y deberían) ser modularizadas tanto a nivel componentes como en sentido de funciones y métodos, principalmente teniendo en cuenta la escalabilidad y la atomicidad de los react components; sin embargo, por la naturaleza del challenge se decidió dejar de la manera en la que se encuentra