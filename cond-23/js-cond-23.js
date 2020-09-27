let nota1 = parseInt(window.prompt("Escribe la nota del primer exámen"));
let nota2 = parseInt(window.prompt("Escribe la nota del segundo exámen"));
let nota3 = parseInt(window.prompt("Escribe la nota del tercer exámen"));


if ((nota1+nota3)>nota2 && (nota1+nota3) ===10){

    window.alert("10 es matrícula")
} else if ((nota1+nota3)>nota2 && (nota1+nota3) >=9 && (nota1+nota3) <10) {


    window.alert("Sobresaliente")



} else if ((nota1+nota3)>nota2 && (nota1+nota3) >=7 && (nota1+nota3) <9){

    window.alert("Notable")

} else if ((nota1+nota3)>nota2 && (nota1+nota3) >=6 && (nota1+nota3) <7){

window.alert("Bien")

}else if ((nota1+nota3)>nota2 && (nota1+nota3) >=5 && (nota1+nota3) <6) {

    window.alert("aprobado")
}else if ((nota1+nota3)>nota2 && (nota1+nota3) >=0 && (nota1+nota3) <5) {

    window.alert("suspenso")

} else if((nota2+nota3)>nota1 && (nota2+nota3) ===10){

    window.alert("10 es matrícula")
} else if ((nota2+nota3)>nota1 && (nota2+nota3) >=9 && (nota2+nota3) <10) {


    window.alert("Sobresaliente")



} else if ((nota2+nota3)>nota1 && (nota2+nota3) >=7 && (nota2+nota3) <9){

    window.alert("Notable")

} else if ((nota2+nota3)>nota2 && (nota2+nota3) >=6 && (nota2+nota3) <7){

window.alert("Bien")

}else if ((nota2+nota3)>nota2 && (nota2+nota3) >=5 && (nota2+nota3) <6) {

    window.alert("aprobado")
}else if ((nota2+nota3)>nota2 && (nota2+nota3) >=0 && (nota2+nota3) <5) {

    window.alert("suspenso")
} 
