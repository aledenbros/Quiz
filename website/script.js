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
        screen: "./assets/heart.png"
    },
    {
        question: "When was our first date?",
        answers: {
            a: "April 11th, 2023",
            b: "May 1st, 2023",
            c: "April 22nd, 2023",
            d: "April 18th, 2023"
        },
        correctAnswer: "c",
        value: 100,
        type: "image",
        screen: "./assets/date.jpg"
    },
    {
        question: "Which was not a snack we ate this day?",
        answers: {
            a: "Pure Leaf Tea",
            b: "Tostitos and salsa",
            c: "Watermelon",
            d: "Teddy Grahams"
        },
        correctAnswer: "b",
        value: 100,
        type: "image",
        screen: "./assets/snacks.jpg"
    },
    {
        question: "What did you paint on my thumb?",
        answers: {
            a: "Smiley face",
            b: "Stars",
            c: "Hearts",
            d: "Peace sign"
        },
        correctAnswer: "a",
        value: 100,
        type: "image",
        screen: "./assets/nails.jpg"
    },
    {
        question: "What did you say after this?",
        answers: {
            a: "and I'm SO TIRED",
            b: "and it was SO FUN",
            c: "and now we have to go to the airport",
            d: "and now we're gonna go get a nice lanyard"
        },
        correctAnswer: "b",
        value: 100,
        type: "video",
        screen: "./videos/dancemachine.mp4"
    },
    {
        question: "Answer:",
        answers: {
            a: "Next",
            b: "Next",
            c: "Next",
            d: "Next"
        },
        correctAnswer: "e",
        value: 0,
        type: "video",
        screen: "./videos/answer.mov"
    },
    {
        question: "What event did we celebrate this day?",
        answers: {
            a: "Aden's birthday",
            b: "Halloween",
            c: "6 Months celebration",
            d: "200 Days"
        },
        correctAnswer: "c",
        value: 100,
        type: "image",
        screen: "./assets/thecar.jpg"
    },
    {
        question: "BONUS: what's in the box?",
        answers: {
            a: "Puzzle",
            b: "Candy",
            c: "Popcorn",
            d: "All of the above"
        },
        correctAnswer: "a",
        value: 100,
        type: "image",
        screen: "./assets/thecar.jpg"
    },
    {
        question: "What did you get me this day?",
        answers: {
            a: "Skincare package",
            b: "Shirt with kisses",
            c: "Legos",
            d: "Headphones"
        },
        correctAnswer: "a",
        value: 100,
        type: "image",
        screen: "./assets/park.jpg"
    },
    {
        question: "What was the escape room we did called?",
        answers: {
            a: "Medieval escape",
            b: "Prison escape",
            c: "Escape prison",
            d: "Medieval prison"
        },
        correctAnswer: "d",
        value: 10,
        type: "image",
        screen: "./assets/trapped.jpg"
    },
    {
        question: "How many times did we go to the beach?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correctAnswer: "d",
        value: 10,
        type: "image",
        screen: "./assets/beach.jpg"
    },
    {
        question: "What flavour did we not get at wingstop?",
        answers: {
            a: "Louisiana Rub",
            b: "Texas Brisket BBQ",
            c: "Lemon Pepper",
            d: "Hickory Smoked BBQ"
        },
        correctAnswer: "b",
        value: 10,
        type: "image",
        screen: "./assets/activate.jpg"
    },
    {
        question: "How many movies have we watched in the theatre?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correctAnswer: "c",
        value: 30,
        type: "image",
        screen: "./assets/slurpee.jpg"
    },
    {
        question: "How many instagram posts have I made of you?",
        answers: {
            a: "9",
            b: "10",
            c: "12",
            d: "NOT ENOUGH!!! RARR!!!"
        },
        correctAnswer: "d",
        value: 50,
        type: "image",
        screen: "./assets/flowers.jpg"
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
