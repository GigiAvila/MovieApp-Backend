# MovieApp 🎞️
Mi primer proyecto en backend. Se trata de una aplicación para trabajar con una base de datos noSQL de películas 

## Descripción: 
Podrás consultar el listado de peliculas completo, buscar alguna en específico o bien como crear nuevas películas o eliminarlas. 🔎


## Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Rutas](#rutas)
5. [Ejemplos](#ejemplos)

## Requisitos Previos
Para replicar este proyecto es necesario tener instalado Node.js y haber descargado y configurado MongoDB y MongoDB Compass.
A continuación deberías escribir el comando npm init -y en tu terminal y a continuación  instalar las siguientes dependencias en tu package.json: 

`npm i express
npm i mongoose 
npm i dotenv
npm i cors
npm i rate-limit `

¡No olvides configurar tus scripts y tu main también!
Puedes hacer algo así: 
```json
{
 "main": "src/index.js",
  "scripts": {
    "start": "node .",
    "dev": "node --watch ."
  }
```

A continuación puedes traer tu BD correspondientes y alojarla en la carpeta creada para ello con el nombre "SEED".  

## Uso
Una vez instalado y configurado todo deberás  lanzar el comando `npm run start` para abrir el servidor en tu local y `npm run dev` para ejecutar el modo watch de Node y listo! Ya puedes iniciar tus peticiones. 
En mi caso he utilizado la extensión "Thunder Client" en mi editor de código VS Code para poder simular las peticiones. 


## Rutas
Se han creado rutas que incluyen los métodos GET, POST, PUT y DELETE. 

Las rutas disponibles en esta API  con sus respectivos endpoints son: 

1. `GET /movies`: Obtiene una lista de todas las películas.
2. `GET /movies/:id`: Obtiene una película específica por su ID.
3. `POST /movies`: Crea una nueva película.
4. `PUT /movies/:id`: Actualiza una película existente por su ID.
6. `DELETE /movies/:id`: Borra una película por su ID.

## Ejemplos
Proporciona ejemplos de solicitudes y respuestas para cada una de las rutas. Esto ayudará a los usuarios a comprender cómo interactuar con tu API.

### Ejemplo de solicitud GET para obtener una película por ID
`http://localhost:4001/api/movies/652d28c419e0105bb6fc53fa`

### Ejemplo de respuesta exitosa
```json
{
    name: 'The Lord of the Rings: The Return of the King',
    director: 'Peter Jackson',
    year: '2003',
    actor: 'Elijah Wood',
    oscar: true,
    cover:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1699910326/lordOfRIngs_nvx0da.jpg',
    resume:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    genre: 'Fantasy',
    score: 5,
    preview:
      'https://res.cloudinary.com/dqdyvyknw/image/upload/v1700166191/MovieApp/18_-_The_Lord_of_the_Rings_The_Return_of_the_King_ty1bbc.jpg',
    keywords: ['Epic', 'Thriller', 'Book']
  }

```

