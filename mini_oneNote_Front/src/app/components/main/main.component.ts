import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
    selector: 'main',
    templateUrl: 'main.component.html'
})

export class MainComponent implements OnInit {

    constructor(private router: Router) {
    }
     gotoLogin(){
       this.router.navigate(['/login']);
     }
     gotoRegister(){
       this.router.navigate(['/register']);
     }
     gotoELogin(){
       this.router.navigate(['/elogin']);
     }
    ngOnInit() { }


}
