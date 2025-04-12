
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