import { DatosModelo } from "./datos.modelo";

export class RespuestaAutenticarAsesorModelo{
    datos?: DatosModelo;
    tk?: String;
    autenticado: boolean=false;
}