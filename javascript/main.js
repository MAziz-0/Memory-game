if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}

/* ____________________________Responsiveness on Safari/Chrome */
var $;

$(document).ready(function () {
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $(".game").height($(window).height() * 0.9);
    }

    /* ___________________________ Variable assignment */

    var cards = ["Gamakichi", "Konoha", "Ramen", "Seal", "Sharingan", "Smile", "Uchiha", "Sasuke"];
    var cardPair = cards.concat(cards);
    var cardSelect = [];
    var flipCards = [];
    var pairCount = 0;
    var startGame = false;
    var playing = false;
    var timeGiven = 30;
    var timeOut = false;
    var victoryRoyale = false;
    var startTimer = false;

    //_________________________Shuffle cards//

    shuffleArray(cardPair); 

    //________________Sets id in DOM for cards, access styles via css//

    $(".back").each(function (i, _element) {
        $(this).attr("id", cardPair[i]); 
    });

    $(".flip-container").click(function () {
        if (!timeOut) {
            if (!startGame && !playing) {
                