'use strict'
const MAX_QUANTITY_LETTERS = 50 //максимальное кол-во для ввода в верхнем инпуте

const MOCK_NOTES = [
    {
        id: 1,
        title: 'Работа с формами',
        content: 'К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name',
        color: 'green',
        isFavorite: false,
    },
    // ...
]

const model = {
    notes: MOCK_NOTES,
}

const colors = {
    GREEN: 'green',
    BLUE: 'blue',
    RED: 'red',
    YELLOW: 'yellow',
    PURPLE: 'purple',
}

// const MOCK_NOTES = [
//     {
//         // ...
//         color: colors.GREEN,
//     },
//     {
//         // ...
//         color: colors.YELLOW,
//     }
// ]

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

    },

    renderNotesCount(){
        const numberCount = model.notes.length
        const count = document.querySelector(".strong_number")
        count.innerHTML = numberCount
    }
}

function init() {
    view.init()
    view.renderNotesCount()

}

init()
