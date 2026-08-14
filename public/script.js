document.querySelectorAll('.menu-item[data-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.getElementById(btn.dataset.target + '-view').classList.add('active');
    });
});

document.querySelectorAll('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.closest('.panel').classList.remove('active');
    });
});
