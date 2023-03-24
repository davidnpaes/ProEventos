import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/Models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos-lista',
  templateUrl: './eventos-lista.component.html',
  styleUrls: ['./eventos-lista.component.scss']
})
export class EventosListaComponent implements OnInit {
  constructor
  (
    private eventoService : EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.GetEventos();
  }


  public eventos : any = [];
  public eventosFiltrados : any = []

  public widthImg = 150;
  public  heightImg = 100;
  public exibirImagem = true;

  public titulo : string | undefined

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

  editarEvento(id : number) : void {
    this.router.navigate([`/eventos/detalhes/${id}`]);
  }



}
