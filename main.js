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

    },

    toogleFavorite(id){
        const note = this.notes.find(note => note.idNotes === id)
        if(note){
            notes.isFavorite != note.isFavorite //переключение класса
            view.renderNotes(model.notes)
        }
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

        ifFavorit.addEventListener("click",function (event){
            if(model.isFavorite){
                isFavorite != false
                isFavorite.classList.add('isFaforit')
            }
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
            noteElement.dataset.id = note.idNotes
            noteElement.innerHTML = `
                <h3 style="background-color: ${note.color}; background-image: url(/image/icons/Vector(2).png);">${note.title}</h3>
                <p>${note.content}</p>
                `;
            // <div class="note_header" style="background-color: ${note.color};">
            //     <h3 class="note_title">${note.title}</h3>
            //     <div class="note_actions">
            //         <button class="icon_favorite ${note.isFavorite ? 'is-favorite' : ''}" data-action="favorite">
            //             <img src="image/icons/Vector (2).png" alt="Favorite" width="20" height="20">
            //         </button>
            //         <button class="icon_delete" data-action="delete">
            //             <img src="image/icons/trash-icon.png" alt="Delete" width="20" height="20">
            //         </button>
            //     </div>
            // </div>
            // <p class="note_content">${note.content}</p>

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

    displayMessage(message, isError = false, is) {

        messageContainer.textContent = message;     // 1. Устанавливаем сообщение, передаём для отображения

        if (isError) {  // 2. Управляем стилями для отображения ошибки
            messageContainer.classList.add('error');
            messageContainer.classList.remove('success')
        } else {
            messageContainer.classList.remove('error');
            messageContainer.classList.add('success')
        }


        // 3. Делаем контейнер видимым (если он по умолчанию скрыт)
        messageContainer.style.display = 'block';

        // 4. Очищаем сообщение через несколько секунд (опционально, но рекомендуется)
        setTimeout(() => {
            messageContainer.textContent = '';
            messageContainer.classList.remove('error');
            messageContainer.classList.remove('success');
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
