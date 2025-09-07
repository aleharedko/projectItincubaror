'use strict'
const MAX_QUANTITY_LETTERS = 50  //максимальное кол-во для ввода в верхнем инпуте

const buttonQS = document.querySelector("btn")
const checkboxQS = document.querySelector("cb_click")
const textContainerAboveInput = document.querySelector("above_input")

function countingNotes(){
    
}

let getTextAboveIput = function inpuAbove (fn) {

    if(textContainerAboveInput >= MAX_QUANTITY_LETTERS ){
        alert("More simbele")
    }
}

function inputBelove (textContens, nameContent,favoriteItem, deletedFn) {
    const inputArea = document.createElement("p")
    inputArea.classList.add("new_note")
    inputArea.textContent = textContens
}

function butnEvent (){

}

const eroorFn = function errorMasage(){
 
}

function fullAccsesMassage(){

}
