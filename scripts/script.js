//Открытие и закрытие меню социальных сетей
let social = document.querySelector('#social');
let arrow = document.querySelector('#arrow');
let socialBool = false;
social.addEventListener('click', () => {
    if (socialBool === false) {
        socialBool = true;
        arrow.style.transform = "rotate(180deg)"
        social.classList.add("showIcons");
    } else {
        socialBool = false;
        arrow.style.transform = "rotate(0deg)"
        social.classList.remove("showIcons");
    }
})

//Смена фотографии
let image = document.querySelector('#img');
let count = 1;
function replacement() {
    switch (count) {
        case 1:
            image.src = "images/foto_2.jpg"
            count = 2;
            break;
        case 2:
            image.src = "images/foto_3.jpg"
            count = 3;
            break;
        case 3:
            image.src = "images/foto_1.jpg"
            count = 1;
            break;
    }
}

//Показ и скрытие подробностей об авторе
let section = document.querySelector('.info');
let body = document.querySelector('body');
let btnMore = document.querySelector('#btnMore');
btnMore.addEventListener('click', () => {
    if (btnMore.textContent == "Показать") {
        btnMore.textContent = "Скрыть";
        if (window.innerWidth <= 520) {
            section.style.height = "830px"
            body.style.height = "170vh";
        } else if (window.innerWidth <= 700) {
            section.style.height = "860px";
            body.style.height = "170vh";
        } else {
            section.style.height = "800px";
            body.style.height = "140vh";
        }
    } else {
        btnMore.textContent = "Показать";
        section.style.height = "130px";
        body.style.height = "100vh";
    }
})