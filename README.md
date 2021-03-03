

## Labs Challenge

El objetivo de este challenge fue construir un Front-End y un Back-End que interactuen con una API externa.

Se utilizó la API pública de Mercado Libre. Se extrajo publicaciones que se guardaron en el back-end usando un caché. Para el Front-end se desarrolló una serie de Componentes de React para poder mostrar e interactuar con las publicaciones antes mencionadas.

<img src='https://media.giphy.com/media/NNYnArTx7UvU4jTpe2/giphy.gif' width='200' heigth='200' />
![minimeli](https://media.giphy.com/media/NNYnArTx7UvU4jTpe2/giphy.gif)
```
```
![mini-meli-2](https://i.ibb.co/4NRbHsG/inicio.png)
```
```
![mini-meli-3](https://i.ibb.co/616PKhk/Capturatermos.png)

### Componentes:

**SearchBar**
Un formulario controlado con un input de búsqueda, que dispara los requests a la API.

**Product Card**
En este componente se muestra un producto en particular, se muestra:
```
Su imagen.
Su titulo.
Su precio (con la moneda).
Su condicion.
Si tiene stock o no.
```

**Catalogo**
Este componente muestra un arreglo de productos usando Product Card. Tambien posibilita:
```
Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
Poder filtrar por condicion.
Poder páginar los resultados de a 30 productos por página.
```
