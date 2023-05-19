let socialCredit = 0;
let pregunta = document.getElementById("pregunta");
let listo = document.getElementById("listo");
let siguiente = document.getElementById("siguiente");
let respuestaA = document.getElementById("respuestaA");
let respuestaB = document.getElementById("respuestaB");
let respuestaC = document.getElementById("respuestaC");
let respuestaD = document.getElementById("respuestaD");

const oRespuestas = [
    {
      question: 'How many kids do you have?',
      answers: [
        'A) 6',
        'B) 4',
        'C) 2',
        'D) 1'
    ],
      correctAnswer: 'D'
    },
    {
      question: 'is taiwan a country?',
      answers: [
        'A) yes',
        'B) no',
        'C) my favorite one',
        'D) i wish i could live there'
    ],
      correctAnswer: 'B'
    },
    {
      question: 'is chinafunnies nice?',
      answers: [
        'A) yes',
        'B) rather jump off a bridge',
        'C) no',
        'D) idk'
    ],
      correctAnswer: 'A'
    },
    {
      question: '你认为中共是有史以来最好的事情吗',
      answers: [
        'A) yes',
        'B) no',
        'C) eww',
        'D) CCP是有史以来最糟糕的事情'
    ],
      correctAnswer: 'D'
    },
    {
      question: 'are you respected in the chinese community?',
      answers: [
        'A) no :(',
        "B) i might but i'm not to sure",
        'C) i forgor💀',
        'D) yes :)'
    ],
      correctAnswer: 'D'
    },
    {
      question: 'Is Chinese People Better Than Amercans?',
      answers: [
        'A) chinese haram',
        'B) Yes',
        'C) Hell no!',
        'D) chinese shit'
    ],
      correctAnswer: 'B'
    },
    {
      question: '+15 social credit or +∞ social credit?',
      answers: [
        'A) -30,000,000 social credit!',
        'B) IDK',
        'C) +∞ social credit',
        'D) +15 social credit'
      ],
      correctAnswer: 'D'
    },
    {
      question: 'What happened Tiananmen Square in 1989?',
      answers: [
        'A) A protest',
        'b) A massacre',
        'c) Nothing, it was a normal day',
        'D) Elections'
      ],
      correctAnswer: 'C'
    }
  ]

let numeros = {
    preguntaNo: 0,
    respuestaNo: 0
}

let answerStatus = false;


listo.textContent ="Iniciar";
siguiente.textContent = "Siguiente";
pregunta.textContent = "Presiona Iniciar para comenzar el cuestionario";




function showQuestion(){
    const currentQuestion = oRespuestas[numeros.preguntaNo]
    pregunta.textContent = currentQuestion.question
    const textNodes = [respuestaA, respuestaB, respuestaC, respuestaD]
    answerStatus = false;
    for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const textNode = textNodes[i];
    textNode.textContent = answer;
  }
}

function start() {
    numeros.preguntaNo = 7;
    socialCredit = 0;
    showQuestion()
}

function respuestas(option){
    const currentQuestion = oRespuestas[numeros.preguntaNo]
    if( option === currentQuestion.correctAnswer){
        socialCredit += 10000;
        pregunta.textContent = "Correct! +10000 social credit!!! 😈👍👍👍👍👍👍👍👍👍";
        respuestaA.textContent = "";
        respuestaB.textContent = "";
        respuestaC.textContent = "";
        respuestaD.textContent = "";
        console.log(socialCredit);
    } else {
        socialCredit -= 40000;
        pregunta.textContent = "Wrong! -40000 social credit!!!! 😐😫😪🤬😠";
        respuestaA.textContent = "";
        respuestaB.textContent = "";
        respuestaC.textContent = "";
        respuestaD.textContent = "";
        console.log(socialCredit);
    }
    answerStatus = true;
}

function siguientePregunta(){ 
    numeros.preguntaNo -= 1;
    if (numeros.preguntaNo === -1){
        respuestaA.textContent = "";
        respuestaB.textContent = "";
        respuestaC.textContent = "";
        respuestaD.textContent = "";
    if (socialCredit >= 50000){
        pregunta.textContent = "Tu social credit total es: " + socialCredit + " felicidades 😈👍";
    }else{
        pregunta.textContent = "Tu social credit total es: " + socialCredit + " muy mal";
    }
    return
    }
    showQuestion();
}