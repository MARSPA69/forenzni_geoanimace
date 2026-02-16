(() => {
    const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    internalLinks.forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
