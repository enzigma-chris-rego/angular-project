import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/register/register.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UserComponent } from 'src/app/user/user.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent,
        children: [
            { path: 'timesheet', component: TimesheetComponent},
            { path: 'user', component: UserComponent}
        ]},                       
    { path: 'register', component: RegisterComponent},
    { path: 'forgotpassword', component: ForgotPasswordComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(){ }
}

export const routingComponents = [ LoginComponent, 
    RegisterComponent, 
    HomeComponent, 
    ForgotPasswordComponent,
    UserComponent,
    PageNotFoundComponent];