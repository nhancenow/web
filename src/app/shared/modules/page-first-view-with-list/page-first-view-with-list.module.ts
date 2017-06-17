import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './page-list/page-list.component';
import { PageAddEditComponent } from './page-add-edit/page-add-edit.component';
import { PageImportComponent } from './page-import/page-import.component';
import { ComponentsModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [PageListComponent, PageAddEditComponent, PageImportComponent],
  exports: [PageListComponent, PageAddEditComponent, PageImportComponent]
})
export class PageFirstViewWithListModule { }
