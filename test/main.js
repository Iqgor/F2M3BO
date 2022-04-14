//pie kosten-maand

var ctx1 = document.getElementById('myChart1');
var stars = [109, 36, 34];
var frameworks = ['Gas', 'Water', 'Elektriciteit']; 
var myChart1 = new Chart(ctx1, { 
    type: 'doughnut', 
    data: {    
        labels: frameworks,     
        datasets: [{ 
            data: stars,
            backgroundColor: [  
                "rgba(192, 192, 192, 1)", 
                "rgba(54, 162, 235, 1)", 
                "rgba(255, 206, 86, 1)", 
            ],
            borderColor: "",
            borderWidth: 1 
            
        }]      
    }, 
})

// Verbruik Apparaten





var ctx2 = document.getElementById("myChart2");
var values = [10, 8, 12, 18, 30, 10, 8]
var Apparaten = ['Wasmachine','Droger', 'Koelkast','Lokale Pc', ' Tv','Vaatwasser', 'Vriezer']

var myChart2 = new Chart(ctx2,{
    type:'bar',
    data:{
        labels:Apparaten,
        datasets:[{
            barPercentage: 0.7,
            minBarLength: 2,
            data: values,
            backgroundColor:[
                "rgba(192, 192, 192, 1)", 
                "rgba(54, 162, 235, 1)", 
                "rgba(255, 206, 86, 1)", 
                "rgb(228, 233, 190,1)",
                "rgb(232, 192, 125,1)",
                "rgb(241, 221, 191,1)",
                "rgb(120, 147, 138,1)",
            ]   
        }]
    },
    options:{
        plugins: {
            legend: {
                display: false,
                
            },
           
        },
        scales: {
            y:{
                suggestedMax: 35
            }
        }
    }
})

//klok en datum

function realtimeClock() {
    
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = ( hours > 12 ) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = 
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}

const date = document.getElementById("date")
var today = new Date().toLocaleDateString('nl-NL', {  
    day : 'numeric',
    month : 'long',
    year : 'numeric'
});

date.innerText = today

//locatie//

const locatie = document.getElementById('locatie')

console.log(locatie)

navigator.geolocation.getCurrentPosition((position) => {
    positielat = position.coords.latitude.toFixed(0)
    
    positielong = position.coords.longitude.toFixed(0)
    const temp = document.getElementById("temp")


    let data = fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + positielat + "&lon=" + positielong + "&units=metric&appid=8a490c6651725451fa03123bd0d7b472")

    .then(function(response){
    return response.json();
        
    })
    .then(function(realData){
    temp.innerText = realData.main.temp + " °C"
    console.log(realData)
    })
  });


//Temperatuur



//weerbericht vandaag//
let weather = {
    
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        + "&units=metric&appid="
        + "8a490c6651725451fa03123bd0d7b472"
        )    
         .then((response) => response.json())
         .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
     const { name } = data;
     const { icon , description } = data.weather[0];
     const { temp, humidity } = data.main;
     const { speed } = data.wind;
     console.log(name,icon,description,temp,humidity,speed)
     document.querySelector(".city").innerHTML = "Weer in " + name;
     document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"
     document.querySelector(".temp").innerText = temp + "°C";
     document.querySelector(".humidity").innerText = "Vochtigheid: " + humidity + "%";
     document.querySelector(".wind").innerText = "Wind snelheid: " + speed + "km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
 };
 
 document
   .querySelector(".search button")
   .addEventListener("click", function () {
     weather.search();
 });
 
 document.querySelector(".search-bar").addEventListener("keyup", function(event) {
     if (event.key == "Enter") {
         weather.search();
     } 
 })

//gasgebruik

 const ctx = document.getElementById('myChart').getContext('2d');
 //Chart.defaults.global.defaultFontFamily='"Lato",sans-serif';
 
 const myChart = new Chart(ctx, {
     
     type: 'line',
     data: {
         labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
         datasets: [{
             labels: "this wil be hidden",
             data: [4.4,3.8,5.0,3.7, 4.3, 4.8, 4.1],
             backgroundColor: [
                 'black'
                 
             ],
             borderColor: [
                 'black'
                 
             ],
            
             borderWidth: 1
         }]
     },
     options: {
         layout: {
            padding: 1,     
         },
         aspectRatio: 1,
         scales: {
             y: {
                suggestedMax: 5.2
            }     
         },
         plugins: {
             legend: {
                 display: false,
                 
             },
            
         }
     }
 });
 
