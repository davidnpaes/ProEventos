import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../Models/Evento';

@Injectable()
export class EventoService {

  constructor(private http: HttpClient) { }

  baseURL : string = 'https://localhost:5001/api/eventos'

  public GetEventos() : Observable<Evento[]>{
    return this.http.get<Evento[]>(this.baseURL);
  }

  public GetEventosByTema(tema : string) : Observable<Evento[]>{
    return this.http.get<Evento[]>(`${this.baseURL}/${tema}/tema`);
  }

  public GetEventoById(id : number) : Observable<Evento>{
    return this.http.get<Evento>(`${this.baseURL}/${id}`);
  }

}
