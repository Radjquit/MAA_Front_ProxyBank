import { BankClient } from "./bank-client"

export class Account {
    accountNumber!:number
    balance!:number
    type!:AccountType
    category!:AccountCat
    clientId!: number

}

export enum AccountType{
    RUNNING = 'Running',
    SAVING = 'Saving'
}

export enum AccountCat{
    PERSO = 'Perso',
    PRO = 'Pro'
}

