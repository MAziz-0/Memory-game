
/* __________________________________________________ Responsiveness on Safari/Chrome */

$(document).ready(function() {
    if (navigator.userAgent.search("Safari") >= 0 &&
    navigator.userAgent.search("Chrome") <0) {
        $(".game").height($(window).height() * 0.9);
    }
}

/* __________________________________________________ Variable assignment */

var cards ['Gamakichi','Konoha','Ramen','Seal','Sharingan','Smile','Uchiha','Sasuke'];
var cardPair = cards.concat(cards); 
var cardSelect = [];
var flipCards = [];
var pairCount = 0;
var startGame = false;
var playing = false;
var timeGiven = 30;
var timeOut = false;
var victoryRoyale = false;

