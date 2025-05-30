let questions = [
    {
        question: "What is the full form of HTML?",
        answers: [
            { text: "Hyper text Make Language", correct : false},
            { text: "Hyper text Markup Language", correct : true},
            { text: "Hyper txt Markup Language", correct : false},
            { text: "Hyperlink text Markup Language", correct : false},
        ]
    },
    {
        question: "What is the full form of CSS?",
        answers: [
            { text: "Shark", correct : false},
            { text: "gobi", correct : false},
            { text: "Shark", correct : false},
            { text: "Antarctica", correct : true},
        ]
    },
    {
        question: "What is the full form of JS?",
        answers: [
            { text: "Java", correct : false},
            { text: "JavaScript", correct : true},
            { text: "JSon", correct : false},
            { text: "JSX", correct : false},
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let prevButton =document.getElementsByClassName("previous");
let nextButton =document.getElementsByClassName("next");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}