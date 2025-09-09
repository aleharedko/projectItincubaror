'use strict'
const MAX_QUANTITY_LETTERS = 50  //максимальное кол-во для ввода в верхнем инпуте

const buttonQS = document.querySelector(".btn")
const checkboxQS = document.querySelector(".cb_click")
const textContainerAboveInput = document.querySelector(".above_input")
const counerNote = document.querySelector(".counter")

counerNote.textContent = "djgndgd"



function countingNotes(fnEvent, fnDelet) {
    let count = 0
    counerNote.textContent = count
    if (fnEvent) {
        count++
    } else if (fnDelet) {
        count--
    }
    return count
}

countingNotes()

let getTextAboveIput = function inpuAbove(fn) {
    if (textContainerAboveInput >= MAX_QUANTITY_LETTERS) {
        alert("More simbele")
    }
}

function inputBelove(textContens, nameContent, favoriteItem, deletedFn) {
    const inputArea = document.createElement("div")
    inputArea.classList.add("new_note")
    inputArea.textContent = textContens
}
inputBelove()

function butnEvent(fnAcsees) {
    buttonQS.addEventListener("click", function () {


    })
}

butnEvent(fullAccsesMassage())

const eroorFn = function errorMasage() {
    alert("Невозможно добавить заметку")
}

function fullAccsesMassage() {
    alert("Заметка добавлен!")
}
