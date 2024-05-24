import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailListComponent } from './account-detail-list.component';

describe('AccountDetailListComponent', () => {
  let component: AccountDetailListComponent;
  let fixture: ComponentFixture<AccountDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDetailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
