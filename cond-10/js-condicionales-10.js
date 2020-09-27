let var1 = parseInt(window.prompt("Escribe un número"));
let var2 = parseInt(window.prompt("Escribe otro número"));

if (var1===var2){

    window.alert("0")
} else if (var1%6===var2%6 && var1<var2) {  

    window.alert(var1);


}else if (var1%6===var2%6 && var1>var2) {

    window.alert(var2);

} else if (var1%6!==var2%6 && var1>var2) {

    window.alert(var1);
}else if (var1%6!==var2%6 && var1<var2) {

    window.alert(var2);

}

    