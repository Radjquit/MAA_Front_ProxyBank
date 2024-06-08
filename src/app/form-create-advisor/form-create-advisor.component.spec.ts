import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateAdvisorComponent } from './form-create-advisor.component';

describe('FormCreateAdvisorComponent', () => {
  let component: FormCreateAdvisorComponent;
  let fixture: ComponentFixture<FormCreateAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCreateAdvisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreateAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
