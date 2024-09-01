
var matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
// TODO: Rimuovere possibilità di selezione a fine partita
// TODO: Aggiungere la possibilità di modificare i nomi dei vincitori
var turn = 1;

var player1;
var player2;

player1 = "Bossetti1";
player2 = "Brumotti2";

var winContainer = document.getElementById("end-game-info");
var winnerBanner = document.getElementById("winner-banner");

/* Update local matrix with player's number */
function updateMatrix(x, y, player) {
    matrix[x][y] = player;
}
/* Update user grid when one of the spots are pressed */
function pressButton(x, y, blockId) {
    /* DOM's element of a block with id 'blockId'   */
    let block = document.getElementById(blockId);
    /* Change turn if player 1 pressed a button different from 0 */
    if (turn === 1 && matrix[x][y] === 0) {
        updateMatrix(x, y, turn);
        /* Changing cross icon to circle */
        block.classList.add("fa");
        block.classList.add("fa-close");
        turn = 2;
    }
    else if (turn === 2 && matrix[x][y] === 0){
        updateMatrix(x, y, turn);
        /* Changing circle icon to cross */
        block.classList.add("fa");
        block.classList.add("fa-circle-o");
        turn = 1;
    }

    /* Check if there is a win after a choice is made */
    checkWinCondition();
}

/* */
function highlightVictoryLine(line) {
    const value = getComputedStyle(document.body).getPropertyValue('--red');

    line.forEach(b => {        
        let bElement = document.getElementById(`b${b}`);
        bElement.style.color = value;
    });
}
/* Check if there is a win */
function checkWinCondition() {

    /* If there is a win this */
    let win = false;
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
        winContainer.style.display = "block";

        if (turn == 1) {
            winnerBanner.innerHTML = `The winner is <em>${player2}</em> !!`;
        }
        else {
            winnerBanner.innerHTML = `The winner is <em>${player1}</em> !!`;
        }
    }
}

function reset() {
    matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    winContainer.style.display = "none";
    turn = 1;
        
    const value = getComputedStyle(document.body).getPropertyValue('--black');
    for (let i=1; i<=9; i++) {
        let blockElement = document.getElementById(`b${i}`);
        blockElement.classList = "";
        blockElement.style.color = value;
    }

}