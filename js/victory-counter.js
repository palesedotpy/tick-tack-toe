var player1NameLabel = document.getElementById("player1-name");
var player2NameLabel = document.getElementById("player2-name");

var player1CounterLabel = document.getElementById("player1-counter");
var player2CounterLabel = document.getElementById("player2-counter");


function updateDisplayedNames() {
    player1NameLabel.innerHTML = player1Name;
    player2NameLabel.innerHTML = player2Name;
}

function updateDisplayedCounters() {
    player1CounterLabel.innerHTML = player1WinCounter;
    player2CounterLabel.innerHTML = player2WinCounter;
}

