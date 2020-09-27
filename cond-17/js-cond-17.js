let frase= window.prompt("Escribe una frase");

let mitadfrase= frase.length/2;

if(frase.length%2===0) {

   let  caracterespares = frase.substring (mitadfrase-1, mitadfrase+1);

    console.log( caracterespares);
} else{

    let caracteresimpares = frase.length(mitadfrase, mitadfrase+1);
    console.log(caracteresimpares);
}