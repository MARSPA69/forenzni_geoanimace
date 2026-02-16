(() => {
    const form = document.getElementById('password-form');
    const input = document.getElementById('password');
    const helper = document.querySelector('.helper');
    const successBox = document.getElementById('success-box');
    const PASSWORD = 'AnimacniAPKA2023';

    if (!form || !input || !successBox) return;

    const showAccess = () => {
        successBox.classList.remove('hidden');
        form.classList.add('hidden');
        sessionStorage.setItem('fg_private_access', 'true');
    };

    if (sessionStorage.getItem('fg_private_access') === 'true') {
        showAccess();
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        const value = input.value.trim();
        if (value === PASSWORD) {
            showAccess();
        } else {
            helper.textContent = 'Nesprávné heslo, zkuste to znovu.';
            helper.style.color = '#ff9b9b';
            input.focus();
        }
    });
})();
