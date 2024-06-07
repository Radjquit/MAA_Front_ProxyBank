import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountListComponent } from './all-account-list.component';

describe('AllAccountListComponent', () => {
  let component: AllAccountListComponent;
  let fixture: ComponentFixture<AllAccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllAccountListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
