import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomeModule} from './home/home.module';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, routerOptions),
    HomeModule,
  ],
  providers: [],
  exports: [
    RouterModule,
    HomeModule,
  ]
})
export class RoutesModule {
}
