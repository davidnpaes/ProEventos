import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../Models/Evento';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  ngOnInit(): void {

  }

}
