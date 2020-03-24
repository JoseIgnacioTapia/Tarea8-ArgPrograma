function probarValidarNumeroIntegrantes() {
    
    console.assert(
        validarNumeroIntegrantes(235) === 'El campo números de integrantes no puede estar vacío, acepta hasta 2 dígitos y no debe contener decimales', 
        'Validar número integrantes no validó que número de integrantes no pueda estar vacío, que acepte hasta 2 dígitos y que no deba contener decimales'
    );
    
}

probarValidarNumeroIntegrantes();

function probarValidarEdadIntegrante() {
    
    console.assert(
        validarEdadIntegrante([1, 23, 1445]) === 'El campo edad integrante debe contener un número entre 1 y 3 dígitos',
        'Validar edad integrante no validó que edad integrante contenga un número entre 1 y 3 dígitos'
    );
    
}

probarValidarEdadIntegrante();