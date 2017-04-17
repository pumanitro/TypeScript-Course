/**
 * Created by puman on 17.04.2017.
 */

function logged(constructorFn: Function){
    console.log(constructorFn);
}

@logged
class Person{
    constructor(){
        console.log("Hi!");
    }
}

// Factory
function logging(value: boolean){
    return value ? logged : null;
}

@logging(true)
class Car{

}