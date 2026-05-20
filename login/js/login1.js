const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event){

    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if(email === '' || senha === ''){
        alert('Preencha todos os campos!');
        return;
    }

    alert('Login realizado com sucesso!');
});