let input = document.querySelector('input');
let p = document.querySelector('p');

const obj = {
    h1:'<h1>Заголовок документа</h1>',
    p:'<p>Параграф</p>',
    input:'<input type="text" name="" id="">, поле ввода'
}

input.addEventListener('keydown', ()=>{
    if (event.key == "Enter") {
        if (input.value in obj) {
            p.textContent = obj[input.value]
        }else{
            p.textContent = 'Такой тег не найден'
        }
    }
})