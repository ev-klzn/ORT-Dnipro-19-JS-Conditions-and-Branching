let mass = +prompt('Ваш вес в кг');
console.log(`масса тела: ${mass}`);
let h = +prompt('Ваш рост в см');
h = h / 100;
console.log(`рост в метрах: ${h}`);
let index = mass / (h * h);
index = Math.round(index);
console.log(`индекс: ${index}`);




