// Registro de usuario
const formRegistro = document.getElementById('form-registro');
if (formRegistro) {
  formRegistro.addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    if (usuario && contrasena) {
      localStorage.setItem('usuario', usuario);
      localStorage.setItem('contrasena', contrasena);
      alert('✅ Usuario registrado correctamente');
      window.location.href = 'login.html';
    } else {
      alert('❌ Completa todos los campos');
    }
  });
}

// Inicio de sesión
const formLogin = document.getElementById('form-login');
if (formLogin) {
  formLogin.addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    const guardado = localStorage.getItem('usuario');
    const clave = localStorage.getItem('contrasena');

    if (usuario === guardado && contrasena === clave) {
      alert('✅ Sesión iniciada');
      window.location.href = 'index.html';
    } else {
      alert('❌ Usuario o contraseña incorrectos');
    }
  });
}

// Cerrar sesión
const cerrarSesion = document.getElementById('cerrar-sesion');
if (cerrarSesion) {
  cerrarSesion.addEventListener('click', function() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('contrasena');
    alert('✅ Sesión cerrada');
    window.location.reload(); // Recargar la página para actualizar el estado
  });
}

// Mostrar nombre de usuario y opción de cerrar sesión
function mostrarUsuario() {
  const usuario = localStorage.getItem('usuario');
  if (usuario) {
    document.getElementById('nombre-usuario').textContent = `Hola, ${usuario}`;
    document.getElementById('cerrar-sesion').style.display = 'inline'; // Mostrar el enlace de cerrar sesión
    document.querySelector('nav a[href="login.html"]').style.display = 'none';
    document.querySelector('nav a[href="registro.html"]').style.display = 'none';
  }  
}

mostrarUsuario();
