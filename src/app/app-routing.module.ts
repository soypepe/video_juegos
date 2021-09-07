import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { InicioComponent } from './componentes/inicio/inicio.component'

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'buscar/:juego-buscar',
    component: InicioComponent,
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
