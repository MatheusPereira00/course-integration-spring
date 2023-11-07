import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth.service';
import { User } from 'src/app/data/interface/products';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public user: User = new User('', '');

  private _router = inject(Router);
  private _authService = inject(AuthService);

  public onSubmit(): void {
    this._authService.login(this.user);
  }
}
