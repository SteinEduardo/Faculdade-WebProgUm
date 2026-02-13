document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensagem = document.getElementById('mensagem');

    console.log("Dados capturados:", { email, password });

    mensagem.textContent = "Login realizado com sucesso! (Veja o console)";
    mensagem.style.color = "green";

    setTimeout(() => {
        this.reset();
        mensagem.textContent = "";
    }, 3000);
});