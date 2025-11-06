import axios from "axios";
const axiosApi = axios.create();
//Peticiones GET
//1. Obtener todos los libros
axiosApi.get('https://mock.apidog.com/m1/1088929-1078328-default/books')
    .then(response => {
        console.log('Todos los libros (20):', response.data);

    })
    .catch(error => console.error(error));

//2. Obtener libros por año. Ejemplo: 2020, 2023, 2024

axiosApi.get('https://mock.apidog.com/m1/1088929-1078328-default/books?A%C3%B1o=2020')
    .then(response => {
        console.log('Todos los libros por año:', response.data);

    })
    .catch(error => console.error(error));

//3. Obtener libros por categoria. Ejemplo: Horror, Drama, Contemporáneo, Ficción, Romance.
axiosApi.get('https://mock.apidog.com/m1/1088929-1078328-default/books?categoria=Horror')
    .then(response => {
        console.log('Todos los libros por categoría:', response.data);

    })
    .catch(error => console.error(error));

//4. Obtener libros por id Ejem: 1 - 20
axiosApi.get('https://mock.apidog.com/m1/1088929-1078328-default/books/10')
    .then(response => {
        console.log('Obtener libro por id:', response.data);

    })
    .catch(error => console.error(error));

//5. Agregar un libro al carrito de compras
axios.post('https://mock.apidog.com/m1/1088929-1078328-default/carritos/1/libros', {
    "nombre": "One to Watch",
    "autor": "Kate Stayman-Londo",
    "votos": 24301,
    "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584401917l/53103895.jpg",
    "url": "https://www.goodreads.com/book/show/53103895-one-to-watch?from_choice=true",
    "categoria": "Ficción",
    "año": 2022
})
    .then(response => {
        console.log('Libro agregado a la compra:', response.data);
    })
    .catch(error => console.error(error));
