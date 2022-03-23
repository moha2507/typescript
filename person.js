var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = age;
        this.name = name;
    }
    Person.prototype.TellMyAge = function (age) {
        console.log("I am" + this.age + "years old");
    };
    Person.prototype.TellMyName = function (name) {
        console.log("I am" + this.name);
    };
    return Person;
}());
var john = new Person('John', 40);
john.TellMyAge(john);
john.TellMyName(john);
var mary = new Person('Mary', 35);
mary.TellMyAge(mary);
mary.TellMyName(mary);
