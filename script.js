document.addEventListener("DOMContentLoaded", function() {

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open")
        icon.classList.toggle("open")
    }

    const toggleSwitch = document.querySelector("#mode-toggle");
    const toggleLabel = document.querySelector(".toggle-label");

    function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }

    function toggleTheme() {
        if (toggleSwitch && toggleSwitch.checked) {
            setTheme("dark");
            if (toggleLabel) toggleLabel.textContent = "Light Mode";
        } else {
            setTheme("light");
            if (toggleLabel) toggleLabel.textContent = "Dark Mode";
        }
    }

    // Initial state based on user preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
        if (toggleSwitch) toggleSwitch.checked = savedTheme === "dark";
    } else {
        // Handle the case of no saved theme (optional)
        // For example: default to light mode
        // setTheme("light");
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", () => {
            toggleTheme();
            localStorage.setItem("theme", toggleSwitch.checked ? "dark" : "light");
        });
    }

    // Run toggleTheme() initially to set initial state
    toggleTheme();

});
