let mass = +prompt('Ваш вес в кг');
console.log(`масса тела: ${mass}`);
let h = +prompt('рост в см');
h = h / 100;
console.log(`рост в метрах: ${h}`);
let index = mass / (h * h);
index = index * 10;
index = Math.round(index);
index = index / 10;
console.log(`индекс: ${index}`);

if(index <= 16) {
    alert(`Ваш индекс: ${index}, к сожалению у Вас выраженный дефицит массы тела.`);
    console.log('к сожалению у Вас выраженный дефицит массы тела.');
}
if(index > 16 && index <= 18.5) {
    alert(`Ваш индекс: ${index}, к сожалению у Вас недостаточная масса тела.`);
    console.log('к сожалению у Вас недостаточная масса тела.');
}
if(index > 18.5 && index <= 25) {
    alert(`Ваш индекс: ${index}, у Вас нормальная масса тела.`);
    console.log('у Вас нормальная масса тела.');
}
if(index > 25 && index <= 30) {
    alert(`Ваш индекс: ${index}, к сожалению у Вас  избыточная масса тела (предожирение).`);
    console.log('к сожалению у Вас  избыточная масса тела (предожирение).');
}
if(index > 30 && index <= 35) {
    alert(`Ваш индекс: ${index}, к сожалению у Вас  ожирение 1 степени.`);
    console.log('к сожалению у Вас  ожирение 1 степени.');
}
if(index > 35 && index <= 40) {
    alert(`Ваш индекс: ${index}, к сожалению у Вас  ожирение 2 степени.`);
    console.log('к сожалению у Вас  ожирение 2 степени.');
}
if(index > 40) {
    alert(`Ваш индекс: ${index}, к сожалению у Вас  ожирение 3 степени.`);
    console.log('к сожалению у Вас  ожирение 3 степени.');
}
