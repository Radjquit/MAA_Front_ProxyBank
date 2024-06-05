import { Account } from "./account";
import { ContactDetails } from "./contact-details";
import { Identity } from "./identity";

export class BankClient {
    id!: number;
    identity: Identity = new Identity();
    contactDetails: ContactDetails = new ContactDetails();
    currentAccounts:  Account[] = [];
    savingAccounts:  Account[] = [];
}
