/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad 
y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando
los inputs ya creados (investigar cómo en MDN).
*/
const nodoDiv = document.querySelector('div');

let max = 0;
let min = 0;
let promedio = 0;

function crearNodos(cant) {
    
    for (let i=0; i < cant; i++) {

        const nuevoLavel = document.createElement('label');
        nuevoLavel.className = 'laveles';
        const textoLavel = document.createTextNode(`Edad integrante n° ${i+1}`);
        nuevoLavel.appendChild(textoLavel);
        nodoDiv.appendChild(nuevoLavel);

        const nuevoInput = document.createElement('input');
        nuevoInput.className = 'inputes';
        nuevoInput.placeholder = 'Ingresa la edad aquí';
        nodoDiv.appendChild(nuevoInput);
    }
}

function borrarLabelInputsAnteriores() {
    const labels = document.querySelectorAll('label');
    console.log(labels);
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    
    for (let i = 3; i < labels.length; i++) {
        labels[i].remove();
    }
    for (let i = 1; i < inputs.length; i++) {
        inputs[i].remove();
    }
}

function eliminarLabelsInputs() {

    let elemento = document.querySelector('div');
    let parrafos = document.querySelector('p');

    while (elemento.firstChild) {

        elemento.removeChild(elemento.firstChild);

    }

    while (parrafos.firstChild) {

        parrafos.removeChild(parrafos.firstChild);

    }
}

function calcularMenorMayor(arr) {

    max = arr[0];
    min = arr[0];

    for (let i=0; i < arr.length; i++) {

        if (max <= arr[i]) {
            max = arr[i];
        }
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
}

function calcularPromedio(arr) {

    let suma = 0;

    for (let i=0; i < arr.length; i++) {
        suma += arr[i];
        promedio = suma/arr.length;
    }
    
}

const botonIngreso = document.querySelector('#boton-ingresar');

botonIngreso.onclick = function() {

    borrarLabelInputsAnteriores();

    const cantidadFamilia = Number(document.querySelector('#cantidadFamiliares').value);

    crearNodos(cantidadFamilia);
    
}

const botonLimpiar = document.querySelector('#boton-limpiar');

botonLimpiar.onclick = function() {

    document.querySelector('#cantidadFamiliares').value = '';

    eliminarLabelsInputs();

}

const botonCalcular = document.querySelector('#boton-calcular');

botonCalcular.onclick = function() {

    const edades = document.querySelectorAll('input');
    let arrayEdades = [];
    for (let i=1; i<edades.length; i++) {
        arrayEdades.push(Number(edades[i].value));
    }
    
    calcularMenorMayor(arrayEdades);
    calcularPromedio(arrayEdades);

    document.querySelector('#mayor').innerText = `La mayor edad es ${max}`;
    document.querySelector('#menor').innerText = `La menor edad es ${min}`;
    document.querySelector('#promedio').innerText = `El promedio de edades es ${promedio}`;

    document.querySelector('#cantidadFamiliares').value = '';

}



