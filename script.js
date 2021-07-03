function createArrayOfNumbers(length){
    return Array(length).fill().map((_, index) => index + 1);
}

function createArrayOfDates(from, to){
    return createArrayOfNumbers(to - from).map(val => from + val);
}

function fillSelectElem(selector, data){
    const elem = document.querySelector(selector);
    let option;
    for(let item of data){
        option = document.createElement('option');
        option.value = item;
        option.innerText = item;
        elem.appendChild(option);
    }
}

//add days
const allDays = createArrayOfNumbers(31);
fillSelectElem('.select-birthday__day', allDays);

//add months
const allMonths = createArrayOfNumbers(12);
fillSelectElem('.select-birthday__month', allMonths);

//add years
const allYears = createArrayOfDates(1950, 2021);
fillSelectElem('.select-birthday__year', allYears);

function calcAge(){
    const birthDay = document.querySelector('.select-birthday__day').value;
    const birthMonth = document.querySelector('.select-birthday__month').value;
    const birthYear = document.querySelector('.select-birthday__year').value;

    if(birthDay && birthMonth && birthYear){
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();

        const calcYear = currentYear - birthYear;
        const calcMonth = Math.abs(currentMonth - birthMonth);
        const calcDay = Math.abs(currentDay - birthDay);
        const ageElem = document.querySelector('.age');
        ageElem.classList.add('bg');
        ageElem.innerText = 
            `Your Age
            ${calcYear} ${calcYear === 1 ? 'year' : 'years'}, 
            ${calcMonth} ${calcMonth === 1 ? 'month' : 'months'}, 
            ${calcDay} ${calcDay === 1 ? 'day' : 'days'}
            `;
    } 
}

document.querySelector('.select-birthday__year').onchange = calcAge;
document.querySelector('.select-birthday__month').onchange = calcAge;
document.querySelector('.select-birthday__day').onchange = calcAge;