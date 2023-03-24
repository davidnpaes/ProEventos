import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { EventosComponent } from './components/eventos/eventos.component';
import { EventosDetalhesComponent } from './components/eventos/eventos-detalhes/eventos-detalhes.component';
import { EventosListaComponent } from './components/eventos/eventos-lista/eventos-lista.component';

import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { CadastroComponent } from './components/usuario/cadastro/cadastro.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';

const routes: Routes = [
  {path: 'eventos', pathMatch: 'full', redirectTo: 'eventos/lista'},
  {path: 'eventos', component: EventosComponent,
    children: [
      {path: 'detalhes', component: EventosDetalhesComponent},
      {path: 'detalhes/:id', component: EventosDetalhesComponent},
      {path: 'lista', component: EventosListaComponent}
    ]
  },

  {path: 'usuario', pathMatch: 'full', redirectTo: 'usuario/login'},
  {
    path: 'usuario', component: UsuarioComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'cadastro', component: CadastroComponent}
    ]
  },

  {path: 'usuario/perfil', component: PerfilComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'palestrantes', component: PalestrantesComponent},
  {path: '', component: DashboardComponent},
  {path: '**', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
