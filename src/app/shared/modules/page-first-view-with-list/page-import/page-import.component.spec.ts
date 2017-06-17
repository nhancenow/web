import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImportComponent } from './page-import.component';

describe('PageImportComponent', () => {
  let component: PageImportComponent;
  let fixture: ComponentFixture<PageImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
