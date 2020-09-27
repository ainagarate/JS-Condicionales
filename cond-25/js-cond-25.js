let nombre = window.prompt("Introduce tu nombre");
let ventas = parseInt(window.prompt("Cuánto has vendido"));


let extra = (ventas * 5) / 100;

if (ventas > 500) {

    window.alert("Tu nombre es " + nombre + " tus ventas son de " + ventas + "€ y has conseguido un extra de " + extra + "€");

} else{
    window.alert("Tu nombre es " + nombre + " tus ventas son de " + ventas);

}