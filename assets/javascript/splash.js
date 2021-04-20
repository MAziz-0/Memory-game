
/* ____________________________Presents tiu Splashscreen*/

var splash = document.querySelector(".splash");
var title = document.querySelector(".title-container");
var timer = document.querySelector(".timer-container");
var game = document.querySelector(".game");
var body = document.querySelector(".game-body");
var countdown = document.querySelector(".timer");
/* ____________________________Removes hidden classes from main game after set amount of time */
document.addEventListener("DOMContentLoaded",(_e)=>{
    setTimeout(()=>{
      splash.classList.add("display-none");
      title.classList.remove("hidden");
      timer.classList.remove("hidden");
      game.classList.remove("hidden");
      body.classList.add("background");
      countdown.classList.remove("hidden");
    }, 15000);

});