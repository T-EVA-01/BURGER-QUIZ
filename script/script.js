
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


    // Бургер 

    const burgerBtn = document.getElementById("burger"); // Получаем бургер по Id.
    let clientWidth = document.documentElement.clientWidth; // В переменную clientWidth записываем ширину окна пользователя. 
    // В объекте documentElement хранится весь html. А clientWidth это свойство documentElement, а именно ширина окна.
    // console.dir('document.documentElement: ', document.documentElement); // Выводит documentElement в консоль в виде объекта, у которого можно посмотреть все его свойства.

    // Условие скрывающее кнопку-бургер при загрузке страницы 
    if (clientWidth < 768) {
        burgerBtn.style.display = "flex";
    } else {
        burgerBtn.style.display = "none";
    }

    window.addEventListener('resize', function () { // Событие resize позволяет отслеживать изменения окна
        clientWidth = document.documentElement.clientWidth; // Возвращает ширину экрана (clientWidth - ширина окна клиента)
    
        // Условие адаптивности
        if(clientWidth < 768) {
            burgerBtn.style.display = "flex"; // Обращаемся к стилям бургера и добавляет ему свойство css display: flex.
        } else {
            burgerBtn.style.display = "none"; // Обращаемся к стилям бургера и скрываем его с помошься свойства css display: none.
        }
    }); 


    // Вешаем событие по клику на кнопку бургер. 
    burgerBtn.addEventListener("click", function () {
        modalBlock.classList.add('d-block'); // Добавляем класс 'd-block' из библиотеки bootstrap действие которого аналогично свойству CSS 'display: block';
        playTest(); // Вызов функции тестирования

        burgerBtn.classList.add("active");
    });
    
    // Навешиваем на кнопку обработчик событий 'click', по клику будет срабатывать функция 
    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block'); // Добавляем класс 'd-block' из библиотеки bootstrap действие которого аналогично свойству CSS 'display: block';
        playTest(); // Вызов функции тестирования
    });

    // Обработчик событий по клку, навешенный на кнопку-крестик, которая закрывает модальное окно
    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block'); // Убирает класс 'd-block' у модольного окана, что скрывает его.
        burgerBtn.classList.remove("active"); // Убирает класс 'activ' по нажатию на закрывающий модальное окно крестик

        if(burgerBtn.classList.contains("active")) {
            
        }
        
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
            `
        };
        renderQuestions();
    };







});




