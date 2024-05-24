export class Account {
    number:string = ''
    balance!:number
    type!:AccountType
    category!:AccountCat

}

export enum AccountType{
    RUNNING = 'Running',
    SAVING = 'Saving'
}

export enum AccountCat{
    PERSO = 'Perso',
    PRO = 'Pro'
}

