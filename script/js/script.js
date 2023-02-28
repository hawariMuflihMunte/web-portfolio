
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    
    body.classList.add('bg-l4');

    const themeToggler = document.getElementById('theme');

    if (themeToggler.checked) {
        body.classList.remove('bg-l4');
        body.classList.add('bg-d1');
    } else {
        body.classList.remove('bg-d1');
        body.classList.add('bg-l4');
    }
});
