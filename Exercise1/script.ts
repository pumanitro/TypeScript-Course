/**
 * Created by puman on 16.04.2017.
 */

type TBankAccount = { money: number, deposit: (value: number) => void};

let bankAccount : TBankAccount = {
    money: 2000,
    deposit: function(value:number) : void{
        this.money += value;
    }
};

let myself : {name: string, bankAccount: TBankAccount, hobbies: [string, string]} = {
  name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports","Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);