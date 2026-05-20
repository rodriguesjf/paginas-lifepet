const inputs = document.querySelectorAll('.code-inputs input');

inputs.forEach((input, index) => {

    input.addEventListener('input', () => {

        input.value = input.value.replace(/[^0-9]/g, '');

        if(input.value.length > 0){

            if(index < inputs.length - 1){
                inputs[index + 1].focus();
            }

        }

    });

});

const button = document.querySelector('button');

button.addEventListener('click', () => {

    let codigo = '';

    inputs.forEach(input => {
        codigo += input.value;
    });

    if(codigo.length < 5){
        alert('Digite o código completo!');
        return;
    }

    alert('Código confirmado!');

});