import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";
import { userModel } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor( private http: HttpClient) {}

    token!: string;

    login() {
        this.token = 'FakeToken'
    }

    getToken() {
        return this.token;
    }

    registerNewUser( formValue: userModel ) {
        return this.http.post<userModel>(`${environment.protocolHost}/api/auth/register`, formValue)
    }

    loginUser( formValue: userModel ) {
        return this.http.post<userModel>(`${environment.protocolHost}/api/auth/login`, formValue)
    }
}