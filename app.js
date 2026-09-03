// ===== JavaScript de mi primera web =====
// El JS le da COMPORTAMIENTO a la página: reacciona a lo que haces.

// 1) Saludo según la hora del día
const hora = new Date().getHours();
let saludo;
if (hora < 12) {
  saludo = "¡Buenos días!";
} else if (hora < 20) {
  saludo = "¡Buenas tardes!";
} else {
  saludo = "¡Buenas noches!";
}
document.getElementById("saludo").textContent = saludo;

// 2) El botón contador
let contador = 0;
const boton = document.getElementById("boton-contador");

boton.addEventListener("click", function () {
  contador = contador + 1;
  boton.textContent = "Me has pulsado " + contador + " veces";
});
