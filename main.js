'use strict'
const MAX_QUANTITY_LETTERS = 50  //максимальное кол-во для ввода в верхнем инпуте

const buttonQS = document.querySelector(".btn")
const checkboxQS = document.querySelector(".cb_click")
const textContainerAboveInput = document.querySelector(".above_input")
const counerNote = document.querySelector(".counter")

counerNote.textContent = "0"

const model = { // хранение данных, бизнес-логика

}

const view = { // отображение данных: рендер списка задач, размещение обработчиков событий 

}

const controler = { // обработка действий пользователя, обновление модели

}




function countingNotes(fnClick, fnDelet) { //счетчик
    let count = 0
    counerNote.textContent = count
    if (fnClick) {
        count++
    } else if (fnDelet) {
        count--
    }
    return count
}

countingNotes(btnClick(), )

let getTextAboveIput = function inpuAbove(fn) {  //поледя название заметки
    if (textContainerAboveInput >= MAX_QUANTITY_LETTERS) {
        alert("More simbele")
    }
}

function inputBelove(textContens, nameContent, favoriteItem, deletedFn) { // поле для текста
    const inputArea = document.createElement("div")
    inputArea.classList.add("new_note")
    inputArea.textContent = textContens
}
inputBelove()

const btnClick = function butnEvent(fnAcsees) { //кнопка
    buttonQS.addEventListener("click", function () {


    })
}

butnEvent(fullAccsesMassage())

const eroorFn = function errorMasage() { //неудачное добавление
    alert("Невозможно добавить заметку")
}

function fullAccsesMassage() { //удачное
    alert("Заметка добавлен!")
}
