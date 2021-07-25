import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TitleModule} from '../../components/title/title.module';

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
    TitleModule,
  ],
  exports: [
    EventosComponent,
    ApresentacoesComponent,
    CursosComponent,
  ]
})

export class EventosModule {
}
