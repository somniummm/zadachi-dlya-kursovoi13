let arr = ['У вас сегодня будет отличный день',
'Вам не повезло у вас плохой день',
'сегодня вас ждет удача и успех во всех начинаниях',
'устройте сегодня себе выходной - пусть весь мир подождет']

let parent = document.querySelector('#parent');
let timer = document.querySelector('#timer');
let text = document.querySelector('#text');
let start = document.querySelector('#start');
let stop1 = document.querySelector('#stop');
let test;

start.addEventListener('click', ()=>{
    test = setInterval(() => {
        timer.textContent = getRandomInt(arr.length)
    }, 100);
    start.classList.remove('active');
    stop1.classList.add('active');
})

stop1.addEventListener('click', ()=>{
    clearInterval(test);
    text.textContent = arr[timer.textContent]
    stop1.classList.remove('active');
    start.classList.add('active');
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(arr.length)