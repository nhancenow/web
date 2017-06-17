import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePrivilegePageListComponent } from './role-privilege-page-list.component';

describe('RolePrivilegePageListComponent', () => {
  let component: RolePrivilegePageListComponent;
  let fixture: ComponentFixture<RolePrivilegePageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolePrivilegePageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePrivilegePageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
