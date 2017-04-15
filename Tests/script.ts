/**
 * Created by puman on 15.04.2017.
 */

let myName = 'Patryk';
//myName = 28;

let myAge = 22;
myAge = 24.5;

let myRealName: number;
//myRealName = "blue";

let hobbies = ["Cooking",25];
hobbies = ["blue"];
console.log(hobbies);

enum Color{
    Gray, //0
    Green = 100, //100
    Blue //2
}

let myColor: Color = Color.Gray;
console.log(myColor);

let job : any = "Dev ninja";
console.log(job);
job = {firstJob: 'Front-developer'};
console.log(job);

function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

function sayHello(): void{
    console.log("Hello!");
}

let canBeNull = 22;
//canBeNull = null;