export class Map {
    id: number;
    name: string;
    squad1Score: number;
    squad2Score: number;
    winner: string;

    constructor(id: number, name: string, squad1Score: number, squad2Score: number, winner: string) {
        this.id = id;
        this.name = name;
        this.squad1Score = squad1Score;
        this.squad2Score = squad2Score;
        this.winner = winner;
    }
}