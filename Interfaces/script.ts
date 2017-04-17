/**
 * Created by puman on 17.04.2017.
 */

interface  NamedPerson{
    firstName: string;
    age?: number;
    [propName: string]: any;

    greet(lastName: string): void;
}

function greet(person: NamedPerson){
    console.log("Hello, " + person.firstName);
}

const person: NamedPerson = {
    firstName: "Max",
    hobbies: ["Cooking","Sports"],
    greet(lastName: string){
      console.log(`Hi, I'm ${this.firstName} ${lastName}`);
    }
};

//greet({firstName: "Max", age: 27});
greet(person);
person.greet("Janik");

class Person implements NamedPerson{[propName: string]: any;
    firstName: string;
    //age: number;
    lastName: string;

    greet(lastName: string): void {
        console.log(`Hi, I'm ${this.firstName} ${lastName}`);
    }
}

const myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);

//Functions type

interface DoubleValueFunc{
    (number1: number, number2: number) : number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number){
    return value1+value2;
};

console.log(myDoubleFunction(3,4));