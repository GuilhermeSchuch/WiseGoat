let url = "https://api.adviceslip.com/advice";
let xhttp = new XMLHttpRequest();

xhttp.open("GET", url, false);
xhttp.send();

let advice = JSON.parse(xhttp.responseText).slip.advice;
document.querySelector(".advice").innerHTML = '"'+ advice + '"';
