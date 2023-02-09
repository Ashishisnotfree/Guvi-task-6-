1) class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("John", "Doe", 30, "Male");
console.log(person.getFullName()); // Output: "John Doe"


2) class UberPrice {
  constructor(distance, time, baseFare, perKmCharge, perMinuteCharge) {
    this.distance = distance;
    this.time = time;
    this.baseFare = baseFare;
    this.perKmCharge = perKmCharge;
    this.perMinuteCharge = perMinuteCharge;
  }

  calculatePrice() {
    return this.baseFare + (this.distance * this.perKmCharge) + (this.time * this.perMinuteCharge);
  }
}

const uberPrice = new UberPrice(10, 30, 5, 1, 0.25);
console.log(uberPrice.calculatePrice()); // Output: 15.75
