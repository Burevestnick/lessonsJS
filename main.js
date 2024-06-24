 'use strict'
 


 const NumGame = function() {

  let current
  let win 
  let ask

  let tries = 10

  function randomInt(min, max) {
    let int = min + Math.random() * (max + 1 - min);
    return win = Math.floor(int);
  }

  function valueNull() {
    if (current == null) {
      alert("Игра окончена");
    } else {
      valueMatch();
    }
  }

  function isNumber() {
    return !isNaN(parseFloat(current)) && isFinite(current)
  }

  function valueSet () {
    current = prompt("Угадайте число от 1 до 100")
    valueNull()
  } 

  function valueMore() {
    tries--
    current = prompt("Загаданное число больше! У вас осталось, " + tries + " Попыток")
    valueNull()
  }

  function valueless() {
    tries--
    current = prompt("Загаданное число меньше! У вас осталось, " + tries + " Попыток")
    valueNull()
  }

  function valueError() {
    current = prompt("Введите число!")
    valueNull()
  }

  function valueWin() {
    alert("Поздравляю, Вы угадали!!!");
    ask = confirm("Хотите попробовать снова?")
    if (ask == true) {
      NumGame();
    } else {
      alert("Игра окончена")
    }
  }

  function valueLose() {
    ask = confirm("Попытки закончились, хотите сыграть еще?")
    if (ask == true) {
      NumGame();
    } else {
      alert("Игра окончена")
    }
  }

  function valueMatch() {
    if (isNumber() == false || current == '') {
      valueError();
    } else if (current < win && tries > 1) {
      valueMore();
    } else if (current > win && tries > 1) {
      valueless();
    } else if (current == win) {
      valueWin();
    } else if (tries == 1) {
      valueLose();
    }
  }
  randomInt(1, 100);
  valueSet(); 
 }

NumGame();

// Кол-во попыток пользователя должно быть ограничено: 10
// — если пользовательское число больше, то бот выводит "Загаданное число меньше, осталось попыток ..." и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше, осталось попыток ..." и предлагает ввести новый вариант;
// — если пользователь вводит правильное число, то бот выводит "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?", при нажатии ОК игра перезапускается (снова 10 попыток и новое загаданное число)
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра выводит прощальное сообщение и завершается.
// — если закончились попытки то программа сообщает: "Попытки закончились, хотите сыграть еще?"

