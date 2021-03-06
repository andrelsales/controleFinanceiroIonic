import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { API_CONFIG } from "../config/api.config";
import { HttpClient } from "@angular/common/http";
import { LocalUser } from "../models/local.user";
import { StorageService } from "./storage.service";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(
        public http: HttpClient,
        public storage: StorageService ) {
    }


    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }   

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`, 
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }   
    successfulLogin(authorizationValue : string) {
        console.log("successfulLogin");
        let tok = authorizationValue.substring(7);
        console.log("tok : " + tok);
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        console.log("AE 123");
        console.log(user);
        this.storage.setLocalUSer(user);
        // this.cartService.createOrClearCart();
    }

logout() {
    this.storage.setLocalUSer(null);
}
}