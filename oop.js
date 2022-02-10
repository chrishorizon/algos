// Classes
class Car{
    constructor() {
        this.color = "Greennnn";
    }

    // Methods
    sounds(){
        console.log("zoom zoom");
    }
}

class Scion extends Car {
    constructor(color, year, shape){
        super() // keyword is used to call corresponding methods of super class
        this.color = color;
        this.year = year;
        this.shape = shape;
    }
}

const toyota = new Scion("Pink", 2008, "Square");

console.log(toyota.color);
console.log(toyota.year);
console.log(toyota.shape);
toyota.sounds();


// Object
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,

    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}
console.log(employee.getWage())

