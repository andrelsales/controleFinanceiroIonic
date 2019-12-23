import { TipoGastoDTO } from "./tipoGasto.dto";

export interface GastoMes{
    id : String;
    nome : String;
    tipoGasto : TipoGastoDTO;
    ano: number;
    mes: number;
}