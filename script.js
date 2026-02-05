// Seleciona todos os botões de resposta do quiz
let opcoes = document.querySelectorAll(".opcao");

// Área onde será exibido o feedback (acerto ou erro)
let resultado = document.getElementById("resultado");


// ===============================
// LÓGICA DAS RESPOSTAS DO QUIZ
// ===============================

opcoes.forEach(function(botao) {
    botao.addEventListener("click", function() {

        // Desativa todas as opções após uma resposta ser escolhida
        opcoes.forEach(function(b) {
            b.disabled = true;
        });

        // Verifica se a opção clicada é a correta através do atributo data-correta
        if (botao.dataset.correta === "true") {
            botao.classList.add("correta"); // adiciona estilo visual de acerto
            resultado.innerText = "🎉 Parabéns! Você acertou!";
        } else {
            botao.classList.add("errada"); // adiciona estilo visual de erro
            resultado.innerText = "❌ Ops! Resposta errada.";
        }

    });
});


// ===============================
// BOTÃO REINICIAR QUIZ
// ===============================

let botaoReiniciar = document.getElementById("reiniciar");

botaoReiniciar.addEventListener("click", function(){

    // Limpa a mensagem de resultado
    resultado.innerText = "";

    // Reativa os botões e remove os estilos de acerto/erro
    opcoes.forEach(function(botao){
        botao.disabled = false;
        botao.classList.remove("correta");
        botao.classList.remove("errada");
    });

});


// ===============================
// BOTÃO "DESCOBRIR RESULTADO"
// ===============================

// Elemento onde a mensagem será exibida
let descobrir = document.getElementById("descobrir");

// Botão que dispara a mensagem
let button = document.getElementById("button");

button.addEventListener("click", function() {
    descobrir.innerText = "Obrigado! Você clicou e viu o resultado de muito estudo! Sou o Clebson Silva!";
});


// ===============================
// BOTÃO "IR AO TOPO"
// ===============================

// Seleciona o botão de voltar ao topo
const btnTopo = document.getElementById("btnTopo");


// Mostra ou esconde o botão conforme a rolagem da página
window.addEventListener("scroll", function () {

    // Se a página for rolada mais de 200px, mostra o botão
    if (window.scrollY > 200) {
        btnTopo.style.display = "block";
    } else {
        // Caso contrário, esconde
        btnTopo.style.display = "none";
    }

});


// Ação de rolagem suave para o topo
btnTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
