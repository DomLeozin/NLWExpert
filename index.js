//array com todas as perguntas e suas respostas
const perguntas = [
    {
      pergunta: "Qual é o nome do pai de Sasuke Uchiha?",
      respostas: [
        "Fugaku Uchiha",
        "Itachi Uchiha",
        "Madara Uchiha",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o sensei da Equipe 7?",
      respostas: [
        "Kakashi Hatake",
        "Jiraiya",
        "Orochimaru",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a técnica de assinatura de Sasuke Uchiha?",
      respostas: [
        "Rasengan",
        "Chidori",
        "Kage Bunshin no Jutsu",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da vila onde Naruto nasceu?",
      respostas: [
        "Vila da Folha",
        "Vila da Areia",
        "Vila da Névoa",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é conhecido como 'O Sábio dos Seis Caminhos'?",
      respostas: [
        "Madara Uchiha",
        "Hagoromo Ōtsutsuki",
        "Tobirama Senju",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o líder da Akatsuki?",
      respostas: [
        "Pain",
        "Itachi Uchiha",
        "Kisame Hoshigaki",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o clã de Neji?",
      respostas: [
        "Clã Nara",
        "Clã Aburame",
        "Clã Hyūga",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o pai de Naruto?",
      respostas: [
        "Minato Namikaze",
        "Hiruzen Sarutobi",
        "Kakashi Hatake",
      ],
      correta: 0
    },
     {
      pergunta: "Qual é o nome do sensei de Rock Lee?",
      respostas: [
        "Kakashi Hatake",
        "Might Guy",
        "Asuma Sarutobi",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o irmão mais velho de Sasuke?",
      respostas: [
        "Itachi Uchiha",
        "Madara Uchiha",
        "Obito Uchiha",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //associa todos os objetos de perguntas ao site
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  //associa todos os objetos de respostas ao site
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' 
      + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //remove a resposta placeholder do template
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }