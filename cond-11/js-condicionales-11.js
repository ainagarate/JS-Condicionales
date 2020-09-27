let numString1 = window.prompt("Escribe un número");
let numString2 = window.prompt("Escribe otro número");

let num1 = parseInt(numString1);
let num2 = parseInt(numString2);

if (num1 > 25 && num1 < 75 && num2 > 25 && num2 < 75) {

    let dig1 = numString1.substring(0, 1);
    let dig2 = numString1.substring(1);
    let dig3 = numString2.substring(0, 1);
    let dig4 = numString2.substring(1);

    if (dig1 === dig3 || dig1 === dig4 || dig2 === dig3 || dig2 === dig4) {

console.log("hay dos números iguales");
    } else{

        console.log("ninguno coincide");
    }
} else{

    console.log("los números no son válidos")
}