import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFieldComponent } from './mobile-field.component';

describe('MobileFieldComponent', () => {
  let component: MobileFieldComponent;
  let fixture: ComponentFixture<MobileFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
