const menu_button = document.getElementById('menu_button');

function togglemenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    
    const nav1 = document.getElementById('nav1');
    const header = document.getElementById('body');
    
    nav1.classList.toggle('active');
    header.classList.toggle('active');

    if (hasClass(header, 'active') === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

function hasClass(elemento, classe) {
    return (' ' + elemento.className + ' ').indexOf(' ' + classe + ' ') > -1;
}


menu_button.addEventListener('click', togglemenu);
menu_button.addEventListener('touchstart', togglemenu);
