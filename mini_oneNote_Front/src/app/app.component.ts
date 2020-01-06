import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    //route user to the login page if not logged in
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {

}
