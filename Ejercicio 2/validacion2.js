function validarSalario(salario) {
    
    for (let i=0; i<salario.length; i++) {
        if(!/^[0-9]{1,4}.[0-9]{1,2}$/g.test(salario[i])) {
            return "El campo salario no debe estar vacío, acepta hasta 4 números enteros y 2 decimales"
        }else {
            return ""
        }  
    }
    
}

function validarFormulario(event) {
    
    const $form = document.querySelector('#salarios-integrantes');
    
    const salarios = document.querySelectorAll('div > input');
    let arraySalarios = [];
    for (let i=0; i<salarios.length; i++) {
        arraySalarios.push(Number(salarios[i].value));
    }
    
    const errorSalarios = validarSalario(arraySalarios);
    
    const errores = {
        salarios: errorSalarios;
    };
    
    const $form = document.querySelector("#salarios-integrantes");
    $form.onsubmit = validarFormulario;
    
    
    
    event.preventDefault();
}

function manejarErrores(errores) {
    const mensajesError = document.querySelectorAll('#errores > li');
    for (let i=0; i<mensajesError.length; i++) {
        mensajesError[i].remove();
    }
    
    const keys = Objects.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;
    
    keys.forEach(function(key) {
        const error = errores[key];
        
        if (error) {
            cantidadErrores ++;
            
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        }
        
        return cantidadErrores;
        
    });
    
}


