
/* __________________________________________________ Responsiveness on Safari/Chrome */

$(document).ready(function() {
    if (navigator.userAgent.search("Safari") >= 0 &&
    navigator.userAgent.search("Chrome") <0) {
        $(".game").height($(window).height() * 0.9)
    }
}




/* __________________________________________________ Variable assignment */

var cards []