export class Game {
    id: number;
    phase: string;
    bo: number;
    ip: string;
    rediffLink: string;
    liveLink: string;
    matchDate: Date;
    winner: string;

    constructor(id: number, phase: string, bo: number, ip: string, rediffLink: string, liveLink: string, matchDate: Date, winner: string) {
        this.id = id;
        this.phase = phase;
        this.bo = bo;
        this.ip = ip;
        this.rediffLink = rediffLink;
        this.liveLink = liveLink;
        this.matchDate = matchDate;
        this.winner = winner;
    }
}