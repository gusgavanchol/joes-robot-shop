import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser, IUserCredentials } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  credentials: IUserCredentials = { email: '', password: ''};
  signInErrror: boolean = false;

  constructor(private userService: UserService,
              private router: Router) {}

  signIn() {
    this.signInErrror = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => (this.signInErrror = true)
    });
  }

}
