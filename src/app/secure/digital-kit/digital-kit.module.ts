import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Common
import { SharedModule } from '../../shared';

import { DigitalKitPageListComponent } from './digital-kit-page-list';

@NgModule({
  declarations: [
    DigitalKitPageListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    SharedModule
  ],
  exports:[
  	DigitalKitPageListComponent
  ]
})
export class DigitalKitModule { }