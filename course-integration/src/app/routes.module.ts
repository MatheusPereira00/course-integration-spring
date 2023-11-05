import { Routes } from '@angular/router';
import { CriarComponent } from './components/criar/criar.component';
import { ListComponent } from './components/listar/list.component';
import { EditarComponent } from './components/editar/editar.component';
import { LoginComponent } from './components/login/login.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'criar',
    component: CriarComponent,
  },
  {
    path: 'editar/:id',
    component: EditarComponent,
  },
];
