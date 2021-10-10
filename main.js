// variable names
const div = document.getElementById("div")

const input = document.getElementById("cityName")
const btn = document.getElementById("btn")

const currentDate = document.getElementById("date")

const wicon = document.getElementById("wicon")

const country = document.getElementById("country")
const name = document.getElementById("name")
const main = document.getElementById("main")
const degree = document.getElementById("degree")
const weatherIcon = document.getElementById("weather-icon")



//weather app key

const apiKey =   "6aed2792cce896f83d9a9b7fcd1b9866";


//fetching weather api file

btn.addEventListener("click", function (){
  const word= input.value;
  
   div.className="container";
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apiKey}&units=metric`;
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
     appendData(data)
   // console.log(data)
    })
    .catch(function(err) {
       console.log("error");
    });

})

//getting dates

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
  
  
 //appending api file into html 
function appendData(data) {

main.innerHTML = `${data.weather[0].description}`;

currentDate.innerHTML =`${n.toUpperCase()} ${d.getDate()}, ${d.getFullYear()}.`;

name.innerHTML = `${data.name}`;

country.innerHTML = `${data.sys.country}`;

let icon = `${data.weather[0].icon}`;

wicon.src=` http://openweathermap.org/img/w/${icon}.png `;

degree.innerHTML =`${Math.floor(data.main.temp)}<sup>°C</sup></div>`
input.value=" ";
}


