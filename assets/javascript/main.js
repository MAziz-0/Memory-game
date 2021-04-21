if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

/* ____________________________Responsiveness on Safari/Chrome */
var $;

$(document).ready(function() {
  if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    $(".game").height($(window).height() * 0.9);
  }

  /* ___________________________ Variable assignment */

  let cards = ["Gamakichi", "Konoha", "Ramen", "Seal", "Sharingan", "Smile", "Uchiha", "Sasuke"];
  let cardPair = cards.concat(cards);
  let cardSelect = [];
  let flipCards = [];
  let pairCount = 0;
  let startGame = false;
  let playing = false;
  let timeGiven = 30;
  let timeOut = false;
  let victoryRoyale = false;
  let startTimer = false;

  // Shuffle cards //

  shuffleArray(cardPair);

  // Sets id in DOM for cards, access styles via css //

  $(".back").each(function (i, _element) {
    $(this).attr("id", cardPair[i]);
  });

  $(".flip-container").click(function () {
    if (!timeOut) {
      if (!startGame && !playing) {
        // First click on any card, shows all cards to the user and flips back //

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
        cardSelect[0] = null;
        // If a card has been chosen and then clicked again, flip card back to original position //
        $(this).toggleClass("flip");

        playing = false;
      } else if ($(this).hasClass("flip")) {
        return;
        // If the card clicked is already flipped, Return //
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

        // If a second card has not been flipped, store the selected card's value in cardSelect[1] and flip it //
        $(this).toggleClass("flip");

        if (cardSelect[0] == cardSelect[1]) {
          cardSelect[0] = null;
          cardSelect[1] = null;
          pairCount++;

          if (pairCount == cards.length) {
            victoryRoyale = true;
            // SweetAlert2 Victory Alert //
            Swal.fire({
              title: "YATTAA!",
              text: "You have released the Genjustu... your memories have been restored... " + "Optional: Try playing again, but this time try matching the cards without memorising where they are",
              imageUrl: "https://user-images.githubusercontent.com/41737293/115560372-6e16e180-a2ac-11eb-989b-a643be8402f6.gif",
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
          // If the brands did not match - empty the cardSelect & flip the cards back over

          flipCards[0] = cardSelect[0];
          flipCards[1] = cardSelect[1];

          cardSelect[0] = null;
          cardSelect[1] = null;
          setTimeout(function () {
            // Flip back the selected cards that did not match

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
      // Alerts using SweetAlerts Swal() //
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
  });
  // Flip Container Click End //

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let x = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[x];
      array[x] = temp;
    }
    return array;
  }

  function countdown() {
    startTimer = true;

    let timeStart = +new Date();
    let timer = setInterval(function () {
      let timeNow = +new Date();
      let startDiff = (timeNow - timeStart) / 1000;

      // Calculates time difference if game isn't in focus

      if (timeGiven > 0 && !victoryRoyale) {
        // If there is still time left and game isn't won, deduct time

        timeGiven = 30;
        timeGiven = Math.floor(timeGiven - startDiff);
        $(".timer").text(timeGiven);
      } else if (victoryRoyale) {
        // Stop timer when game is won

        clearInterval(timer);
      } else {
        // Stop timer when time is run out

        timeOut = true;

        // SweetAlert2 Loss alert //
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
