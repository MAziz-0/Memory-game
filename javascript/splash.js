
/* ____________________________Presents Splashscreen*/

const splash = document.querySelector(".splash");
const title = document.querySelector(".title-container");
const timer = document.querySelector(".timer-container");
const game = document.querySelector(".game");
const body = document.querySelector(".game-body");
/* ____________________________Removes hidden classes from main game after set amount of time */
document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
      splash.classList.add("display-none");
      title.classList.remove("hidden");
      timer.classList.remove("hidden");
      game.classList.remove("hidden");
      body.classList.add("background");
    }, 8000);

});