# Weather Api Rest
[![Build Status](https://travis-ci.com/rodosj89/weather.svg?branch=master)](https://travis-ci.com/rodosj89/weather)
[![Coverage Status](https://coveralls.io/repos/github/rodosj89/weather/badge.svg?branch=master)](https://coveralls.io/github/rodosj89/weather?branch=master)


### Descripcion
Api Rest de pronostico del clima.

### Alcance
- Obtener detalle de la ciudad segun ubicacion del usuario.
- Obtener el pronostico actual segun la ubicacion del usuario.
- Obtener el pronostico actual segun el nombre de la ciudad solicitada por usuario.
- Obtener el pronostico a 5 dias segun la ubicacion del usuario.
- Obtener el pronostico a 5 dias segun el nombre de la ciudad solicitada por usuario.

&nbsp;

### Run App

- Usar Node v10.21.0
- Instalar dependencias: `npm i`
- Run: `npm start`
- Swagger: acceder desde un Browser a http://localhost:3000/explorer

&nbsp;

### Run Test
```
npm run test
```
&nbsp;

### Run Test with Coverage
```
npm run coverage
```
&nbsp;


### Run Docker
```
npm run docker:build && npm run docker:run
```
&nbsp;

### Dependencias:
- Libreria [IPLocate for Node.js](https://www.npmjs.com/package/node-iplocate)
- Servicio de [OpenWeather](https://openweathermap.org/)

&nbsp;

### Developer
[Ariel Ruiz Pardo](https://www.linkedin.com/in/rodolfo-ariel-ruiz-pardo/)

