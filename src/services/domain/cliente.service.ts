import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../../models/cliente.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class ClienteService{

    constructor(public http: HttpClient, public store: StorageService){
        
    }
    findByEmail(email: String) : Observable<ClienteDTO>
    {
        // let token = this.store.getLocalUser().token;
        // let authHeader = new HttpHeaders({'Authorization' : 'Bearer ' + token});
        // return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/cliente/email?value=${email}`,
        // {'headers':authHeader});

        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/cliente/email?value=${email}`);


    }

    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }   

}