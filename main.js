'use strict'
const MAX_QUANTITY_LETTERS = 50 //максимальное кол-во для ввода в верхнем инпуте

const btnAddNote = document.querySelector('.note_form')
const inputTitel = document.querySelector(".input_above")
const inputContent = document.querySelector(".input_below")
const list = document.querySelector(".notes_list")

const MOCK_NOTES = [
    {
        id: 1,
        title: 'Работа с формами',
        content: 'К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name',
        color: 'green',
        isFavorite: false,
    },
]

const model = {
    notes: MOCK_NOTES,

    addNotes(title, content, stat, color,){
        const idNotes = Number(new Date().getTime()) //создаю уникальный id
        const newNotes = {id, title, content, stat, isFavorite: false}
        this.notes.unshift(newNotes)
        view.renderNotes(model.notes)
    },

    deleteNotes(id){
        const indexToDel = this.notes.findIndex(note => note.id === id)
        if (indexToDel !== -1){
            this.notes.splise(indexToDel, 1)
            view.renderNotes(model.notes)
        }
        return indexToDel !== -1
    }
}

const view = {
    init() {
        this.renderNotes(model.notes)
    },

    renderNotes(notes) {
        // находим контейнер для заметок и рендерим заметки в него (если заметок нет, отображаем соответствующий текст)
        const listContainer = document.querySelector(".notes-list")

        if(!listContainer){//Проверяем, что контейнер найден, чтобы избежать ошибок.
            return;
        }
        listContainer.innerHTML = ''; //чтобы заметки не дублировались при повторном вызове функции

        if (notes.length === 0){
             listContainer.innerHTMl =
                 `
             <p>У вас ещё нет ни одной заметки. Заполните поля выше и создайте свою первую заметку!</p>;
             `
            return;
        }

        notes.forEach(note => {
            const noteElement = document.createElement('div')
            noteElement.className = 'note-item'
            noteElement.innerHTML = `
             <h3>${note.title}</h3>
                <p>${note.content}</p>
                `;

            // Добавляем созданный элемент в основной контейнер.
            listContainer.appendChild(noteElement);
        })

        // также здесь можно будет повесить обработчики кликов на кнопки удаления и избранного
        btnAddNote.addEventListener("submit", function (event){
            event.preventDefault()
            const titel = inputTitel.value
            const content = inputContent.value
            controller.addNotes(title, description);

            inputTitle.value = '';
            inputDescription.value = '';
        })

    },

    renderNotesCount(){
        const numberCount = model.notes.length
        const count = document.querySelector(".strong_number")
        count.innerHTML = numberCount
    },

    toggle(token, force) {
    }
}

const controler = {
    addNotes(title, description){
        if (title.trim() !== '' && description.trim() !== '' && description.length <= MAX_QUANTITY_LETTERS) {
            model.addNotes(title, description);
            view.displayMessage('Замеметка добавлена');
        } else {
            view.displayMessage('Заметка не добавлена', true);
        }
    },

    deleteNotes(id) {
        return false;
    }
}

function init() {
    view.init()
}

document.addEventListener('DOMContentLoaded', init);
