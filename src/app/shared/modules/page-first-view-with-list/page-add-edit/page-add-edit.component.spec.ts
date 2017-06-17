import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddEditComponent } from './page-add-edit.component';

describe('PageAddEditComponent', () => {
  let component: PageAddEditComponent;
  let fixture: ComponentFixture<PageAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
