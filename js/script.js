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

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }, { passive: false });
