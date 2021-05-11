import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRestPasswordComponent } from './request-reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: RequestRestPasswordComponent;
  let fixture: ComponentFixture<RequestRestPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRestPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
