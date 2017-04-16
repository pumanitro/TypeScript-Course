/**
 * Created by puman on 16.04.2017.
 */

class Person{
    name : string;
    private type: string;
    protected age: number;

    constructor(name: string, public userName: string){
        this.name = name;
    }

    protected changeName(){
        this.name = "patryk";
    }

}

const person = new Person("Patryk","pumanitro");
console.log(person.name, person.userName);

class Max extends Person{

    constructor(userName: string){
        super("Max",userName);
        this.age = 40;
    }
}

const max = new Max("max");
console.log(max);

class Plant{
    private _species: string = "Default";

    get species(){
        return this._species;
    }

    set species(value: string) {
       if(value.length > 3){
           this._species = value;
       }else{
           this._species = "Default";
       }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
