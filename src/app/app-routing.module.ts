import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';
import { VerNotasComponent } from './ver-notas/ver-notas.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'crear-nota', component: CrearNotaComponent},
  { path: 'ver-notas', component: VerNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
