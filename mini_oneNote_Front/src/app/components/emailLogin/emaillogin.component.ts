import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/auth/authorization.service";
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'elogin',
  templateUrl: './emaillogin.component.html'

})
export class EmailloginComponent {
  emailVerificationMessage: boolean = false;

  constructor(private auth: AuthorizationService,
              private _router: Router) {

  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.auth.signIn(email, password).subscribe((data) => {
      this._router.navigateByUrl('/login/home');
    }, (err)=> {
      this.emailVerificationMessage = true;
    });
  }
}
