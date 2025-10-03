'use strict'
const MAX_QUANTITY_LETTERS = 50 //максимальное кол-во для ввода в верхнем инпуте

const btnAddNote = document.querySelector('.note_form')
const inputTitel = document.querySelector("#input_above")
const inputContent = document.querySelector("#input_below")
const list = document.querySelector(".notes_list")
const messageContainer = document.querySelector('.messages-box');

const MOCK_NOTES = [
    {
        idNotes: 1,
        title: 'Работа с формами',
        content: 'К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name',
        color: 'green',
        isFavorite: false,
    },
    {
        idNotes: 2,
        title: 'Работа с функциями',
        content: 'Функции могут быть разных видов, а некоторые из них могут передаваться в качестве аргументов',
        color: 'red',
        isFavorite: true,
    },
]

const model = {
    notes: MOCK_NOTES,

    addNotes(title, content, color){
        const idNotes = Number(new Date().getTime()) //создаю уникальный id
        const newNotes = {idNotes, title, content, color, isFavorite: false}
        this.notes.unshift(newNotes)
        view.renderNotes(model.notes)
        view.renderNotesCount()
    },

    deleteNotes(id){
        const indexToDel = this.notes.findIndex(note => note.idNotes === id)
        if (indexToDel !== -1){
            this.notes.splice(indexToDel, 1)
            view.renderNotes(model.notes)
            view.renderNotesCount()
        }
        return indexToDel !== -1

    }
}

const view = {
    init() {
        this.renderNotes(model.notes)

        btnAddNote.addEventListener("submit", function (event){
            event.preventDefault()
            const titel = inputTitel.value
            const content = inputContent.value
            controler.addNotes(titel, content);

            inputTitel.value = '';
            inputContent.value = '';
        })
    },

    renderNotes(notes) {
        // находим контейнер для заметок и рендерим заметки в него (если заметок нет, отображаем соответствующий текст)
        const listContainer = document.querySelector(".notes_list")

        if(!listContainer){//Проверяем, что контейнер найден, чтобы избежать ошибок.
            return;
        }
        listContainer.innerHTML = ''; //чтобы заметки не дублировались при повторном вызове функции

        if (notes.length === 0){
            listContainer.innerHTML =
                 `
             <p>У вас ещё нет ни одной заметки. Заполните поля выше и создайте свою первую заметку!</p>;
             `
            return;
        }

        notes.forEach(note => {
            const noteElement = document.createElement('li')
            noteElement.className = 'style_note'
            noteElement.innerHTML = `
             <h3 style = "background-color: ${note.color}">${note.title}</h3>
                <p>${note.content}</p>
                `;
            1
            // Добавляем созданный элемент в   основной контейнер.
            listContainer.appendChild(noteElement);
        })

        // также здесь можно будет повесить обработчики кликов на кнопки удаления и избранного

    },

    renderNotesCount(){
        const numberCount = model.notes.length
        const count = document.querySelector(".strong_number")
        count.innerHTML = numberCount
    },

    displayMessage(message, isError = false) {
        if (!messageContainer) {
            console.error("Контейнер для сообщений (.messages-box) не найден."); // выводит сообщение в консоль, нали это вообще, либо излишне?
            return;
        }

        messageContainer.textContent = message;     // 1. Устанавливаем сообщение, передаём для отображения

        if (isError) {  // 2. Управляем стилями для отображения ошибки
            messageContainer.classList.add('error'); // 👈 Предполагает, что в CSS есть .error
        } else {
            messageContainer.classList.remove('error');
        }

        // 3. Делаем контейнер видимым (если он по умолчанию скрыт)
        messageContainer.style.display = 'block';

        // 4. Очищаем сообщение через несколько секунд (опционально, но рекомендуется)
        setTimeout(() => {
            messageContainer.textContent = '';
            messageContainer.classList.remove('error');
            messageContainer.style.display = 'none';
        }, 3000); // Сообщение исчезнет через 3 секунды
    },
}

const controler = {
    addNotes(title, content){  //2 аргумента а ниже сразу у меня в данной функции 3 аргумента???
        const color = document.querySelector('input[name="color"]:checked')?.value || 'yellow'; //для получения цвета от пользователя

        if (title.trim() !== '' && content.trim() !== '' && title.length <= MAX_QUANTITY_LETTERS) {
            model.addNotes(title, content, color);
            view.displayMessage('Заметка добавлена');
        } else {
            // Добавим более конкретное сообщение об ошибке
            if (title.length > MAX_QUANTITY_LETTERS) {
                view.displayMessage(`Заголовок не должен превышать ${MAX_QUANTITY_LETTERS} символов.`, true);
            } else {
                view.displayMessage('Заголовок и текст заметки не должны быть пустыми.', true);
            }
        }
    }
}

function init() {
    view.init()
}

document.addEventListener('DOMContentLoaded', init);
