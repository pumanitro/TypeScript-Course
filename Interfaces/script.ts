/**
 * Created by puman on 17.04.2017.
 */

interface  NamedPerson{
    firstName: string;
    age?: number;
    [propName: string]: any;
}

function greet(person: NamedPerson){
    console.log("Hello, " + person.firstName);
}

const person = {
  firstName: "Max",
    hobbies: ["Cooking","Sports"]
};

greet({firstName: "Max", age: 27});
greet(person);

