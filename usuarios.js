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
