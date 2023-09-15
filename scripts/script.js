//Открытие и закрытие меню социальных сетей
let social = document.querySelector('#social');
let leftArrow = document.querySelector('#leftArrow');
let rightArrow = document.querySelector('#rightArrow');
let socialBool = false;
social.addEventListener('click', () => {
    if (socialBool === false) {
        socialBool = true;
        rightArrow.style.display = "block";
        leftArrow.style.display = "none";
        social.classList.add("showIcons");
    } else {
        socialBool = false;
        leftArrow.style.display = "block";
        rightArrow.style.display = "none";
        social.classList.remove("showIcons");
    }
})

//Смена фотографи
let image = document.querySelector('#img');
image.addEventListener('click', () => {
    image.src = "images/foto_2.jpg";
})


//Показ и скрытие подробностей об авторе
let section = document.querySelector('.info');
let body = document.querySelector('body');
let btnMore = document.querySelector('#btnMore');
btnMore.addEventListener('click', () => {
    if (btnMore.textContent == "Показать") {
        btnMore.textContent = "Скрыть";
        section.style.height = "800px";
        body.style.height = "140vh";
    } else {
        btnMore.textContent = "Показать";
        section.style.height = "130px";
        body.style.height = "100vh";
    }
})