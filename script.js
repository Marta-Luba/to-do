"use strict";

//DOM = wirtualny obiekt w pamieci przegladarki wygenerowany na podstawie mojego kodu :struktura elementow, a HTML drzewo widoku na podstawie domu DOM to interfejs, daje metody, funkcje- narzedzia do edycji.
//def :Obiektowy model dokumentu – sposób reprezentacji złożonych dokumentów XML i HTML w postaci modelu obiektowego. Model ten jest niezależny od platformy i języka programowania.

//nie edytujemy html, tylko DOM - obiektowy model dokumentu
// document.querySelector("h1").textContent = "gsgsadg";

const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");
const close = document.querySelector(".x");
// let id;
// const newTask = document.createElement("li");
// newTask.innerText = input.value;
// list.appendChild(newTask);

const addItem = function () {
  const ul = document.querySelector("ul");
  const input = document.querySelector("#task-title");
  const text = input.value;

  //id
  const id = Date.now();

  //li
  // const newItem = document.createElement("li");
  // newItem.innerText = text;
  // newItem.dataset.id = id;
  // newItem.onclick = () => toggleDone();

  // //button
  // const button = document.createElement("button");
  // button.className = "x";
  // button.innerText = "x";
  // button.onclick = () => removeItem(id);
  // newItem.appendChild(button);

  // //li . ul
  // ul.appendChild(newItem);

  const html = `<li 
    data-id="${id}"
    onclick="toggleDone()">
    ${text}
    <button onclick="removeItem(${id})" class="x">x</button>
  </li>`;

  ul.insertAdjacentHTML("beforeend", html);
  // ul.classList.remove("hidden");

  //clean input
  input.value = "";
  // const html = `<li data-id="${id}">${text}<button class="x">x</button></li>`;
  // ul.insertAdjacentHTML("beforeend", html);
};

const removeItem = function (id) {
  const button = event.target;
  const li = button.parentElement;
  // const lis = document.querySelectorAll("ul li"); //data-id-unique // tablica
  // const li = [...lis].find((el) => el.dataset.id == id);
  // console.log(li); //dlatego [..ul] zmienione na tablice
  li.remove();
};

const toggleDone = function () {
  const li = event.target;
  li.classList.toggle("done");
};

//------------------------------------------------
btn.addEventListener("click", addItem);
// close.addEventListener("click", removeItem);

const dateLabel = document.querySelector(".date");

const now = new Date();
console.log(now);
const day = `${now.getDate()}`.padStart(2, "0");
console.log(day);
const month = `${now.getMonth() + 1}`.padStart(2, "0");
console.log(month);
const year = `${now.getFullYear()}`;
console.log(year);

dateLabel.textContent = `${day}/${month}/${year}`;
