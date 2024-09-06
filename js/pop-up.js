
import { player1, player2, bot, reset } from "./script.js";
import { updateDisplayedNames } from "./victory-counter.js";

var popUp = document.getElementById("pop-up");
var container = document.getElementById("container");

var player1InputField = document.getElementById("player1Name");
var player2InputField = document.getElementById("player2Name");

var warningBanner = document.getElementById("warning-banner");

var settingsAreOpen = false;
/* Aggiungere animazione all'apertura delle impostazioni */

function hideSettings() {
    let gameContainer = document.getElementById("game-container");
    const shadow = getComputedStyle(document.body).getPropertyValue('--shadow');
    gameContainer.style.boxShadow = shadow;
    
    const white = getComputedStyle(document.body).getPropertyValue('--white');
    popUp.style.display = "none";
    document.body.style.backgroundColor = white;
    container.style.backgroundColor = white;
}
function showSettings() {

    let container = document.getElementById("container");
    let gameContainer = document.getElementById("game-container");

    popUp.style.display = "flex";
    document.body.style.backgroundColor = "gray";
    container.style.backgroundColor = "gray";
    gameContainer.style.boxShadow = "none";
    
}

function toggleSettings() {
    if (!settingsAreOpen) {
        showSettings();
    }
    else {
        hideSettings();
    }
    settingsAreOpen = !settingsAreOpen;

    player1InputField.value = player1.name;
    player2InputField.value = player2.name;
}
window.toggleSettings = toggleSettings;

function saveSettings() {
    let player1NameLength = player1InputField.value.length;
    let player2NameLength = player2InputField.value.length;

    let botToggleButton = document.getElementById("toggleBtn");
    let botDifficulty = document.getElementById("bot-difficulty-selection");

    if (botToggleButton.classList.contains("active")) {
        bot.setIsEnabled(true);
        bot.setMode(botDifficulty.value);
    }


    if (
        (player1NameLength > 10 || player1NameLength <= 0) ||
        (player2NameLength > 10 || player2NameLength <= 0)
    ) {

        warningBanner.innerText = "Invalid input";
    }
    else {
        player1.name = player1InputField.value;
        player2.name = player2InputField.value;
        updateDisplayedNames(player1.name, player2.name);
        hideSettings(); 
        warningBanner.innerText = "";
        settingsAreOpen = !settingsAreOpen;
    }

    reset();
}
window.saveSettings = saveSettings;