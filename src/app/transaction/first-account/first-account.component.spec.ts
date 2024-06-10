import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAccountComponent } from './first-account.component';

describe('FirstAccountComponent', () => {
  let component: FirstAccountComponent;
  let fixture: ComponentFixture<FirstAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
