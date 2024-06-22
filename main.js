'use strict';

let title
let screens 
let screenPrice
let adaptive 
let rollback = 15
let fullPrice 
let servicePercentPrice 
let allServicePrices
let service1 
let service2 


const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
  title = prompt("Как называется ваш проект?", "   Калькулятор верстКи   ");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
  while (screens == "" || screens === null) {
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
  }
   do {
    screenPrice = prompt("Сколько будет стоить данная работа?", 15000);
    screenPrice = parseFloat(screenPrice)
  } while(!isNumber(screenPrice) || screenPrice === null );

  adaptive = confirm("Нужен ли адаптив на сайте?")
}

const getAllServicePrices = function() {
  let current = 0
  let sum = 0
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "addition");
      while (service1 === null || service1 == "") {
        service1 = prompt("Какой дополнительный тип услуги нужен?", "addition");
      }
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "addition");
      while (service2 === null || service2 == "") {
        service2 = prompt("Какой дополнительный тип услуги нужен?", "addition");
      }
    }

    do {
      current = prompt("Сколько будет стоить данная работа?", 15000);
      current = parseFloat(current)
    } while(!isNumber(current) || current === null );
    sum = sum + current
  }
  return sum
}

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


const getFullPrice =  function() {
  return screenPrice + allServicePrices
}

const getTitle = function(title) {
  title = title.trim().toLowerCase() 
  title = title[0].toUpperCase() + title.slice(1)
  return title
}

const showTypeOf = function(option) {
  console.log(option, typeof(option));
}

const getServicePercentPrices = function() {
 return fullPrice - (fullPrice * (rollback / 100)); 
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log("Сумма после октата ",  servicePercentPrice);











