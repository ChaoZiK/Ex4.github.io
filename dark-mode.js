const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.innerText = 'Light Mode';
    } else {
        toggleBtn.innerText = 'Dark Mode';
    }
});
