import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { CadastrarComponent } from './component/cadastrar/cadastrar.component';

const routes: Routes = [
  // , pathMatch:'full'
  {path:'',component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'add', component:CadastrarComponent},
  {path:'editar/:id', component:CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
