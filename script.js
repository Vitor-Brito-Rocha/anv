const button = document.getElementById('botao');

function btnclicado() {
    const copyText = document.getElementById('lumen').textContent;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            button.textContent = "Copiado!";
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
        });
}