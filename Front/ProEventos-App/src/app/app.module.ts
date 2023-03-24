import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContatosComponent } from './components/contatos/contatos.component';

import { DateTimeFormatPipe } from './util/dateTimeFormat.pipe';
import { EventoService } from './services/evento.service';
import { EventosListaComponent } from './components/eventos/eventos-lista/eventos-lista.component';
import { EventosDetalhesComponent } from './components/eventos/eventos-detalhes/eventos-detalhes.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { CadastroComponent } from './components/usuario/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    PalestrantesComponent,
    NavbarComponent,
    TituloComponent,
    DashboardComponent,
    ContatosComponent,
    PerfilComponent,
    EventosListaComponent,
    EventosDetalhesComponent,
    DateTimeFormatPipe,
    UsuarioComponent,
    LoginComponent,
    CadastroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates : true,
      timeOut: 5000,
      closeButton: true,
      progressBar: true
    }),
    NgxSpinnerModule
  ],
  providers: [
    EventoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
