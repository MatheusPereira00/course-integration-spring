import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interface/products';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _route = inject(Router);

  private _isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedInSubject.asObservable();

  public login(user: User): void {
    if (user.email === 'admin' && user.senha === '123') {
      this._isLoggedInSubject.next(true);
      this._route.navigate(['list']);
    } else {
      alert('não tem conta')
    }
  }
}
