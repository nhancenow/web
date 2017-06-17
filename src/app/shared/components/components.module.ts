import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { DatePickerModule } from 'ng2-datepicker';

// UI Component
import { LeftSidebarComponent } from './left-sidebar';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { PageTitleComponent } from './page-title';
import { FileUploadComponent } from './file-upload';
import { EmailFieldComponent } from './email-field';
import { IconComponent } from './icon';
import { MobileFieldComponent } from './mobile-field';
import { Ng2SmartTableModule } from './ng2-smart-table';
import { ButtonComponent } from './button';
import { IconButtonComponent } from './icon-button';
import { LinkComponent } from './link';
import { RadioButtonComponent } from './radio-button';
import { CheckboxComponent } from './checkbox';
import { SelectBoxComponent } from './select-box';
import { DatetimepickerComponent } from './datetimepicker/datetimepicker.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SearchFieldComponent } from './search-field';
import { InputBoxComponent } from './input-box';
import { CurrencyComponent } from './currency';


@NgModule({
  declarations: [
    LeftSidebarComponent,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    FileUploadComponent,
    MobileFieldComponent,
    EmailFieldComponent,
    IconComponent,
    LinkComponent,
    ButtonComponent,
    IconButtonComponent,
    RadioButtonComponent,
    CheckboxComponent,
    SelectBoxComponent,
    DatetimepickerComponent,
    DatePickerComponent,
    InputBoxComponent,
    CurrencyComponent,
    SearchFieldComponent,
  ],
  imports:[
  	FormsModule,
  	CommonModule,
  	RouterModule,
  	Ng2SmartTableModule,
  	NguiDatetimePickerModule,
  	DatePickerModule
  ],
  exports:[
  	FormsModule,
  	CommonModule,
  	RouterModule,
    Ng2SmartTableModule,
    NguiDatetimePickerModule,
    DatePickerModule,
  	LeftSidebarComponent,
    HeaderComponent,
    FooterComponent,
    PageTitleComponent,
    FileUploadComponent,
    MobileFieldComponent,
    EmailFieldComponent,
    IconComponent,
    Ng2SmartTableModule,
    ButtonComponent,
    IconButtonComponent,
    LinkComponent,
    RadioButtonComponent,
    CheckboxComponent,
    SelectBoxComponent,
    DatetimepickerComponent,
    DatePickerComponent,
    InputBoxComponent,
    CurrencyComponent,
    SearchFieldComponent
  ]
})
export class ComponentsModule {
 }