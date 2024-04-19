export class Tournament {
    id_tournament: number;
    name: string;
    startingDate: Date;
    status: string;

    constructor(id_tournament: number, name: string, startingDate: Date, status: string) {
        this.id_tournament = id_tournament;
        this.name = name;
        this.startingDate = startingDate;
        this.status = status;
    }
}