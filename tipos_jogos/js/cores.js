// cores.js

let cores = [
    { portugues: 'vermelho', ingles: 'red' },
    { portugues: 'azul', ingles: 'blue' },
    { portugues: 'verde', ingles: 'green' },
    { portugues: 'amarelo', ingles: 'yellow' },
    { portugues: 'roxo', ingles: 'purple' },
    { portugues: 'laranja', ingles: 'orange' },
    { portugues: 'rosa', ingles: 'pink' },
    { portugues: 'marrom', ingles: 'brown' },
    { portugues: 'preto', ingles: 'black' },
    { portugues: 'branco', ingles: 'white' },
    { portugues: 'cinza', ingles: 'gray' },
    { portugues: 'verde limão', ingles: 'lime' },
    { portugues: 'ciano', ingles: 'cyan' },
    { portugues: 'magenta', ingles: 'magenta' },
    { portugues: 'dourado', ingles: 'gold' },
    { portugues: 'prata', ingles: 'silver' }
];

let indiceCorAtual = 0;
let pontos = 0;

function iniciarJogo() {
    embaralharCores();
    exibirProximaCor();
}

function embaralharCores() {
    for (let i = cores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cores[i], cores[j]] = [cores[j], cores[i]];
    }
}

function exibirProximaCor() {
    if (indiceCorAtual < 10) {
        const corAtual = cores[indiceCorAtual];
        let resposta = prompt(`Qual é a cor em inglês correspondente a "${corAtual.portugues}"?`);

        // Verifica se o usuário clicou em "Cancelar" ou fechou o prompt
        if (resposta === null) {
            alert(`Jogo encerrado. Pontuação final: ${pontos}`);
            reiniciarJogo();
            return; // Encerra a função
        }

        // Loop até que o usuário digite uma resposta válida
        while (resposta.trim() === "") {
            alert("Escreva uma cor para continuar.");
            resposta = prompt(`Qual é a cor em inglês correspondente a "${corAtual.portugues}"?`);
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
    embaralharCores(); // Embaralha as cores novamente para o próximo jogo
}
