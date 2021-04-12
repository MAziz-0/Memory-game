const splash = document.querySelector(".splash");
const title = document.querySelector(".title-container");
const timer = document.querySelector(".timer-container");
const game = document.querySelector(".game");
const body = document.querySelector(".game-body")

document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
      splash.classList.add("display-none");
      title.classList.remove("hidden");
      timer.classList.remove("hidden");
      game.classList.remove("hidden");
      body.classList.add("background");
    }, 2000);

});