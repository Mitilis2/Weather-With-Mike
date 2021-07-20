'use strict';
// bring in nav-item elements
const dailyWeather = document.querySelectorAll('.nav-item')[0];
const threeDayWeather = document.querySelectorAll('.nav-item')[1];
const fiveDayWeather = document.querySelectorAll('.nav-item')[2];

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');

const sandwich = document.getElementsByClassName('sandwich')[0];
const navbar = document.getElementsByClassName('navbar')[0];
// create an array for the days and use those

// create function to add hidden class to element
function removeHidden() {
  monday.classList.remove('hidden');
  tuesday.classList.remove('hidden');
  wednesday.classList.remove('hidden');
  thursday.classList.remove('hidden');
  friday.classList.remove('hidden');
}

let daily = function hideWeek() {
  removeHidden();
  document.getElementById('tuesday').classList.add('hidden');
  document.getElementById('wednesday').classList.add('hidden');
  document.getElementById('thursday').classList.add('hidden');
  document.getElementById('friday').classList.add('hidden');
};
let threeDay = function hideDays() {
  removeHidden();
  document.getElementById('thursday').classList.add('hidden');
  document.getElementById('friday').classList.add('hidden');
};

let fiveDay = function showAll() {
  removeHidden();
};
dailyWeather.addEventListener('click', daily);
threeDayWeather.addEventListener('click', threeDay);
fiveDayWeather.addEventListener('click', fiveDay);

let mitul = function () {
  navbar.classList.toggle('hidden');
};

sandwich.addEventListener('click', mitul);
