/*jslint browser: true*/
/*global $, jQuery, alert, console */
var main = function () {
    "use strict";
    $.getJSON("cards/aceOfSpades.json", function (card) {
        var cardParagraph = $("<p>");
        cardParagraph.text(card.rank + " of " + card.suit);
        $("main").append(cardParagraph);
        // console.log(card);
    });
    $.getJSON("cards/hand.json", function (hand) {
        var list = $("<ul>");
        hand.forEach(function (card) {
            var cardTag = $("<li>");
            cardTag.text(card.rank + " of " + card.suit);
            list.append(cardTag);
        });
        $("main").append(list);
    });
};
$(document).ready(main);