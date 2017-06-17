import { DashboardComponent } from './dashboard';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../shared/guards/auth.guard';
import { DigitalKitPageListComponent } from './digital-kit/digital-kit-page-list';
import { RolePrivilegePageListComponent } from './role-privilege/role-privilege-page-list';

export const SECURE_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'digitalkitmanagement', component: DigitalKitPageListComponent, canActivate: [AuthGuard] },
    { path: 'privilegemanagement', component: RolePrivilegePageListComponent, canActivate: [AuthGuard] },
];