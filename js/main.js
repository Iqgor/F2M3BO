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

const rangeValue1 = document.getElementById("js--rangeValue1");
const rangeValue2 = document.getElementById("js--rangeValue2");
const rangeValue3 = document.getElementById("js--rangeValue3");
const slider1 = document. getElementById("js--slider1");
const slider2 = document. getElementById("js--slider2");
const slider3 = document. getElementById("js--slider3");

console.log(slider1)
console.log(rangeValue1)

slider1.value = 0
slider2.value = 0
slider3.value = 0

slider1.oninput = function(){
    rangeValue1.innerText = slider1.value + "%"
}
slider2.oninput = function(){
    rangeValue2.innerText = slider2.value + "%"
}
slider3.oninput = function(){
    rangeValue3.innerText = slider3.value + "%"
}


const temp = document.getElementById("temp")


let data = fetch("https://api.openweathermap.org/data/2.5/weather?q=netherlands&units=metric&appid=8a490c6651725451fa03123bd0d7b472")

.then(function(response){
    return response.json();

})
.then(function(realData){
    temp.innerText = realData.main.temp + " °C"
})

