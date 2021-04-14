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

    //_________________________Shuffle cards //

    shuffleArray(cardPair); 

    //________________Sets id in DOM for cards, access styles via css //

    $(".back").each(function (i, _element) {
        $(this).attr("id", cardPair[i]); 
    });

    $(".flip-container").click(function () {
        if (!timeOut) {
            if (!startGame && !playing) {
                //____________________________First click on any card, shows all cards to the user and flips back //

                playing = true;

                $(".flip-container").each(function () {
                    $(this).toggleClass("flip");
                });

                setTimeout(function () {
                    $(".flip-container").each(function () {
                        $(this).toggleClass("flip");
                    });

                    startGame = true;
                    playing = false;
                }, 2000);
            } else if ($(this).find(".back").attr("id") == cardSelect[0] && cardSelect[1] == null && $(this).hasClass("flip") && !playing) {
                playing = true;
                console.log(cardSelect);
                    console.log(cardSelect[1]);
                cardSelect[0] = null; 
                //____________________________If a card has been chosen and then clicked again, flip card back to original position //
                $(this).toggleClass("flip");

                playing = false;
            } else if ($(this).hasClass("flip")) {
                console.log(cardSelect);
                return; 
                //__________________________________If the card clicked is already flipped, Return
            } else if (cardSelect[0] == null && cardSelect[1] == null && !$(this).hasClass("flip") && !playing) {
                if (!startTimer) {
                    countdown();
                }
                cardSelect[0] = $(this).find(".back").attr("id");
                playing = true;

                $(this).toggleClass("flip");

                playing = false;
            } else if (cardSelect[0] != null && cardSelect[1] == null && !$(this).hasClass("flip") && !playing) {
                playing = true;

                cardSelect[1] = $(this).find(".back").attr("id"); 
                