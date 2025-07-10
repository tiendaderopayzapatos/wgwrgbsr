import productos from './productos.js';

const contenedor = document.getElementById('contenedor-productos');
const filtroCategoria = document.getElementById('filtro-categoria');
const filtroTalla = document.getElementById('filtro-talla');
const busqueda = document.getElementById('busqueda');

// Mostrar nombre de usuario si está logueado
function mostrarUsuario() {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
    document.getElementById('nombre-usuario').textContent = `Hola, ${usuario}`;
    document.querySelector('nav a[href="login.html"]').style.display = 'none';
    document.querySelector('nav a[href="registro.html"]').style.display = 'none';
  }  
}

function mostrarProductosIniciales() {
  const aleatorios = productos.sort(() => 0.5 - Math.random()).slice(0, 20);
  renderizarProductos(aleatorios);
}

function renderizarProductos(lista) {
  contenedor.innerHTML = '';
  lista.forEach(p => {
    const card = document.createElement('div');
    card.className = 'producto';
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio.toFixed(2)}</p>
      <p>Tallas: ${p.tallas.join(', ')}</p>
      <button onclick="agregarAlCarrito('${p.nombre}', '${p.imagen}', ${p.precio})">Agregar al carrito</button>
    `;
    contenedor.appendChild(card);
  });
}

function actualizarFiltroTallas() {
  const categoria = filtroCategoria.value;
  filtroTalla.innerHTML = '<option value="">Todas las tallas</option>';
  
  if (categoria) {
    const tallasUnicas = [...new Set(
      productos
        .filter(p => p.categoria === categoria)
        .flatMap(p => p.tallas)
    )];
    
    tallasUnicas.forEach(t => {
      const option = document.createElement('option');
      option.value = t;
      option.textContent = t;
      filtroTalla.appendChild(option);
    });
  }
}

function filtrarProductos() {
  const categoria = filtroCategoria.value;
  const talla = filtroTalla.value;
  const texto = busqueda.value.toLowerCase();

  const filtrados = productos.filter(p => {
    const coincideCategoria = !categoria || p.categoria === categoria;
    const coincideTalla = !talla || p.tallas.includes(talla);
    const coincideTexto = p.nombre.toLowerCase().includes(texto);
    return coincideCategoria && coincideTalla && coincideTexto;
  });

  renderizarProductos(filtrados);
}

window.agregarAlCarrito = function(nombre, imagen, precio) {
  if (!localStorage.getItem('usuario')) {
    alert('Debes iniciar sesión para agregar productos al carrito');
    window.location.href = 'login.html';
    return;
  }
  
  const item = { nombre, imagen, precio };
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(item);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert('Producto agregado al carrito');
};

filtroCategoria.addEventListener('change', () => {
  actualizarFiltroTallas();
  filtrarProductos();
});

filtroTalla.addEventListener('change', filtrarProductos);
busqueda.addEventListener('input', filtrarProductos);

// Inicialización
mostrarUsuario();
mostrarProductosIniciales();
actualizarFiltroTallas();
