var player1NameLabel = document.getElementById("player1-name");
var player2NameLabel = document.getElementById("player2-name");

var player1CounterLabel = document.getElementById("player1-counter");
var player2CounterLabel = document.getElementById("player2-counter");


export function updateDisplayedNames(player1Name, player2Name) {
    player1NameLabel.innerHTML = player1Name;
    player2NameLabel.innerHTML = player2Name;
}

export function updateDisplayedCounters(player1WinCounter, player2WinCounter) {
    player1CounterLabel.innerHTML = player1WinCounter;
    player2CounterLabel.innerHTML = player2WinCounter;
}

