import { DioAccount } from "./DioAccount";

export class IteratorAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            this.balance = amount + this.balance + 10
        }
    }
}
