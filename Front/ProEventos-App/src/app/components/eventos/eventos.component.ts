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


  constructor
  (
    private eventoService : EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.GetEventos();
  }


  public eventos : any = [];
  public eventosFiltrados : any = []

  maxHeightImg = 100;
  exibirImagem = true;




  private _filtroLista : string = '';

  public get filtroLista() : string {
    return this._filtroLista;
  }

  public set filtroLista(value : string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(value) : this.eventos;
  }



  public filtrarEventos(filtro : string) : Evento[]
  {
    filtro = filtro.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string }) => evento.tema.toLocaleLowerCase().indexOf(filtro) !== -1 || evento.local.toLocaleLowerCase().indexOf(filtro) !== -1
    )
  }

  public AlterarMostrar() : void
  {
    this.exibirImagem = !this.exibirImagem;
  }

  public GetEventos() : void
  {
    this.eventoService.GetEventos().subscribe({
      next : (eventos : Evento[]) => {
        this.eventos = eventos;
        this.eventosFiltrados = this.eventos
      },
      error: (error : any) => {
        this.toastr.error("Não foi possível carregar eventos!"),
        this.spinner.hide()
      },
      complete: () => this.spinner.hide()
    })
  }


  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.toastr.success('Evento Removido com sucesso!');
    this.modalRef?.hide();
  }

  decline(): void {

    this.modalRef?.hide();
  }
}
