'use strict'
const MAX_QUANTITY_LETTERS = 50 //максимальное кол-во для ввода в верхнем инпуте
const counterNumber = document.querySelector('.counter')

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

const MOCK_NOTES = [
    {
        // ...
        color: colors.GREEN,
    },
    {
        // ...
        color: colors.YELLOW,
    }
]

const view = {
    init() {
        this.renderNotes(model.notes)
    },
    renderNotes(notes) {
        // your code here
        // находим контейнер для заметок и рендерим заметки в него (если заметок нет, отображаем соответствующий текст)
        // также здесь можно будет повесить обработчики кликов на кнопки удаления и избранного

    },
    renderNotesCount(){  //функция для отображения счетчика с количеством заметок

    }
}

function init() {
    view.init()
    view.init.renderNotesCount()

}

init()
