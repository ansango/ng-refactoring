/**
 * * CODE SMELL - Bloater - Long Method

/**
 * ! PROBLEMA: Tenemos un bloque de código largo que puede resultar inmantenible
 * ! Por norma general un método debería hacer una sola cosas y no varias
 */

/**
 * ? REFACTORING
 */

/**
 * * ANTES
 */

class Client {
  firstName: string = '';
  lastName: string = '';
  amount: number = 0;

  constructor(firstName: string, lastName: string, amount: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.amount = amount;
  }

  getAmount(): number {
    return this.amount;
  }
  printTicket(): void {
    console.log(`${this.firstName} has an amount: ${this.amount}`);
  }

  printOwing(): void {
    this.printTicket();

    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Amount ${this.getAmount()}`);
  }
}
/**
 * * DESPUÉS
 */

class NewClient {
  firstName: string = '';
  lastName: string = '';
  amount: number = 0;

  constructor(firstName: string, lastName: string, amount: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.amount = amount;
  }

  getAmount(): number {
    return this.amount;
  }
  printTicket(): void {
    console.log(`${this.firstName} has an amount: ${this.amount}`);
  }

  printOwing(): void {
    this.printTicket();
    this.printDetails(this.getAmount());
  }

  printDetails(amount: number): void {
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Amount ${amount}`);
  }
}
