function probarValidarSalario() {
    
    console.assert(
        validarSalario(1234.5425) === 'El campo salario no debe estar vacío, acepta hasta 4 números enteros y 2 decimales',
        'Validar salario no validó que el campo salario no este vacío, acepte hasta 4 números enteros y 2 decimales'
    );
    
}

probarValidarSalario();
