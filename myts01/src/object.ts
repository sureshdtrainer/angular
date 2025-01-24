type Point ={
    x: number;
    y: number;
    z?: number; //Optional Properties
}
let coordinate1: Point ={x:20, y:10};

interface Point1{
    x: number;
    y:number;

    calculate(): number;
}

const pt: Point1 ={
    x:10, y:20,
    calculate() {
        return 100;
    }
};

class Player{

    constructor(
        private firstName:string,
        private lastName:string,
        private _score:number
    ){

    }
    get fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }

    get score():number{
        return this._score;
    }

    set finalScore(newScore: number){
        if(newScore<0){
            throw new Error("Score cannot be negative!")
        }
        this._score=newScore;
    }
}

const player1 = new Player("Suresh", "D", 80);
player1.finalScore=100;
console.log(player1.fullName);