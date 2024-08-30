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

const CMSBlock = document.querySelector("#cms-open")


let screens = document.querySelectorAll(".screen")
let optionsCMS = document.querySelectorAll('[name=views-select]')[1];

resetBtn.disable = true;

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

  showCMS: function() {
    CMSBlock.addEventListener('click', () => {
      if (CMSBlock.checked) {
        document.querySelector('.hidden-cms-variants').style.display = 'flex'
      } else {
        document.querySelector('.hidden-cms-variants').style.display = 'none'
      }
    })
    
    optionsCMS = document.querySelectorAll('[name=views-select]')[1];
    console.log(optionsCMS);

    optionsCMS.addEventListener('click', () => {
      if (optionsCMS.selectedIndex === 2) {
       document.querySelectorAll('.main-controls__input')[8].style.display = 'block'
      } else {
        document.querySelectorAll('.main-controls__input')[8].style.display = 'none'
      }
    })

  },

  resetCMS: function() {
    CMSBlock.checked = false
    optionsCMS.selectedIndex = 0

    document.querySelector('#cms-other-input').value = ''
    document.querySelectorAll('.main-controls__input')[8].style.display = 'none'
    if (CMSBlock.checked) {

      document.querySelector('.hidden-cms-variants').style.display = 'flex'
    } else {
      document.querySelector('.hidden-cms-variants').style.display = 'none'
    }
  },

  disableInputs: function() {
    const selectBlock = document.querySelectorAll('[name = views-select]')
    selectBlock.forEach((select) => select.disabled = true)

    const textInputs = document.querySelectorAll('[type = text')
    textInputs.forEach((input) => input.disabled = true)

    plusBtn.disabled = true
  },

  enableInputs: function() {
    const selectBlock = document.querySelectorAll('[name = views-select]')
    selectBlock.forEach((select) => select.disabled = false)

    const textInputs = document.querySelectorAll('[type = text')
    textInputs.forEach((input) => input.disabled = false)

    plusBtn.disabled = false
  },


  init: function () {
    this.addTitle()

    this.showCMS()

    startBtn.addEventListener('click', this.start)
    plusBtn.addEventListener('click', this.addScreenblock)
    resetBtn.addEventListener ('click', AppData.reset)

    rollbackRange.addEventListener('input', AppData.getRollback)
  },

  reset: function() {
    AppData.resetScreens()
    startBtn.style.display = "flex"
    resetBtn.style.display = "none"
    AppData.enableInputs()
    AppData.resetCMS()
  },

  resetScreens: function() {
    let i = document.querySelectorAll(".screen").length
    
    
    while (i > 1) {
      let divScreen = document.querySelector('.screen').parentNode
      divScreen.removeChild(document.querySelector('.element > .screen'))
      this.screens.pop()
      i--
    }
    
    otherItemsPercent.forEach((item) => item.querySelector('input[type=checkbox]').checked = false)
    otherItemsNumber.forEach((item) => item.querySelector('input[type=checkbox]').checked = false)

    total.value = 0
    totalCount.value = 0
    totalCountOther.value = 0 
    fullTotalCount.value = 0
    totalCountRollback.value = 0

    this.screenPrice = 0
    this.totalScreens = 0
    this.ServicePricesPercent = 0
    this.ServicePricesNumber = 0
    this.fullPrice = 0
    this.servicePercentPrice = 0

    this.servicesPercent =  {}
    this.servicesNumber =  {}


    screens[0].count = 0
    screens[0].price = 0

    document.querySelector('.screen > .main-controls__input > input').value = '';
    console.dir(document.querySelector('.screen > .main-controls__select > select')[0])
    document.querySelector('.screen > .main-controls__select > select')[0].selected = true


    this.screens = []

    console.log(AppData.screens);
    
    
    
  },

  checkInputs: function() {
    let i = 0
    while (i < this.screens.length) {
      if (this.screens[i].count === 0 || this.screens[i].name === "Тип экранов") {
        alert("введите тип и количество экранов")
        this.screens = []
        this.screenPrice = 0
        this.totalScreens
        this.ServicePricesPercent = 0
        this.ServicePricesNumber = 0
        this.fullPrice = 0
        this.servicePercentPrice = 0
        this.totalScreens = 0
      } else if ((this.screens[i].count != 0 && this.screens[i].name != "Тип экранов" && i === this.screens.length - 1)) {
        i = 0
        AppData.disableInputs()
        startBtn.style.display = "none"
        resetBtn.style.display = "flex"
        resetBtn.disable = false;
        break
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
    console.log(AppData.screens);
    
    

    AppData.enableInputs()
    document.querySelectorAll('.screen > .main-controls__input > input')[screens.length].value = ''
  },

  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]")
      const label = item.querySelector("label")
      const input = item.querySelector("input[type=text]")

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]")
      const label = item.querySelector("label")
      const input = item.querySelector("input[type=text]")

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value
      }
    })
    
  },

  showResult: function () {
    total.value = this.screenPrice 
    totalCount.value = this.totalScreens
    totalCountOther.value = this.ServicePricesPercent + this.ServicePricesNumber
    fullTotalCount.value = this.fullPrice
    totalCountRollback.value = this.servicePercentPrice    
    
  },

  addPrices: function() {
    this.screenPrice += this.screens.reduce((sum, current) => {
      return sum + current.price;
    }, 0);

    this.totalScreens += this.screens.reduce((sum, current) => {
      return sum + current.count;
    }, 0);

    for (let key in this.servicesNumber) {
      this.ServicePricesNumber += this.servicesNumber[key]
    }
    
    for (let key in this.servicesPercent) {
      this.ServicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }

    
    this.fullPrice = this.screenPrice + this.ServicePricesPercent + this.ServicePricesNumber

    
    
    
    optionsCMS = document.querySelectorAll('[name=views-select]')[1];

    if (optionsCMS.selectedIndex === 2) {
      let percent1 = +(document.querySelector('#cms-other-input').value);
      this.fullPrice = this.fullPrice + (this.fullPrice * (percent1 / 100))
      
    } else if (optionsCMS.selectedIndex === 1) {
      let percent2 = +(optionsCMS.querySelectorAll('option')[1].value);
      this.fullPrice = this.fullPrice + (this.fullPrice * (percent2 / 100))
    } else {
      console.log('pass');
    }

    this.servicePercentPrice =  this.fullPrice - (this.fullPrice * (this.rollback  / 100)); 

  },

  getRollback: function(event) {
    span.textContent = event.target.value + " %"
    AppData.rollback = +event.target.value 
    if (fullTotalCount.value != 0) {
      totalCountRollback.value = AppData.fullPrice - (AppData.fullPrice * (AppData.rollback  / 100))
    }
  },

  addScreens: function() {
    screens = document.querySelectorAll(".screen")

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select")
      const input = screen.querySelector("input")
      const selectName = select.options[select.selectedIndex].textContent
      
      
      this.screens.push({
        id: index, 
        name: selectName, 
        price: +select.value * +input.value,
        count: +input.value
      });
    })
  },

  start: function() {


    AppData.addScreens();
    AppData.addServices();
    AppData.addPrices();
    AppData.checkInputs();
    
    console.log(this);
    
    AppData.showResult()
  }, 

  

  // isNumber: function(num) {
  //   return !isNaN(parseFloat(num)) && isFinite(num)
  // },
  
  
  getServicePercentPrices: function() {
   this.servicePercentPrice =  this.fullPrice - (this.fullPrice * (this.rollback / 100)); 
  },


  // logger: function() {
  //   console.log(this.fullPrice);
  //   console.log(this.servicePercentPrice);
  //   console.log(this.services);
  //   console.log(this.screens);
  //   console.log(this.screenPrice);
  // },
}


AppData.init();








 








