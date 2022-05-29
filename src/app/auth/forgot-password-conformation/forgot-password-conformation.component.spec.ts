import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordConformationComponent } from './forgot-password-conformation.component';

describe('ForgotPasswordConformationComponent', () => {
  let component: ForgotPasswordConformationComponent;
  let fixture: ComponentFixture<ForgotPasswordConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
