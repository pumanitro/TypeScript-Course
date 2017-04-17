/**
 * Created by puman on 17.04.2017.
 */

/*
 Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
 Let's keep it simple and only add the following methods to the Map:
 */

class MyMap <U>{

    map : {
        key: string;
        value: U;
    }[];

    setItem(key: string, item: U){
        this.map.push({key: key,
            value: item
        })
    }

    getItem(key: string){
        this.map.forEach((el) => {
            if(el.key === key)
                return el.value;
        });

        return "Not found";
    }

    clear(): void{
        this.map.length = 0;
    }

    printMap(): void{
        this.map.forEach((el) => console.log(`Key: ${el.key}, Value: ${el.value}`);
    }


}

setItem(key: string, item: T) // should create a new key-value pair

getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
The map should be usable like shown below:

    const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
