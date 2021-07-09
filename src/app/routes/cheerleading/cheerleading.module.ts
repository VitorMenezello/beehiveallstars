import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CheerleadingComponent} from './cheerleading.component';
import {EquipeComponent} from './equipe/equipe.component';
import {EscolaComponent} from './escola/escola.component';
import {SobreComponent} from './sobre/sobre.component';

@NgModule({
  declarations: [
    CheerleadingComponent,
    EquipeComponent,
    EscolaComponent,
    SobreComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CheerleadingComponent,
    EquipeComponent,
    EscolaComponent,
    SobreComponent,
  ]
})

export class CheerleadingModule {
}
