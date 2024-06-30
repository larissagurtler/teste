// cores.js

const cores = [
    { portugues: 'vermelho', ingles: 'red' },
    { portugues: 'azul', ingles: 'blue' },
    { portugues: 'verde', ingles: 'green' },
    { portugues: 'amarelo', ingles: 'yellow' },
    { portugues: 'roxo', ingles: 'purple' },
    { portugues: 'laranja', ingles: 'orange' },
    { portugues: 'rosa', ingles: 'pink' },
    { portugues: 'marrom', ingles: 'brown' },
    { portugues: 'preto', ingles: 'black' },
    { portugues: 'branco', ingles: 'white' }
];

let indiceCorAtual = 0;
let pontos = 0;

function iniciarJogo() {
    exibirProximaCor();
}

function exibirProximaCor() {
    if (indiceCorAtual < 10) {
        const corAtual = cores[indiceCorAtual];
        const resposta = prompt(`Qual é a cor em inglês correspondente a "${corAtual.portugues}"?`);
        
        // Verifica se o usuário clicou em "Cancelar" ou fechou o prompt
        if (resposta === null) {
            alert(`Jogo encerrado. Pontuação final: ${pontos}`);
            reiniciarJogo();
            return; // Encerra a função
        }
        
        if (resposta.toLowerCase() === corAtual.ingles) {
            pontos++;
            alert(`Correto! Pontuação: ${pontos}`);
        } else {
            alert(`Incorreto! A resposta correta era: ${corAtual.ingles}`);
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
