import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PublicComponent } from './public.component';

// Components
import { ComponentsModule } from '../shared/components';

import { LoginComponent } from './login';
import { ForgotPasswordComponent } from './forgot-password';

// Commons
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    PublicComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[
    PublicComponent,
  	LoginComponent,
    ForgotPasswordComponent
  ]
})

export class PublicModule { }