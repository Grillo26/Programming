const recetas = [{
        id: 1,
        titulo: "Lasaña Clásica de Carne",
        ingredientes: ["carne molida", "pasta para lasaña", "salsa de tomate", "queso mozzarella", "cebolla", "ajo", "leche", "mantequilla", "harina"],
        imagen: "https://picsum.photos/id/201/400/300",
        instrucciones: "Prepara la salsa boloñesa y la salsa bechamel. Alterna capas de pasta, boloñesa, bechamel y queso mozzarella. Hornea a 180°C (350°F) durante 30 minutos hasta que el queso esté dorado."
    },
    {
        id: 2,
        titulo: "Pollo al Curry Tailandés",
        ingredientes: ["pechuga de pollo", "leche de coco", "pasta de curry rojo", "cebolla", "pimientos", "arroz", "aceite"],
        imagen: "https://picsum.photos/id/202/400/300",
        instrucciones: "Sofríe la cebolla y el pollo. Añade la pasta de curry rojo y la leche de coco. Cocina a fuego lento hasta que espese. Sirve sobre arroz blanco y decora con cilantro."
    },
    {
        id: 3,
        titulo: "Ensalada César con Crutones",
        ingredientes: ["lechuga romana", "pan", "queso parmesano", "huevo", "aceite de oliva", "mostaza dijon", "ajo", "limón"],
        imagen: "https://picsum.photos/id/203/400/300",
        instrucciones: "Prepara la vinagreta con huevo, ajo, mostaza, aceite y limón. Mezcla la lechuga picada con la vinagreta, crutones y queso parmesano. Sirve inmediatamente."
    },
    {
        id: 4,
        titulo: "Tacos de Pescado Baja",
        ingredientes: ["filete de pescado blanco", "tortillas de maíz", "col", "mayonesa", "limón", "chile en polvo", "aguacate"],
        imagen: "https://picsum.photos/id/204/400/300",
        instrucciones: "Sazona y fríe el pescado. Calienta las tortillas. Rellena con pescado, una mezcla de col con mayonesa y limón, y aguacate en rodajas."
    },
    {
        id: 5,
        titulo: "Sopa de Lentejas y Verduras",
        ingredientes: ["lentejas", "zanahoria", "apio", "cebolla", "caldo de verduras", "ajo", "pimentón"],
        imagen: "https://picsum.photos/id/205/400/300",
        instrucciones: "Sofríe las verduras. Agrega las lentejas, el caldo y las especias. Cocina a fuego medio hasta que las lentejas estén blandas (unos 40 minutos)."
    },
    {
        id: 6,
        titulo: "Pasta Alfredo con Camarones",
        ingredientes: ["pasta fettuccine", "camarones", "crema de leche", "mantequilla", "queso parmesano", "ajo", "perejil"],
        imagen: "https://picsum.photos/id/206/400/300",
        instrucciones: "Cocina la pasta. En una sartén, saltea ajo y camarones. Agrega mantequilla, crema de leche y queso parmesano hasta formar la salsa. Mezcla con la pasta y sirve con perejil."
    },
    {
        id: 7,
        titulo: "Brownies de Chocolate Oscuro",
        ingredientes: ["chocolate amargo", "mantequilla", "azúcar", "harina", "huevo", "cacao en polvo", "vainilla"],
        imagen: "https://picsum.photos/id/207/400/300",
        instrucciones: "Derrite el chocolate y la mantequilla. Mezcla los ingredientes secos. Combina todo con los huevos y vierte en un molde. Hornea a 175°C (347°F) por 25 minutos."
    },
    {
        id: 8,
        titulo: "Pimientos Rellenos Vegetarianos",
        ingredientes: ["pimientos", "arroz", "frijoles negros", "maíz", "cebolla", "queso cheddar", "salsa de tomate"],
        imagen: "https://picsum.photos/id/208/400/300",
        instrucciones: "Corta los pimientos por la mitad. Rellena con la mezcla de arroz, frijoles y maíz. Cúbrelos con queso y salsa. Hornea hasta que estén suaves."
    },
    {
        id: 9,
        titulo: "Tortilla Española",
        ingredientes: ["patatas", "huevo", "cebolla", "aceite de oliva", "sal"],
        imagen: "https://picsum.photos/id/209/400/300",
        instrucciones: "Fríe las patatas y la cebolla en aceite de oliva. Escúrrelas. Mezcla con los huevos batidos. Cocina en una sartén a fuego bajo, dándole la vuelta para dorar por ambos lados."
    },
    {
        id: 10,
        titulo: "Chili con Carne Americano",
        ingredientes: ["carne molida", "frijoles rojos", "tomate enlatado", "cebolla", "pimiento", "chile en polvo", "comino"],
        imagen: "https://picsum.photos/id/210/400/300",
        instrucciones: "Dora la carne. Sofríe la cebolla y el pimiento. Agrega la carne, los tomates, los frijoles y las especias. Cocina a fuego lento durante 1 hora para intensificar el sabor."
    },
    {
        id: 11,
        titulo: "Salmón al Horno con Limón y Eneldo",
        ingredientes: ["filete de salmón", "limón", "eneldo", "aceite de oliva", "sal", "pimienta"],
        imagen: "https://picsum.photos/id/211/400/300",
        instrucciones: "Coloca el salmón en papel de aluminio. Sazona con sal, pimienta, eneldo y rodajas de limón. Hornea a 200°C (400°F) por 15-20 minutos. Sirve inmediatamente."
    },
    {
        id: 12,
        titulo: "Wok de Fideos y Verduras",
        ingredientes: ["fideos yakisoba", "zanahoria", "brócoli", "salsa de soya", "jengibre", "ajo", "aceite de sésamo"],
        imagen: "https://picsum.photos/id/212/400/300",
        instrucciones: "Cocina los fideos. Saltea el ajo y el jengibre. Agrega las verduras y cocina hasta que estén al dente. Mezcla los fideos y la salsa de soya. Finaliza con aceite de sésamo."
    },
    {
        id: 13,
        titulo: "Hamburguesas Caseras de Res",
        ingredientes: ["carne molida", "pan de hamburguesa", "queso cheddar", "lechuga", "tomate", "cebolla", "mostaza"],
        imagen: "https://picsum.photos/id/213/400/300",
        instrucciones: "Forma las hamburguesas con la carne y ásalas o fríelas. Tuesta el pan. Arma la hamburguesa con queso, lechuga, tomate, cebolla y mostaza al gusto."
    },
    {
        id: 14,
        titulo: "Panqueques Americanos",
        ingredientes: ["harina", "leche", "huevo", "azúcar", "polvo de hornear", "mantequilla"],
        imagen: "https://picsum.photos/id/214/400/300",
        instrucciones: "Mezcla los ingredientes secos y luego los líquidos. Vierte porciones pequeñas en una sartén caliente. Cocina hasta que aparezcan burbujas y luego dales la vuelta para dorar."
    },
    {
        id: 15,
        titulo: "Guacamole Fresco",
        ingredientes: ["aguacate", "tomate", "cebolla", "cilantro", "limón", "sal"],
        imagen: "https://picsum.photos/id/215/400/300",
        instrucciones: "Tritura el aguacate. Pica finamente el resto de los ingredientes. Mezcla todo en un tazón y sazona con sal y jugo de limón al gusto."
    },
    {
        id: 16,
        titulo: "Pizza Margarita Rápida",
        ingredientes: ["masa de pizza", "salsa de tomate", "queso mozzarella", "albahaca fresca", "aceite de oliva"],
        imagen: "https://picsum.photos/id/216/400/300",
        instrucciones: "Extiende la masa. Unta la salsa de tomate y reparte el queso mozzarella. Hornea a la temperatura máxima por 10-12 minutos. Añade albahaca y un chorrito de aceite al servir."
    },
    {
        id: 17,
        titulo: "Curry de Garbanzos y Espinacas",
        ingredientes: ["garbanzos", "espinacas", "tomate enlatado", "cebolla", "ajo", "jengibre", "curry en polvo", "leche de coco"],
        imagen: "https://picsum.photos/id/217/400/300",
        instrucciones: "Sofríe la cebolla, ajo y jengibre. Agrega el curry en polvo y el tomate. Incorpora los garbanzos y la leche de coco. Al final, añade las espinacas hasta que se marchiten."
    },
    {
        id: 18,
        titulo: "Costillas de Cerdo a la BBQ",
        ingredientes: ["costillas de cerdo", "salsa bbq", "vinagre", "azúcar moreno", "pimentón"],
        imagen: "https://picsum.photos/id/218/400/300",
        instrucciones: "Marina las costillas en una mezcla de salsa BBQ y especias. Hornea lentamente (o cocina a la parrilla) durante 2-3 horas, cubriendo con salsa periódicamente."
    },
    {
        id: 19,
        titulo: "Crema de Champiñones",
        ingredientes: ["champiñones", "caldo de pollo", "crema de leche", "cebolla", "mantequilla", "vino blanco"],
        imagen: "https://picsum.photos/id/219/400/300",
        instrucciones: "Sofríe los champiñones y la cebolla en mantequilla. Agrega vino blanco y deja evaporar. Añade el caldo y la crema de leche. Licúa y calienta sin que hierva."
    },
    {
        id: 20,
        titulo: "Arroz Frito con Huevo y Jamón",
        ingredientes: ["arroz cocido", "jamón", "huevo", "zanahoria", "guisantes", "salsa de soya", "cebolla"],
        imagen: "https://picsum.photos/id/220/400/300",
        instrucciones: "Saltea la cebolla, el jamón y las verduras. Agrega el arroz cocido (idealmente del día anterior) y la salsa de soya. Revuelve bien y termina con huevo revuelto."
    },
    {
        id: 21,
        titulo: "Tarta de Manzana Clásica",
        ingredientes: ["manzanas", "masa de tarta", "azúcar", "canela", "mantequilla", "harina"],
        imagen: "https://picsum.photos/id/221/400/300",
        instrucciones: "Rellena la masa con manzanas en rodajas, azúcar, canela y un poco de mantequilla. Cubre con la otra capa de masa y hornea hasta que el relleno esté burbujeante."
    },
    {
        id: 22,
        titulo: "Spaghetti Aglio e Olio",
        ingredientes: ["pasta spaghetti", "ajo", "aceite de oliva", "guindilla", "perejil"],
        imagen: "https://picsum.photos/id/222/400/300",
        instrucciones: "Cocina el spaghetti. En una sartén, calienta el aceite de oliva con láminas de ajo y guindilla. Agrega la pasta y un poco de agua de cocción. Mezcla con perejil fresco."
    },
    {
        id: 23,
        titulo: "Sopa de Cebolla Francesa",
        ingredientes: ["cebolla", "caldo de res", "pan baguette", "queso gruyere", "mantequilla", "vino blanco"],
        imagen: "https://picsum.photos/id/223/400/300",
        instrucciones: "Carameliza la cebolla en mantequilla. Agrega vino blanco y luego el caldo de res. Sirve en un tazón apto para horno, cúbrelo con pan y queso, y gratina."
    },
    {
        id: 24,
        titulo: "Huevos Rancheros",
        ingredientes: ["huevo", "tortillas de maíz", "salsa de tomate", "frijoles", "queso fresco", "aguacate", "chile"],
        imagen: "https://picsum.photos/id/224/400/300",
        instrucciones: "Fríe las tortillas. Cocina los huevos fritos. Sirve los huevos sobre las tortillas, baña con salsa de tomate caliente y acompaña con frijoles y queso fresco."
    },
    {
        id: 25,
        titulo: "Tofu Salteado con Brócoli",
        ingredientes: ["tofu", "brócoli", "salsa de soya", "jengibre", "ajo", "aceite de sésamo", "miel"],
        imagen: "https://picsum.photos/id/225/400/300",
        instrucciones: "Saltea el tofu hasta que esté crujiente. Agrega el brócoli, ajo y jengibre. Mezcla la salsa de soya y la miel. Combina todo hasta que esté bien cubierto."
    },
    {
        id: 26,
        titulo: "Arepas Rellenas de Queso",
        ingredientes: ["harina de maíz", "agua", "sal", "queso blanco"],
        imagen: "https://picsum.photos/id/226/400/300",
        instrucciones: "Mezcla la harina con agua y sal para formar la masa. Forma las arepas y cocínalas en un sartén caliente. Ábrelas y rellena con queso rallado."
    },
    {
        id: 27,
        titulo: "Pinchos Morunos de Cerdo",
        ingredientes: ["carne de cerdo", "cebolla", "pimiento", "pimentón", "comino", "orégano", "limón"],
        imagen: "https://picsum.photos/id/227/400/300",
        instrucciones: "Corta la carne y las verduras. Marina la carne con especias y limón. Ensarta la carne y las verduras. Asa a la parrilla o a la plancha hasta que estén cocidas."
    },
    {
        id: 28,
        titulo: "Muffins de Arándanos",
        ingredientes: ["harina", "arándanos", "azúcar", "leche", "huevo", "mantequilla", "polvo de hornear"],
        imagen: "https://picsum.photos/id/228/400/300",
        instrucciones: "Mezcla los ingredientes húmedos y secos por separado y luego combínalos. Rellena los moldes de muffins y hornea a 180°C (350°F) por 20 minutos."
    },
    {
        id: 29,
        titulo: "Gazpacho Andaluz",
        ingredientes: ["tomate", "pepino", "pimiento verde", "cebolla", "ajo", "aceite de oliva", "vinagre", "pan duro"],
        imagen: "https://picsum.photos/id/229/400/300",
        instrucciones: "Corta todos los vegetales y remójalos con el pan. Licúa todo junto con el aceite de oliva y el vinagre. Cuela y refrigera por al menos 2 horas. Sirve muy frío."
    },
    {
        id: 30,
        titulo: "Falafel Casero",
        ingredientes: ["garbanzos", "cebolla", "cilantro", "perejil", "comino", "harina", "ajo"],
        imagen: "https://picsum.photos/id/230/400/300",
        instrucciones: "Procesa los garbanzos, cebolla, ajo y hierbas hasta formar una pasta gruesa. Forma pequeñas bolitas y fríelas en aceite caliente hasta que estén doradas y crujientes."
    },
    {
        id: 31,
        titulo: "Smoothie de Fresa y Plátano",
        ingredientes: ["fresas", "plátano", "leche", "yogur", "miel"],
        imagen: "https://picsum.photos/id/231/400/300",
        instrucciones: "Coloca todos los ingredientes en una licuadora. Licúa hasta obtener una mezcla suave y homogénea. Si es necesario, agrega hielo para enfriar."
    },
    {
        id: 32,
        titulo: "Papas Rústicas al Romero",
        ingredientes: ["patatas", "romero", "aceite de oliva", "ajo", "sal"],
        imagen: "https://picsum.photos/id/232/400/300",
        instrucciones: "Corta las patatas en gajos. Mézclalas con aceite de oliva, ajo picado, romero fresco y sal. Hornea a 200°C (400°F) hasta que estén doradas y crujientes."
    },
    {
        id: 33,
        titulo: "Ceviche de Camarón",
        ingredientes: ["camarones", "limón", "cebolla roja", "cilantro", "tomate", "aguacate"],
        imagen: "https://picsum.photos/id/233/400/300",
        instrucciones: "Corta los camarones cocidos. Mézclalos con el jugo de limón y déjalos marinar. Agrega la cebolla, tomate y cilantro picado. Sirve con rodajas de aguacate."
    },
    {
        id: 34,
        titulo: "Fajitas de Pollo y Pimientos",
        ingredientes: ["pechuga de pollo", "pimientos", "cebolla", "tortillas de trigo", "limón", "comino", "chile en polvo"],
        imagen: "https://picsum.photos/id/234/400/300",
        instrucciones: "Corta el pollo y las verduras en tiras. Sazónalas y saltea en una sartén caliente. Sirve caliente con las tortillas de trigo y limón."
    },
    {
        id: 35,
        titulo: "Risotto de Champiñones",
        ingredientes: ["arroz arbóreo", "champiñones", "caldo de verduras", "vino blanco", "mantequilla", "queso parmesano", "cebolla"],
        imagen: "https://picsum.photos/id/235/400/300",
        instrucciones: "Sofríe la cebolla. Agrega el arroz y el vino blanco. Ve añadiendo el caldo caliente poco a poco, revolviendo constantemente hasta que el arroz esté cremoso. Agrega champiñones, mantequilla y queso."
    },
    {
        id: 36,
        titulo: "Tiramisú Rápido",
        ingredientes: ["queso mascarpone", "bizcochos de soletilla", "café", "huevo", "azúcar", "cacao en polvo"],
        imagen: "https://picsum.photos/id/236/400/300",
        instrucciones: "Mezcla el mascarpone con las yemas y azúcar. Remoja los bizcochos en café. Coloca capas de bizcochos y crema. Refrigera y espolvorea con cacao antes de servir."
    },
    {
        id: 37,
        titulo: "Quesadillas de Jamón y Queso",
        ingredientes: ["tortillas de trigo", "queso cheddar", "jamón"],
        imagen: "https://picsum.photos/id/237/400/300",
        instrucciones: "Coloca el jamón y el queso rallado dentro de la tortilla. Dóblala y cocínala en una plancha o sartén caliente hasta que el queso se derrita y la tortilla esté dorada."
    },
    {
        id: 38,
        titulo: "Pescado Empanizado con Puré",
        ingredientes: ["filete de pescado blanco", "pan rallado", "huevo", "patatas", "leche", "mantequilla"],
        imagen: "https://picsum.photos/id/238/400/300",
        instrucciones: "Empaniza el pescado (harina, huevo, pan rallado) y fríelo. Hierve las patatas, machácalas y mézclalas con leche y mantequilla para el puré. Sazona al gusto."
    },
    {
        id: 39,
        titulo: "Enchiladas Verdes de Pollo",
        ingredientes: ["pollo cocido", "tortillas de maíz", "tomate verde", "cebolla", "cilantro", "queso fresco", "crema"],
        imagen: "https://picsum.photos/id/239/400/300",
        instrucciones: "Prepara la salsa verde con tomate verde, cebolla y chile. Rellena las tortillas con pollo deshebrado y báñalas en la salsa. Hornea y sirve con queso fresco y crema."
    },
    {
        id: 40,
        titulo: "Mermelada de Fresa Casera",
        ingredientes: ["fresas", "azúcar", "limón"],
        imagen: "https://picsum.photos/id/240/400/300",
        instrucciones: "Corta las fresas y ponlas a cocinar a fuego lento con el azúcar y el jugo de limón. Cocina hasta que alcance el punto de mermelada (unos 45-60 minutos), revolviendo ocasionalmente."
    },
    {
        id: 41,
        titulo: "Crepes Dulces",
        ingredientes: ["harina", "leche", "huevo", "mantequilla", "azúcar", "vainilla"],
        imagen: "https://picsum.photos/id/241/400/300",
        instrucciones: "Mezcla todos los ingredientes hasta obtener una masa líquida y sin grumos. Vierte una pequeña cantidad en una sartén caliente y gírala para cubrir el fondo. Cocina por ambos lados."
    },
    {
        id: 42,
        titulo: "Papas al Horno Gratinadas",
        ingredientes: ["patatas", "crema de leche", "queso gruyere", "mantequilla", "ajo"],
        imagen: "https://picsum.photos/id/242/400/300",
        instrucciones: "Corta las patatas en rodajas finas. Alterna capas de patatas, crema y queso en un molde. Hornea a 180°C (350°F) hasta que estén tiernas y el queso esté gratinado."
    },
    {
        id: 43,
        titulo: "Sopa de Tomate y Albahaca",
        ingredientes: ["tomate", "caldo de verduras", "albahaca fresca", "cebolla", "ajo", "crema de leche"],
        imagen: "https://picsum.photos/id/243/400/300",
        instrucciones: "Sofríe la cebolla y el ajo. Agrega el tomate y el caldo. Cocina a fuego lento, luego licúa con albahaca fresca. Vuelve a calentar y termina con un chorrito de crema de leche."
    },
    {
        id: 44,
        titulo: "Tostadas Francesas",
        ingredientes: ["pan", "huevo", "leche", "azúcar", "canela", "mantequilla"],
        imagen: "https://picsum.photos/id/244/400/300",
        instrucciones: "Bate el huevo con leche, azúcar y canela. Remoja las rebanadas de pan. Fríelas en mantequilla en una sartén caliente hasta que estén doradas por ambos lados."
    },
    {
        id: 45,
        titulo: "Aderezo Ranch Casero",
        ingredientes: ["mayonesa", "crema agria", "leche", "eneldo", "perejil", "cebolla en polvo", "ajo en polvo"],
        imagen: "https://picsum.photos/id/245/400/300",
        instrucciones: "Combina la mayonesa, la crema agria y la leche. Agrega todas las especias y hierbas picadas. Bate bien hasta que quede suave y refrigera por 30 minutos antes de usar."
    },
    {
        id: 46,
        titulo: "Arroz con Leche",
        ingredientes: ["arroz", "leche", "azúcar", "canela", "cáscara de limón"],
        imagen: "https://picsum.photos/id/246/400/300",
        instrucciones: "Cocina el arroz lentamente en la leche con la canela y la cáscara de limón. Una vez tierno, agrega el azúcar y cocina por unos minutos más. Sirve frío o caliente."
    },
    {
        id: 47,
        titulo: "Albóndigas en Salsa de Tomate",
        ingredientes: ["carne molida", "pan rallado", "huevo", "salsa de tomate", "cebolla", "ajo", "perejil"],
        imagen: "https://picsum.photos/id/247/400/300",
        instrucciones: "Mezcla la carne con pan rallado, huevo y perejil para formar las albóndigas. Fríelas y luego cocínalas a fuego lento en la salsa de tomate con cebolla y ajo."
    },
    {
        id: 48,
        titulo: "Ensalada Caprese",
        ingredientes: ["tomate", "queso mozzarella", "albahaca fresca", "aceite de oliva", "vinagre balsámico"],
        imagen: "https://picsum.photos/id/248/400/300",
        instrucciones: "Corta el tomate y la mozzarella en rodajas. Alterna las rodajas con hojas de albahaca fresca en un plato. Rocía con aceite de oliva y un poco de vinagre balsámico."
    },
    {
        id: 49,
        titulo: "Caldo de Pollo con Fideos",
        ingredientes: ["pollo", "fideos", "zanahoria", "apio", "cebolla", "perejil", "agua"],
        imagen: "https://picsum.photos/id/249/400/300",
        instrucciones: "Hierve el pollo con las verduras y agua hasta obtener un caldo sabroso. Cuela el caldo, desmenuza el pollo y vuelve a calentar con los fideos hasta que estén cocidos."
    },
    {
        id: 50,
        titulo: "Biscotti de Almendras",
        ingredientes: ["harina", "almendras", "azúcar", "huevo", "polvo de hornear", "vainilla"],
        imagen: "https://picsum.photos/id/250/400/300",
        instrucciones: "Mezcla los ingredientes y forma un tronco de masa. Hornea hasta que esté dorado. Corta en rebanadas y hornea nuevamente para que queden crujientes."
    },
    {
        id: 51,
        titulo: "Smoothie de Mango y Naranja",
        ingredientes: ["mango", "naranja", "yogur", "miel"],
        imagen: "https://picsum.photos/id/251/400/300",
        instrucciones: "Pela el mango y exprime la naranja. Combina todos los ingredientes en una licuadora y procesa hasta que esté suave y cremoso. Sirve inmediatamente."
    },
    {
        id: 52,
        titulo: "Berenjenas a la Parmesana",
        ingredientes: ["berenjena", "salsa de tomate", "queso parmesano", "queso mozzarella", "pan rallado", "huevo"],
        imagen: "https://picsum.photos/id/252/400/300",
        instrucciones: "Corta la berenjena en rodajas y fríelas. En un molde, alterna capas de salsa de tomate, berenjena y quesos. Hornea hasta que esté burbujeante y gratinado."
    },
    {
        id: 53,
        titulo: "Cremas de Brócoli y Queso",
        ingredientes: ["brócoli", "caldo de verduras", "queso cheddar", "leche", "mantequilla", "harina", "cebolla"],
        imagen: "https://picsum.photos/id/253/400/300",
        instrucciones: "Prepara un roux con mantequilla y harina, luego añade la leche y el caldo. Incorpora el brócoli cocido y el queso rallado. Cocina hasta que el queso se derrita y espese."
    },
    {
        id: 54,
        titulo: "Tarta de Limón con Merengue",
        ingredientes: ["masa de tarta", "limón", "azúcar", "huevo", "mantequilla", "leche condensada"],
        imagen: "https://picsum.photos/id/254/400/300",
        instrucciones: "Hornea la masa. Prepara el relleno con el jugo de limón, leche condensada y yemas. Vierte en la masa y decora con merengue (claras batidas con azúcar). Dora el merengue."
    },
    {
        id: 55,
        titulo: "Pollo Frito Crispy",
        ingredientes: ["pollo", "harina", "leche", "huevo", "pimentón", "ajo en polvo", "aceite"],
        imagen: "https://picsum.photos/id/255/400/300",
        instrucciones: "Sazona el pollo. Pasa el pollo por huevo y luego por la mezcla de harina y especias. Fríe en aceite caliente hasta que esté crujiente y bien cocido por dentro."
    },
    {
        id: 56,
        titulo: "Pan de Ajo Casero",
        ingredientes: ["pan baguette", "mantequilla", "ajo", "perejil", "queso parmesano"],
        imagen: "https://picsum.photos/id/256/400/300",
        instrucciones: "Mezcla la mantequilla blanda con ajo y perejil picado. Unta la mezcla en rebanadas de pan. Hornea por 10 minutos o hasta que el pan esté tostado y el ajo fragante."
    },
    {
        id: 57,
        titulo: "Avena Nocturna (Overnight Oats)",
        ingredientes: ["avena", "leche", "yogur", "chía", "miel", "fruta"],
        imagen: "https://picsum.photos/id/257/400/300",
        instrucciones: "Combina todos los ingredientes en un frasco. Tapa y refrigera durante la noche. Por la mañana, añade frutas frescas y miel al gusto antes de consumir."
    },
    {
        id: 58,
        titulo: "Bolas de Papa Rellenas",
        ingredientes: ["patatas", "carne molida", "cebolla", "huevo", "harina", "pan rallado", "aceite"],
        imagen: "https://picsum.photos/id/258/400/300",
        instrucciones: "Haz un puré con las patatas. Rellena porciones del puré con carne molida guisada. Pasa las bolas por harina, huevo y pan rallado. Fríe hasta que estén doradas."
    },
    {
        id: 59,
        titulo: "Ensalada Griega",
        ingredientes: ["pepino", "tomate", "cebolla roja", "queso feta", "aceitunas", "aceite de oliva", "orégano"],
        imagen: "https://picsum.photos/id/259/400/300",
        instrucciones: "Corta todos los vegetales. Combina con el queso feta y las aceitunas. Adereza con aceite de oliva, vinagre y orégano. Mezcla suavemente."
    },
    {
        id: 60,
        titulo: "Pastel de Carne (Meatloaf)",
        ingredientes: ["carne molida", "pan rallado", "huevo", "cebolla", "salsa de tomate", "mostaza"],
        imagen: "https://picsum.photos/id/260/400/300",
        instrucciones: "Mezcla la carne, pan rallado, huevo, cebolla y mostaza. Dale forma de pan y cubre con salsa de tomate. Hornea a 175°C (347°F) por 1 hora. Deja reposar antes de cortar."
    },
    {
        id: 61,
        titulo: "Wrap de Atún",
        ingredientes: ["atún enlatado", "mayonesa", "apio", "cebolla", "lechuga", "tortillas de trigo"],
        imagen: "https://picsum.photos/id/261/400/300",
        instrucciones: "Escurre el atún. Mézclalo con mayonesa, apio y cebolla picada. Coloca una hoja de lechuga y la mezcla de atún en una tortilla. Enrolla firmemente."
    },
    {
        id: 62,
        titulo: "Muffins de Chocolate",
        ingredientes: ["harina", "azúcar", "cacao en polvo", "huevo", "leche", "aceite", "polvo de hornear", "chispas de chocolate"],
        imagen: "https://picsum.photos/id/262/400/300",
        instrucciones: "Mezcla los ingredientes húmedos y secos por separado y luego combínalos suavemente. Llena los moldes de muffins y hornea hasta que un palillo salga limpio."
    },
    {
        id: 63,
        titulo: "Dip de Espinacas y Alcachofas",
        ingredientes: ["espinacas", "alcachofa", "queso crema", "queso parmesano", "mayonesa", "ajo"],
        imagen: "https://picsum.photos/id/263/400/300",
        instrucciones: "Combina todos los quesos, la mayonesa y el ajo. Agrega espinacas cocidas y alcachofas picadas. Hornea hasta que esté burbujeante y sirve con pan tostado."
    },
    {
        id: 64,
        titulo: "Bebida de Chocolate Caliente",
        ingredientes: ["leche", "chocolate amargo", "azúcar", "canela"],
        imagen: "https://picsum.photos/id/264/400/300",
        instrucciones: "Calienta la leche a fuego medio. Agrega el chocolate amargo en trozos, el azúcar y la canela. Bate constantemente hasta que el chocolate se derrita y la bebida esté espumosa."
    },
    {
        id: 65,
        titulo: "Salsa Pesto Casera",
        ingredientes: ["albahaca fresca", "piñones", "queso parmesano", "ajo", "aceite de oliva"],
        imagen: "https://picsum.photos/id/265/400/300",
        instrucciones: "Combina la albahaca, piñones, ajo y queso en un procesador. Añade el aceite de oliva lentamente mientras procesas hasta obtener la consistencia deseada. Sazona con sal."
    },
    {
        id: 66,
        titulo: "Arroz con Pollo Peruano",
        ingredientes: ["pollo", "arroz", "cilantro", "cerveza", "guisantes", "zanahoria", "cebolla", "ají amarillo"],
        imagen: "https://picsum.photos/id/266/400/300",
        instrucciones: "Sofríe la cebolla y el ají amarillo. Agrega el pollo, el arroz, la cerveza y caldo. Cocina hasta que el arroz esté listo. Sirve con cilantro picado."
    },
    {
        id: 67,
        titulo: "Champiñones Salteados al Ajillo",
        ingredientes: ["champiñones", "ajo", "perejil", "aceite de oliva", "vino blanco"],
        imagen: "https://picsum.photos/id/267/400/300",
        instrucciones: "Saltea los champiñones en aceite de oliva. Cuando estén dorados, añade el ajo picado y un chorrito de vino blanco. Finaliza con perejil picado."
    },
    {
        id: 68,
        titulo: "Hotcakes de Avena y Plátano",
        ingredientes: ["avena", "plátano", "huevo", "leche", "polvo de hornear", "miel"],
        imagen: "https://picsum.photos/id/268/400/300",
        instrucciones: "Licúa todos los ingredientes hasta obtener una masa suave. Vierte porciones en una plancha o sartén caliente. Cocina hasta que burbujeen y dales la vuelta. Sirve con miel."
    },
    {
        id: 69,
        titulo: "Ensalada de Pasta Rápida",
        ingredientes: ["pasta corta", "tomate cherry", "pepino", "aceitunas", "queso feta", "vinagreta"],
        imagen: "https://picsum.photos/id/269/400/300",
        instrucciones: "Cocina la pasta y enfríala. Combina la pasta con los vegetales, aceitunas y queso feta. Adereza con tu vinagreta favorita y refrigera antes de servir."
    },
    {
        id: 70,
        titulo: "Bizcocho de Vainilla",
        ingredientes: ["harina", "azúcar", "huevo", "mantequilla", "leche", "vainilla", "polvo de hornear"],
        imagen: "https://picsum.photos/id/270/400/300",
        instrucciones: "Bate la mantequilla con el azúcar hasta que esté cremosa. Agrega los huevos y la vainilla. Alterna la harina con la leche. Vierte en el molde y hornea hasta que esté listo."
    }
];

