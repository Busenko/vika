document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;


//МЕНЮ БУРГЕР .........................................................................................................................................
    const burgerMenu = document.querySelector('.menu__burger');
    const menuBlock = document.querySelector('.menu__block');
    const menuLinks = document.querySelectorAll('.menu__link');


    if (burgerMenu && menuBlock) {
        // Відкривання/закривання меню при кліку на бургер
        burgerMenu.addEventListener("click", function () {
            this.classList.toggle('active');
            menuBlock.classList.toggle('active');
            body.classList.toggle('lock');
        });

        // Закриття меню при кліку на посилання
        menuLinks.forEach(link => {
            link.addEventListener("click", function () {
                burgerMenu.classList.remove('active'); // Видаляємо клас "active" у бургер-іконки
                menuBlock.classList.remove('active');  // Видаляємо клас "active" у меню
                body.classList.remove('lock');       // Розблоковуємо прокручування
            });
        });
    }
//ПОПАП .........................................................................................................................................
const openPopupBtns = document.querySelectorAll(".openPopup");
const popupOverlay = document.getElementById("popupOverlay");
const closePopupBtn = document.querySelector(".closePopup");
let lastClickedButton = null;

openPopupBtns.forEach(button => {
    button.addEventListener("click", function () {
        lastClickedButton = button;
        const buttonRect = button.getBoundingClientRect();
        const popupWidth = popupOverlay.offsetWidth;
        const popupHeight = popupOverlay.offsetHeight;

        popupOverlay.style.transition = "none";
        popupOverlay.style.transform = `translate(${buttonRect.left + buttonRect.width / 2 - popupWidth / 2}px, ${buttonRect.top + buttonRect.height / 2 - popupHeight / 2}px) scale(0)`;
        
        popupOverlay.classList.add("show");
        
        setTimeout(() => {
            popupOverlay.style.transition = "transform 0.3s ease-out";
            popupOverlay.style.transform = `translate(${window.innerWidth / 2 - popupWidth / 2}px, ${window.innerHeight / 2 - popupHeight / 2}px) scale(1)`;
        }, 10);

        document.body.classList.add('lock');
    });
});

popupOverlay.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

closePopupBtn.addEventListener("click", closePopup);

function closePopup() {
    if (!lastClickedButton) return;

    const buttonRect = lastClickedButton.getBoundingClientRect();

    popupOverlay.style.transform = `translate(${buttonRect.left + buttonRect.width / 2 - popupOverlay.offsetWidth / 2}px, ${buttonRect.top + buttonRect.height / 2 - popupOverlay.offsetHeight / 2}px) scale(0)`;

    setTimeout(() => {
        popupOverlay.classList.remove("show");
        document.body.classList.remove('lock');
        lastClickedButton = null;
    }, 300);
}




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

    if (!wrapper) {
        console.error("Елемент .popup__wraper не знайдено!");
        return;
    }

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

// createTable(tableData);















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

// Викликаємо функцію для побудови елементів
// createUserInfo(userData);

document.getElementById("groupOpen").addEventListener("click", function () {
    createTable(tableData);
});

document.getElementById("curatorOpen").addEventListener("click", function () {
    createUserInfo(userData);
});



//СКРОЛ АРХІВУ .........................................................................................................................................

const scrollContainers = document.querySelectorAll('.archive__wrapper');

if (scrollContainers.length > 0) {
    scrollContainers.forEach(scrollContainer => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        scrollContainer.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'BUTTON') return; // Вихід, якщо натиснута кнопка
            
            isDown = true;
            scrollContainer.style.cursor = 'grabbing';
            scrollContainer.style.userSelect = 'none';
            
            scrollContainer.childNodes.forEach(child => {
                if (child.nodeType === 1) child.style.pointerEvents = 'none';
            });
            
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
            scrollContainer.childNodes.forEach(child => {
                if (child.nodeType === 1) child.style.pointerEvents = 'auto';
            });
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.style.cursor = 'grab';
            scrollContainer.childNodes.forEach(child => {
                if (child.nodeType === 1) child.style.pointerEvents = 'auto';
            });
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    });
}

// робота з відкриваючими блоками...................................................................................................................
function itemsControl() {
    const coll = document.getElementsByClassName('block__item');
    if (coll.length > 0) {
        for (let i = 0; i < coll.length; i++) {
            const title = coll[i].querySelector('.item__button');
            if (title) {
                title.addEventListener('click', function () {
                    let content = coll[i].querySelector('.block__item-info');
                    let image = coll[i].querySelector('.img-rotate');
                    if (content) {
                        if (content.style.maxHeight) {
                            content.style.maxHeight = null;
                            image && image.classList.remove('rotated');
                        } else {
                            content.style.maxHeight = content.scrollHeight + 'px';
                            image && image.classList.add('rotated');
                        }
                    }
                });
            }
        }

        
        window.addEventListener('resize', function () {
            for (let i = 0; i < coll.length; i++) {
                const content = coll[i].querySelector('.block__item-info');
                if (content && content.style.maxHeight) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });
    }
}

itemsControl();













// /////////////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }, { passive: false });

  
});
