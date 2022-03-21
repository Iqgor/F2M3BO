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