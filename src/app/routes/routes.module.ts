import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {HomeModule} from './home/home.module';

import {CheerleadingModule} from './cheerleading/cheerleading.module';
import {CheerleadingComponent} from './cheerleading/cheerleading.component';
import {EquipeComponent} from './cheerleading/equipe/equipe.component';
import {EscolaComponent} from './cheerleading/escola/escola.component';
import {SobreComponent} from './cheerleading/sobre/sobre.component';

import {EventosModule} from './eventos/eventos.module';
import {EventosComponent} from './eventos/eventos.component';
import {ApresentacoesComponent} from './eventos/apresentacoes/apresentacoes.component';
import {CursosComponent} from './eventos/cursos/cursos.component';

import {ContatoModule} from './contato/contato.module';
import {ContatoComponent} from './contato/contato.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cheerleading',
    component: CheerleadingComponent,
    children: [
      {
        path: 'equipe',
        component: EquipeComponent,
      },
      {
        path: 'escola',
        component: EscolaComponent,
      },
      {
        path: 'sobre',
        component: SobreComponent,
      },
      {
        path: '**',
        redirectTo: 'equipe'
      }
    ]
  },
  {
    path: 'eventos',
    component: EventosComponent,
    children: [
      {
        path: 'apresentacoes',
        component: ApresentacoesComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: '**',
        redirectTo: 'apresentacoes'
      }
    ]
  },
  {
    path: 'contato',
    component: ContatoComponent,
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
    CheerleadingModule,
    EventosModule,
    ContatoModule,
  ],
  providers: [],
  exports: [
    RouterModule,
    HomeModule,
    CheerleadingModule,
    EventosModule,
    ContatoModule,
  ]
})
export class RoutesModule {
}
