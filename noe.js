var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(typeOfAnimal) {
        this.typeOfAnimals = typeOfAnimal;
    }
    Animals.prototype.photo = function () {
        console.log(this.typeOfAnimals + 'cheese!');
    };
    return Animals;
}());
var ChartreuxCat = /** @class */ (function (_super) {
    __extends(ChartreuxCat, _super);
    function ChartreuxCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartreuxCat.prototype.miaou = function (ChartreuxCat) {
        console.log(ChartreuxCat.typeOfAnimals + "miaouuu");
    };
    ChartreuxCat.prototype.petting = function (animal) {
        console.log(animal.typeOfAnimals + "is petable");
    };
    return ChartreuxCat;
}(Animals));
var EuropeanCat = /** @class */ (function (_super) {
    __extends(EuropeanCat, _super);
    function EuropeanCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EuropeanCat.prototype.feeding = function (animal) {
        console.log(animal.typeOfAnimals + "is feedable");
    };
    return EuropeanCat;
}(ChartreuxCat));
var MoonDog = /** @class */ (function (_super) {
    __extends(MoonDog, _super);
    function MoonDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoonDog.prototype.barking = function (MoonDog) {
        console.log(MoonDog.typeOfAnimals + "wafwaf");
    };
    MoonDog.prototype.petting = function (animal) {
        console.log(animal.typeOfAnimals + "is petable");
    };
    return MoonDog;
}(Animals));
var TerreneuveDog = /** @class */ (function (_super) {
    __extends(TerreneuveDog, _super);
    function TerreneuveDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerreneuveDog.prototype.feeding = function (animal) {
        console.log(animal.typeOfAnimals + "is feedable");
    };
    return TerreneuveDog;
}(MoonDog));
var Mesange = /** @class */ (function (_super) {
    __extends(Mesange, _super);
    function Mesange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mesange.prototype.fly = function (Mesange) {
        console.log(Mesange.typeOfAnimals + "pioupiou");
    };
    return Mesange;
}(Animals));
var Merle = /** @class */ (function (_super) {
    __extends(Merle, _super);
    function Merle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Merle.prototype.feeding = function (animal) {
        console.log(animal.typeOfAnimals + "is feedable");
    };
    return Merle;
}(Mesange));
var Tuna = /** @class */ (function (_super) {
    __extends(Tuna, _super);
    function Tuna() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tuna.prototype.swim = function (tuna) {
        console.log(tuna.typeOfAnimals + "can swim");
    };
    return Tuna;
}(Animals));
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shark.prototype.swim = function (animal) {
        console.log(animal.typeOfAnimals + "can swim");
    };
    return Shark;
}(Animals));
var Asticote = /** @class */ (function (_super) {
    __extends(Asticote, _super);
    function Asticote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Asticote;
}(Animals));
var chartreuxCat = new ChartreuxCat('ChatreuxCat');
chartreuxCat.miaou(chartreuxCat);
chartreuxCat.petting(chartreuxCat);
chartreuxCat.photo();
var europeanCat = new EuropeanCat('EuropeanCat');
europeanCat.miaou(europeanCat);
europeanCat.petting(europeanCat);
europeanCat.feeding(europeanCat);
europeanCat.photo();
var moonDog = new MoonDog('MoonDog');
moonDog.barking(moonDog);
moonDog.petting(moonDog);
moonDog.photo();
var terreneuveDog = new TerreneuveDog('TerreneuveDog');
terreneuveDog.barking(terreneuveDog);
terreneuveDog.feeding(terreneuveDog);
terreneuveDog.petting(terreneuveDog);
terreneuveDog.photo();
var mesange = new Mesange('Mesange');
mesange.fly(mesange);
mesange.photo();
var merle = new Merle('Merle');
merle.fly(merle);
merle.feeding(merle);
merle.photo();
var tuna = new Tuna('Tuna');
tuna.swim(tuna);
tuna.photo();
var shark = new Shark('Shark');
shark.swim(shark);
shark.photo();
var asticote = new Asticote('Asticote');
asticote.photo();
