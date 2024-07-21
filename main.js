'use strict';


const title = document.getElementsByTagName("h1")[0]
const buttons = document.getElementsByClassName("handler_btn")
const plus = document.querySelector(".screen-btn")
const classPercent = document.querySelectorAll(".other-items.percent")
const classNumber = document.querySelectorAll(".other-items.number")
const input = document.querySelector(".rollback > div > input")
const span = document.querySelector(".rollback > div > span.range-value")
const inputsTotal = [...document.getElementsByClassName("total-input")]
let screenBlocks = document.querySelectorAll(".screen")

const AppData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  services: {},
  
  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  

  getRollbackMessage: function(price) {
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
  },
  
  
  getFullPrice:  function() {
    AppData.fullPrice = AppData.screenPrice + AppData.allServicePrices
  },
  
  getTitle: function() {
    AppData.title = AppData.title.trim().toLowerCase() 
    AppData.title = AppData.title[0].toUpperCase() + AppData.title.slice(1)
  },
  
  getServicePercentPrices: function() {
   AppData.servicePercentPrice =  AppData.fullPrice - (AppData.fullPrice * (AppData.rollback / 100)); 
  },


  asking: function() {
    do {
      AppData.title = prompt("Как называется ваш проект?", "   Калькулятор верстКи   ");
    } while (AppData.isNumber(AppData.title) || AppData.title === null || AppData.title.trim() === "")

     do {
      AppData.screenPrice = prompt("Сколько будет стоить данная работа?", 25000);
      AppData.screenPrice = parseFloat(AppData.screenPrice)
    } while(!AppData.isNumber(AppData.screenPrice) || AppData.screenPrice === null );


    for (let i = 0; i < 2; i++) {
      let name 
      let price = 0

      do {
        name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
      } while (AppData.isNumber(name) || name === null || name.trim() === "")

      do {
        price = prompt("Сколько будет стоить данная работа?", 25000);
        price = parseFloat(price);
      } while(!AppData.isNumber(price) || price === null);

      AppData.screens.push({id: i, name: name, price: price});
    }


    for (let i = 0; i < 2; i++) {
      let name 
      let price = 0

      do {
        name = prompt("Какой дополнительный тип услуги нужен?", "addition");
      } while (AppData.isNumber(name) || name === null || name.trim() === "")
  
      do {
        price = prompt("Сколько будет стоить данная работа?", 15000);
        price = parseFloat(price)
      } while(!AppData.isNumber(price) || price === null );

      AppData.services[name + " " + i] = +price
    }
  

    AppData.adaptive = confirm("Нужен ли адаптив на сайте?")
  },

  addPrices: function() {
    AppData.screenPrice += AppData.screens.reduce(function(sum, current) {
      return sum + current.price;
    }, 0);

    for (let key in AppData.services) {
      AppData.allServicePrices += AppData.services[key]
    }
  },

  logger: function() {
    // for (let key in AppData) {
    //   console.log("key: " + key + " " + "value: " + " " + AppData[key]); 
    // }
    console.log(AppData.fullPrice);
    console.log(AppData.servicePercentPrice);
    console.log(AppData.services);
    console.log(AppData.screens);
    console.log(AppData.screenPrice);
    
  },

  start: function() {
    AppData.asking();
    AppData.addPrices();
    AppData.getFullPrice();
    AppData.getServicePercentPrices();
    AppData.getTitle();
    
    AppData.logger()
  }, 
}


AppData.start();

// let loggerDOM = function() {
//   console.log(title);
//   console.log(buttons);
//   console.log(plus);
//   console.log(classPercent);
//   console.log(classNumber);
//   console.log(input);
//   console.log(span);
//   console.log(inputsTotal);
//   console.log(screenBlocks);
// }

// loggerDOM();







 









