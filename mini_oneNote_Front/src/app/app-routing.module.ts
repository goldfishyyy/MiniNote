import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import{MainComponent} from "./components/main/main.component";
import{RegisterComponent} from "./components/register/register.component";
import{EmailloginComponent} from "./components/emailLogin/emaillogin.component";
import{UploadComponent} from "./components/upload/upload.component";
const appRoutes: Routes = [

    {path:'', redirectTo:'main', pathMatch:"full"},
    {path:'main',component:MainComponent},
    {path:'register',component:RegisterComponent},
    {path:'elogin',component: EmailloginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/home', component: HomeComponent },
    {path: 'login/home/upload',component: UploadComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
