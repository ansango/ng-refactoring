/**
 * * BASE
 */

class Student {
  rollNumber: number;
  name: string;

  constructor(rollnumber: number, name: string) {
    this.rollNumber = rollnumber;
    this.name = name;
  }

  displayInformation(): void {
    console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}`);
  }
}

/**
 * * DUPLICATE CODE
 */

class Student2 {
  rollNumber: number;
  name: string;

  constructor(rollnumber: number, name: string) {
    this.rollNumber = rollnumber;
    this.name = name;
  }

  displayInformation(): void {
    console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}`);
  }

  printNameRoll(): void {
    console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}`);
  }
}

