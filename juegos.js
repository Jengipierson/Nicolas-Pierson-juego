// Obtener elementos del DOM
var btnJugada = document.querySelectorAll(".btn-jugada");
var mensaje = document.getElementById("mensaje");
var jugadorJugada = document.querySelector(".jugador .jugada");
var computadoraJugada = document.querySelector(".computadora .jugada");
var mensajeResultado = document.querySelector(".resultado .mensaje");

// Evento clic en botón jugada
btnJugada.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // Jugada del usuario
    var jugadaUsuario = this.getAttribute("data-jugada");

    // Jugada de la computadora
    var jugadas = ["piedra", "papel", "tijeras"];
    var jugadaComputadora = jugadas[Math.floor(Math.random() * jugadas.length)];

    // Mostrar jugadas
    jugadorJugada.innerHTML = jugadaUsuario;
    computadoraJugada.innerHTML = jugadaComputadora;

    // Comprobar ganador
    if (jugadaUsuario === jugadaComputadora) {
      mensajeResultado.innerHTML = "Empate!";
    } else if (
      (jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") ||
      (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
      (jugadaUsuario === "tijeras" && jugadaComputadora === "papel")
    ) {
      mensajeResultado.innerHTML = "¡Ganaste!";
    } else {
      mensajeResultado.innerHTML = "Perdiste :(";
    }
  });
});
