interface CanBePet {
  petting(animal:object):void
}
interface CanBeFeed {
  feeding(animal:object):void
}

class Animals {
  typeOfAnimals:string
  constructor(typeOfAnimal:string){
    this.typeOfAnimals = typeOfAnimal;
  }

  photo(){
    console.log(this.typeOfAnimals + 'cheese!');
  }

}

class ChartreuxCat extends Animals implements CanBePet {
  miaou(ChartreuxCat: ChartreuxCat){
    console.log(ChartreuxCat.typeOfAnimals + "miaouuu");
  }
  petting(animal: ChartreuxCat){
    console.log(animal.typeOfAnimals + "is petable");
  }
}

class EuropeanCat extends ChartreuxCat implements CanBeFeed {
  feeding(animal:EuropeanCat) {
    console.log(animal.typeOfAnimals + "is feedable")
  }
}
class MoonDog extends Animals implements CanBePet {
  barking(MoonDog: MoonDog){
    console.log(MoonDog.typeOfAnimals + "wafwaf");
  }
  petting(animal: MoonDog){
    console.log(animal.typeOfAnimals + "is petable");
  }
}

class TerreneuveDog extends MoonDog implements CanBeFeed {
  feeding(animal:TerreneuveDog) {
    console.log(animal.typeOfAnimals + "is feedable")
  }
}
class Mesange extends Animals {
  fly(Mesange: Mesange){
    console.log(Mesange.typeOfAnimals + "pioupiou");
  }
}

class Merle extends Mesange implements CanBeFeed {
  feeding(animal:Merle) {
    console.log(animal.typeOfAnimals + "is feedable")
  }
}
class Tuna extends Animals {
  swim(tuna: Tuna){
    console.log(tuna.typeOfAnimals + "can swim");
  }
}

class Shark extends Animals{
  swim(animal:Shark) {
    console.log(animal.typeOfAnimals + "can swim")
  }
}

class Asticote extends Animals {

}

let chartreuxCat = new ChartreuxCat('ChatreuxCat');
chartreuxCat.miaou(chartreuxCat);
chartreuxCat.petting(chartreuxCat);
chartreuxCat.photo()

let europeanCat = new EuropeanCat('EuropeanCat');
europeanCat.miaou(europeanCat);
europeanCat.petting(europeanCat);
europeanCat.feeding(europeanCat);
europeanCat.photo()

let moonDog = new MoonDog('MoonDog')
moonDog.barking(moonDog);
moonDog.petting(moonDog);
moonDog.photo()

let terreneuveDog = new TerreneuveDog('TerreneuveDog')
terreneuveDog.barking(terreneuveDog);
terreneuveDog.feeding(terreneuveDog);
terreneuveDog.petting(terreneuveDog);
terreneuveDog.photo()

let mesange = new Mesange('Mesange')
mesange.fly(mesange);
mesange.photo()

let merle = new Merle('Merle')
merle.fly(merle);
merle.feeding(merle);
merle.photo()

let tuna = new Tuna('Tuna')
tuna.swim(tuna);
tuna.photo()

let shark = new Shark('Shark')
shark.swim(shark);
shark.photo()

let asticote = new Asticote('Asticote')
asticote.photo()


