import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({providedIn: 'root'})
export class SharedDataService {

    baseURL = 'https://localhost:8443/api/';

    connectedUser?: User;


    constructor() { }

    public setConnectedUser(user: User) {
        this.connectedUser = user;
        this.saveConnectedUser();
    }

    public getConnectedUser() : User|undefined {
        return this.connectedUser;
    }

    public isConnected() : boolean {
        return this.connectedUser !== undefined;
    }

    public disconnect() {
        this.connectedUser = undefined;
        localStorage.removeItem('connectedUser');
    }

    public saveConnectedUser() {
        if (this.connectedUser === undefined) {
            localStorage.removeItem('connectedUser');
            return;
        }
        localStorage.setItem('connectedUser', JSON.stringify(this.connectedUser));
    }

    public loadConnectedUser() {
        this.connectedUser = JSON.parse(localStorage.getItem('connectedUser') || '{}');
        if(this.connectedUser?.firstname === undefined) {
            this.connectedUser = undefined;
        }
    }

}