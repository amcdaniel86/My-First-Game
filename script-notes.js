//class format example

class BankAccount {
  constructor (clientName, currency) {
    this.clientName = clientName;
    this.currency = currency;
    this.balance = 0.0;
  }

  showBalance() {
    return `${this.currency} ${this.balance}`;
  }

  withdrawMoney(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error('not enough funds');
    }
  }

  depositMoney(amount) {
    this.balance += amount
  }
}

let account1 = new BankAccount('mike', '$');
account1.depositMoney(100);
account1.withdrawMoney(25);
account1.showBalance()
// $ 75


//below talks about class extending, and supers
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  nameAndPrice() {
    console.log(
      "The product's name is: " + this.name,
      "and the product's price is: " + this.price
    );
  }
}

class Electronic extends Product {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }
}

let banana = new Product("Banana", 2);
banana.nameAndPrice();

let mac = new Electronic("Mac", 800, "Apple");
mac.nameAndPrice();

// The product's name is: Banana and the product's price is: 2
// The product's name is: Mac and the product's price is: 200