let coordinate1 = { x: 20, y: 10 };
const pt = {
    x: 10, y: 20,
    calculate() {
        return 100;
    },
};
class Player {
    constructor(firstName, lastName, _score) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._score = _score;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get score() {
        return this._score;
    }
    set finalScore(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}
const player1 = new Player("Suresh", "D", 80);
player1.finalScore = 100;
console.log(player1.fullName);
