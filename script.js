
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

let  divv = document.getElementById('back');

divv.onclick = ()=> {
    divv.style.display = 'none';
};
/// TASK
//Создайте меню, которое раскрывается/сворачивается при клике

let menuElement = document.querySelector('.dulces');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function() {
    menuElement.classList.toggle('hidden');
};
//TASK
//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
/// Two in one!!!!!!!!!!!!!!
let text = document.getElementById('text');
let input = document.getElementById('input');
text.oninput = function tableCreate() {
    let body = document.getElementsByTagName("body")[0];
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    for (let j = 0; j <= this.value; j++) {
            let row = document.createElement("tr");
            for (let i = 1; i <= this.value ; i++) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(input.value);

                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "1");
};
//TASK
// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
let  slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    let slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) {
        slide_index = 1;
    }
    if (n < 1) {
        slide_index = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}
//TASK TWO IN ONE
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let array = ['блять', 'піздєц', 'дупа', 'сука'];
    const put =() => {
        let value1 = document.getElementById('word').value;
        let arr = value1.split(' ');
        for (const el of arr) {
            for (const element of array) {
                if (el === element) {
                    alert('ohhhhohooo');
                }
            }
            // console.log(value1);
        }

    return value1;
};
    

// TASK три в одному аби не паритись
//-- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

 let resolve = document.getElementsByClassName('resolve')[0];

// for (const user of usersWithAddress) {
//     let div = document.createElement('div');
//     div.innerText = JSON.stringify(user);
//     resolve.appendChild(div);
// }

let cbox = document.getElementById('cbox');
cbox.onclick = function () {
    resolve.innerText = '';
    if(cbox.checked) {
        for (const users of usersWithAddress) {
            if (!users.status && users.age >= 29 && users.address.city === 'Kyiv' ) {
                let div = document.createElement('div');
                div.innerText = JSON.stringify(users);
                resolve.appendChild(div);

            }
        }
    }else {
        for (const user of usersWithAddress) {
            let div = document.createElement('div');
            div.innerText = JSON.stringify(user);
            resolve.appendChild(div);
        }
    }
};


// TASK ***
// При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// в даному при виділення якоїсь частини тексту вона стає жирна проте перезаписується в інше місце <p id="demo"></p>
document.body.onmouseup = function (e) {
    let str = document.getSelection().toString();
    //console.log(document.getSelection().toString());
    let res = str.bold();
    document.getElementById("demo").innerHTML = res;

};







