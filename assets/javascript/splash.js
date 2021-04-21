
/* ____________________________Presents tiu Splashscreen*/

let splash = document.querySelector(".splash");
let title = document.querySelector(".title-container");
let timer = document.querySelector(".timer-container");
let game = document.querySelector(".game");
let body = document.querySelector(".game-body");
let countdown = document.querySelector(".timer");
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