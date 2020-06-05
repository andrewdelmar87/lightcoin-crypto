let balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Withdrawal extends Transaction {

  // constructor(amount, account) {
  //   this.amount = amount;
  //   this.account = account;
  // }


  get value() {
    return -this.amount
  }
  // commit() {
  //   this.account.balance -= this.amount;
  // }

}

class Deposit extends Transaction {

  // constructor(amount, account) {
  //   this.amount = amount;
  //   this.account = account;
  // }


  get value() {
    return this.amount
  }
  // commit() {
  //   this.account.balance += this.amount;
  // }

}

class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("AJD");

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();
// console.log('Transaction 3:', t3);

console.log('Ending Balance:', myAccount.balance);
