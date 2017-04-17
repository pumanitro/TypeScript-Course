/**
 * Created by puman on 17.04.2017.
 */

function echo(data: any){
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

//Better Generic
function betterEcho<T>(data : T){
    return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Max", age: 27}));

//Built-in Generics

const testResults: Array<number> = [1,2];
testResults.push(3);
//testResults.push("test");
console.log(testResults);

// Arrays
function printAll<T>(args: T[]){
    args.forEach((element) => console.log(element));
}

printAll<string>(["Apple","Banana"]);

// Generic Types
const echo2: <T>(date: T) => T = betterEcho;

console.log(echo2<string>("Something"));