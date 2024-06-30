// cores.js

const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
let indiceCorAtual = 0;
let pontos = 0;

function iniciarJogo() {
    exibirProximaCor();
}

function exibirProximaCor() {
    if (indiceCorAtual < 10) {
        const corAtual = cores[indiceCorAtual];
        const resposta = prompt(`Qual é a cor em inglês?\nExemplo: Red, Blue, Green, etc.`);
        
        // Verifica se o usuário clicou em "Cancelar" ou fechou o prompt
        if (resposta === null) {
            alert(`Jogo encerrado. Pontuação final: ${pontos}`);
            reiniciarJogo();
            return; // Encerra a função
        }
        
        if (resposta.toLowerCase() === corAtual) {
            pontos++;
            alert(`Correto! Pontuação: ${pontos}`);
        } else {
            alert(`Incorreto! A resposta correta era: ${corAtual}`);
        }
        
        indiceCorAtual++;
        exibirProximaCor();
    } else {
        alert(`Fim do Jogo! Sua pontuação final é: ${pontos}`);
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    indiceCorAtual = 0;
    pontos = 0;
}
