const books = document.querySelectorAll(".book")
const book2 = books[0].querySelectorAll("li")
const book5 = books[5].querySelectorAll("li")

const chapter8 = document.createElement("li")

chapter8.innerHTML = "Глава 8: За пределами ES6"
books[2].querySelector("ul").append(chapter8)
const book6 = books[2].querySelectorAll("li")
book6[8].after(book6[10])

//порядок книг
books[0].before(books[1])
books[2].before(books[4])
books[2].before(books[3])
books[2].before(books[5])

//порядок глав книга 2
book2[7].before(book2[5])
book2[7].before(book2[8])
book2[5].before(book2[8])
book2[5].before(book2[4])

//порядок глав книга 5
book5[1].after(book5[9])
book5[7].after(book5[5])
book5[4].after(book5[2])



books[4].querySelector("a").textContent = "Книга 3. this и Прототипы Объектов"

document.body.style.background = "url(./image/you-dont-know-js.jpg)"

document.querySelector(".adv").remove()







