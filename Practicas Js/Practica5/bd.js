const libros = [{
        id: 1,
        titulo: "El Código Da Vinci",
        autor: "Dan Brown",
        genero: "Misterio",
        precio: 25.50,
        img: "books/img1.jpg"
    },
    {
        id: 2,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        precio: 30.00,
        img: "books/img2.jpg"
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ciencia Ficción",
        precio: 18.75,
        img: "books/img3.jpg"
    },
    {
        id: 4,
        titulo: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        precio: 22.00,
        img: "books/img4.jpg"
    },
    {
        id: 5,
        titulo: "Sapiens: De animales a dioses",
        autor: "Yuval Noah Harari",
        genero: "No Ficción",
        precio: 35.99,
        img: "books/img5.jpg"
    },
    {
        id: 6,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        precio: 45.00,
        img: "books/img6.jpg"
    },
    {
        id: 7,
        titulo: "Crimen y Castigo",
        autor: "Fiódor Dostoievski",
        genero: "Clásico",
        precio: 28.50,
        img: "books/img7.jpg"
    },
    {
        id: 8,
        titulo: "Harry Potter y la Piedra Filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasía",
        precio: 21.90,
        img: "books/img8.jpg"
    },
    {
        id: 9,
        titulo: "Matar a un Ruiseñor",
        autor: "Harper Lee",
        genero: "Clásico",
        precio: 19.50,
        img: "books/img9.jpg"
    },
    {
        id: 10,
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Ficción",
        precio: 20.99,
        img: "books/img10.jpg"
    },
    {
        id: 11,
        titulo: "Rebelión en la Granja",
        autor: "George Orwell",
        genero: "Ciencia Ficción",
        precio: 15.00,
        img: "books/img11.jpg"
    },
    {
        id: 12,
        titulo: "Veinte mil leguas de viaje submarino",
        autor: "Julio Verne",
        genero: "Aventura",
        precio: 27.50,
        img: "books/img12.jpg"
    },
    {
        id: 13,
        titulo: "La Sombra del Viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Misterio",
        precio: 32.00,
        img: "books/img13.jpg"
    },
    {
        id: 14,
        titulo: "Los Juegos del Hambre",
        autor: "Suzanne Collins",
        genero: "Juvenil",
        precio: 24.00,
        img: "books/img14.jpg"
    },
    {
        id: 15,
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Ficción",
        precio: 12.50,
        img: "books/img15.jpg"
    },
    // Repetición para alcanzar los 50 libros, variando títulos y datos
    {
        id: 16,
        titulo: "Kafka en la orilla",
        autor: "Haruki Murakami",
        genero: "Ficción",
        precio: 29.99,
        img: "books/img1.jpg"
    },
    {
        id: 17,
        titulo: "Diario de Ana Frank",
        autor: "Ana Frank",
        genero: "Biografía",
        precio: 17.50,
        img: "books/img2.jpg"
    },
    {
        id: 18,
        titulo: "Moby Dick",
        autor: "Herman Melville",
        genero: "Aventura",
        precio: 33.00,
        img: "books/img3.jpg"
    },
    {
        id: 19,
        titulo: "El Retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Clásico",
        precio: 26.50,
        img: "books/img4.jpg"
    },
    {
        id: 20,
        titulo: "Las Crónicas de Narnia",
        autor: "C.S. Lewis",
        genero: "Fantasía",
        precio: 39.99,
        img: "books/img5.jpg"
    },
    {
        id: 21,
        titulo: "El Alquimista",
        autor: "Paulo Coelho",
        genero: "Ficción",
        precio: 20.00,
        img: "books/img6.jpg"
    },
    {
        id: 22,
        titulo: "IT",
        autor: "Stephen King",
        genero: "Terror",
        precio: 38.50,
        img: "books/img7.jpg"
    },
    {
        id: 23,
        titulo: "La Ladrona de Libros",
        autor: "Markus Zusak",
        genero: "Ficción",
        precio: 23.90,
        img: "books/img8.jpg"
    },
    {
        id: 24,
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        genero: "Clásico",
        precio: 31.50,
        img: "books/img9.jpg"
    },
    {
        id: 25,
        titulo: "Los Pilares de la Tierra",
        autor: "Ken Follett",
        genero: "Histórico",
        precio: 40.99,
        img: "books/img10.jpg"
    },
    {
        id: 26,
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        genero: "Misterio",
        precio: 16.00,
        img: "books/img11.jpg"
    },
    {
        id: 27,
        titulo: "El señor de los anillos: La Comunidad",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        precio: 48.50,
        img: "books/img12.jpg"
    },
    {
        id: 28,
        titulo: "El Padrino",
        autor: "Mario Puzo",
        genero: "Ficción",
        precio: 28.00,
        img: "books/img13.jpg"
    },
    {
        id: 29,
        titulo: "La chica del tren",
        autor: "Paula Hawkins",
        genero: "Misterio",
        precio: 25.00,
        img: "books/img14.jpg"
    },
    {
        id: 30,
        titulo: "Breve historia del tiempo",
        autor: "Stephen Hawking",
        genero: "Ciencia",
        precio: 34.50,
        img: "books/img15.jpg"
    },
    {
        id: 31,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        genero: "Ciencia Ficción",
        precio: 21.00,
        img: "books/img1.jpg"
    },
    {
        id: 32,
        titulo: "Mujercitas",
        autor: "Louisa May Alcott",
        genero: "Clásico",
        precio: 19.00,
        img: "books/img2.jpg"
    },
    {
        id: 33,
        titulo: "Drácula",
        autor: "Bram Stoker",
        genero: "Terror",
        precio: 29.50,
        img: "books/img3.jpg"
    },
    {
        id: 34,
        titulo: "Anna Karenina",
        autor: "León Tolstói",
        genero: "Clásico",
        precio: 36.00,
        img: "books/img4.jpg"
    },
    {
        id: 35,
        titulo: "El nombre del viento",
        autor: "Patrick Rothfuss",
        genero: "Fantasía",
        precio: 38.99,
        img: "books/img5.jpg"
    },
    {
        id: 36,
        titulo: "Los miserables",
        autor: "Victor Hugo",
        genero: "Clásico",
        precio: 42.00,
        img: "books/img6.jpg"
    },
    {
        id: 37,
        titulo: "Un mundo feliz",
        autor: "Aldous Huxley",
        genero: "Ciencia Ficción",
        precio: 17.75,
        img: "books/img7.jpg"
    },
    {
        id: 38,
        titulo: "La Odisea",
        autor: "Homero",
        genero: "Clásico",
        precio: 24.50,
        img: "books/img8.jpg"
    },
    {
        id: 39,
        titulo: "Sherlock Holmes: Estudio en Escarlata",
        autor: "Arthur Conan Doyle",
        genero: "Misterio",
        precio: 20.50,
        img: "books/img9.jpg"
    },
    {
        id: 40,
        titulo: "El Túnel",
        autor: "Ernesto Sábato",
        genero: "Ficción",
        precio: 18.99,
        img: "books/img10.jpg"
    },
    {
        id: 41,
        titulo: "El Psicoanalista",
        autor: "John Katzenbach",
        genero: "Misterio",
        precio: 29.00,
        img: "books/img11.jpg"
    },
    {
        id: 42,
        titulo: "La historia interminable",
        autor: "Michael Ende",
        genero: "Fantasía",
        precio: 31.50,
        img: "books/img12.jpg"
    },
    {
        id: 43,
        titulo: "Donde los árboles cantan",
        autor: "Laura Gallego",
        genero: "Juvenil",
        precio: 23.00,
        img: "books/img13.jpg"
    },
    {
        id: 44,
        titulo: "El Exorcista",
        autor: "William Peter Blatty",
        genero: "Terror",
        precio: 26.00,
        img: "books/img14.jpg"
    },
    {
        id: 45,
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        precio: 30.50,
        img: "books/img15.jpg"
    },
    {
        id: 46,
        titulo: "Viaje al centro de la Tierra",
        autor: "Julio Verne",
        genero: "Aventura",
        precio: 22.50,
        img: "books/img1.jpg"
    },
    {
        id: 47,
        titulo: "Dune",
        autor: "Frank Herbert",
        genero: "Ciencia Ficción",
        precio: 37.90,
        img: "books/img2.jpg"
    },
    {
        id: 48,
        titulo: "El Perfume",
        autor: "Patrick Süskind",
        genero: "Misterio",
        precio: 24.50,
        img: "books/img3.jpg"
    },
    {
        id: 49,
        titulo: "Memorias de una Geisha",
        autor: "Arthur Golden",
        genero: "Ficción",
        precio: 28.99,
        img: "books/img4.jpg"
    },
    {
        id: 50,
        titulo: "El Código de las Emociones",
        autor: "Dr. Bradley Nelson",
        genero: "No Ficción",
        precio: 33.50,
        img: "books/img5.jpg"
    }
];