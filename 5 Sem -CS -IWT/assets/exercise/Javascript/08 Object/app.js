class Account {
  // notice: set bank-property without any let, const keyword
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  // notice: set bank-property without any let, const keyword
  bank = "Chase";

  // notice: set deposit without function-keyword
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account("john", 0);
console.log(john);
console.log(john.name);
john.deposit(500);
console.log(john.bank);

const bob = new Account("bob", 700);
console.log(bob);
console.log(bob.name);
bob.deposit(1000);
console.log(bob.bank);
