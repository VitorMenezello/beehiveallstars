import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RoutesModule} from './routes/routes.module';

import {HeaderModule} from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
