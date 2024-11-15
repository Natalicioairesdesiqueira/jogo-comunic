const scenarios = [
    {
        message: "Olá! Preciso que você me ajude com um projeto urgente.",
        options: [
            {
                text: "Claro! Pode me dar mais detalhes sobre o projeto?",
                correct: true,
                feedback: "Excelente! Você demonstrou interesse e pediu mais informações."
            },
            {
                text: "Agora não posso.",
                correct: false,
                feedback: "Uma resposta mais colaborativa seria melhor para a comunicação."
            },
            {
                text: "Vou tentar ajudar, mas não prometo nada.",
                correct: false,
                feedback: "Uma resposta mais positiva e comprometida seria mais apropriada."
            },
            {
                text: "Com certeza! Qual é a prioridade e o prazo que precisamos trabalhar?",
                correct: true,
                feedback: "Ótimo! Você mostrou proatividade e foco em resultados."
            }
        ]
    },
    {
        message: "Não concordo com sua proposta de solução.",
        options: [
            {
                text: "Você está errado!",
                correct: false,
                feedback: "Confronto direto não ajuda na comunicação."
            },
            {
                text: "Entendo seu ponto de vista. Podemos discutir alternativas?",
                correct: true,
                feedback: "Ótimo! Você mostrou empatia e abertura para diálogo."
            },
            {
                text: "Talvez haja um equívoco na sua proposta.",
                correct: false,
                feedback: "Essa resposta pode soar defensiva e não colaborativa."
            },
            {
                text: "Gostaria de ouvir mais sobre suas preocupações.",
                correct: true,
                feedback: "Perfeito! Você se mostrou aberto ao diálogo."
            }
        ]
    },
    {
        message: "Este relatório está com vários erros.",
        options: [
            {
                text: "Obrigado pelo feedback. Pode me apontar os erros específicos?",
                correct: true,
                feedback: "Excelente! Você aceitou o feedback e buscou mais informações."
            },
            {
                text: "Impossível, eu revisei várias vezes!",
                correct: false,
                feedback: "Defensividade pode prejudicar a comunicação efetiva."
            },
            {
                text: "Isso é apenas uma opinião sua.",
                correct: false,
                feedback: "Desconsiderar o feedback pode dificultar o aprendizado."
            },
            {
                text: "Vamos revisar o relatório juntos para encontrar os erros.",
                correct: true,
                feedback: "Bom! Você propôs uma solução colaborativa."
            }
        ]
    },
    {
        message: "Desculpe, mas vou precisar remarcar nossa reunião de hoje.",
        options: [
            {
                text: "Sem problemas! Quando seria melhor para você?",
                correct: true,
                feedback: "Perfeito! Você foi compreensivo e buscou uma solução."
            },
            {
                text: "Isso é muito inconveniente para mim!",
                correct: false,
                feedback: "Uma resposta mais flexível ajudaria a manter um bom relacionamento profissional."
            },
            {
                text: "Entendo que imprevistos acontecem.",
                correct: true,
                feedback: "Ótimo! Você demonstrou compreensão."
            },
            {
                text: "Por que você não me avisou antes?",
                correct: false,
                feedback: "Essa abordagem pode soar acusatória."
            }
        ]
    },
    {
        message: "Tenho uma sugestão diferente para resolver este problema.",
        options: [
            {
                text: "Minha ideia é melhor, vamos seguir com ela.",
                correct: false,
                feedback: "É importante estar aberto a diferentes perspectivas."
            },
            {
                text: "Interessante! Poderia compartilhar sua visão?",
                correct: true,
                feedback: "Excelente! Você demonstrou abertura para novas ideias."
            },
            {
                text: "Está bom, mas temos que fazer do meu jeito.",
                correct: false,
                feedback: "Ser inflexível pode prejudicar a colaboração."
            },
            {
                text: "Acho que podemos combinar nossas ideias.",
                correct: true,
                feedback: "Perfeito! Você propôs um compromisso."
            }
        ]
    },
    {
        message: "Estou muito estressado com a carga de trabalho atual.",
        options: [
            {
                text: "Todos estamos ocupados, você precisa se organizar melhor.",
                correct: false,
                feedback: "Esta resposta minimiza os sentimentos da pessoa e não oferece suporte."
            },
            {
                text: "Compreendo sua situação. Podemos pensar juntos em como distribuir melhor as tarefas?",
                correct: true,
                feedback: "Ótimo! Você mostrou empatia e ofereceu ajuda prática."
            },
            {
                text: "Foque nas prioridades e deixe as tarefas menos importantes.",
                correct: false,
                feedback: "Essa resposta pode soar desconsiderativa."
            },
            {
                text: "É normal sentir pressão. O que posso fazer para ajudar?",
                correct: true,
                feedback: "Excelente! Você está se oferecendo para ajudar."
            }
        ]
    },
    {
        message: "Percebi que você parece insatisfeito com o projeto.",
        options: [
            {
                text: "Agradeço sua preocupação. De fato, tenho algumas preocupações que gostaria de compartilhar.",
                correct: true,
                feedback: "Excelente! Você foi honesto e aberto ao diálogo."
            },
            {
                text: "Você está imaginando coisas.",
                correct: false,
                feedback: "Negar ou invalidar as percepções dos outros prejudica a comunicação."
            },
            {
                text: "Na verdade, estou feliz com o projeto.",
                correct: false,
                feedback: "Isso pode ser visto como evasão."
            },
            {
                text: "Vamos conversar sobre as minhas ideias para melhorá-lo.",
                correct: true,
                feedback: "Perfeito! Você propôs uma abordagem produtiva."
            }
        ]
    },
    {
        message: "Precisamos entregar este projeto antes do prazo previsto.",
        options: [
            {
                text: "Isso é impossível! Não vou conseguir fazer.",
                correct: false,
                feedback: "Uma resposta negativa imediata fecha as portas para soluções criativas."
            },
            {
                text: "Entendo a urgência. Vamos avaliar o que podemos ajustar no cronograma?",
                correct: true,
                feedback: "Perfeito! Você manteve uma atitude construtiva diante do desafio."
            },
            {
                text: "Por que não temos mais tempo?",
                correct: false,
                feedback: "Essa resposta pode soar como uma queixa."
            },
            {
                text: "Vamos priorizar as tarefas mais críticas.",
                correct: true,
                feedback: "Ótima abordagem! Você focou em soluções relevantes."
            }
        ]
    },
    {
        message: "Sua apresentação na reunião poderia ter sido melhor preparada.",
        options: [
            {
                text: "Você tem razão. Poderia me dar algumas sugestões específicas para melhorar?",
                correct: true,
                feedback: "Excelente! Você aceitou o feedback e buscou formas de melhorar."
            },
            {
                text: "Eu fiz o meu melhor, se não gostou, faça você mesmo da próxima vez.",
                correct: false,
                feedback: "Respostas defensivas e agressivas prejudicam o ambiente profissional."
            },
            {
                text: "Não concordo com você.",
                correct: false,
                feedback: "Desacreditar feedbacks negativos pode impedir seu crescimento."
            },
            {
                text: "Agradeço por apontar isso. Vou trabalhar para melhorar.",
                correct: true,
                feedback: "Ótimo! Você demonstrou receptividade ao feedback."
            }
        ]
    }
];
    // Adicione novos cenários aqui

