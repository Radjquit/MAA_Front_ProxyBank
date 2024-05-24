import { ContactDetails } from "./contact-details";
import { Identity } from "./identity";

export class Client {
    id!: number;
    identity: Identity = new Identity();
    contactDetails: ContactDetails = new ContactDetails();
  }