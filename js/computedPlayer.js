
export class computedPlayer {
    constructor(isEnabled, mode) {
        this.isEnabled = isEnabled;
        this.mode = mode;
    }

    setIsEnabled(isEnabled) {
        this.isEnabled = isEnabled;
    }
    getIsEnabled () {
        return this.isEnabled;
    }

    setMode(mode) {
        this.mode = mode;
    }
    getMode () {
        return this.mode;
    }

    easyMode(updateMatrixFunction, addClassFunction, matrix) {
        let randomRow;
        let randomColumn;

        let isValidChoice = false;
        // if the counter exceed the number of blocks it means that is draw
        let triesCounter = 0;

        while (
            !isValidChoice &&
            triesCounter < 12
        ) {
            randomRow = Math.floor(Math.random() * 3);
            randomColumn = Math.floor(Math.random() * 3);

            if (matrix[randomRow][randomColumn] === 0) {
                isValidChoice = true;
            }
            triesCounter++;
        }

        let block = (randomRow * 3) + (randomColumn + 1);
        block = document.getElementById(`b${block}`);
        
        updateMatrixFunction(randomRow, randomColumn, 2);
        
        addClassFunction(block, "fa-circle-o");
    }

    hardMode() {
        // TODO
        alert("soon");
    }

    makeChoice (updateMatrixFunction, addClassFunction, matrix) {



        switch (this.getMode()) {
            case 'easy':
                this.easyMode(updateMatrixFunction, addClassFunction, matrix);
                break;
            case 'hard':
                console.log("hard");
                this.hardMode();
                break;
            default:
                console.log(this.getMode());
        }
    }
}