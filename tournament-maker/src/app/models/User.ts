export class User {
    id_user: number;
    pseudo: string;
    lastname: string;
    firstname: string;
    id_discord: string;
    password: string;
    role: string;

    constructor(id_user: number, pseudo: string, lastname: string, firstname: string, id_discord: string, password: string, role: string) {
        this.id_user = id_user;
        this.pseudo = pseudo;
        this.lastname = lastname;
        this.firstname = firstname;
        this.id_discord = id_discord;
        this.password = password;
        this.role = role;
    }

}