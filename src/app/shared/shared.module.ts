import { NgModule } from '@angular/core';

// UI Component
import { ComponentsModule } from './components';

// Common
import { AuthGuard } from './guards/auth.guard';
import { AuthService, UserService, DigitalKitService } from './services';
import { PageFirstViewWithListModule } from './modules/page-first-view-with-list';

// import { HttpLayerHelper } from './helpers/http-layer.helper';

// Used to create fake backend
import { MockLayerHelper } from './helpers/mock-layer.helper';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  imports: [
  	ComponentsModule,
	PageFirstViewWithListModule
  ],
  exports:[
  	PageFirstViewWithListModule
  ],
  providers: [
  	AuthGuard, 
  	AuthService, 
  	UserService,
  	DigitalKitService,
  	// HttpLayerHelper, // TODO, to be enabled later...
  	
    // providers used to create fake backend
    MockLayerHelper,
    MockBackend,
    BaseRequestOptions
  ]
})
export class SharedModule { }