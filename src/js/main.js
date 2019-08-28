"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

<<<<<<< HEAD
// place your code below

const number = document.querySelector('.hydro__box__number--js');
const addGlass = document.querySelector('.button__cont--add');
const removeGlass = document.querySelector('.button__cont--remove--js');
const removeAll = document.querySelector('.button__cont--remove--all--js')
const summary = document.querySelector('.result__info--js');
const key = new Date().toISOString().slice(0, 10);

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
}

console.log(number, addGlass, removeGlass, removeAll);

addGlass.addEventListener('click', () => {

  if (number.innerHTML <= 0) {
    number.innerHTML++
    localStorage.setItem(key, number.innerHTML);
    summary.innerHTML = (`${key} You drank ${localStorage.getItem(key, number.innerHTML)} glasses of water today`);
  } else if (number.innerHTML >= 1) {
    number.innerHTML++
    localStorage.setItem(key, number.innerHTML);
    summary.innerHTML = (`You drank ${key} ${localStorage.getItem(key, number.innerHTML)} glasses of water today`);
  }
});


removeGlass.addEventListener('click', () => {
  if (number.innerHTML > 2) {
    number.innerHTML--
    localStorage.setItem(key, number.innerHTML);
    summary.innerHTML = (`${key} You drank ${localStorage.getItem(key, number.innerHTML)} glasses of water today`);
  } else if (number.innerHTML <= 2 && number.innerHTML > 0) {
    number.innerHTML--
    localStorage.setItem(key, number.innerHTML);
    summary.innerHTML = (`${key} You drank ${localStorage.getItem(key, number.innerHTML)} glasses of water today`);
    console.log("else if")
  }
});

removeAll.addEventListener('click', () => {
  number.innerHTML = '0';
  localStorage.setItem(key, 0);
  summary.innerHTML = 'You drank 0 glasses of water today! Go now and drink some!';
});
=======
// place your code below
>>>>>>> e2e5c1993206879e09a1fce01971dfd58746dfb3
