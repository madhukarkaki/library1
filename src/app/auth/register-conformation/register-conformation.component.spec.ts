import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterConformationComponent } from './register-conformation.component';

describe('RegisterConformationComponent', () => {
  let component: RegisterConformationComponent;
  let fixture: ComponentFixture<RegisterConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
