const person = {
    name: 'Peter',
    age: 25
};

let { age } = person;

console.log(age);
console.log(person);

age = 28;
console.log(person.age);