class PersonJS {
  constructor(name, lastName, age, country, city, hobbies) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName() {
    return this.name + " " + this.lastName;
  }
}

class PersonJSBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.country = "";
    this.city = "";
    this.hobbies = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }
  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  setCountry(country) {
    this.country = country;
    return this;
  }
  setCity(city) {
    this.city = city;
    return this;
  }
  addHobbies(hobby) {
    this.hobbies.push(hobby);
    return this;
  }

  build() {
    const person = new PersonJS(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

const personBuilderJS = new PersonJSBuilder();
const hector = personBuilderJS
  .setName("Hector")
  .setLastName("De Leon")
  .addHobbies("Comer")
  .addHobbies("Dormir")
  .build();

console.log(hector);

const juan = personBuilderJS
  .setName("Juan")
  .setLastName("Perez")
  .setAge(20)
  .build();
console.log(juan);
