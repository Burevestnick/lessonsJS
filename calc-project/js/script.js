'use strict';


const title = document.getElementsByTagName("h1")[0]

const startBtn = document.getElementsByClassName("handler_btn")[0]
const resetBtn = document.getElementsByClassName("handler_btn")[1]
const plusBtn = document.querySelector(".screen-btn")

const otherItemsPercent = document.querySelectorAll(".other-items.percent")
const otherItemsNumber = document.querySelectorAll(".other-items.number")
const input = document.querySelector(".rollback > div > input")
const rollbackRange = document.querySelector("input[type=range]")
const span = document.querySelector(".rollback > div > span.range-value")

const total = document.querySelectorAll(".total-input")[0] 
const totalCount = document.querySelectorAll(".total-input")[1]
const totalCountOther = document.querySelectorAll(".total-input")[2]
const fullTotalCount = document.querySelectorAll(".total-input")[3]
const totalCountRollback = document.querySelectorAll(".total-input")[4]

let screens = document.querySelectorAll(".screen")

const AppData = {
  title: '',
  screens: [],
  totalScreens: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  ServicePricesPercent: 0,
  ServicePricesNumber: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    AppData.addTitle()

    startBtn.addEventListener('click', AppData.start)
    
    plusBtn.addEventListener('click', AppData.addScreenblock)
    rollbackRange.addEventListener('input', AppData.getRollback)
  },

  checkInputs: function() {
    let i = 0
    while (i < AppData.screens.length) {
      if (AppData.screens[i].count === 0 || AppData.screens[i].name === "Тип экранов") {
        alert("введите тип и количество экранов")
        AppData.screens = []
        AppData.screenPrice = 0
        AppData.totalScreens
        AppData.ServicePricesPercent = 0
        AppData.ServicePricesNumber = 0
        AppData.fullPrice = 0
        AppData.servicePercentPrice = 0
        AppData.totalScreens = 0
      } else {
        i++
      }
    }
  },
  
  addTitle: function() {
    document.title = title.textContent
  }, 

  addScreenblock: function () {
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length - 1].after(cloneScreen)
    
  },

  addServices: function () {
    otherItemsPercent.forEach(function(item) {
      const check = item.querySelector("input[type=checkbox]")
      const label = item.querySelector("label")
      const input = item.querySelector("input[type=text]")

      if (check.checked) {
        AppData.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach(function(item) {
      const check = item.querySelector("input[type=checkbox]")
      const label = item.querySelector("label")
      const input = item.querySelector("input[type=text]")

      if (check.checked) {
        AppData.servicesNumber[label.textContent] = +input.value
      }
    })
  },

  showResult: function () {
    total.value = AppData.screenPrice 
    totalCount.value = AppData.totalScreens
    totalCountOther.value = AppData.ServicePricesPercent + AppData.ServicePricesNumber
    fullTotalCount.value = AppData.fullPrice
    totalCountRollback.value = AppData.servicePercentPrice
  },

  addPrices: function() {
    AppData.screenPrice += AppData.screens.reduce(function(sum, current) {
      return sum + current.price;
    }, 0);

    AppData.totalScreens += AppData.screens.reduce(function(sum, current) {
      return sum + current.count;
    }, 0);

    for (let key in AppData.servicesNumber) {
      AppData.ServicePricesNumber += AppData.servicesNumber[key]
    }
    
    for (let key in AppData.servicesPercent) {
      AppData.ServicePricesPercent += AppData.screenPrice * (AppData.servicesPercent[key] / 100)
    }
    
    AppData.fullPrice = AppData.screenPrice + AppData.ServicePricesPercent + AppData.ServicePricesNumber
    AppData.servicePercentPrice =  AppData.fullPrice - (AppData.fullPrice * (AppData.rollback  / 100)); 
  },

  getRollback: function(event) {
    span.textContent = event.target.value + " %"
    AppData.rollback = +event.target.value 
    if (fullTotalCount.value != 0) {
      totalCountRollback.value = AppData.fullPrice - (AppData.fullPrice * (AppData.rollback  / 100))
    }
  },

  start: function() {

    AppData.addScreens();
    AppData.addServices();
    AppData.addPrices();
    AppData.checkInputs();
    
    
    // AppData.logger()
    console.log(AppData);
    
    AppData.showResult()
  }, 

  addScreens: function() {
    screens = document.querySelectorAll(".screen")

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select")
      const input = screen.querySelector("input")
      const selectName = select.options[select.selectedIndex].textContent
      
      
      AppData.screens.push({
        id: index, 
        name: selectName, 
        price: +select.value * +input.value,
        count: +input.value
      });
    })

    console.log(AppData.screens);
    
  },
  

  // isNumber: function(num) {
  //   return !isNaN(parseFloat(num)) && isFinite(num)
  // },
  
  
  getServicePercentPrices: function() {
   AppData.servicePercentPrice =  AppData.fullPrice - (AppData.fullPrice * (AppData.rollback / 100)); 
  },


  // logger: function() {
  //   console.log(AppData.fullPrice);
  //   console.log(AppData.servicePercentPrice);
  //   console.log(AppData.services);
  //   console.log(AppData.screens);
  //   console.log(AppData.screenPrice);
  // },
}


AppData.init();

// 1) Запретить нажатие кнопки Рассчитать если не выбран ни один тип экрана в выпадающем списке и не введено их количество. Учесть что блоков с типом экранов может быть несколько, но пустых (незаполненных) элементов быть не должно ))







 









