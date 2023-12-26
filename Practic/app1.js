const obj = [
    {
        date: new Date(2023, 9 ,31),
        name: "Событие 1",
        description: "Описание события 1"
    },
    {
        date: new Date(2020, 4 ,15),
        name: "Событие 2",
        description: "Описание события 2"
    },
    {
        date: new Date(2021, 8 ,4),
        name: "Событие 3",
        description: "Описание события 3"
    },
    {
        date: new Date(2021, 8 ,1),
        name: "Событие 4",
        description: "Описание события 4"
    }
];

let parent = document.querySelector('parent');
let table = document.querySelector('table');
let input = document.querySelector('input');
input.addEventListener('keydown', ()=>{
    if (event.key === "Enter") {
        table.innerHTML = '';
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].date.getFullYear() == +input.value) {
                let tr = document.createElement('tr')
                let td = document.createElement('td')
                let name = document.createElement('td')
                let desc = document.createElement('td')

                td.textContent = obj[i].date.getFullYear();
                name.textContent = obj[i].name;
                desc.textContent = obj[i].description;

                tr.append(td,name,desc);
                table.append(tr);
            }
        }
    }
})