const mapeoCategorias = {
    // Proteínas y Carnes
    "pollo": "Proteínas",
    "pechuga de pollo": "Proteínas",
    "carne molida": "Proteínas",
    "jamón": "Proteínas",
    "carne de cerdo": "Proteínas",
    "filete de pescado blanco": "Proteínas",
    "salmón": "Proteínas",
    "camarones": "Proteínas",
    "atún enlatado": "Proteínas",
    "costillas de cerdo": "Proteínas",

    // Lácteos y Quesos
    "queso mozzarella": "Lácteos y Quesos",
    "leche": "Lácteos y Quesos",
    "mantequilla": "Lácteos y Quesos",
    "queso parmesano": "Lácteos y Quesos",
    "crema de leche": "Lácteos y Quesos",
    "queso cheddar": "Lácteos y Quesos",
    "yogur": "Lácteos y Quesos",
    "queso blanco": "Lácteos y Quesos",
    "queso gruyere": "Lácteos y Quesos",
    "queso fresco": "Lácteos y Quesos",
    "queso feta": "Lácteos y Quesos",
    "queso crema": "Lácteos y Quesos",
    "mayonesa": "Lácteos y Quesos",
    "crema agria": "Lácteos y Quesos",
    "leche condensada": "Lácteos y Quesos",

    // Vegetales y Verduras
    "cebolla": "Vegetales",
    "ajo": "Vegetales",
    "zanahoria": "Vegetales",
    "apio": "Vegetales",
    "pimientos": "Vegetales",
    "lechuga romana": "Vegetales",
    "col": "Vegetales",
    "brócoli": "Vegetales",
    "espinacas": "Vegetales",
    "albahaca fresca": "Vegetales",
    "patatas": "Vegetales",
    "tomate": "Vegetales",
    "tomate cherry": "Vegetales",
    "tomate enlatado": "Vegetales",
    "pimiento verde": "Vegetales",
    "cebolla roja": "Vegetales",
    "tomate verde": "Vegetales",
    "pepino": "Vegetales",
    "berenjena": "Vegetales",
    "alcachofa": "Vegetales",

    // Legumbres y Granos
    "frijoles rojos": "Legumbres y Granos",
    "frijoles negros": "Legumbres y Granos",
    "maíz": "Legumbres y Granos",
    "garbanzos": "Legumbres y Granos",
    "lentejas": "Legumbres y Granos",
    "arroz": "Legumbres y Granos",
    "arroz cocido": "Legumbres y Granos",
    "arroz arbóreo": "Legumbres y Granos",
    "avena": "Legumbres y Granos",
    "harina de maíz": "Legumbres y Granos",

    // Panadería y Masa
    "harina": "Panadería y Masa",
    "pan": "Panadería y Masa",
    "pan rallado": "Panadería y Masa",
    "masa de pizza": "Panadería y Masa",
    "pan de hamburguesa": "Panadería y Masa",
    "pan baguette": "Panadería y Masa",
    "pasta para lasaña": "Panadería y Masa",
    "pasta fettuccine": "Panadería y Masa",
    "fideos yakisoba": "Panadería y Masa",
    "pasta spaghetti": "Panadería y Masa",
    "bizcochos de soletilla": "Panadería y Masa",
    "masa de tarta": "Panadería y Masa",
    "tortillas de maíz": "Panadería y Masa",
    "tortillas de trigo": "Panadería y Masa",
    "pasta corta": "Panadería y Masa",

    // Frutas y Frutos Secos
    "limón": "Frutas",
    "aguacate": "Frutas",
    "arándanos": "Frutas",
    "manzanas": "Frutas",
    "fresas": "Frutas",
    "plátano": "Frutas",
    "mango": "Frutas",
    "naranja": "Frutas",
    "almendras": "Frutas",
    "piñones": "Frutas",
    "fruta": "Frutas", // Genérico

    // Especias y Aderezos
    "aceite de oliva": "Especias y Aderezos",
    "sal": "Especias y Aderezos",
    "pimienta": "Especias y Aderezos",
    "chile en polvo": "Especias y Aderezos",
    "comino": "Especias y Aderezos",
    "perejil": "Especias y Aderezos",
    "cilantro": "Especias y Aderezos",
    "eneldo": "Especias y Aderezos",
    "curry en polvo": "Especias y Aderezos",
    "mostaza dijon": "Especias y Aderezos",
    "salsa de soya": "Especias y Aderezos",
    "aceite de sésamo": "Especias y Aderezos",
    "vinagre": "Especias y Aderezos",
    "vinagre balsámico": "Especias y Aderezos",
    "canela": "Especias y Aderezos",
    "vainilla": "Especias y Aderezos",
    "romero": "Especias y Aderezos",
    "orégano": "Especias y Aderezos",
    "pimentón": "Especias y Aderezos",
    "guindilla": "Especias y Aderezos",
    "cebolla en polvo": "Especias y Aderezos",
    "ajo en polvo": "Especias y Aderezos",
    "chía": "Especias y Aderezos",

    // Varios
    "huevo": "Varios",
    "azúcar": "Varios",
    "polvo de hornear": "Varios",
    "cacao en polvo": "Varios",
    "miel": "Varios",
    "café": "Varios",
    "cerveza": "Varios",
    "vino blanco": "Varios",
    "caldo de verduras": "Varios",
    "caldo de pollo": "Varios",
    "salsa de tomate": "Varios",
    "salsa bbq": "Varios",
    "guisantes": "Varios",
    "chispas de chocolate": "Varios",
    "ají amarillo": "Varios"
        // ... agrega el resto de tus ingredientes aquí
};