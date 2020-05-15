
// const btnOpenModal = document.querySelector('#btnOpenModal');

// Устаревший метод, которым навешивается обработчики событий
// !Нельзя навесить на один элемент больше одного обработчика
// btnOpenModal.onclick = function () {
//     console.log('click');
// }

// Современнный метод, которым навешивают обработчики событить все продвинутые ребятки.   
// Навесить сколько угодно обработчиков событий на один элемент.
// btnOpenModal.addEventListener('click',  function() {
//     console.log('third')
// })


// console.dir выводит в консоль элемент в виде объекта
// console.dir(btnOpenModal);

'use strict' // Строгий синтаксис. Лучше всегда использовать это ключевое слова, чтобы избежать ошибок.

// Обработчик событий DOMContentLoaded не дает функции сработать пока не прогрузится всё DOM-дерево. 
document.addEventListener('DOMContentLoaded', function() {
    const btnOpenModal = document.querySelector('#btnOpenModal'); //Получаем кнопку "Пройди тест и получи результат"
    const modalBlock = document.querySelector('#modalBlock'); // Получаем модальное окно.
    const closeModal = document.querySelector('#closeModal'); // Получаем кнопку-крести, по нажатию на которую закрывается модальное окно.
    const questionTitle = document.querySelector('#question'); // Получаем h5 c id = "question".
    const formAnswers = document.querySelector('#formAnswers'); // Получем форму ответа formAnswers.

  
    // Навешиваем на кнопку обработчик событий 'click', по клику будет срабатывать функция 
    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block'); // Добавляем класс 'd-block' из библиотеки bootstrap действие которого аналогично свойству CSS 'display: block';
        playTest(); // Вызов функции тестирования
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    // Функция, включающая в себя весь функционал тестирования.
    const playTest = () => {
        const renderQuestions = ()  => {
            questionTitle.textContent = 'Какого цвета бургер?'; // Добавляет/изменяет текстовое содержимое элемента.
            formAnswers.innerHTML = 
            `
                <div class="answers-item d-flex flex-column">
                    <input type="radio" id="answerItem1" name="answer" class="d-none">
                    <label for="answerItem1" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="./image/burger.png" alt="burger">
                    <span>Стандарт</span>
                    </label>
                </div>
                <div class="answers-item d-flex justify-content-center">
                    <input type="radio" id="answerItem2" name="answer" class="d-none">
                    <label for="answerItem2" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="./image/burgerBlack.png" alt="burger">
                    <span>Черный</span>
                    </label>
                </div>
            `
        };
        renderQuestions();
    };

});
