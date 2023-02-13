import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

 constructor(private http: HttpClient) { }

 public eventos : any;

  ngOnInit(): void {
    this.GetEventos();
  }


  public GetEventos() : void{
    this.http.get("https://localhost:5001/api/eventos").subscribe(
      response => this.eventos = response,
      error => console.log(error)
    )


  }
}
