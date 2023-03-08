import { PalestranteEvento } from "./PalestranteEvento";
import { RedeSocial } from "./RedeSocial";

export interface Palestrante {
  Id: number;
  Nome: string;
  Descricao: string;
  ImagemURL: string;
  Telefone: string;
  Email: string;
  RedesSociais: RedeSocial;
  Eventos: PalestranteEvento;
}
