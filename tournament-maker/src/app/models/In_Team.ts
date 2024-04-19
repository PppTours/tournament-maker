export class User_Team {
    id_team: number;
    id_user: number;
    is_owner: boolean;
    
    constructor(id_team: number, id_user: number, is_owner: boolean) {
        this.id_team = id_team;
        this.id_user = id_user;
        this.is_owner = is_owner;
    }
}