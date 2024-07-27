document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const password = document.getElementById('contraseña').value;

    if (!correo || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const user = {
        correo: correo,
        password: password
    };

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Success:', data);
            alert('Inicio de sesión exitoso');
            // Redirigir a la página principal aquí
            window.location.href = '/pagina-principal';
        } else {
            alert('Credenciales incorrectas');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error al iniciar sesión');
    });
});
