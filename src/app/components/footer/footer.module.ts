import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {FooterComponent} from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule {
}
