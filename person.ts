class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.age = age
        this.name = name
    }
    TellMyAge (age: Person){
        console.log("I am" + this.age + "years old" );
    }
    TellMyName (name: Person){
        console.log("I am" + this.name);
    }
}
let john = new Person('John', 40);
john.TellMyAge(john);
john.TellMyName(john);

let mary = new Person('Mary', 35);
mary.TellMyAge(mary);
mary.TellMyName(mary);