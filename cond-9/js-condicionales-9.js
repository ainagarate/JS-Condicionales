let temp = parseInt(window.prompt("¿Qué temperatura hace en tu ciudad?"));

if (temp>40) {


    window.alert("Vete a otro sitio");
} else if (temp>=30 && temp<=40) {

    window.alert("Enciende el aire");
} else if (temp>=20 && temp<=30) {

    window.alert("No hagas nada");
} else if (temp>=10 && temp<=20) {

    window.alert("Enciende la calefacción");
} else if (temp<10) {

    window.alert("vete a otro sitio");
}


