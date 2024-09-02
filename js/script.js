/*
 * TODO: Aggiungere modalità bot
*/

// Local matrix which contains player's choices
var matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

var turn = 1;

var player1Name;
var player2Name;

var player1WinCounter = 0;
var player2WinCounter = 0;

/* If there is a win this */
var win = false;

player1Name = "Player1";
player2Name = "Player2";

var resetButton = document.getElementById("end-game-info");

// Display names as soon as the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateDisplayedNames();
    updateDisplayedCounters();
});

/* Update local matrix with player's number */
function updateMatrix(x, y, player) {
    matrix[x][y] = player;
}

/* Add a class to a html element */ 
function addClass(cssClass, element) {
    element.classList.add(cssClass);
}
/* Update user grid when one of the spots are pressed */
function pressButton(x, y, blockId) {
    if (!win) {
        /* DOM's element of a block with id 'blockId'   */
        let block = document.getElementById(blockId);
        /* Change turn if player 1 pressed a button different from 0 */
        if (turn === 1 && matrix[x][y] === 0) {
            updateMatrix(x, y, turn);
            /* Changing circle icon to cross */
            addClass(block, "fa");
            addClass(block, "fa-close");
            turn = 2;
        }
        else if (turn === 2 && matrix[x][y] === 0){
            updateMatrix(x, y, turn);
            /* Changing cross icon to circle */
            addClass(block, "fa");
            addClass(block, "fa-circle-o");
            turn = 1;
        }

        /* Check if there is a win after a choice is made */
        checkWinCondition();
    }
}

/* Highlighting three winning blocks */
function highlightVictoryLine(line) {
    const value = getComputedStyle(document.body).getPropertyValue('--red');

    line.forEach(b => {        
        let bElement = document.getElementById(`b${b}`);
        bElement.style.color = value;
    });
}
/* Check if the is the game is a draw */
function isDraw() {
    let areZeroInMatrix = false;

    matrix.forEach(row => {
        row.forEach(n => {
            if (n == 0) {
                areZeroInMatrix = true;
            }
        });
    });

    if (areZeroInMatrix) {
        return false;
    }
    else {
        return true;
    }
}

/* Check if there is a win */
function checkWinCondition() {
    // Check if it is draw
    if (isDraw()) {
        resetButton.style.display = "block";
    }
    else {
        /* Every block */
        let blockTL = matrix[0][0];
        let blockTC = matrix[0][1];
        let blockTR = matrix[0][2];

        let blockCL = matrix[1][0];
        let blockCC = matrix[1][1];
        let blockCR = matrix[1][2];

        let blockBL = matrix[2][0];
        let blockBC = matrix[2][1];
        let blockBR = matrix[2][2];

        
        /* Checking if there is a win in the top left to top right file */
        if (blockTL !== 0 && (blockTL === blockTC) && (blockTL === blockTR)) {
            win = true;
            highlightVictoryLine([1, 2, 3]);
        }
        /* Checking if there is a win in the center left to center right file */
        else if (blockCL !== 0 && (blockCL === blockCC) && (blockCL === blockCR)) {
            win = true;
            highlightVictoryLine([4, 5, 6]);
        }
        /* Checking if there is a win in the bottom left to bottom right file */
        else if (blockBL !== 0 && (blockBL === blockBC) && (blockBL === blockBR)) {
            win = true;
            highlightVictoryLine([7, 8, 9]);
        }
        
        /* Checking if there is a win in the top left to bottom left file */
        else if (blockTL !== 0 && (blockTL === blockCL) && (blockTL === blockBL)) {
            win = true;
            highlightVictoryLine([1, 4, 7]);
        }
        /* Checking if there is a win in the top center to bottom center file */
        else if (blockTC !== 0 && (blockTC === blockCC) && (blockTC === blockBC))  {
            win = true;
            highlightVictoryLine([2, 5, 8]);
        }
        /* Checking if there is a win in the top right to bottom right file */
        else if (blockTR !== 0 && (blockTR === blockCR) && (blockTR === blockBR)) {
            win = true;
            highlightVictoryLine([3, 6, 9]);
        }

        /* Checking if there is a win in the top left to bottom right diagonal */
        else if (blockTL !== 0 && (blockTL === blockCC) && (blockTL === blockBR)) {
            win = true;
            highlightVictoryLine([1, 5, 9]);
        }
        /* Checking if there is a win in the top right to bottom left diagonal */
        else if (blockTR !== 0 && (blockTR === blockCC) && (blockTR === blockBL)) {
            win = true;
            highlightVictoryLine([3, 5, 7]);
        }

        if (win) {
            resetButton.style.display = "block";

            if (turn == 1) {
                player2WinCounter++;
            }
            else {
                player1WinCounter++;
            }
            updateDisplayedCounters();
        }
    }
}

function reset() {
    matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    resetButton.style.display = "none";
    turn = 1;
    win = false;
        
    const value = getComputedStyle(document.body).getPropertyValue('--black');
    for (let i=1; i<=9; i++) {
        let blockElement = document.getElementById(`b${i}`);
        blockElement.classList = "";
        blockElement.style.color = value;
    }

}

