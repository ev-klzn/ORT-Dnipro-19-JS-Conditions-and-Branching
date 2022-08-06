let year = +prompt('Введите год в формате 1234');
console.log(`введен год ${year}`);
if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log('год високосный');
    alert('год високосный');
} else {
    console.log('год  не високосный');
    alert('год не високосный');
}