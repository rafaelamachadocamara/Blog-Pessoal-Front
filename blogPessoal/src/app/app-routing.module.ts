import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogarComponent } from './logar/logar.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:"", redirectTo: "logar", pathMatch: "full"},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"logar", component: LogarComponent},
  {path:'inicio', component:InicioComponent},
  {path: 'tema', component: TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
