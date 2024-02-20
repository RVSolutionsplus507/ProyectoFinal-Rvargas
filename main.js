function juegorvs() {
    let jugar = prompt("Quieres jugar? (si/no)");
    while (jugar.toLowerCase() !== "si" && jugar.toLowerCase() !== "no") {
        jugar = prompt("Opción inválida. Por favor, responde con 'si' o 'no'.");
    }

    if (jugar.toLowerCase() === "si") {
        while (true) {
            let opcionUsuario = prompt("Elige: Piedra, Papel, o Tijeras");

            if (opcionUsuario !== "piedra" && opcionUsuario !== "papel" && opcionUsuario !== "tijeras") {
                alert("Opción inválida. Por favor, elige entre Piedra, Papel o Tijeras.");
                continue;
            }

            let opcionPC = Math.random();
            if (opcionPC < 0.33) {
                opcionPC = "piedra";
            } else if (opcionPC < 0.66) {
                opcionPC = "papel";
            } else {
                opcionPC = "tijeras";
            }

            if (opcionUsuario === opcionPC) {
                alert("Es un Empate!");
            } else if (
                (opcionUsuario === "piedra" && opcionPC === "tijeras") ||
                (opcionUsuario === "papel" && opcionPC === "piedra") ||
                (opcionUsuario === "tijeras" && opcionPC === "papel")
            ) {
                alert("Ganaste! Bien hecho Crack!!");
            } else {
                alert("Perdiste! la Computadora te dio una paliza..! =(");
            }

            let juegoNuevo = prompt("¿Quieres jugar nuevamente? (si/no)");

            while (juegoNuevo.toLowerCase() !== "si" && juegoNuevo.toLowerCase() !== "no") {
                juegoNuevo = prompt("Opción inválida. Por favor, responde con 'si' o 'no'.");
            }

            if (juegoNuevo.toLowerCase() !== "si") {
                break;
            }
        }
    } else {
        alert("No hay problema, vuelve pronto!");
    }
}
