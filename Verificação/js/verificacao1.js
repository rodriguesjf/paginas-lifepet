const codeInputs = document.querySelectorAll('.code-inputs input');

/* MOVER AUTOMATICAMENTE ENTRE OS INPUTS */

codeInputs.forEach((input, index) => {

    input.addEventListener('input', () => {

        input.value = input.value.replace(/[^0-9]/g, '');

        if(input.value.length > 0){

            if(index < codeInputs.length - 1){
                codeInputs[index + 1].focus();
            }

        }

    });

});

/* VOLTAR INPUT COM BACKSPACE */

codeInputs.forEach((input, index) => {

    input.addEventListener('keydown', (event) => {

        if(event.key === 'Backspace' && input.value === ''){

            if(index > 0){
                codeInputs[index - 1].focus();
            }

        }

    });

});

/* BOTÃO CONFIRMAR */

const confirmButton = document.querySelector('button');

confirmButton.addEventListener('click', () => {

    let codigo = '';

    codeInputs.forEach(input => {
        codigo += input.value;
    });

    if(codigo.length < 5){
        alert('Digite o código completo!');
        return;
    }

    alert('Código confirmado com sucesso!');
});