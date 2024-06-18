let title = "lesson 01"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 4500
let rollback = 15
let fullPrice = 100000
let adaptive = true

console.log(typeof(title),typeof(fullPrice),typeof(adaptive)); //тип переменной

console.log(screens.length); //длина строки

console.log("Стоимость верстки экранов " + screenPrice + " рублей", "\nСтоимость разработки сайта " + fullPrice + " рублей");

console.log(screens.toLowerCase().split(",")); // нижний регистр, разбить в массив по запятой

console.log(fullPrice * (rollback / 100));






