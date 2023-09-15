let image = document.querySelector('#img');
image.addEventListener('click', () => {
    image.src = "images/foto_2.jpg";
})
let section = document.querySelector('.info');
let body = document.querySelector('body');
let btnMore = document.querySelector('#btnMore');
btnMore.addEventListener('click', () => {
    if (btnMore.textContent == "Показать") {
        btnMore.textContent = "Скрыть";
        body.style.height = "120vh";
        section.style.height = "800px";
    } else {
        btnMore.textContent = "Показать";
        body.style.height = "100vh";
        section.style.height = "130px";
    }
})