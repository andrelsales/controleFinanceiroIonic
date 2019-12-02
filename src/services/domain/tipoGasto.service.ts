import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TipoGastoDTO } from "../../models/tipoGasto.dto";
// import { Observable } from "rxjs/Observable";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";

// @Inject
@Injectable()
export class TipoGastoService{

    constructor(public http:HttpClient){}

    findAll() : Observable<TipoGastoDTO[]>{
        return this.http.get<TipoGastoDTO[]>(`${API_CONFIG.baseUrl}/tipogasto`);
    }

}