'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 15
let adaptive = confirm("Нужен ли адаптив на сайте?")
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice 
let servicePercentPrice 
let allServicePrices




const getRollbackMessage = function(price) {
  switch (true) {
    case price >= 30000:
     return "Даем скидку в 10%"
    case price >= 15000 && price < 30000:
     return "Даем скидку в 5%"
    case price > 0 && price < 15000:
     return "Скидка не предусмотрена"
    default:
     return "Что то пошло не так"
  }
}

const getAllServicePrices = function(option1, option2) {
  allServicePrices = option1 + option2
  return allServicePrices
}

function getFullPrice() {
  fullPrice = screenPrice + allServicePrices
  return fullPrice
}

const getTitle = function(title) {
  title = title.replace(/^\s+/, '')
  title = title.toLowerCase() 
  title = title[0].toUpperCase() + title.slice(1)
  return title
}

const showTypeOf = function(option) {
  console.log(option, typeof(option));
}

const getServicePercentPrices = function() {
 servicePercentPrice = Math.round(fullPrice - (fullPrice * (rollback / 100))); 
 return servicePercentPrice
}

getAllServicePrices(servicePrice1, servicePrice2);
getFullPrice();


showTypeOf(getTitle(title));
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());



// 5) Почистить консоль логи и добавить недостающие, должны остаться:

// - вызовы функции showTypeOf

// - вывод строки с типами экранов для разработки screens

// - сообщение о скидке пользователю (вызовы функции getRollbackMessage)

// - стоимость за вычетом процента отката посреднику (вызовы функции getServicePercentPrices)





