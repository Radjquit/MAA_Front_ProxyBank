import { BankClient } from "./bank-client"
import { Identity } from "./identity"

export class Advisor {
    id!: number
    identity: Identity = new Identity()
    clients: BankClient[] = []
}
