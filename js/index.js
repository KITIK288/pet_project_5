function RandomElement(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function rock_check() {

    computer = RandomElement(1, 4);

    console.log(computer);

    if (computer === 1) {
        computer = "rock";
    } else if (computer === 2) {
        computer = "paper";
    } else if (computer === 3) {
        computer = "scissors";
    }

    console.log("Компьютер выбрал", computer);

    const button = document.getElementById('rock');

    if (computer === "rock") {
        document.getElementById('result').innerText = 'Ничья';
    } else if (computer === "paper") {
        document.getElementById('result').innerText = 'Вы проиграли';
    } else if (computer === "scissors") {
        document.getElementById('result').innerText = 'Вы победили';
    }
}

function paper_check() {

    computer = RandomElement(1, 4);

    console.log(computer);

    if (computer === 1) {
        computer = "rock";
    } else if (computer === 2) {
        computer = "paper";
    } else if (computer === 3) {
        computer = "scissors";
    }

    console.log("Компьютер выбрал", computer);

    const button = document.getElementById('paper');

    if (computer === "rock") {
        document.getElementById('result').innerText = 'Вы победили';
    } else if (computer === "paper") {
        document.getElementById('result').innerText = 'Ничья';
    } else if (computer === "scissors") {
        document.getElementById('result').innerText = 'Вы проиграли';
    }
}

function scissors_check() {
    computer = RandomElement(1, 4);

    console.log(computer);

    if (computer === 1) {
        computer = "rock";
    } else if (computer === 2) {
        computer = "paper";
    } else if (computer === 3) {
        computer = "scissors";
    }

    console.log("Компьютер выбрал", computer);

    const button = document.getElementById('paper');

    if (computer === "rock") {
        document.getElementById('result').innerText = 'Вы проиграли';
    } else if (computer === "paper") {
        document.getElementById('result').innerText = 'Вы победили';
    } else if (computer === "scissors") {
        document.getElementById('result').innerText = 'Ничья';
    }
}
