
document.addEventListener("DOMContentLoaded", () => {
    function saveThemePreferences(theme) {
        localStorage.setItem('theme', theme);
    }

    function setTheme(themeName) {
        saveThemePreferences(themeName);

        document.documentElement.className = themeName;
    }

    function toggleTheme() {
        if (localStorage.getItem('theme') === 'light-theme') {
            setTheme('light-theme');
        } else {
            setTheme('dark-theme');
        }
    }

    (function () {
        if (localStorage.getItem('theme') === 'dark-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    })();

    const themeToggler = document.getElementById('themeToggler');
    themeToggler.addEventListener('click', () => {
        if (themeToggler.checked) {
            toggleTheme();
        } else {
            toggleTheme();
        }
    });
});
