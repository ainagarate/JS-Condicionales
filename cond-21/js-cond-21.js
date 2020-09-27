
let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe un número"));
let num3 = parseInt(window.prompt("Escribe un número"));


if(num1>num2 && num1>num3) {

    window.alert(num1);
} else if (num2>num1 && num2>num3){

    window.alert(num2);
} else if(num3>num1 && num3>num2){

    window.alert(num3);
}