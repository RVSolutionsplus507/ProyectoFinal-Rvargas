function showToast(texto, isValid) {
    setTimeout(() => {
        Toastify({
            text: texto,
            className: isValid ? "info" : "error",
            style: {
                background: isValid ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #ff4b1f, #ff9068)",
                borderRadius: "10px",
                color: "white",
            },
            gravity: "bottom", 
        }).showToast();
    }, 0);
}

document.getElementById('formulario-login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            const username = document.getElementById('usuario').value;
            const password = document.getElementById('password').value;

            const isValid = data.users.some(user => user.username === username && user.password === password);

            if (isValid) {
                showToast("Inicio de sesión exitoso", true);
                setTimeout(() => {
                    window.location.href = "../views/home.html";
                }, 1000);
            } else {
                showToast("Credenciales incorrectas", false);
            }
        })
        .catch(error => {
            console.error(error);
        });
});

