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

    //Temperatuur
    let data = fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + positielat + "&lon=" + positielong + "&units=metric&appid=8a490c6651725451fa03123bd0d7b472")

    .then(function(response){
    return response.json();
        
    })
    .then(function(realData){
    temp.innerText = realData.main.temp + " °C"
    console.log(realData)
    })
  });






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

//Gasgebruik Chart 

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
        scales: {
            y: {
                suggestedMin: 4,
                suggestedMax: 6,
                
            },
            x: {
                ticks: {
                    
                    font: {
                        size: 20,
                       
                    }
                }
            },
            y:{
                ticks: {
                    font: {
                        size: 20,
                    }
                }
             
            }
        },
        plugins: {
            legend: {
                display: false,
                
            },
           
        }
    }
});


//Watervebruik Chart

const ctx3 = document.getElementById('myChart3').getContext('2d');

const myChart3 = new Chart(ctx3, {
    
    type: 'line',
    data: {
        labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
        datasets: [{
            labels: "this wil be hidden",
            data: [100,98,93,110, 107, 102, 96],
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
        scales: {
            y: {
                suggestedMin: 4,
                suggestedMax: 6,
                
            },
            x: {
                ticks: {
                    
                    font: {
                        size: 20,
                       
                    }
                }
            },
            y:{
                ticks: {
                    font: {
                        size: 20,
                    }
                }
             
            }
        },
        plugins: {
            legend: {
                display: false,
                
            },
           
        }
    }
});
//Stroomverbuik Chart

const ctx4 = document.getElementById('myChart4').getContext('2d');

const myChart4 = new Chart(ctx4, {
    
    type: 'line',
    data: {
        labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
        datasets: [{
            labels: "this wil be hidden",
            data: [2240, 2241, 2256, 2259, 2267, 2269, 2274],
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
        scales: {
            y: {
                suggestedMin: 4,
                suggestedMax: 6,
                
            },
            x: {
                ticks: {
                    
                    font: {
                        size: 20,
                       
                    }
                }
            },
            y:{
                ticks: {
                    font: {
                        size: 20,
                    }
                }
             
            }
        },
        plugins: {
            legend: {
                display: false,
                
            },
           
        }
    }
});


function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";
 
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
.then(response => response.json())
.then(data => {

    //Getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    //------------------------------------------------------------

    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    //------------------------------------------------------------


/*
document.getElementById("day1Min").innerHTML = Math.round(data.list[0].main.temp_min - 273.15, -2);
document.getElementById("day2Min").innerHTML = Math.round(data.list[1].main.temp_min - 273.15, -2);
document.getElementById("day3Min").innerHTML = Math.round(data.list[2].main.temp_min - 273.15, -2);
document.getElementById("day4Min").innerHTML = Math.round(data.list[3].main.temp_min - 273.15, -2);
document.getElementById("day5Min").innerHTML = Math.round(data.list[4].main.temp_min - 273.15, -2);*/

/*document.getElementById("day1Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day2Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day3Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day4Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);
document.getElementById("day5Max").innerHTML = Math.round(data.list[0].main.temp_max - 273.15, -2);*/

/*document.getElementById("img1").src = "http://openweathermap.org/img/w/"+
data.list[0].weather[0].icon
+".png";
document.getElementById("img2").src = "http://openweathermap.org/img/w/"+
data.list[1].weather[0].icon
+".png";
document.getElementById("img3").src = "http://openweathermap.org/img/w/"+
data.list[2].weather[0].icon
+".png";
document.getElementById("img4").src = "http://openweathermap.org/img/w/"+
data.list[3].weather[0].icon
+".png";
document.getElementById("img5").src = "http://openweathermap.org/img/w/"+
data.list[4].weather[0].icon
+".png";*/

/*
document.getElementById("day1").innerHTML = weekday[CheckDay(0)];
document.getElementById("day2").innerHTML = weekday[CheckDay(1)];
document.getElementById("day3").innerHTML = weekday[CheckDay(2)];
document.getElementById("day4").innerHTML = weekday[CheckDay(3)];
document.getElementById("day5").innerHTML = weekday[CheckDay(4)];*/

/*weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";*/