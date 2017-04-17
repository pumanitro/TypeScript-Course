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

//Advanced
function printable(constructorFn: Function){
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant{
    name = "Green PLant";
}

const plant = new Plant();
(<any>plant).print();

function editable(value: boolean){
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    };
}

function overWritable(value: boolean) : any{
    return function (target: any, propName: string) {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project{

    @overWritable(false)
    projectName: string;

    constructor(name: string){
        this.projectName = name;
    }

    @editable(false)
    calcBudget(){
        console.log(1000);
    }

}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(3000);
};
project.calcBudget();
project.projectName = "blue";
console.log(project.projectName);