let currentScenario = 0;
let score = 0;

function updateScore(value) {
    score += value;
    document.getElementById('score').textContent = score;
}

function showFeedback(isCorrect, message) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
}

function createMessage(text, isReceiver = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isReceiver ? 'receiver' : 'sender';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message';
    messageContent.textContent = text;
    
    messageDiv.appendChild(messageContent);
    return messageDiv;
}

function loadScenario() {
    if (currentScenario >= scenarios.length) {
        endGame();
        return;
    }

    const scenario = scenarios[currentScenario];
    const messageArea = document.getElementById('messageArea');
    const optionsArea = document.getElementById('options');
    
    // Limpar conteúdo anterior
    messageArea.innerHTML = '';
    optionsArea.innerHTML = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('feedback').textContent = '';

    // Adicionar mensagem
    messageArea.appendChild(createMessage(scenario.message));

    // Adicionar opções
    scenario.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        optionsArea.appendChild(button);
    });
}

function selectOption(optionIndex) {
    const scenario = scenarios[currentScenario];
    const option = scenario.options[optionIndex];
    
    // Adicionar resposta do jogador na área de mensagens
    const messageArea = document.getElementById('messageArea');
    messageArea.appendChild(createMessage(option.text, false));

    // Atualizar pontuação e mostrar feedback
    if (option.correct) {
        updateScore(10);
        showFeedback(true, option.feedback);
    } else {
        showFeedback(false, option.feedback);
    }

    // Desabilitar botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);

    // Carregar próximo cenário após atraso
    setTimeout(() => {
        currentScenario++;
        loadScenario();
    }, 2000);
}
let username = "";

function startGame() {
    const nameInput = document.getElementById('username').value.trim();
    if (!nameInput) {
        alert("Por favor, insira seu nome para começar.");
        return;
    }

    username = nameInput; // Armazena o nome do usuário
    document.getElementById('startContainer').style.display = "none";
    document.getElementById('gameContainer').style.display = "block";
    loadScenario();
}

function endGame() {
    const messageArea = document.getElementById('messageArea');
    const optionsArea = document.getElementById('options');
    
    messageArea.innerHTML = '';
    optionsArea.innerHTML = '';

    const finalMessage = document.createElement('div');
    finalMessage.className = 'feedback correct';
    finalMessage.textContent = `Parabéns, ${username}! Jogo finalizado! Sua pontuação final foi ${score}.`;
    messageArea.appendChild(finalMessage);

    // Adicionando link para o vídeo no YouTube
    const studyLink = document.createElement('a');
    studyLink.href = "https://youtube.com/playlist?list=PL3bGT7WNo3eJpy-3vR-OkdXiP-tHwX5QZ&si=SvGuOj7Ap1-yTl9V"; // Substitua pelo link do vídeo
    studyLink.target = "_blank"; // Abre o link em nova aba
    studyLink.textContent = "Clique aqui para assistir uma playlist  sobre comunicação!";
    studyLink.style.display = "block";
    studyLink.style.marginTop = "15px";
    studyLink.style.textAlign = "center";
    studyLink.style.color = "var(--primary)";
    studyLink.style.fontWeight = "bold";
    studyLink.style.textDecoration = "none";
    studyLink.style.fontSize = "1rem";
    messageArea.appendChild(studyLink);

    const replayButton = document.createElement('button');
    replayButton.textContent = "Jogar Novamente";
    replayButton.onclick = () => {
        currentScenario = 0;
        score = 0;
        updateScore(0);
        loadScenario();
    };
    optionsArea.appendChild(replayButton);
}


loadScenario();
