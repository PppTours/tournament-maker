export class In_Team {
    id_team: number;
    id_user: number;
    owner: number;
    
    constructor(id_team: number, id_user: number, owner: number) {
        this.id_team = id_team;
        this.id_user = id_user;
        this.owner = owner;
    }
}