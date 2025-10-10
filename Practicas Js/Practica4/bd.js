const propiedades = [{
        id: 1,
        titulo: "Residencia Urbana",
        ubicacion: "Ciudad de México",
        tipo: "casa",
        habitaciones: 3,
        banos: 2,
        precio: 750000,
        imagen: "https://picsum.photos/id/111/400/300"
    },
    {
        id: 2,
        titulo: "Apartamento de Lujo",
        ubicacion: "Madrid",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 2,
        precio: 520000,
        imagen: "https://picsum.photos/id/112/400/300"
    },
    {
        id: 3,
        titulo: "Casa de Campo",
        ubicacion: "Bogotá",
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        precio: 980000,
        imagen: "https://picsum.photos/id/113/400/300"
    },
    {
        id: 4,
        titulo: "Estudio Céntrico",
        ubicacion: "Buenos Aires",
        tipo: "apartamento",
        habitaciones: 1,
        banos: 1,
        precio: 210000,
        imagen: "https://picsum.photos/id/114/400/300"
    },
    {
        id: 5,
        titulo: "Villa con Piscina",
        ubicacion: "Miami",
        tipo: "casa",
        habitaciones: 5,
        banos: 4,
        precio: 1500000,
        imagen: "https://picsum.photos/id/115/400/300"
    },
    {
        id: 6,
        titulo: "Apartamento con Vista",
        ubicacion: "Bogotá",
        tipo: "apartamento",
        habitaciones: 3,
        banos: 2,
        precio: 650000,
        imagen: "https://picsum.photos/id/116/400/300"
    },
    {
        id: 7,
        titulo: "Loft en Palermo",
        ubicacion: "Buenos Aires",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 1,
        precio: 350000,
        imagen: "https://picsum.photos/id/117/400/300"
    },
    {
        id: 8,
        titulo: "Casa en las afueras",
        ubicacion: "Ciudad de México",
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        precio: 890000,
        imagen: "https://picsum.photos/id/118/400/300"
    },
    {
        id: 9,
        titulo: "Penthouse con Terraza",
        ubicacion: "Madrid",
        tipo: "apartamento",
        habitaciones: 3,
        banos: 3,
        precio: 1200000,
        imagen: "https://picsum.photos/id/119/400/300"
    },
    {
        id: 10,
        titulo: "Casa Familiar",
        ubicacion: "Miami",
        tipo: "casa",
        habitaciones: 4,
        banos: 2,
        precio: 950000,
        imagen: "https://picsum.photos/id/120/400/300"
    },
    {
        id: 11,
        titulo: "Moderno Apartamento",
        ubicacion: "Bogotá",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 2,
        precio: 450000,
        imagen: "https://picsum.photos/id/121/400/300"
    },
    {
        id: 12,
        titulo: "Casa de Vacaciones",
        ubicacion: "Miami",
        tipo: "casa",
        habitaciones: 5,
        banos: 3,
        precio: 1300000,
        imagen: "https://picsum.photos/id/122/400/300"
    },
    {
        id: 13,
        titulo: "Residencia de Lujo",
        ubicacion: "Buenos Aires",
        tipo: "casa",
        habitaciones: 5,
        banos: 4,
        precio: 1800000,
        imagen: "https://picsum.photos/id/123/400/300"
    },
    {
        id: 14,
        titulo: "Apartamento Loft",
        ubicacion: "Ciudad de México",
        tipo: "apartamento",
        habitaciones: 1,
        banos: 1,
        precio: 300000,
        imagen: "https://picsum.photos/id/124/400/300"
    },
    {
        id: 15,
        titulo: "Casa con Jardín",
        ubicacion: "Madrid",
        tipo: "casa",
        habitaciones: 3,
        banos: 2,
        precio: 850000,
        imagen: "https://picsum.photos/id/125/400/300"
    },
    {
        id: 16,
        titulo: "Apartamento en el centro",
        ubicacion: "Bogotá",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 1,
        precio: 400000,
        imagen: "https://picsum.photos/id/126/400/300"
    },
    {
        id: 17,
        titulo: "Residencia con Vista al Mar",
        ubicacion: "Miami",
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        precio: 2100000,
        imagen: "https://picsum.photos/id/127/400/300"
    },
    {
        id: 18,
        titulo: "Loft Industrial",
        ubicacion: "Buenos Aires",
        tipo: "apartamento",
        habitaciones: 1,
        banos: 1,
        precio: 250000,
        imagen: "https://picsum.photos/id/128/400/300"
    },
    {
        id: 19,
        titulo: "Casa Adosada",
        ubicacion: "Madrid",
        tipo: "casa",
        habitaciones: 3,
        banos: 2,
        precio: 600000,
        imagen: "https://picsum.photos/id/129/400/300"
    },
    {
        id: 20,
        titulo: "Apartamento con balcón",
        ubicacion: "Ciudad de México",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 1,
        precio: 450000,
        imagen: "https://picsum.photos/id/130/400/300"
    },
    {
        id: 21,
        titulo: "Casa de campo con gran jardín",
        ubicacion: "Bogotá",
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        precio: 1100000,
        imagen: "https://picsum.photos/id/131/400/300"
    },
    {
        id: 22,
        titulo: "Apartamento moderno en el centro",
        ubicacion: "Buenos Aires",
        tipo: "apartamento",
        habitaciones: 3,
        banos: 2,
        precio: 700000,
        imagen: "https://picsum.photos/id/132/400/300"
    },
    {
        id: 23,
        titulo: "Casa con piscina",
        ubicacion: "Madrid",
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        precio: 1300000,
        imagen: "https://picsum.photos/id/133/400/300"
    },
    {
        id: 24,
        titulo: "Apartamento tipo estudio",
        ubicacion: "Ciudad de México",
        tipo: "apartamento",
        habitaciones: 1,
        banos: 1,
        precio: 200000,
        imagen: "https://picsum.photos/id/134/400/300"
    },
    {
        id: 25,
        titulo: "Casa unifamiliar",
        ubicacion: "Bogotá",
        tipo: "casa",
        habitaciones: 3,
        banos: 2,
        precio: 850000,
        imagen: "https://picsum.photos/id/135/400/300"
    },
    {
        id: 26,
        titulo: "Ático en el centro",
        ubicacion: "Madrid",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 2,
        precio: 950000,
        imagen: "https://picsum.photos/id/136/400/300"
    },
    {
        id: 27,
        titulo: "Residencia familiar grande",
        ubicacion: "Miami",
        tipo: "casa",
        habitaciones: 5,
        banos: 4,
        precio: 2500000,
        imagen: "https://picsum.photos/id/137/400/300"
    },
    {
        id: 28,
        titulo: "Apartamento luminoso",
        ubicacion: "Buenos Aires",
        tipo: "apartamento",
        habitaciones: 3,
        banos: 2,
        precio: 600000,
        imagen: "https://picsum.photos/id/200/400/300"
    },
    {
        id: 29,
        titulo: "Casa en la montaña",
        ubicacion: "Bogotá",
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        precio: 1500000,
        imagen: "https://picsum.photos/id/139/400/300"
    },
    {
        id: 30,
        titulo: "Apartamento con vista al río",
        ubicacion: "Buenos Aires",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 1,
        precio: 450000,
        imagen: "https://picsum.photos/id/140/400/300"
    },
    {
        id: 31,
        titulo: "Casa de playa",
        ubicacion: "Miami",
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        precio: 2200000,
        imagen: "https://picsum.photos/id/141/400/300"
    },
    {
        id: 32,
        titulo: "Apartamento en el corazón de la ciudad",
        ubicacion: "Madrid",
        tipo: "apartamento",
        habitaciones: 1,
        banos: 1,
        precio: 350000,
        imagen: "https://picsum.photos/id/142/400/300"
    },
    {
        id: 33,
        titulo: "Residencia campestre",
        ubicacion: "Bogotá",
        tipo: "casa",
        habitaciones: 5,
        banos: 4,
        precio: 1800000,
        imagen: "https://picsum.photos/id/143/400/300"
    },
    {
        id: 34,
        titulo: "Apartamento en zona exclusiva",
        ubicacion: "Ciudad de México",
        tipo: "apartamento",
        habitaciones: 3,
        banos: 2,
        precio: 850000,
        imagen: "https://picsum.photos/id/144/400/300"
    },
    {
        id: 35,
        titulo: "Casa moderna en zona residencial",
        ubicacion: "Buenos Aires",
        tipo: "casa",
        habitaciones: 4,
        banos: 3,
        precio: 1200000,
        imagen: "https://picsum.photos/id/145/400/300"
    },
    {
        id: 36,
        titulo: "Apartamento con vista panorámica",
        ubicacion: "Madrid",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 1,
        precio: 600000,
        imagen: "https://picsum.photos/id/146/400/300"
    },
    {
        id: 37,
        titulo: "Residencia frente al lago",
        ubicacion: "Bogotá",
        tipo: "casa",
        habitaciones: 5,
        banos: 4,
        precio: 2300000,
        imagen: "https://picsum.photos/id/147/400/300"
    },
    {
        id: 38,
        titulo: "Apartamento con terraza",
        ubicacion: "Ciudad de México",
        tipo: "apartamento",
        habitaciones: 2,
        banos: 2,
        precio: 700000,
        imagen: "https://picsum.photos/id/201/400/300"
    },
    {
        id: 39,
        titulo: "Casa colonial",
        ubicacion: "Buenos Aires",
        tipo: "casa",
        habitaciones: 3,
        banos: 2,
        precio: 900000,
        imagen: "https://picsum.photos/id/149/400/300"
    },
    {
        id: 40,
        titulo: "Apartamento con vistas a la ciudad",
        ubicacion: "Madrid",
        tipo: "apartamento",
        habitaciones: 3,
        banos: 2,
        precio: 800000,
        imagen: "https://picsum.photos/id/202/400/300"
    }
];