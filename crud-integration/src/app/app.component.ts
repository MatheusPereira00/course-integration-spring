import { Component } from '@angular/core';
import { ListComponent } from './components/listar/list.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ListComponent, RouterOutlet, HttpClientModule],
})
export class AppComponent {
  title = 'course-integration';

  // <h1>{{ title }}</h1>
  //   <form [formGroup]="form" (ngSubmit)="onSubmit()">
  //     <label>Email</label>
  //     <input type="email" formControlName="email" />
  //     <label>Nome</label>
  //     <input type="text" formControlName="nome" />
  //     <label>Senha</label>
  //     <input type="text" formControlName="senha" />
  //     <button type="submit">Enviar</button>
  //   </form>

  // form = new FormGroup({
  //   email: new FormControl(''),
  //   nome: new FormControl(''),
  //   senha: new FormControl(''),
  // });

  // onSubmit() {
  //   console.log(this.form.value);
  //   const form = this.form.value;
  //   console.log('valor: ' + form.email, form.nome, form.senha );
  // }
}
