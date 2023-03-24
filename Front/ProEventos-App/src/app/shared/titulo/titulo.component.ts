import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() titulo : string | undefined;
  @Input() subtitulo : string | undefined;
  @Input() iconeClass : string | undefined;
  @Input() mostrarListar : boolean = false;


}
