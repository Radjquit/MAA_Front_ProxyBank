import { Account } from "./account"

export class Transaction {

    id!:number
    label: string =''
    amount!: number
    date: string = ''
    acc: Account = new Account()
}
