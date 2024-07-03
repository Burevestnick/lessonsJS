'use strict';


const AppData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  service1: '',
  service2: '',
  asking: function() {
    AppData.title = prompt("Как называется ваш проект?", "   Калькулятор верстКи   ");
    AppData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
    while (AppData.screens == "" || AppData.screens === null) {
      AppData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
    }
     do {
      AppData.screenPrice = prompt("Сколько будет стоить данная работа?", 25000);
      AppData.screenPrice = parseFloat(AppData.screenPrice)
    } while(!isNumber(AppData.screenPrice) || AppData.screenPrice === null );
  
    AppData.adaptive = confirm("Нужен ли адаптив на сайте?")
  },
  logger: function() {
    console.log(AppData.fullPrice);
    console.log(AppData.servicePercentPrice);
    for (let key in AppData) {
      console.log("key: " + key + " " + "value: " + " " + AppData[key]); 
    }
  },
  start: function() {
    AppData.asking();
    AppData.allServicePrices = getAllServicePrices();
    AppData.fullPrice = getFullPrice();
    AppData.servicePercentPrice = getServicePercentPrices();
    AppData.title = getTitle(AppData.title);
    AppData.logger()
  }
}

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const getAllServicePrices = function() {
  let current = 0
  let sum = 0
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      AppData.service1 = prompt("Какой дополнительный тип услуги нужен?", "addition");
      while (AppData.service1 === null || AppData.service1 == "") {
        AppData.service1 = prompt("Какой дополнительный тип услуги нужен?", "addition");
      }
    } else if (i === 1) {
      AppData.service2 = prompt("Какой дополнительный тип услуги нужен?", "addition");
      while (AppData.service2 === null || AppData.service2 == "") {
        AppData.service2 = prompt("Какой дополнительный тип услуги нужен?", "addition");
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
  return AppData.screenPrice + AppData.allServicePrices
}

const getTitle = function(title) {
  title = title.trim().toLowerCase() 
  title = title[0].toUpperCase() + title.slice(1)
  return title
}

const getServicePercentPrices = function() {
 return AppData.fullPrice - (AppData.fullPrice * (AppData.rollback / 100)); 
}


AppData.start()



 









