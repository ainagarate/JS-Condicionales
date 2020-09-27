let temp = parseInt(window.prompt("Pon una temperatura"));
let unidad= window.prompt("Si quieres convertirlo a Celsious pulsa C si quieres Fahrenheit pulsa F");

let celsius= ((temp-32)*5)/9;
let fahrenheit = ((temp*9)/5)+32;

if (unidad==="C") {

    window.alert (celsius + " ºC");
    
} else if (unidad==="F") {

    window.alert (fahrenheit + "ºFaarenheit");
}

