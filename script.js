const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.getElementById("reiniciar");

const perguntas = [
    {
        enunciado: "Você está em uma noite tranquila, em casa, e decide preparar algo delicioso para o jantar. Ao abrir a geladeira, encontra dois ingredientes frescos: um suculento pedaço de salmão e um cesto de cogumelos. O que você faz?",
        alternativas: [
            {
                texto: "Preparar um salmão grelhado com molho de limão e ervas finas.",
                afirmacao: "O aroma do salmão grelhado com as ervas começa a se espalhar pela casa, deixando o ambiente ainda mais acolhedor."
            },
            {
                texto: "Fazer um risoto cremoso de cogumelos com um toque de vinho branco.",
                afirmacao: "O risoto fica irresistível e o ambiente se enche de um cheirinho maravilhoso de cogumelos."
            }
        ]
    },
    {
        enunciado: "O prato principal está pronto, mas a noite ainda precisa de um toque especial: a sobremesa. O que você decide preparar para encerrar a refeição de forma doce?",
        alternativas: [
            {
                texto: "Fazer um brownie de caramelo com amendoim e flor de sal.",
                afirmacao: "A combinação de caramelo com flor de sal e amendoim cria uma explosão de sabor que complementa a refeição perfeitamente."
            },
            {
                texto: "Preparar cookies de chocolate recheados com doce de leite.",
                afirmacao: "Os cookies assam e a casa se enche de um aroma doce e acolhedor, mas, infelizmente, você os deixou um pouco tempo demais no forno."
            }
        ]
    },
    {
        enunciado: "Após o jantar, você se acomoda no sofá e pega o controle remoto. Está na hora de relaxar assistindo a um bom filme. Qual gênero você escolhe para essa noite tranquila?",
        alternativas: [
            {
                texto: "Uma maratona de filmes de ação com 'Vingadores: Ultimato'.",
                afirmacao: "Você se perde na ação intensa dos Vingadores e acaba dormindo tarde, mas foi uma noite emocionante."
            },
            {
                texto: "Um clássico romântico como 'Operação Cupido'.",
                afirmacao: "O filme é leve e divertido, e a noite acaba de maneira relaxante e tranquila."
            }
        ]
    },
    {
        enunciado: "Antes de se deitar, você vai tomar um banho quente e escolher o pijama ideal para a noite. Qual é a sua escolha?",
        alternativas: [
            {
                texto: "Um conjunto de pijama curto e confortável.",
                afirmacao: "Apesar de se sentir confortável, a noite fica mais fria do que você imaginava, e você acorda um pouco gelado."
            },
            {
                texto: "Um pijama longo e quentinho.",
                afirmacao: "O pijama longo te mantém aquecido e confortável durante toda a noite. Você dorme tranquilamente e acorda renovado."
            }
        ]
    },
    {
        enunciado: "Agora que está tudo pronto para dormir, você percebe que a janela do quarto está um pouco aberta. O que você decide fazer?",
        alternativas: [
            {
                texto: "Fechar completamente a janela para garantir uma noite silenciosa e sem correntes de ar.",
                afirmacao: "Você se aconchega nas cobertas e logo adormece em um sono profundo e tranquilo."
            },
            {
                texto: "Deixar a janela aberta para sentir a brisa fresca da noite.",
                afirmacao: "A brisa suave entra e traz uma sensação de frescor, e você adormece com um sorriso no rosto."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Função para mostrar a pergunta atual
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

// Função para mostrar as alternativas
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa, botaoAlternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Função chamada quando o usuário escolhe uma alternativa
function respostaSelecionada(opcaoSelecionada, botao) {
    // Feedback visual ao clicar na alternativa
    botao.style.backgroundColor = "#f8cee0";
    botao.style.color = "#aa3c64";
    setTimeout(() => {
        botao.style.backgroundColor = "#f986b2"; // Volta a cor original
        botao.style.color = "#f1cad8";
    }, 300);

    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    setTimeout(mostraPergunta, 500); // Dá um tempo para o feedback visual antes de exibir a próxima pergunta
}

// Função para mostrar o resultado final
function mostraResultado() {
    caixaPerguntas.textContent = "No dia seguinte...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    botaoReiniciar.style.display = "inline-block"; // Exibe o botão de reiniciar
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Resetar o estado do jogo
    atual = 0;
    historiaFinal = "";  // Limpa a história final
    textoResultado.textContent = "";  // Limpa o resultado da história
    caixaPerguntas.textContent = "Você está em uma noite tranquila...";  // Recomeça a história
    caixaAlternativas.textContent = ""; // Limpa as alternativas
    botaoReiniciar.style.display = "none"; // Esconde o botão de reiniciar
    mostraPergunta();  // Mostra a primeira pergunta
}

// Adiciona o evento para o botão de reiniciar
botaoReiniciar.addEventListener("click", reiniciarJogo);

// Começa o jogo
mostraPergunta();
