const contenedor = document.getElementById('contenedor-carrito');
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const botonPagar = document.getElementById('boton-pagar');

function mostrarUsuario() {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
    document.getElementById('nombre-usuario').textContent = `Hola, ${usuario}`;
  }
}

function mostrarCarrito() {
  contenedor.innerHTML = '';

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p>Tu carrito está vacío</p>';
    botonPagar.style.display = 'none';
    return;
  }

  carrito.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'producto';
    card.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" />
      <h3>${item.nombre}</h3>
      <p>Precio: $${item.precio.toFixed(2)}</p>
      <button onclick="eliminarProducto(${index})">Eliminar</button>
    `;
    contenedor.appendChild(card);
  });

  mostrarResumen();
}

function mostrarResumen() {
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  const resumen = document.createElement('div');
  resumen.className = 'resumen';
  resumen.innerHTML = `
    <h3>Resumen del Carrito</h3>
    <p>Total: $${total.toFixed(2)}</p>
    <button onclick="vaciarCarrito()">Vaciar Carrito</button>
  `;
  document.getElementById('resumen-carrito').innerHTML = ''; // Limpiar antes de agregar
  document.getElementById('resumen-carrito').appendChild(resumen);
}

window.eliminarProducto = function(index) {
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
};

window.vaciarCarrito = function() {
  localStorage.removeItem('carrito');
  mostrarCarrito();
};

mostrarUsuario();
mostrarCarrito();
