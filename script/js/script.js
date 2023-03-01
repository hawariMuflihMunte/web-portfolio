
document.addEventListener("DOMContentLoaded", () => {
    function checkWebStorageAPI() {
        if (typeof (Storage) === 'undefined') return false;
        return true;
    }

    function saveThemePreferences(theme) {
        if (!checkWebStorageAPI) {
            console.error('API Web Storage tidak tersedia untuk web browser ini!');
            return;
        }

        localStorage.setItem('theme', theme);
    }

    function setTheme(theme) {
        if (theme === 'dark-theme') {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');

            saveThemePreferences(theme);
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');

            saveThemePreferences(theme);
        }
    }

    // Jalankan segera fungsi ini agar tema dapat di-render
    (function () {
        if (checkWebStorageAPI) {
            if (localStorage.getItem('theme') === 'dark-theme') {
                setTheme('dark-theme');
            } else {
                setTheme('light-theme');
            }
        }
    })();

    const themeToggler = document.getElementById('themeToggler');
    themeToggler.addEventListener('change', () => {
        if (themeToggler.checked) {
            setTheme('dark-theme');

            // Jalankan segera fungsi ini agar tema dapat di-render
            (function () {
                if (checkWebStorageAPI) {
                    if (localStorage.getItem('theme') === 'dark-theme') {
                        setTheme('dark-theme');
                        themeToggler.checked = true;
                    } else {
                        setTheme('light-theme');
                        themeToggler.checked = false;
                    }
                }
            })();
        } else {
            setTheme('light-theme');

            // Jalankan segera fungsi ini agar tema dapat di-render
            (function () {
                if (checkWebStorageAPI) {
                    if (localStorage.getItem('theme') === 'light-theme') {
                        setTheme('light-theme');
                        themeToggler.checked = false;
                    } else {
                        setTheme('dark-theme');
                        themeToggler.checked = true;
                    }
                }
            })();
        }
    });
});
