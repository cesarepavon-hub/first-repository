/* global document, setInterval */
"use strict";

var backs = [
    'image01.jpeg',
    'image02.jpeg',
    'image03.jpeg',
    'image04.jpeg'
];

function changeBackground() {
    var randomBack = Math.floor(Math.random() * backs.length),
        chosenBack = backs[randomBack];
    
    document.body.style.backgroundImage = 'url(' + chosenBack + ')';
}

setInterval(changeBackground, 10000);
changeBackground(); //-to change it right away
