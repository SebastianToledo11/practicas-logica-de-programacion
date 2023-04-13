function saltarLinea() {

    document.write("<br>");

}

function imprimir(frace) {

    document.write(frace);
    saltarLinea();

}


//calcular victorias
//var victorias = parseInt(prompt("informe cantidad de victorias"));
//var empates = parseInt(prompt("informe cantidad de empates"));

//puntosTotales = victorias * 3 + empates;

//imprimir("el total de puntos del equipo es " + puntosTotales);

//if (puntosTotales > 28) {
//    imprimir("el equipo esta mejor que el año pasado ")
//}
//if (puntosTotales < 28) {
//    imprimir("el equipo esta peor que el año pasado ")
//}
//if (puntosTotales == 28) {
//    imprimir("el equipo esta igual que el año pasado ")
//}



//calcular inc
//infoPeso = prompt("informe su peso");
//infoAltura = prompt("informe su altura");

//function calcularInc(peso,altura) {
//    return (peso / (altura * altura));
//}

//incCalculado = calcularInc(infoPeso,infoAltura);

//imprimir("su inc calculado es de " + incCalculado);

//if (incCalculado < 18) {
//    imprimir("es menos de lo recomendado");
//}
//if (incCalculado >= 18) {
//    if (incCalculado < 25) {
//        imprimir("esta dentro de lo recomendado");
//    }
//}
//if (incCalculado >= 25) {
//    imprimir("es mayor de lo recomendado");
//}




//edad de conducir
//var edad = parseInt(prompt("¿Cuál es tu edad?"));

//if ((edad >= 18)) {

//    imprimir("tienes edad para coducir");
//    var tieneLicencia = prompt("¿Tienes licencia? Responde S o N");
//    if (tieneLicencia == "s") {
//        imprimir("esta en condiciones de circular")
//    }  else {
//        imprimir("tramite su licencia para poder circular")
//    }

//}

//else {
//    imprimir("no puedes conducir")
//}



//practica num pares de 100

//while(contador <= 100) {
//    imprimir(contador);
//    contador = contador + 2;
//}

//imprimir("fin")



//practica estrellas
//for (var lineas = 1; lineas <= 3; lineas++) {
//    for (var columnas = 1; columnas <= 10; columnas++) {
//        document.write("*");
//    }
//    saltarLinea();
//}



//practica de boton
function aleatorio() {
    return Math.round(Math.random()*10);
}

function sortearNum(cantidad) {
    var secreto = [];
    var contador = 1;

    while(contador <= cantidad) {
        var numeroAleatorio = aleatorio();
        console.log(numeroAleatorio)
        var encontrado = false;
        if (numeroAleatorio != 0) {
            for(var posicion = 0; posicion < secreto.length; posicion++) {
                if (numeroAleatorio == secreto[posicion]) {
                    encontrado = true; 
                    break;
                }
            }
            if (encontrado == false) {
                secreto.push(numeroAleatorio);
                contador++;
            }
        }
    }
    return secreto
}

var secreto = sortearNum(4);

console.log(secreto)

var input = document.querySelector("input");
input.focus();

function verificar() {
    var encontrado = false

    for (var posicion = 0; secreto.length; posicion++) {
        if (parseInt(input.value) == secreto[posicion]) {

            alert("correcto")
            encontrado = true
            break
        }
    }
    if (encontrado == false) {
        alert("erro")
    }

    input.value = "";
    input.focus();
}
var button = document.querySelector("button");
button.onclick = verificar;
