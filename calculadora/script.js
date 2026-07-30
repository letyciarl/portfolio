let historico = JSON.parse(localStorage.getItem("historico")) || [];

function adicionarHistorico(conta) {
    historico.push(conta);

    localStorage.setItem("historico", JSON.stringify(historico));

    mostrarHistorico();
}

function mostrarHistorico() {
    let lista = document.getElementById("historico");
    lista.innerHTML = "";

    historico.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}

function pegarNumeros() {
    return {
        numero1: Number(document.getElementById("numero1").value),
        numero2: Number(document.getElementById("numero2").value)
    };
}

function somar() {
    let numeros = pegarNumeros();

    let resultado = numeros.numero1 + numeros.numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    adicionarHistorico(
        numeros.numero1 + " + " + numeros.numero2 + " = " + resultado
    );
}

function subtrair() {
    let numeros = pegarNumeros();

    let resultado = numeros.numero1 - numeros.numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    adicionarHistorico(
        numeros.numero1 + " - " + numeros.numero2 + " = " + resultado
    );
}

function multiplicar() {
    let numeros = pegarNumeros();

    let resultado = numeros.numero1 * numeros.numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    adicionarHistorico(
        numeros.numero1 + " * " + numeros.numero2 + " = " + resultado
    );
}

function dividir() {
    let numeros = pegarNumeros();

    if (numeros.numero2 === 0) {
        document.getElementById("resultado").innerHTML = "Não é possível dividir por zero!";
        return;
    }

    let resultado = numeros.numero1 / numeros.numero2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    adicionarHistorico(
        numeros.numero1 + " / " + numeros.numero2 + " = " + resultado
    );
}

function limpar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerHTML = "Resultado:";
}

function limparHistorico() {
    historico = [];

    localStorage.removeItem("historico");

    mostrarHistorico();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        somar();
    }
});

mostrarHistorico();
if (localStorage.getItem("modoEscuro") === "true") {
    document.body.classList.add("escuro");
}

function modoEscuro() {
    document.body.classList.toggle("escuro");

    let tema = document.body.classList.contains("escuro");

    localStorage.setItem("modoEscuro", tema);
}
function copiarResultado() {
    let resultado = document.getElementById("resultado").innerText;

    navigator.clipboard.writeText(resultado);

    alert("Resultado copiado!");
}