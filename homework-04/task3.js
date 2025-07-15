const bankAccount = {
    _balance: 1000,


    get balance(){
        return this._balance;
    },
    set balance(amount) {
        if (typeof amount !== 'number'|| amount <0) {
            throw new Error('Balance must be a non-negative number.');
        }
        this._balance = amount;
    },

    get formattedBalance(){
        return `$${this.balance}`;
    },

    transfer(targetAccount, amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Transfer amount must be a positive number.');
        }
        if (amount > this.balance) {
            throw new Error('Insufficient funds for transfer.');
        }
        if (typeof targetAccount !== 'object' || !('balance' in targetAccount)) {
            throw new Error('Invalid target account.');
        }

        this.balance -= amount;
        targetAccount.balance += amount;
    }
};

const account1 = Object.create(bankAccount);
account1.balance = 1000;

const account2 = Object.create(bankAccount);
account2.balance = 500;

console.log('Before transfer:');
console.log(`Account 1: ${account1.formattedBalance}`);
console.log(`Account 2: ${account2.formattedBalance}`);

account1.transfer(account2, 200);

console.log('\nAfter transfer:');
console.log(`Account 1: ${account1.formattedBalance}`);
console.log(`Account 2: ${account2.formattedBalance}`);