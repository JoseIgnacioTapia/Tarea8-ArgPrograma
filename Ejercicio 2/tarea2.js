/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para 
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let anualMayor = 0;
let anualMenor = 0;
const promedioAnual = 0;
const promedioMensual = 0;


const nodoForm = document.querySelector('form');

function crearLabelInput() {
    
    const nuevoLavel = document.createElement('label');
    const textoLavel = document.createTextNode('Sueldo Anual');
    nuevoLavel.appendChild(textoLavel);
    nodoForm.appendChild(nuevoLavel);

    const nuevoInput = document.createElement('input');
    nuevoInput.placeholder = 'Ingresar aquí';
    nodoForm.appendChild(nuevoInput);
    
    mostrarBotonOculto();
}

function quitarLabelInput() {
    const labeles = document.querySelectorAll('label');
    const inputes = document.querySelectorAll('input');

    if (labeles.length > 0 && inputes.length > 0) {
        labeles[labeles.length - 1].remove();
        inputes[inputes.length - 1].remove();
    } else {
        ocultarBotonOculto();
    }

}

function mostrarBotonOculto() {
    document.querySelector('#calcular').className = '';
}

function ocultarBotonOculto() {
    document.querySelector('#calcular').className = 'oculto';
}

function ocultarAnalisisOculto() {
    document.querySelector('#analisis').className = 'oculto';
}

function mostrarAnalisisOculto() {
    document.querySelector('#analisis').className = '';
}

function limpiarInputsLabels() {
    const labels = document.querySelectorAll('label');
    const inputs = document.querySelectorAll('input');

    for (let i = 0; i < labels.length; i++) {
        labels[i].remove();
    }
    for (let i=0; i<inputs.length; i++) {
        inputs[i].remove();
    }
}

function calcularAnualMayorMenor(arr) {
    anualMenor = arr[0];
    anualMayor = arr[0];

    for (let i=0; i < arr.length; i++) {

        if (anualMayor <= arr[i]) {
            anualMayor = arr[i];
        }
        if (anualMenor >= arr[i]) {
            anualMenor = arr[i];
        }
    }
    
}

function calcularAnualPromedio(arr) {
    let suma = 0;

    for (let i=0; i < arr.length; i++) {
        suma += arr[i];
        promedioAnual = suma/arr.length;
    }
}

function calcularMensualPromedio(arr) {
    let sumaMensual = 0;

    for (let i=0; i < arr.length; i++) {
        sumaMensual += (arr[i]/12);
    }
    promedioMensual = sumaMensual/arr.length;
}


const botonAgregar = document.querySelector('#boton-agregar');

botonAgregar.onclick = function() {

    crearLabelInput();

}

const botonQuitar = document.querySelector('#boton-quitar');

botonQuitar.onclick = function() {

    quitarLabelInput();
    
    const labels = document.querySelectorAll('label');
    const inputs = document.querySelectorAll('input');
    
    if (labels.length === 0 && inputs.length === 0) {
        ocultarBotonOculto();
    }

}

const botonCalcular = document.querySelector('#calcular');

botonCalcular.onclick = function() {

    const salariosAnuales = document.querySelectorAll('input');
    let arrayAnuales = [];
    for (let i=0; i<salariosAnuales.length; i++) {
        if (Number(salariosAnuales[i].value) !== 0) {
            arrayAnuales.push(Number(salariosAnuales[i].value));
        }
    }
    
    calcularAnualMayorMenor(arrayAnuales);
    calcularAnualPromedio(arrayAnuales);
    calcularMensualPromedio(arrayAnuales);

    document.querySelector('#salario-anual-mayor').innerText = `${anualMayor}`;
    document.querySelector('#salario-anual-menor').innerText = `${anualMenor}`;
    document.querySelector('#salario-anual-promedio').innerText = `${promedioAnual}`;
    document.querySelector('#salario-mensual-promedio').innerText = `${promedioMensual}`;

    mostrarAnalisisOculto();

}

const botonResetear = document.querySelector('#resetear');

botonResetear.onclick = function() {
    ocultarBotonOculto();
    ocultarAnalisisOculto();
    limpiarInputsLabels();
}
