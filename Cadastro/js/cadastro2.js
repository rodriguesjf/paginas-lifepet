const cadastroForm = document.getElementById('cadastroForm');

cadastroForm.addEventListener('submit', function(event){

    event.preventDefault();

    const inputs = document.querySelectorAll('input');

    const nome = inputs[0].value;
    const email = inputs[1].value;
    const senha = inputs[2].value;
    const confirmarSenha = inputs[3].value;

    if(
        nome === '' ||
        email === '' ||
        senha === '' ||
        confirmarSenha === ''
    ){
        alert('Preencha todos os campos!');
        return;
    }

    if(senha !== confirmarSenha){
        alert('As senhas não coincidem!');
        return;
    }

    alert('Cadastro realizado com sucesso!');
});