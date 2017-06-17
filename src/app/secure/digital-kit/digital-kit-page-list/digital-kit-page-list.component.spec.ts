import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalKitPageListComponent } from './digital-kit-page-list.component';

describe('DigitalKitPageListComponent', () => {
  let component: DigitalKitPageListComponent;
  let fixture: ComponentFixture<DigitalKitPageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalKitPageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalKitPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
