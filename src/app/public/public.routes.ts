import { LoginComponent } from './login';
import { ForgotPasswordComponent } from './forgot-password';
import { Routes, RouterModule } from '@angular/router';


export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent }
];