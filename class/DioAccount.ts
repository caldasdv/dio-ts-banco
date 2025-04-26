export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    private static accounts: DioAccount[] = [];

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        DioAccount.accounts.push(this);
    }
    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error(" Conta Invalida");

    }
    transfer = (accountNumber: number, amount: number): boolean => {
        if (!this.validateStatus()) {
            throw new Error("Conta Invalida");

        }
        const destinationAccount = DioAccount.accounts.find(acc => acc.accountNumber === accountNumber)
        if (!destinationAccount) {
            throw new Error("Conta nao encontrada");
        }

        if (this.balance >= amount) {
            this.balance -= amount;
            destinationAccount.balance += amount;
            console.log('tranferencia de ${amount} realizada para a conta ${accountNumber}')
        }
        else {
            throw new Error("Saldo insuficiente");

        }
        return true
    }
    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso')
    }
    getName = (): string => {
        return this.name
    }
    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            this.balance += amount
        }
    }
    withdraw = (amount: number): void => {
        if (this.validateStatus() && this.balance > amount) {
            this.balance -= amount
        }
    }
    getBalance = (): void => {
        console.log(this.balance)
    }
}
