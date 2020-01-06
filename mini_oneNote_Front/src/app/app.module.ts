declare const gapi: any;
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteSnapshotComponent } from './components/notes/note-snapshot.component';
import { NoteComponent } from './components/notes/note.component';
import { SpinnerComponent } from './components/spinner/spinner-component';
import { NotesApiService } from './services/notes-api/notes-api.service';
import { NotesDataService } from './services/notes-data/notes-data.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { TitlePipe } from './pipes/extract-title.pipe';

import{MainComponent} from "./components/main/main.component";
import{RegisterComponent} from "./components/register/register.component";
import{AuthorizationService} from "./services/auth/authorization.service";
import{RegisterapiComponent} from "./components/register-api/registerapi.component";
import{EmailloginComponent} from "./components/emailLogin/emaillogin.component";
import{UploadComponent} from "./components/upload/upload.component";
import {UploadService} from "./services/upload.service";
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        NotesComponent,
        NoteSnapshotComponent,
        NoteComponent,
        SpinnerComponent,
        TitlePipe,
        LoginComponent,
        MainComponent,
        RegisterComponent,
        RegisterapiComponent,
        EmailloginComponent,
        UploadComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        InfiniteScrollModule

    ],
    providers: [
        NotesApiService,
        NotesDataService,
        DatePipe,
        AuthGuard,
        AuthService,
        AuthorizationService,
        UploadService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
