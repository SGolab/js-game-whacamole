const gridDisplay = document.querySelector('#grid');
const scoreDisplay = document.querySelector('#result')
const fields = []

function prepareGameField() {
    for (let i = 0; i < 25; i++) {
        let field = document.createElement('img')
        field.setAttribute('src', 'images/blank.png')
        fields.push(field)
        gridDisplay.appendChild(field)
        field.addEventListener('mousedown', click)
    }
}

let score = 0
let field

async function gameLoop() {

    while (score < 10) {
        await sleep(1000);

        field = fields[Math.floor(Math.random() * fields.length)]
        field.setAttribute('src', 'images/mole.png')

        await sleep(1000)

        field.setAttribute('src', 'images/blank.png')
        field.style.outline = ''
        field = undefined
    }

    scoreDisplay.textContent = 'YOU WON!'
}

function click() {
    if (this === field) {
        field.style.outline = '5px solid black'
        scoreDisplay.textContent = ++score
    }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

prepareGameField()
gameLoop()


