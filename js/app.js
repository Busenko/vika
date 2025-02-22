document.addEventListener("DOMContentLoaded", function () {


const tableData = [
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Іван Петренко", email: "ivan.petrenko@example.com" },
    { name: "Олександр Коваль", email: "oleksandr.koval@example.com" },
    { name: "Марія Іваненко", email: "maria.ivanenko@example.com" }
];

function createTable(data) {
    const wrapper = document.querySelector(".popup__wraper");


    // Очистити контейнер перед додаванням нової таблиці
    wrapper.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("info__table");


    const tbody = document.createElement("tbody");

    data.forEach((rowData, index) => {
        const row = document.createElement("tr");

        // Додаємо автоматичну нумерацію
        const indexCell = document.createElement("td");
        indexCell.textContent = index + 1;  // Нумерація починається з 1
        row.appendChild(indexCell);

        // Додаємо інші дані (name, email)
        Object.values(rowData).forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    wrapper.appendChild(table);
}



const userData = {
    name: "Агаджанова Світлана Володимирівна",
    email: "a.agadjanova@gmail.com",
    phone: "+380 50 517 60 05",
    imgSrc: "asset/img/user/agad.png"
};

function createUserInfo(user) {
    const wrapper = document.querySelector(".popup__wraper");

 

    // Очистити контейнер перед додаванням нових елементів
    wrapper.innerHTML = "";

    // Створюємо контейнер для інформації про користувача
    const userInfoDiv = document.createElement("div");
    userInfoDiv.classList.add("popup__user-info");

    // Створюємо контейнер для зображення
    const wrapperImg = document.createElement("div");
    wrapperImg.classList.add("popup__wrapper-img");

    // Створюємо зображення
    const img = document.createElement("img");
    img.classList.add("popup__img");
    img.src = user.imgSrc;
    img.alt = "User Image";

    wrapperImg.appendChild(img);

    // Створюємо список для інформації про користувача
    const ul = document.createElement("ul");
    ul.classList.add("info__list", "popup__list");

    // Додаємо елементи списку
    const nameLi = document.createElement("li");
    nameLi.classList.add("info__item");
    nameLi.textContent = user.name;

    const emailLi = document.createElement("li");
    emailLi.classList.add("info__item");
    emailLi.textContent = user.email;

    const phoneLi = document.createElement("li");
    phoneLi.classList.add("info__item");
    phoneLi.textContent = user.phone;

    // Додаємо елементи списку до списку
    ul.appendChild(nameLi);
    ul.appendChild(emailLi);
    ul.appendChild(phoneLi);

    // Додаємо все до контейнера користувача
    userInfoDiv.appendChild(wrapperImg);
    userInfoDiv.appendChild(ul);

    // Додаємо контейнер з усіма елементами до загального контейнера
    wrapper.appendChild(userInfoDiv);
}






const subjectData = [
    {
        module: "Модуль 1",
        points: "35 балів",
        tasks: [
            {
                name: "Практична 1",
                points: "10 балів",
                file: "asset/pdf/resume.pdf"
            },
            {
                name: "Практична 2",
                points: "10 балів",
                file: "asset/pdf/resume.pdf"
            },
            {
                name: "Практична 3",
                points: "15 балів",
                file: "asset/pdf/resume.pdf"
            }
        ]
        
    },
    {
        module: "Модуль 2",
        points: "35 балів",
        tasks: [
            {
                name: "Практична 4",
                points: "10 балів",
                file: "asset/pdf/resume.pdf"
            },
            {
                name: "Практична 5",
                points: "10 балів",
                file: "asset/pdf/resume.pdf"
            },
            {
                name: "Практична 6",
                points: "15 балів",
                file: "asset/pdf/resume.pdf"
            }
        ]
    },
    {
        module: "Іспит",
        points: "30 балів",
        tasks: [
            {
                name: "Теорія",
                points: "10 балів",
                file: "asset/pdf/resume.pdf"
            },
            {
                name: "Практика",
                points: "20 балів",
                file: "asset/pdf/resume.pdf"
            }
        ]
    }
];


function createSubjectInfo(subjectData) {
    const wrapper = document.querySelector(".popup__wraper");

    // Очистити контейнер перед додаванням нових елементів
    wrapper.innerHTML = "";

    const accordionDiv = document.createElement("div");
    accordionDiv.classList.add("accordion");

    subjectData.forEach(subject => {
     

        // Створення елементів для кожного модуля
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion__item");

        // Створення заголовку для модуля
        const accordionHeader = document.createElement("div");
        accordionHeader.classList.add("accordion__header");

        // Додаємо текст модуля та балів
        const moduleTitle = document.createElement("span");
        moduleTitle.textContent = subject.module;

        const modulePoints = document.createElement("span");
        modulePoints.textContent = subject.points;

        accordionHeader.appendChild(moduleTitle);
        accordionHeader.appendChild(modulePoints);

        // Створення контенту для модуля
        const accordionContent = document.createElement("div");
        accordionContent.classList.add("accordion__content");

        // Створюємо посилання на завантаження для кожної практичної роботи
        subject.tasks.forEach(task => {
            const taskLink = document.createElement("a");
            taskLink.href = task.file;
taskLink.download = task.file.split('/').pop(); 

            const taskSpan = document.createElement("span");

            // Створення іконки
            const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            iconSvg.setAttribute("class", "icon");
            iconSvg.setAttribute("aria-hidden", "true");
            iconSvg.setAttribute("fill", "none");
            iconSvg.setAttribute("viewBox", "0 0 25 25");

            const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            iconPath.setAttribute("stroke", "currentColor");
            iconPath.setAttribute("stroke-linecap", "round");
            iconPath.setAttribute("stroke-linejoin", "round");
            iconPath.setAttribute("stroke-width", "1.8");
            iconPath.setAttribute("d", "M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01");

            iconSvg.appendChild(iconPath);
            taskSpan.appendChild(iconSvg);
            taskSpan.appendChild(document.createTextNode(task.name));


            const pointsSpan = document.createElement("span");

            pointsSpan.appendChild(document.createTextNode(task.points));

            taskLink.appendChild(taskSpan);
            taskLink.appendChild(pointsSpan);

            accordionContent.appendChild(taskLink);
        });

        // Додаємо все до елемента акордеону
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionContent);

        // Додаємо елемент модуля до основного контейнера
        accordionDiv.appendChild(accordionItem);

        // Додаємо контейнер до загального контейнера
        wrapper.appendChild(accordionDiv);
    });
}











    const buttons = document.querySelectorAll(".subjectOpen"); // Отримуємо всі кнопки

    // Проходимо по всіх кнопках і додаємо обробник події
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            createSubjectInfo(subjectData); // Створюємо акордеон
            updateTitle("Інформаційні системи та технології"); // Оновлюємо заголовок

            
        });
    });
    
    

document.getElementById("groupOpen").addEventListener("click", function () {
    createTable(tableData);
    updateTitle("Група: ІСТ 2101"); // Оновлюємо заголовок
});

document.getElementById("curatorOpen").addEventListener("click", function () {
    createUserInfo(userData);
    updateTitle("Куратор групи"); // Оновлюємо заголовок
});

function updateTitle(newTitle) {
    const titleElement = document.querySelector(".popup__title span");
    if (titleElement) {
        titleElement.textContent = newTitle;
    }
}


});
