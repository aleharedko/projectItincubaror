'use strict'
const MAX_QUANTITY_LETTERS = 50 //максимальное кол-во для ввода в верхнем инпуте
const counterNumber = document.querySelector('.counter')

const model = { // хранение данных, бизнес-логика
    task: [{}, //мои моковые данные
        {}], // <--- Пропущена запятая
    // newTask: {id, isDone, title}, // <--- Нельзя объявлять переменную внутри объекта

    // Правильный способ хранить данные:
    newTask: {id: null, isDone: false, title: ''}
}

const view = { // отображение данных: рендер списка задач, размещение обработчиков событий
    init(){
        counterNumber.innerHTML = '0'
        this.renderTask(model.task)
    }, // <--- Пропущена запятая

    renderTask(tasks){ //функция для рендеринга
        // Логика рендеринга
    }
}

const controller = { // обработка действий пользователя, обновление модели
    init() {
        // Логика инициализации контроллера
    }
}

// Теперь можно вызывать методы объектов
view.init()
controller.init()