'use strict'
const MAX_QUANTITY_LETTERS = 50  //максимальное кол-во для ввода в верхнем инпуте

const buttonQS = document.querySelector("btn")
const checkboxQS = document.querySelector("cb_click")
const textContainerAboveInput = document.querySelector("above_input")
const counerNote = document.querySelector('.counter')

function countingNotes(fnEvent,fnDelet,fnEroor,fnAcsees) {
    let count = 0
    counerNote.textContent = count
    if(fnEvent){
        count++
        fnAcsees()
    }else if(fnDelet){
        count--
        fnEroor()
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
    const inputArea = document.createElement("p")
    inputArea.classList.add("new_note")
    inputArea.textContent = textContens
}

function butnEvent(fnAcsees) {
    buttonQS.addEventListener("click", function(){
        
    } )
}

const eroorFn = function errorMasage() {
    alert("Невозможно добавить заметку")
}

function fullAccsesMassage() {
    alert("Заметка добавлен!")
}
