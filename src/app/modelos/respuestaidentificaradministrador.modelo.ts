import { DatosModelo } from "./datos.modelo";

export class RespuestaIdentificarAdministradorModelo{
    datos?: DatosModelo;
    tk?: String;
    autenticado: boolean=false;
}