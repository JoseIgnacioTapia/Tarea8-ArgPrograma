function validarNumeroIntegrantes(cantidad) {
    
    if (!/^[0-9]{2}$/g.test(cantidad)) {
        return 'El campo números de integrantes no puede estar vacío, acepta hasta 2 dígitos y no debe contener decimales';
    } else {
        return '';
    }
    
}

function validarEdadIntegrante(arrayEdades) {
    
    for (let i=0; i < arrayEdades.length; i++) {
        if (!/^[0-9]{3}$/g.test(arrayEdades)) {
            return 'El campo edad integrante debe contener un número entre 1 y 3 dígitos';
        } else {
            return '';
        }  
    }
    
}

function validarFormulario(event) {
    
    const $form = document.querySelector("#edades-integrantes-familia");
    
    const cantidad = $form.cantidad.value;
    
    const edades = document.querySelectorAll('div > input');
    let arrayEdades = [];
    for (let i=0; i<edades.length; i++) {
        arrayEdades.push(Number(edades[i].value));
    }
    
    const errorCantidad = validarNumeroIntegrantes(cantidad);
    const errorEdades = validarEdadIntegrante(arrayEdades);
    
    const errores = {
        cantidad: errorCantidad,
        edades: errorEdades
    };
    
    const esExito = manejarErrores(errores) === 0;
    
    
    
    event.preventDefault();
}

function manejarErrores(errores) {
    const mensajesError = document.querySelectorAll('#errores > li');
    for(let i=0; i<mensajesError.length; i++) {
        mensajesError[i].remove();
    }
    
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;
    
    keys.forEach(function(key) {
        const error = errores[key];
        
        if(error) {
            cantidadErrores ++;
            
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        }
        
    });
    console.log(cantidadErrores);
    return cantidadErrores;
}

const $form = document.querySelector('#edades-integrantes-familia');
$form.onsubmit = validarFormulario;








