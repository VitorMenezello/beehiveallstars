import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TitleModule} from '../../components/title/title.module';

import {SobreComponent} from './sobre.component';

@NgModule({
  declarations: [
    SobreComponent,
  ],
  imports: [
    CommonModule,
    TitleModule,
  ],
  exports: [
    SobreComponent,
  ]
})

export class SobreModule {
}
