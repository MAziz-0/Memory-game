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
              title: "YATTAA!",
              text: "You have released the Genjustu... your memories have been restored... " + "Optional: Try playing again, but this time try matching the cards without memorising where they are",
              imageUrl: "./assets/images/victory.gif",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
              confirmButtonText: "Play Again?",

              footer: '<a href="https://maziz-0.github.io/My-Portfolio/">Learn more about the developer</a>',
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          }

          playing = false;
        } else {
          //__________________________________If the brands did not match - empty the cardSelect & flip the cards back over

          flipCards[0] = cardSelect[0];
          flipCards[1] = cardSelect[1];

          cardSelect[0] = null;
          cardSelect[1] = null;
          console.log(flipCards[0]);
          console.log(flipCards[1]);
          setTimeout(function () {
            //__________________________________Flip back the selected cards that did not match

            $("*[id*=" + flipCards[0] + "]").each(function () {
              $(this).closest(".flip").toggleClass("flip");
            });
            $("*[id*=" + flipCards[1] + "]").each(function () {
              $(this).closest(".flip").toggleClass("flip");
            });

            playing = false;
          }, 800);
        }
      }
    } else {
      //__________________________________ Alerts using SweetAlerts Swal() //
      Swal.fire({
        buttons: ["Try Again"],
        title: "You are out of time... Your mind has been consumed by Itachi...",
        background: "Black",
        imageUrl: "https://user-images.githubusercontent.com/41737293/115559780-e92bc800-a2ab-11eb-96ab-b9345555562f.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        confirmButtonText: "Try Again",

        footer: '<a href="https://maziz-0.github.io/My-Portfolio/">Learn more about the developer</a>',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
  }); //__________________________________ Flip Container Click End //

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var x = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[x];
      array[x] = temp;
    }
    return array;
  }

  function countdown() {
    startTimer = true;

    var timeStart = +new Date();
    var timer = setInterval(function () {
      var timeNow = +new Date();
      var startDiff = (timeNow - timeStart) / 1000;

      //__________________________________Calculates time difference if game isn't in focus

      if (timeGiven > 0 && !victoryRoyale) {
        //__________________________________If there is still time left and game isn't won, deduct time

        timeGiven = 30;
        timeGiven = Math.floor(timeGiven - startDiff);
        $(".timer").text(timeGiven);
      } else if (victoryRoyale) {
        //__________________________________Stop timer when game is won

        clearInterval(timer);
      } else {
        //__________________________________Stop timer when time is run out

        timeOut = true;
        Swal.fire({
          buttons: ["Try Again"],
          title: "You are out of time... Your mind has been consumed by Itachi...",
          background: "Black",
          imageUrl: "https://user-images.githubusercontent.com/41737293/115559780-e92bc800-a2ab-11eb-96ab-b9345555562f.gif",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          willClose: () => {
            window.location.reload();
          },
          confirmButtonText: "Try Again",

          footer: '<a href="https://maziz-0.github.io/My-Portfolio/">Learn more about the developer</a>',
        });
        clearInterval(timer);
      }
    }, 250);
  }
});
