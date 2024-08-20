const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('advanced');
    } else {
        document.body.classList.remove('advanced');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
