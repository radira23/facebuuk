// Validación del formulario de inicio de sesión
document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtener valores de los campos
    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    if (!username || !password) {
        alert('Por favor, completa todos los campos.'); // Validación básica
    } else {
        // Almacenar el nombre de usuario en localStorage
        localStorage.setItem('username', username);

        // Redirigir al perfil
        window.location.href = "perfil_facebuuk.html"; // Página del perfil
    }
});

// Simulación de ataque de captura de cookies
document.querySelector('.forgot-password').addEventListener('click', function (event) {
    event.preventDefault();

    // Alerta para simular un enlace malicioso
    alert(
        '¡Cuidado! Nunca compartas tus contraseñas ni datos sensibles en sitios no seguros.'
    );

    // Redirigir a la página para cambiar la contraseña
    window.location.href = "cambiar_contrasena.html";
});

// Redirigir a la página de registro
document.querySelector('.create-account').addEventListener('click', function () {
    window.location.href = "registro_facebuuk.html"; // Página del registro
});







