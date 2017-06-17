import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Common
import { SharedModule } from '../../shared';

import { RolePrivilegePageListComponent } from './role-privilege-page-list';

@NgModule({
  declarations: [
    RolePrivilegePageListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    SharedModule
  ],
  exports:[
  	RolePrivilegePageListComponent
  ]
})
export class RolePrivilegeModule { }