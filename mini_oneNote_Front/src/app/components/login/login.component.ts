import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import{Router} from '@angular/router';
@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    constructor(
      private authService: AuthService,
      private router: Router
    ) {}

    ngOnInit() { }

    onSignIn() {
        this.authService.login();
    }
}
