
const OCR = {
    mensual: 50000,
    trimestral: 127500
}

const Funcional = {
    mensual: 40000,
    trimestral: 102000
}

const Musculacion = {
    mensual: 35000,
    trimestral: 89250
}

const PackFull = {
    mensual: 70000,
    trimestral: 178000
}

const actividades = [{ "plan ocr": OCR }, { "plan funcional": Funcional }, { "plan musculacion": Musculacion }, { "plan pack full": PackFull }]
const personalTrainer = 10000

function calcularPrecioFinal(actividadElegida, planElegido, conPersonal) {
    debugger
    let precio = 0
    for (actividad of actividades) {
        if (actividad[actividadElegida.toLowerCase()]) {
            precio = actividad[actividadElegida.toLowerCase()][planElegido.toLowerCase()]
        }
    }
    if (conPersonal) {
        precio += personalTrainer
    }
    return precio
}
function mostrarPrecioSimulado(nombre, precio) {
    alert(nombre + ", el valor de su plan es de: $" + precio)
}

function promptConTexto(texto, esnumero) {
    if (esnumero) {
        return parseInt(prompt(texto))
    }
    return prompt(texto)
}

function ingresarParametros(nombre) {
    const actividadElegida = promptConTexto("En que plan esta interesado: \n Plan OCR \n Plan Funcional \n Plan Musculacion \n Plan Pack Full")

    const planElegido = promptConTexto("Te gustaria abonar un mes o tres meses con un descuento: \n Mensual \n Trimestral")

    const conPersonaltrainer = promptConTexto("Quiere un personal trainer: \n Si \n No")
    const precioFinal = calcularPrecioFinal(actividadElegida, planElegido, conPersonaltrainer)
    mostrarPrecioSimulado(nombre, precioFinal)
}
function ejecutarPrograma() {
    const nombre = promptConTexto("Bienvenido, ingrese su nombre");
    const edad = promptConTexto("Ingrese edad", true);
    if (edad >= 18) {
        ingresarParametros(nombre)
    } else {
        alert("No podra contratar un plan sin supervision de un adulto")
    }
}
ejecutarPrograma()




// INICIO DE SIMULACION


















// for (const actividad of actividades){
//     console.log(actividad)
// }


//     switch (actividadElegida) {
//         case 1:
//             for (let i = 0; i < arrayPlanesOCR.length; i++) {
//                 alert(arrayPlanesOCR[i]);
//             }
//             break
//         case 2:
//             for (let i = 0; i < arrayPlanesFuncional.length; i++) {
//                 alert(arrayPlanesFuncional[i]);
//             }
//             break
//         case 3:
//             for (let i = 0; i < arrayPlanesMusculacion.length; i++) {
//                 alert(arrayPlanesMusculacion[i]);
//             }
//             break
//         case 4:
//             for (let i = 0; i < arrayPlanesPackFull.length; i++) {
//                 alert(arrayPlanesPackFull[i]);
//             }
//             break
//         default:
//             alert("Opción incorrecta. Intente nuevamente.");
//             break;
// }


// while (habilitado = true) {
//     const actividades = parseInt(prompt("Ingrese la actividad a la que esta interesado: \n 1-OCR \n 2-Funcional \n 3-Musculacion \n 4-Pack Full \n 5-Salir"))
// }

// const actividadElegida = parseInt(prompt("Ingrese la actividad a la que esta interesado: \n 1-OCR \n 2-Funcional \n 3-Musculacion \n 4-Pack Full \n 5-Salir"))




// while (actividadElegida !== 5) {
//     switch (actividadElegida) {
//         case 1:
//             for (let i = 0; i < arrayPlanesOCR.length; i++) {
//                 console.log(arrayPlanesOCR[i]);
//             }
//             break
//         case 2:

//             break
//         case 3:

//             break
//         case 4:

//             break
//         default:
//             alert("Opcion Incorrecta")
//             break
//     }
// }


// if (actividadElegida == "OCR") {
//     for (let i = 0; i < arrayPlanesOCR.length; i++){
//         console.log(arrayPlanesOCR[i]);
//         }
// } else if (actividadElegida ==  "Funcional") {
//     for (let i = 0; i < arrayPlanesFuncional.length; i++){
//         console.log(arrayPlanesFuncional[i]);
//         }
// } else if (actividadElegida ==  "Musculacion") {
//     for (let i = 0; i < arrayPlanesMusculacion.length; i++){
//         console.log(arrayPlanesMusculacion[i]);
// }
// } else if (actividadElegida ==  "Pack Full") {
//     for (let i = 0; i < arrayPlanesPackFull.length; i++){
//         console.log(arrayPlanesPackFull[i]);
// }
// }





// while (habilitado = true) {
//     const actividades = parseInt(prompt("Ingrese la actividad a la que esta interesado: \n 1-OCR \n 2-Funcional \n 3-Musculacion \n 4-Pack Full \n 5-Salir"))
// }

// while (actividades !== 5) {
//     switch (actividades) {
//         case 1:
//             for (let i = 0; i < arrayPlanes.length; i++){
//                      console.log(arrayPlanes[i]);
//                 }
//             break
//         case 2:

//             break
//         case 3:

//             break
//         case 4:

//             break
//         default:
//             alert("Opcion Incorrecta")
//             break
//     }
//     actividades = parseInt(prompt("Ingrese la actividad a la que esta interesado: \n 1-OCR \n 2-Funcional \n 3-Musculacion \n 4-Pack Full \n 5-Salir"))
// }


// const actividades = parseInt(prompt("Ingrese la actividad a la que esta interesado: \n 1-OCR \n 2-Funcional \n 3-Musculacion \n 4-Pack Full \n 5-Salir"))
