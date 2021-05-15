import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentVerifyEmailComponent } from './sent-verify-email.component';

describe('VerifyEmailComponent', () => {
  let component: SentVerifyEmailComponent;
  let fixture: ComponentFixture<SentVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentVerifyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
