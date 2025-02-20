window.addEventListener("DOMContentLoaded", function () {

 // Меню бургер...................................................................................................................
 $(document).ready(function () {
    const burgerMenu = document.querySelector('.menu__burger');
    const menuBlock = document.querySelector('.menu__block');
    const menuLinks = document.querySelectorAll('.menu__link');
    
    if (burgerMenu && menuBlock) {
        // Відкривання/закривання меню при кліку на бургер
        $(burgerMenu).click(function () {
            $(this).toggleClass('active');
            $(menuBlock).toggleClass('active');
            $('body').toggleClass('lock');
        });

        // Закриття меню при кліку на посилання
        menuLinks.forEach(link => {
            $(link).click(function () {
                $(burgerMenu).removeClass('active'); // Видаляємо клас "active" у бургер-іконки
                $(menuBlock).removeClass('active');  // Видаляємо клас "active" у меню
                $('body').removeClass('lock');       // Розблоковуємо прокручування
            });
        });
    }
});





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
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
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
