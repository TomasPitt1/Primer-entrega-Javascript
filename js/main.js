const precioOCR = 50000;
const precioFuncional = 40000;
const precioMusculacion = 35000;
const precioPackFull = 60000;


const nombre = prompt("Bienvenido, ingrese su nombre");
const edad = parseInt(prompt("Ingrese edad"));
let habilitado = false;
if (edad >= 18){
    habilitado = true;
} else{
    alert("No podra contratar un plan sin supervision de un adulto")
}


while (habilitado = true) {
    const actividades = parseInt(prompt("Ingrese la actividad a la que esta interesado: \n 1-OCR \n 2-Funcional \n 3-Musculacion \n 4-Pack Full \n 5-Salir"))
}

    while (actividades !== 5) {
        switch (actividades) {
            case 1:
            alert("hola")
                break
            case 2:
                
                break
            case 3:
                
                break
            case 4:
                
                break
            default:
                alert("Opcion Incorrecta")
                break
        }
        actividades = parseInt(prompt("Ingrese la actividad a la que esta interesado: \n 1-OCR \n 2-Funcional \n 3-Musculacion \n 4-Pack Full \n 5-Salir"))
    }


    const actividades = parseInt(prompt("Ingrese la actividad a la que esta interesado: \n 1-OCR \n 2-Funcional \n 3-Musculacion \n 4-Pack Full \n 5-Salir"))


