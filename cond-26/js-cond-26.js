let edad = parseInt(window.prompt("¿Cuántos años tienes?"));


let nombre;
let apellido;
let ciudad;
let dias;

let carnet;

if (edad >= 18) {

    carnet = window.prompt("¿Tienes carnet?");
    if (carnet === "Si") {

        nombre = window.prompt("¿Cuál es tu nombre tu nombre?");
        apellido = window.prompt("¿Cuál es tu nombre tu apellido?");
        ciudad = window.prompt("¿Dónde recogerás el coche?");
        dias = parseInt(window.prompt("¿Cuántos días quieres alquilar el coche?"));

        if (dias === 7) {
            window.alert("Tu nombre es "+nombre+ " tu apellido es "+ apellido+ " recogerás el coche en "+ ciudad + " y el precio sera 150€");

        } else {
            window.alert("Tu nombre es "+nombre+ " tu apellido es "+ apellido+ " recogerás el coche en "+ ciudad + " y el precio sera " + (dias*25));
        }


        




    } else {

        window.alert("No puedes conducir");
    }





} else {

    window.alert("Eres menor de edad");
}










