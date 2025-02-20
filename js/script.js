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
    // const popup = document.querySelector(".popup");
    const closePopupBtn = document.querySelector(".closePopup");
    
    let lastClickedButton = null; // Остання натиснута кнопка
    
    openPopupBtns.forEach(button => {
        button.addEventListener("click", function (event) {
            lastClickedButton = button; // Запам’ятовуємо кнопку
    
            const buttonRect = button.getBoundingClientRect();
            const popupWidth = popupOverlay.offsetWidth;
            const popupHeight = popupOverlay.offsetHeight;
    
            // Скидання стилів перед відкриттям
            popupOverlay.style.transition = "none"; // Вимикаємо анімацію, щоб одразу задати початкові стилі
            popupOverlay.style.transform = "scale(0)";
            popupOverlay.style.left = `${buttonRect.left + buttonRect.width / 2 - popupWidth / 2}px`;
            popupOverlay.style.top = `${buttonRect.top + buttonRect.height / 2 - popupHeight / 2}px`;
    
            // Відображаємо попап
            // popupOverlay.classList.add("show");  // Показуємо оверлей разом з попапом
    
            // Включаємо анімацію та масштабуємо в центр
            setTimeout(() => {
               
                popupOverlay.style.transition = "transform 0.6s, top 0.4s, left 0.4s";
                popupOverlay.style.left = `${window.innerWidth / 2 - popupWidth / 2}px`;
                popupOverlay.style.top = `${window.innerHeight / 2 - popupHeight / 2}px`;
                popupOverlay.style.transform = "scale(1)";
    
                

                popupOverlay.style.left = `${window.innerWidth / 2 - popupWidth / 2}px`;
                popupOverlay.style.top = `${window.innerHeight / 2 - popupHeight / 2}px`;

                // Зафіксувати попап в центрі
              
             
    
            }, 10);
    
            body.classList.toggle('lock');
        });
    });
    
    closePopupBtn.addEventListener("click", closePopup);
    popupOverlay.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            closePopup();
        }
    });
    
    function closePopup() {
        if (!lastClickedButton) return;
    
        const buttonRect = lastClickedButton.getBoundingClientRect();
    
        // Згортаємо попап назад до кнопки
        popupOverlay.style.left = `${buttonRect.left + buttonRect.width / 2 - popupOverlay.offsetWidth / 2}px`;
        popupOverlay.style.top = `${buttonRect.top + buttonRect.height / 2 - popupOverlay.offsetHeight / 2}px`;
        popupOverlay.style.transform = "scale(0)";
    
        setTimeout(() => {
        
            body.classList.remove('lock');  
    
            // Очищення змінної, щоб запобігти багам
            lastClickedButton = null;
    
            // Скидання стилів, щоб при наступному відкритті все працювало коректно
            popupOverlay.style.transition = "none";
            popupOverlay.style.transform = "scale(0)"; // Повертаємо нормальний масштаб
        }, 300); // Чекаємо завершення анімації
    }
    
    
    
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
