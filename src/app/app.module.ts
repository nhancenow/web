import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { SecureModule } from './secure';
import { PublicModule } from './public';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureModule,
    PublicModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }