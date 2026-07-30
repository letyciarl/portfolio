alert("Seja bem-vindo(a) ao meu portfólio!")
const botao = document.getElementById("mensagem");
const texto = document.getElementById("texto");

botao.addEventListener("click", function () {
    texto.textContent = "Que bom ter você aqui! Continue explorando meu portfólio.";
});