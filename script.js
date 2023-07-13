"use strict";

//DOM = wirtualny obiekt w pamieci przegladarki wygenerowany na podstawie mojego kodu :struktura elementow, a HTML drzewo widoku na podstawie domu DOM to interfejs, daje metody, funkcje- narzedzia do edycji.
//def :Obiektowy model dokumentu – sposób reprezentacji złożonych dokumentów XML i HTML w postaci modelu obiektowego. Model ten jest niezależny od platformy i języka programowania.

//nie edytujemy html, tylko DOM - obiektowy model dokumentu
// document.querySelector("h1").textContent = "gsgsadg";

const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const close = document.querySelector(".x");
const dateLabel = document.querySelector(".date");
const form = document.querySelector("#task-form");
const lis = document.querySelectorAll("ul li");
const input = document.querySelector("#task-title");

//-----------------------date
const now = new Date();
console.log(now);
const day = `${now.getDate()}`.padStart(2, "0");
console.log(day);
const month = `${now.getMonth() + 1}`.padStart(2, "0");
console.log(month);
const year = `${now.getFullYear()}`;
console.log(year);

dateLabel.textContent = `${day}/${month}/${year}`;

//----------------functions
//1.
const addItem = function (e) {
  // const ul = document.querySelector("ul");
  const input = document.querySelector("#task-title");
  const text = input.value;
  //id

  const id = Date.now();
  console.log(id);

  const html = `<li 
    data-id="${id}"
    class=""
   >
    ${text}
    <button class="x">x</button>
  </li>`;

  ul.insertAdjacentHTML("beforeend", html);
  //dodaj event
  document
    .querySelector(`[data-id="${id}"]`)
    .addEventListener("click", toggleDone);

  document
    .querySelector(`[data-id="${id}"]`)
    .querySelector(".x")
    .addEventListener("click", removeItem);
  //clean input
  input.value = "";
};

//2.
const removeItem = function (e) {
  const button = e.target;
  const li = button.parentElement;
  li.remove();
};

//3.
const toggleDone = function (e) {
  const li = e.target;
  li.classList.toggle("done");
};

//4.
const toggleButtonDisable = function (e) {
  const input = e.target;
  const btn = document.querySelector(".btn");
  btn.disabled = !input.value;
};
//------------------------------------------------
//eventy
btn.addEventListener("click", addItem);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addItem();
});

lis.forEach((li) => {
  li.addEventListener("click", toggleDone);
  li.querySelector("button").addEventListener("click", removeItem);
});

input.addEventListener("keyup", toggleButtonDisable);
