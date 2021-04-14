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

    //__________________________________Shuffle cards //

    shuffleArray(cardPair); 

    //__________________________________Sets id in DOM for cards, access styles via css //

    $(".back").each(function (i, _element) {
        $(this).attr("id", cardPair[i]); 
    });

    $(".flip-container").click(function () {
        if (!timeOut) {
            if (!startGame && !playing) {
                //__________________________________First click on any card, shows all cards to the user and flips back //

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
                //__________________________________If a card has been chosen and then clicked again, flip card back to original position //
                $(this).toggleClass("flip");

                playing = false;
            } else if ($(this).hasClass("flip")) {
                console.log(cardSelect);
                return; 
                //__________________________________If the card clicked is already flipped, Return //
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
                //__________________________________If a second card has not been flipped, store the selected card's value in cardSelect[1] and flip it //
                $(this).toggleClass("flip");

                if (cardSelect[0] == cardSelect[1]) {
                    cardSelect[0] = null;
                    cardSelect[1] = null;
                    console.log(cardSelect[0]);
                    console.log(cardSelect[1]);
                    pairCount++;

                    if (pairCount == cards.length) {
                        victoryRoyale = true;
                    
                    Swal.fire({
                    buttons: ["Restart Game" ],
                    title: "YATTAA!",
                    text: 'You have released the Genjustu... your memories have been restored...',
                    imageUrl: '../assets/images/victory.gif',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    showClass: {
                     popup: 'animate__animated animate__fadeInDown'
              },
                    hideClass: {
                     popup: 'animate__animated animate__fadeOutUp'
                }
                
              });
