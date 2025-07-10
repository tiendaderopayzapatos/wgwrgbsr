const productos = [
  {
    nombre: "Abrigo de Lana Grueso Gris",
    precio: 59.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/abrigo1.jpg",
    categoria: "abrigo"
  },
{
    nombre: "Abrigo de Lana Grueso Negro",
    precio: 49.99,
    tallas: ['XS', 'S', 'M', 'L'],
    imagen: "img/abrigo2.jpg",
    categoria: "abrigo"
  },
{
    nombre: "Abrigo de Lana Grueso Negro con estampado",
    precio: 50.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    imagen: "img/abrigo3.jpg",
    categoria: "abrigo"
  },
{
    nombre: "Abrigo de Lana Grueso Negro con estampado de ciervo",
    precio: 30.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    imagen: "img/abrigo4.jpg",
    categoria: "abrigo"
  },
{
    nombre: "Abrigo impermiable negro",
    precio: 70.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    imagen: "img/abrigo5.jpg",
    categoria: "abrigo"
  },
  {
    nombre: "Camiseta Básica Algodón azul",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta1.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón negra",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta2.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta de Algodón negra semiformal",
    precio: 18.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    imagen: "img/camiseta3.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón negra con estampado",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta4.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón con estampado de mujer",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta5.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón con estampado de hello kitty",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta6.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón lila",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta7.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón con estampado moderno",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta8.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón estilo rockero",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta9.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón con estampado de valiente",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta10.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón con estampado de la pantera rosa",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta11.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Camiseta Básica Algodón rosa",
    precio: 14.99,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/camiseta12.jpg",
    categoria: "camisetas"
  },
  {
    nombre: "Chaqueta de cuero con detalles afelpados",
    precio: 40.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/chaqueta1.jpg",
    categoria: "chaquetas"
  },
  {
    nombre: "Chaqueta negra",
    precio: 40.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    imagen: "img/chaqueta2.jpg",
    categoria: "chaquetas"
  },
  {
    nombre: "Chaqueta estilo mezclilla",
    precio: 40.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/chaqueta3.jpg",
    categoria: "chaquetas"
  },
  {
    nombre: "Chaqueta roja",
    precio: 40.00,
    tallas: ['XS', 'S', 'M', 'L'],
    imagen: "img/chaqueta4.jpg",
    categoria: "chaquetas"
  },
  {
    nombre: "Chaqueta verde",
    precio: 40.00,
    tallas: ['S', 'M', 'L', 'XL'],
    imagen: "img/chaqueta5.jpg",
    categoria: "chaquetas"
  },
  {
    nombre: "Chaqueta azul",
    precio: 40.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/chaqueta6.jpg",
    categoria: "chaquetas"
  },
  {
    nombre: "Chaqueta verde impermiable",
    precio: 40.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/chaqueta7.jpg",
    categoria: "chaquetas"
  },
  {
    nombre: "gorra negra con rojo",
    precio: 40.00,
    tallas: ['unica talla'],
    imagen: "img/gorra1.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorro",
    precio: 20.00,
    tallas: ['unica talla'],
    imagen: "img/gorra2.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorro estilo pescador",
    precio: 20.00,
    tallas: ['unica talla'],
    imagen: "img/gorra3.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorra negra",
    precio: 30.00,
    tallas: ['unica talla'],
    imagen: "img/gorra4.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorra verde",
    precio: 30.00,
    tallas: ['unica talla'],
    imagen: "img/gorra5.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorra azul",
    precio: 30.00,
    tallas: ['unica talla'],
    imagen: "img/gorra6.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorra lila",
    precio: 30.00,
    tallas: ['unica talla'],
    imagen: "img/gorra7.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorra cafe",
    precio: 30.00,
    tallas: ['unica talla'],
    imagen: "img/gorra8.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorra negra con estampado",
    precio: 30.00,
    tallas: ['unica talla'],
    imagen: "img/gorra9.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorra negra sencilla",
    precio: 30.00,
    tallas: ['unica talla'],
    imagen: "img/gorra10.jpg",
    categoria: "gorras"
  },
  {
    nombre: "gorra blanca",
    precio: 30.00,
    tallas: ['unica talla'],
    imagen: "img/gorra12.jpg",
    categoria: "gorras"
  },
  {
    nombre: "pantalon de mezclilla",
    precio: 40.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/pantalon1.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon negro",
    precio: 40.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/pantalon2.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon negro deportivo",
    precio: 30.00,
    tallas: ['XS', 'S', 'M', 'L', 'XL'],
    imagen: "img/pantalon3.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon de mezclilla para hombre",
    precio: 40.00,
    tallas: ['L', 'XL'],
    imagen: "img/pantalon4.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon de mezclilla oscuro para hombre",
    precio: 40.00,
    tallas: ['XL'],
    imagen: "img/pantalon5.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon de mezclilla unisex",
    precio: 50.00,
    tallas: ['L', 'XL'],
    imagen: "img/pantalon6.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon de mezclilla para hombre",
    precio: 40.00,
    tallas: ['L', 'XL'],
    imagen: "img/pantalon7.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon de mezclilla oscuro para hombre",
    precio: 40.00,
    tallas: ['L', 'XL'],
    imagen: "img/pantalon8.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon negro unisex",
    precio: 40.00,
    tallas: ['M', 'L', 'XL'],
    imagen: "img/pantalon9.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon de mezclilla para hombre",
    precio: 40.00,
    tallas: ['XL'],
    imagen: "img/pantalon10.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon negro para hombre",
    precio: 40.00,
    tallas: ['L', 'XL'],
    imagen: "img/pantalon11.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "pantalon blanco de mujer",
    precio: 40.00,
    tallas: ['XS', 'M'],
    imagen: "img/pantalon12.jpg",
    categoria: "pantalones"
  },
  {
    nombre: "short cafe",
    precio: 20.00,
    tallas: ['L'],
    imagen: "img/short1.jpg",
    categoria: "shorts"
  },
  {
    nombre: "short negro",
    precio: 20.00,
    tallas: ['L'],
    imagen: "img/short2.jpg",
    categoria: "shorts"
  },
  {
    nombre: "short negro de pijama",
    precio: 15.00,
    tallas: ['S', 'M', 'L'],
    imagen: "img/short3.jpg",
    categoria: "shorts"
  },
  {
    nombre: "short cafe claro",
    precio: 20.00,
    tallas: ['L'],
    imagen: "img/short4.jpg",
    categoria: "shorts"
  },
  {
    nombre: "short mezclilla negro",
    precio: 20.00,
    tallas: ['L'],
    imagen: "img/short5.jpg",
    categoria: "shorts"
  },
  {
    nombre: "short mezclilla",
    precio: 20.00,
    tallas: ['Talla unica'],
    imagen: "img/short6.jpg",
    categoria: "shorts"
  },
  {
    nombre: "pantaloneta",
    precio: 20.00,
    tallas: ['L', 'XL'],
    imagen: "img/short7.jpg",
    categoria: "shorts"
  },
  {
    nombre: "pantaloneta negra",
    precio: 20.00,
    tallas: ['L', 'XL'],
    imagen: "img/short8.jpg",
    categoria: "shorts"
  },
  {
    nombre: "pantaloneta gris",
    precio: 20.00,
    tallas: ['L', 'XL'],
    imagen: "img/short9.jpg",
    categoria: "shorts"
  },
  {
    nombre: "pantaloneta rosa con estampado",
    precio: 20.00,
    tallas: ['L', 'XL'],
    imagen: "img/short10.jpg",
    categoria: "shorts"
  },
  {
    nombre: "pantaloneta con estampado",
    precio: 20.00,
    tallas: ['L', 'XL'],
    imagen: "img/short11.jpg",
    categoria: "shorts"
  },
  {
    nombre: "pantaloneta negra con estampado japones",
    precio: 20.00,
    tallas: ['L', 'XL'],
    imagen: "img/short12.jpg",
    categoria: "shorts"
  },
  {
    nombre: "Traje de Baño blanco con forma de estrella",
    precio: 29.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano1.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño Clásico",
    precio: 34.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano2.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño de Hello Kitty",
    precio: 39.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano3.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño rojo",
    precio: 39.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano4.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño rosa con dibujos de flores",
    precio: 39.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano5.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño naranja",
    precio: 39.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano6.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño azul",
    precio: 30.00,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano7.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño para hombre",
    precio: 39.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano8.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño negro",
    precio: 10.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano9.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño para hombre azul",
    precio: 36.99,
    tallas: ['S', 'M', 'L', 'XL', 'XXL'],
    imagen: "img/trajedebano10.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño negro con estampado",
    precio: 29.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano11.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "Traje de Baño celeste con estampado",
    precio: 39.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/trajedebano12.jpg",
    categoria: "trajebano"
  },
  {
    nombre: "vestido color melon",
    precio: 49.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/vestido1.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido blanco",
    precio: 40.00,
    tallas: ['S', 'M', 'L'],
    imagen: "img/vestido2.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido blanco con dibujos de cerezas",
    precio: 49.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/vestido3.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido blanco con dibujos de flores",
    precio: 59.99,
    tallas: ['S', 'M', 'L'],
    imagen: "img/vestido4.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido negro",
    precio: 60.00,
    tallas: ['S', 'M'],
    imagen: "img/vestido5.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido rosado",
    precio: 60.00,
    tallas: ['S', 'M'],
    imagen: "img/vestido6.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido rosado deportivo",
    precio: 50.00,
    tallas: ['S', 'M'],
    imagen: "img/vestido7.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido verde",
    precio: 40.00,
    tallas: ['S', 'M', 'L'],
    imagen: "img/vestido8.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido negro",
    precio: 60.00,
    tallas: ['S', 'M'],
    imagen: "img/vestido9.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido negro",
    precio: 60.00,
    tallas: ['S', 'M', 'L'],
    imagen: "img/vestido10.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido negro",
    precio: 60.00,
    tallas: ['S', 'M'],
    imagen: "img/vestido11.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "vestido rojo",
    precio: 70.00,
    tallas: ['S', 'M'],
    imagen: "img/vestido12.jpg",
    categoria: "vestidos"
  },
  {
    nombre: "Zapatillas de plataforma rosa",
    precio: 79.99,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla1.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas de plataforma",
    precio: 60.00,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla2.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas rosas",
    precio: 79.99,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla3.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas de plataforma negro",
    precio: 89.99,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla4.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas de plataforma",
    precio: 79.99,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla5.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas de plataforma",
    precio: 79.99,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla6.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas",
    precio: 19.00,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla7.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas blancas",
    precio: 19.00,
    tallas: ['36', '37', '38', '39', '40'],
    imagen: "img/zapatilla8.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas grises",
    precio: 20.00,
    tallas: ['36', '37'],
    imagen: "img/zapatilla9.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas azules",
    precio: 19.00,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla10.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas blancas con manchas",
    precio: 26.00,
    tallas: ['37', '38'],
    imagen: "img/zapatilla11.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatillas verdes",
    precio: 79.99,
    tallas: ['36', '37', '38'],
    imagen: "img/zapatilla12.jpg",
    categoria: "zapatilla"
  },
  {
    nombre: "Zapatos rosas de mujer",
    precio: 39.99,
    tallas: ['36', '37'],
    imagen: "img/zapato1.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos cafe de hombre",
    precio: 39.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato2.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos de hombre",
    precio: 29.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato3.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos grises de hombre",
    precio: 39.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato4.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos negros de mujer",
    precio: 49.99,
    tallas: ['36', '37'],
    imagen: "img/zapato5.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos grises de mujer",
    precio: 39.99,
    tallas: ['36'],
    imagen: "img/zapato6.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos azules de hombre",
    precio: 39.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato7.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos unisex",
    precio: 39.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato8.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos blancos",
    precio: 39.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato9.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos negros con rosado",
    precio: 39.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato10.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos",
    precio: 39.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato11.jpg",
    categoria: "zapatos"
  },
  {
    nombre: "Zapatos blancos",
    precio: 39.99,
    tallas: ['36', '37', '38', '39'],
    imagen: "img/zapato12.jpg",
    categoria: "zapatos"
  },
];

export default productos;
