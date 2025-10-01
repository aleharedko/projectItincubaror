'use strict'
const MAX_QUANTITY_LETTERS = 50 //максимальное кол-во для ввода в верхнем инпуте

const btnAddNote = document.querySelector('.note_form')
const inputTitel = document.querySelector(".input_above")
const inputContent = document.querySelector(".input_below")
const list = document.querySelector(".notes_list")
const messageContainer = document.getElementById('message-container');

const MOCK_NOTES = [
    {
        idNotes: 1,
        title: 'Работа с формами',
        content: 'К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name',
        color: 'green',
        isFavorite: false,
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
            controller.addNotes(titel, content);

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

    },

    renderNotesCount(){
        const numberCount = model.notes.length
        const count = document.querySelector(".strong_number")
        count.innerHTML = numberCount
    },

    displayMessage(message, isError = false) {
        if (!messageContainer) {
            console.error("Контейнер для сообщений (#message-container) не найден.");
            return;
        }

        // 1. Устанавливаем сообщение
        messageContainer.textContent = message;

        // 2. Управляем стилями для отображения ошибки
        if (isError) {
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

    toggle(token, force) {
    }
}

const controler = {
    addNotes(title, content){
        // ...
        // Вам нужно получить color из формы (например, выбранное радио)
        const color = document.querySelector('input[name="color"]:checked')?.value || 'yellow'; // Пример получения цвета

        if (title.trim() !== '' && content.trim() !== '' && title.length <= MAX_QUANTITY_LETTERS) {
            // Передаем в модель все нужные данные
            model.addNotes(title, content, color);
            view.displayMessage('Заметка добавлена');
        } else {
            view.displayMessage('Заметка не добавлена', true);
        }
    },
    // ...
}

function init() {
    view.init()
}

document.addEventListener('DOMContentLoaded', init);
