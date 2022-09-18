let questions = [
    {
        "question":"Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question":"Welche Programmiersprache ist für das Design der Seite verantwortlich?",
        "answer_1": "HTML",
        "answer_2": "Javascript",
        "answer_3": "Python",
        "answer_4": "CSS",
        "right_answer": 4
    },
    {
        "question":"Welcher Tag steht für Fettgedruckt?",
        "answer_1": "&lt;b&gt;&lt;/b&gt;", //&lt und &GT ermöglichen das anzeigen der Tags als Text. So werden die nicht ausgeführt. Sie werden statt den eckigen Klammern verwendet
        "answer_2": "&lt;br&gt;",
        "answer_3": "&lt;em&gt;&lt;/em&gt;",
        "answer_4": "&lt;ul&gt;&lt;/ul&gt;",
        "right_answer": 1
    },
    {
        "question":"Was bedeutet der TAG <em></em>?",
        "answer_1": "Text wird Fett",
        "answer_2": "Text wird Kursiv",
        "answer_3": "Text wird Unterstrichen",
        "answer_4": "Es passiert nichts",
        "right_answer": 2
    },
    {
        "question":"Wie ändere ich die Farbe eines Textes zu blau?",
        "answer_1": "body: blue;",
        "answer_2": "background-color: blue;",
        "answer_3": "Text-color:blue;",
        "answer_4": "color:blue;",
        "right_answer": 4
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('allQuestions').innerHTML=questions.length;

    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); // es wird die letzte stelle der Variable selection ausgewählt (also die Zahl der Antwort)

    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if(selectedQuestionNumber == question['right_answer']){// Wenn die letzte Stelle/Zahl der Variable selection mit der Zahl aus dem Array right answer übereinstimmt, dann
       document.getElementById(selection).parentNode.classList.add('bg-success'); //CSS Classe von Bootstrapp. ParentNode bedeutet dass das Parent Element von der ID ausgewählt wird.
    } 
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger'); //CSS Classe von Bootstrap
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    };

    document.getElementById('next-button').disabled = false;
}

function nextQuestion(){
    currentQuestion++; //Wert wird um 1 erhöht z.B.: von 0 auf 1
    showQuestion();
}