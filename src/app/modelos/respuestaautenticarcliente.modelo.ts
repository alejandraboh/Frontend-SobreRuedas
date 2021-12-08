import { DatosModelo } from "./datos.modelo";

export class RespuestaAutenticarClienteModelo{
   datos?: DatosModelo;
   tk?: String;
   autenticado: boolean=false;
}