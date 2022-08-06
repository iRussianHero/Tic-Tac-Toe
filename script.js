let buttons = document.getElementsByClassName("btn");
let newGame = document.getElementById("newGame");
let label = document.getElementById("label");
let result = document.getElementById("result");
let countX = 0;
let countO = 0;
let field = [];
let step = true;

CreateField();

//Новая игра
newGame.onclick = function NewGame(){
    UnBlockField();
    step = true;
    field = [];
    label.innerText = "";
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "&nbsp";    
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if (field[i]!='X' && field[i]!='O') {
            if (step) {
                field[i] = 'X';
            } else {
                field[i] = 'O';
            }
            buttons[i].innerHTML = field[i];
            if(CheckTheWinner()){
                if (step) {
                    countX++;
                    GetResult(countX, countO)
                    label.innerText = "!Поздравляем, победили X!";
                } else {
                    countO++;
                    GetResult(countX, countO)
                    label.innerText = "!Поздравляем, победили O!";
                }
                BlockField();
            }
            step =! step;
        }
    }
}

//Блокирование поля после игры
function BlockField(){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("disabled", "disabled");
    }
}

//Разблокирование поля после игры
function UnBlockField(){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("disabled", "disabled");
    }
}

//Ведение счёта
function GetResult(countX, countO) {
    result.innerText = `Текущий счёт: X-${countX}, O-${countO}`;  
}

//Проверка победителя
function CheckTheWinner(){
    if (field[0] == field[1] && field[1] == field[2] && field[0] != undefined) return true;
    if (field[3] == field[4] && field[4] == field[5] && field[3] != undefined) return true;
    if (field[6] == field[7] && field[7] == field[8] && field[6] != undefined) return true;

    if (field[0] == field[3] && field[3] == field[6] && field[0] != undefined) return true;
    if (field[1] == field[4] && field[4] == field[7] && field[1] != undefined) return true;
    if (field[2] == field[5] && field[5] == field[8] && field[2] != undefined) return true;

    if (field[0] == field[4] && field[4] == field[8] && field[0] != undefined) return true;
    if (field[2] == field[4] && field[4] == field[6] && field[2] != undefined) return true;

    return false;
}

//Создание игрового поля
function CreateField(){
    let table = document.getElementById("field");
    GetResult(countX, countO);
    for (let i = 0; i < 9; i++) {
        let btn = document.createElement("button");
        //btn.innerText = i;
        btn.className = "btn";
        if (i%3 == 0) {
            let br = document.createElement('br');
            table.appendChild(br);
        }
        table.appendChild(btn);
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "&nbsp";    
    }
}