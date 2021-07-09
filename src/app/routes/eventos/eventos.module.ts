import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {EventosComponent} from './eventos.component';
import {ApresentacoesComponent} from './apresentacoes/apresentacoes.component';
import {CursosComponent} from './cursos/cursos.component';

@NgModule({
  declarations: [
    EventosComponent,
    ApresentacoesComponent,
    CursosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    EventosComponent,
    ApresentacoesComponent,
    CursosComponent,
  ]
})

export class EventosModule {
}
