let score = 0

let current = 0

const questions = [
    {
        question: "dummy",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: "e",
        value: 0,
        type: "image",
        screen: "./assets/quiz.jpg"
    },
    {
        question: "Who is the first Prime Minister of Canada?",
        answers: {
            a: "Justin Trudeau",
            b: "George Washington",
            c: "John A. Macdonald",
            d: "Wilfrid Laurier"
        },
        correctAnswer: "c",
        value: 10,
        type: "image",
        screen: "./assets/canada.jpeg"
    },
    {
        question: "What da dog doin?",
        answers: {
            a: "Running",
            b: "Making Music",
            c: "Eating",
            d: "Sleeping"
        },
        correctAnswer: "b",
        value: 100,
        type: "video",
        screen: "./videos/dog.mp4"
    },
    {
        question: "End of quiz",
        answers: {
            a: "Cool",
            b: "Awesome",
            c: "Amazing",
            d: "I loved it"
        },
        correctAnswer: "e",
        value: 0,
        type: "image",
        screen: "./assets/quiz.jpg"
    },
]

let clicked = "null"
let object = document.querySelectorAll("button")
let scoreDisplay = document.getElementById("score")
let questionDisplay = document.getElementById("question")
let imgDisplay = document.getElementById("screenpic")
let vidDisplay = document.getElementById("screenvid")

const win = new Audio('/audio/win.mp3')
const lose = new Audio('/audio/lose.mp3')

function onClick() {
    if (current === 0) {
    } else if (questions[current].correctAnswer === clicked) {
        score += questions[current].value
        win.play();
    } else {
        score -= questions[current].value
        lose.play();
    }

    ++current

    object.forEach((item) => {
        item.innerHTML = questions[current].answers[item.id]
    })
    scoreDisplay.innerHTML = "Score: " + score
    questionDisplay.innerHTML = questions[current].question

    if (questions[current].type === "image") {
        imgDisplay.src = questions[current].screen
        imgDisplay.style.visibility='visible'
        vidDisplay.style.visibility='hidden'
    } else {
        vidDisplay.src = questions[current].screen
        imgDisplay.style.visibility='hidden'
        vidDisplay.style.visibility='visible'
        vidDisplay.play
    }
}

object.forEach((item) => {
    item.addEventListener("click", () => {
        clicked = item.id
        onClick();
    });
})
