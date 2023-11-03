import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: ``,
  styleUrls: ['./app.component.scss'],
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
