const quizData = [
    {
        question: "How many continents are there in the world?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c",
    },
    {
        question: "What's the biggest animal in the world?",
        a: "Blue Whale",
        b: "Colossal Squid",
        c: "African Elephant",
        d: "Whale Shark",
        correct: "a",
    },
    {
        question: "How many planets are there in the solar system?",
        a: "7",
        b: "8",
        c: "9",
        d: "10",
        correct: "b",
    },

    {
        question: "What's the largest country in the world?",
        a: "USA",
        b: "Russia",
        c: "Canada",
        d: "China",
        correct: "b",
    },
    {
        question: "What are the most spoken languages in the world?",
        a: "Hindi",
        b: "English",
        c: "Spanish",
        d: "Chinese",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}


submitBtn.addEventListener("click", () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO: SHOW RESULTS
        alert("You are successfully finished this quiz");
    }
    
});