
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
    const nextButton = document.querySelector('#next'); // Кнопка next модального окна.
    const prevButton = document.querySelector('#prev'); // Кнопка prev модального окна.
    const sendButton = document.querySelector('#send'); // Получаем кнопку send

    // Массив, который содержит объекты с вопросоми и вариантами ответов
    const questions = [
        {
            question: "Какого цвета бургер?",
            answers: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];

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

    // Навешиваем обработчик на document и исключаем из document с помощью дилегирования классы по клику на которые модальное окно не должно закрываться (если я все правильно понял)  
    document.addEventListener('click', function() {
        if (
            !event.target.closest(".modal-dialog") &&
            !event.target.closest(".openModalButton") &&
            !event.target.closest(".burger")
            ) {
                modalBlock.classList.remove('d-block'); // Убирает класс 'd-block' у модольного окана, что скрывает его.
                burgerBtn.classList.remove("active"); // Убирает класс 'activ' по нажатию на закрывающий модальное окно крестик.
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
    });

    // Функция, включающая в себя весь функционал тестирования.
    const playTest = () => {

        const finalAnswers = [];
        // Переменная с номером вопроса 
        let numberQuestion = 0;


        // Переменная, в которую записана функция, создающий верстку карточек в модальном окне
        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement('div'); // создаем блок div внутри цикла 
                answerItem.classList.add('answers-item', 'd-flex', 'justify-content-center'); // Добавляем необходимые классы стилизации для родительского div answerItem

                // Записываем в него HTML-верстку 
                answerItem.innerHTML = 
                `
                <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none" value="${answer.title}">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src="${answer.url}" alt="burger">
                <span>${answer.title}</span>
                </label>
                `
                formAnswers.appendChild(answerItem); // Записываем answerItem с версткой внутрь переменной formAnswers, в которай находится форма ответа модольного окна

            })

        };
        // Данная функция вписывает информацию в блок с вопросами и ответами 
        const renderQuestions = (indexQuestion)  => {
            formAnswers.innerHTML = ''; // Удаляет все, что находилось в formAnswers после вызова функции  

            if(numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
                questionTitle.textContent = `${questions[indexQuestion].question}`; // Добавляем содержание из объекта question
                renderAnswers(indexQuestion);
                nextButton.classList.remove('d-none');
                prevButton.classList.remove('d-none');
                sendButton.classList.add('d-none');
            }

            if(numberQuestion === 0) {
                prevButton.classList.add('d-none');
            }

            // if(numberQuestion === questions.length - 1) {
            //     nextButton.classList.add('d-none');
            // }

            if(numberQuestion === questions.length) {
                formAnswers.innerHTML = `
                    <div class="form-group">
                        <label for="numberPhone">Enter your number</label>
                        <input type="phone" class="form-control" id="numberPhone">
                    </div>
                `;
                nextButton.classList.add('d-none');
                prevButton.classList.add('d-none');
                sendButton.classList.remove('d-none');
            }

            if (numberQuestion === questions.length +1) {
                formAnswers.textContent = "Спасибо за пройденный тест!";
                // С помощью SetTimeout можно задать время отработки функции
                setTimeout(() => {
                    modalBlock.classList.remove('d-block');
                }, 2000);
            }
        }
        renderQuestions(numberQuestion);

        const checkAnswers = () => {
            const obj = {};

            const inputs = [...formAnswers.elements].filter((input) => input.checked || input.id === 'numberPhone');
            
            inputs.forEach((input, index) => {
                if(numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
                obj[`${index}_${questions[numberQuestion].question}`] = input.value;
                }  

                if(numberQuestion === questions.length) {
                    obj['Номер телефона'] = input.value;
                }
            })

            finalAnswers.push(obj);
        } 

        // Обработчик событий по клику на кнопку next модального окна
        nextButton.onclick = () => {

            checkAnswers();
            numberQuestion++; // С помощью инкремента увелчиваем indexQuestion, которая отражает индекс объекта внутри массива данных  
            renderQuestions(numberQuestion); // Вызываем функцию renderQuestions с обнавленным аргументом numberQuestion
            console.log(numberQuestion);
        }

        // Обработчик событий по клику на кнопку prev модального окна
        prevButton.onclick = () => {
            numberQuestion--; // С помощью инкремента уменьшаем indexQuestion, которая отражает индекс объекта внутри массива данных
            renderQuestions(numberQuestion); // Вызываем функцию renderQuestions с обнавленным аргументом numberQuestion
            console.log(numberQuestion);
        }

        sendButton.onclick = () => {
            numberQuestion++;
            renderQuestions(numberQuestion);
            checkAnswers();
            console.log(finalAnswers);

        }
    }
});




