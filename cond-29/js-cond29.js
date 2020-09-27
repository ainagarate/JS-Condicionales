let texto = window.prompt("Dile algo a Bob");
​

if (
  texto.substring(frase.length - 1 === "?") &&
  texto.substring(frase.length - 2) !== "!?"
) {
  console.log("¡Claro!");
​

} else if (texto.substring(texto.length - 1) === "!") {
  console.log("¡Eh, tranquilizate!");
​
 
} else if (texto.substring(texto.length - 2) === "!?") {
  console.log("¡Eh, tranquilízate! Yo sé lo que hago.");

} else if (texto.length === 0) {
  console.log("Vale con que esas tenemos...");
​
  
} else {
  console.log("Sin más");
}