export class Team {
    id_team: number;
    name: string;
    tag: string;
    creation_date: Date;
    type: string;

    constructor(id_team: number, name: string, tag: string, creation_date: Date, type: string) {
        this.id_team = id_team;
        this.name = name;
        this.tag = tag;
        this.creation_date = creation_date;
        this.type = type;
    }
}