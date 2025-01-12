// Seleccionar el formulario
const formularioRegistro = document.getElementById('form-registro');

// Agregar un evento para manejar el envío del formulario
formularioRegistro.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página al enviarse

    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar los datos (puedes personalizar esta parte según tus necesidades)
    if (!nombre || !email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Mostrar los datos en la consola (puedes enviar estos datos a un servidor)
    console.log('Datos del usuario:');
    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);

    // Mostrar un mensaje al usuario
    alert('¡Registro exitoso!');

    // Reiniciar el formulario
    formularioRegistro.reset();
});