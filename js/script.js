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
