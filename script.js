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

// create an array for the days and use those 

// create function to add hidden class to element
function removeHidden(){
monday.classList.remove('hidden')
tuesday.classList.remove('hidden')
wednesday.classList.remove('hidden')
thursday.classList.remove('hidden')
friday.classList.remove('hidden')
}


let daily  = function hideWeek() {
    removeHidden();
    document.getElementById('tuesday',).classList.toggle('hidden');
    document.getElementById('wednesday',).classList.add('hidden');
    document.getElementById('thursday',).classList.add('hidden');
    document.getElementById('friday',).classList.add('hidden');
    
}

removeHidden();
dailyWeather.addEventListener('click', daily);



// function hideDailyNav(){
//     dailyWeather.classList.add('hidden')
// };
// hideDailyNav();