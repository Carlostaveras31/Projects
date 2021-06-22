// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple - General
// https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple - Books
// https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple - Film
// https://opentdb.com/api.php?amount=10&category=14&difficulty=hard&type=multiple - TV
// https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple - History
// https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple - Science
// https://opentdb.com/api.php?amount=10&category=25&difficulty=hard&type=boolean - Music
// https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=boolean - Sports

function playerCreation() {

    let playerName1 = "Contestant 1 " + prompt("Enter Name Contestant1")
    let playerName2 = "Contestant 2 " + prompt("Enter Name Contestant2")


    localStorage.setItem("contestant1", playerName1)
    localStorage.setItem("contestant2", playerName2)

    localStorage.getItem("contestant1")

    let playerNm1 = document.createElement("div")
    playerNm1.id = "plyer1"
    let playerNm2 = document.createElement("div")
    playerNm2.id = "plyer2"

    playerNm1.innerText = playerName1
    playerNm2.innerText = playerName2

    let mainContainer = document.getElementById("Questions")

    Questions.appendChild(playerNm1)
    Questions.appendChild(playerNm2)


    console.log(localStorage.getItem("contestant1"))
    console.log(localStorage.getItem("contestant2"))

}

playerCreation()




const buttons = Array.from(document.getElementsByClassName("btn"))
console.log(buttons)

let currentQuestion = {}
let accept = false;
let score = 0;
let questionCounter = 0
let availableQuestions = []

let questions = [

    {
        question: "Inside which HTML element do we put the JavaScript??",
        a: "<script>",
        b: "<javascript>",
        c: "<js>",
        d: "<scripting>",
        answer: 1
      },
      {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script href='xxx.js'>",
        b: "<script name='xxx.js'>",
        c: "<script src='xxx.js'>",
        d: "<script file='xxx.js'>",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World');",
        b: "alertBox('Hello World');",
        c: "msg('Hello World');",
        d: "alert('Hello World');",
        answer: 4
      }

]

const correctBonus = 10
const maxQuestions = 3



function startGame() {
    questionCounter = 0;
    score = 0;
    console.log(1,availableQuestions)
    getNewQuestion()
}

function getNewQuestion(){
    
    questionCounter++
    let numberOfQuestions = Math.floor(Math.random() * availableQuestions.length)
    availableQuestions = [...questions]
    currentQuestion = availableQuestions[numberOfQuestions]
    
    let btnPrompt = prompt("a\n b\n c\n d\n" + currentQuestion.question)
    prompt.id = "hopefully"


    buttons.forEach(_btn => {
        const number = btnPrompt;
        btnPrompt = currentQuestion["btn", number]
    })

    
    
    availableQuestions.splice(numberOfQuestions, 1)
    console.log(availableQuestions)
    accept = true;
    
}


    buttons.forEach(btn => {
        btn.addEventListener("click", e =>{
            if(!accept)return;
            
            accept = false;
            let selectedBtn = e.target
            let selectedAnswer = selectedBtn.dataset["number"]
            console.log(selectedAnswer);
            getNewQuestion()
            
            
        })
    })


// getNewQuestion()
startGame()
// testBtn()






window.onload = function question() {

    let url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;

    const xhr = new XMLHttpRequest()

    xhr.open("GET", url)

    xhr.onload = function(x) {
        if(x){
            console.log(x);
        }
        let changeAble = (JSON.parse(xhr.responseText))

        console.log(changeAble);
    }

    xhr.send()
}























