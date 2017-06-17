import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SecureComponent } from './secure.component';

// UI Component
import { DashboardComponent } from './dashboard';

// Common
import { SharedModule } from '../shared';
import { ComponentsModule } from '../shared/components';

import { PageFirstViewWithListModule } from '../shared/modules/page-first-view-with-list/page-first-view-with-list.module';
import { DigitalKitModule } from './digital-kit';
import { RolePrivilegeModule } from './role-privilege';

@NgModule({
  declarations: [
    SecureComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
	SharedModule,
    ComponentsModule,
    DigitalKitModule,
    RolePrivilegeModule
  ],
  exports:[
  	SecureComponent,
    DashboardComponent,
    DigitalKitModule,
    RolePrivilegeModule
  ]
})

export class SecureModule { }