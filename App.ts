import { CompanyAccount } from "./class/CompanyAccount";
import { IteratorAccount } from "./class/IteratorAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount1: PeopleAccount = new PeopleAccount(10, 'Tiao', 1)
const peopleAccount2: PeopleAccount = new PeopleAccount(10, 'Ze', 2)
const iteratorAccount: IteratorAccount = new IteratorAccount('DD', 3)
peopleAccount2.deposit(1000)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
peopleAccount2.transfer(1, 20)
console.log(companyAccount)
console.log(peopleAccount1)
console.log(peopleAccount2)
iteratorAccount.deposit(100)
console.log(iteratorAccount)
