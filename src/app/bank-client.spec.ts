import { BankClient } from './model/bank-client';

describe('BankClient', () => {
  it('should create an instance', () => {
    expect(new BankClient()).toBeTruthy();
  });
});
