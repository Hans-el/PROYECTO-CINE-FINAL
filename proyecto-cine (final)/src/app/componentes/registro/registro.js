document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('contraseña').value;

    const user = {
        username: username,
        correo: correo,
        password: password
    };

    fetch('http://localhost:3000/registro_persona', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Usuario registrado con éxito');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error al registrar el usuario');
    });
});
