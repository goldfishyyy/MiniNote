//This service is used to auth user with google log in
declare const gapi: any;
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare const API_ROOT: string;
declare const STAGE: string;

@Injectable()
export class AuthService {
    constructor(private router: Router,
        private httpClient: HttpClient) {
        gapi.load('auth2', function () {
            gapi.auth2.init();
        });
    }

    /**
     *
     * @param id_token
     *
     * This methood is used to store google ID token into local storage
      It gets temp aws credentials from aws cognito by the same id token and
      save it to local storage
     */
     async setCredentials(id_token) {
         try {
             let options = {
                 headers: {
                     Authorization: id_token
                 }
             };

             let endpoint = API_ROOT + STAGE + '/auth';
             let credentials = await this.httpClient.get(endpoint, options).toPromise();

             localStorage.setItem('id_token', id_token);
             localStorage.setItem('aws', JSON.stringify(credentials));
             return;
         } catch(err) {
             localStorage.removeItem('id_token');
             localStorage.removeItem('aws');
             throw err;
         }
     }

     getCredentials() {
         return localStorage.getItem('aws');
     }

     getIdToken() {
         return localStorage.getItem('id_token');
     }


     async isLoggedIn() {
         let id_token = this.getIdToken();

         if (id_token) {
             let endpoint = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + id_token;
             try {
                 return await this.httpClient.get(endpoint).toPromise();
             } catch (err) {
                 throw err;
             }
         } else {
             throw new Error ("No token found");
         }
     }

     async login() {
        let googleAuth = await gapi.auth2.getAuthInstance();
        let googleUser = await googleAuth.signIn({ scope: 'profile email' });
        let id_token = googleUser.getAuthResponse().id_token;
        await this.setCredentials(id_token);

        this.router.navigate(['login/home']).then(() => {
            window.location.reload();
        });

    }

    async logout() {
        var googleAuth = gapi.auth2.getAuthInstance();
        await googleAuth.signOut();

        localStorage.removeItem('id_token');
        localStorage.removeItem('aws');
        this.router.navigate(['main']);
    }
}
