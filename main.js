function juegorvs() {
    class Jugador {
        constructor(nombre) {
            this.nombre = nombre;
            this.puntaje = 0;
        }
        
        escogeOpciones() {
            const opciones = ['piedra', 'papel', 'tijeras'];
            const calculo = Math.floor(Math.random() * opciones.length);
            return opciones[calculo];
        }
    }
    
    function juego(jugador1, jugador2) {
        const opciones = ['piedra', 'papel', 'tijeras'];
        
        alert(`Bienvenidos al juego de Piedra, Papel o Tijeras!`);
        alert(`El juego constará de 3 rondas.`);
        
        while (jugador1.puntaje < 3 && jugador2.puntaje < 3) {
            const opcion1 = prompt(`${jugador1.nombre}, Escoge cualquiera de estas opciones (piedra, papel, or tijeras):`).toLowerCase();
            const opcion2 = prompt(`${jugador2.nombre}, Escoge cualquiera de estas opciones (piedra, papel, or tijeras):`).toLowerCase();
            
            if (!opciones.includes(opcion1) || !opciones.includes(opcion2)) {
                alert('Opción Inválida. Por favor ingresa piedra, papel o tijeras.');
                continue;
            }
            
            alert(`${jugador1.nombre} Escogió ${opcion1}. ${jugador2.nombre} Escogió ${opcion2}.`);
            
            if (opcion1 === opcion2) {
                alert('Quedaron Empatados!');
            } else if (
                (opcion1 === 'piedra' && opcion2 === 'tijeras') ||
                (opcion1 === 'papel' && opcion2 === 'piedra') ||
                (opcion1 === 'tijeras' && opcion2 === 'papel')
                ) {
                    jugador1.puntaje++;
                    alert(`${jugador1.nombre} Ganastes!`);
                } else {
                    jugador2.puntaje++;
                    alert(`${jugador2.nombre} Ganastes!`);
                }
                
                alert(`Puntaje Actual: ${jugador1.nombre}: ${jugador1.puntaje}, ${jugador2.nombre}: ${jugador2.puntaje}`);
            }
            
            if (jugador1.puntaje === 3) {
                alert(`${jugador1.nombre} Ganastes el Juego!`);
            } else {
                alert(`${jugador2.nombre} Ganastes el Juego!`);
            }
            
            const jugarNuevamente = confirm('Quieres jugar de nuevo?');
            if (jugarNuevamente) {
                jugador1.puntaje = 0;
                jugador2.puntaje = 0;
                juego(jugador1, jugador2);
            } else {
                return;
            }
        }
        
        const jugador1Nombre = prompt('Ingrese el nombre del Primer Jugador:');
        const jugador2Nombre = prompt('Ingrese el nombre del Segundo Jugador:');
        const jugador1 = new Jugador(jugador1Nombre);
        const jugador2 = new Jugador(jugador2Nombre);
        
        juego(jugador1, jugador2);
    }
    
    
    