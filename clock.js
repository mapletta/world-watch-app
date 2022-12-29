//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");

//Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = "1:48:15 <small> AM </small>";
