var numeroGanador = 7;

// Pide al usuario que introduzca un número
var numeroUsuario = prompt("Hola, introduce un número. Si aciertas, ganas una semana de contenido exlusivo para empresarios potenciales.");

// Comprueba si el usuario ha ganado
if(numeroUsuario == numeroGanador) {
  alert("¡Felicidades! Has acertado el número ganador.Llena el formulario para que recibas tu premio.");
} else {
  alert("Lo siento, no has acertado. Llena el formulario y disfruta de todo el contenido gratuito que tenemos para ti.");
}