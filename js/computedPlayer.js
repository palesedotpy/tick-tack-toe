
class computedPlayer {
    constructor(isEnabled, name, wins) {
        this.isEnabled = isEnabled;
        this.name = name;
        this.wins = wins;
    }

    setIsEnabled(isEnabled) {
        this.isEnabled = isEnabled;
    }
    get () {
        return this.isEnabled;
    }

    setName (name) {
        this.name = name;
    }
    get () {
        return this.name;
    }

    setWins(wins) {
        this.wins = wins;
    }
    get() {
        return this.wins;
    }

    makeChoice () {
        if (getIsEnabled()) {
            let randomRow = Math.floor(Math.random() * 3);
            let randomColumn = Math.floor(Math.random() * 3);
            
            matrix[randomRow][randomColumn] = 2;

            turn = 1;

        }

    }
}

const bot = new computedPlayer(true, "John", 0);
bot.makeChoice();