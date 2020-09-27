let num = window.prompt("Escribe un número de 3 cifras");

num1 = num.substring(0, 1);
num2 = num.substring(1, 2);
num3 = num.substring(2);


if (num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0) {

    window.alert("Todas las cifras son pares");
} else if (num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0) {

    window.alert("Todas las cifras son impares");

}else{

    window.alert("El número tiene cifras pares e impares");
}