import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetEventos();
  }


  public eventos : any = [];
  public eventosFiltrados: any;

  widthImg = 150;
  heightImg = 100
  exibirImagem = true;




  private _filtroLista : string = '';
  public get filtroLista() : string {
    return this._filtroLista;
  }
  public set filtroLista(value : string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(value) : this.eventos;
  }



  public filtrarEventos(filtro : string)
  {
    filtro = filtro.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string }) => evento.tema.toLocaleLowerCase().indexOf(filtro) !== -1 || evento.local.toLocaleLowerCase().indexOf(filtro) !== -1
    )
  }

  AlterarMostrar()
  {
    this.exibirImagem = !this.exibirImagem;
  }

  public GetEventos() : void{
    this.http.get("https://localhost:5001/api/eventos").subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos
      },
      error => console.log(error)
    )

  }
}
