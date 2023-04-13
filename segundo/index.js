function saltarLinea() {

    document.write("<br>");
    document.write("<br>");

}

function imprimir(frace) {

    document.write(frace);
    saltarLinea();

}

var numPensado = Math.round(Math.random()*10)
var intentos = 3;
var contador = 1;



while (contador <= intentos) {

    var numLansado = parseInt(prompt("¿que numero es? entre 0-10"));

    if(numPensado == numLansado) {
        break;
    }
    
    else {
        alert("nop")
    }
    contador++;
}

if(numPensado == numLansado) {
    imprimir("correcto, la cantidad de intentos fueron " + contador)
}

else {
    imprimir("nop, era el numero " + numPensado)
}

