

class Cat {
    constructor (x, y, z) {
        this.color = x;
        this.wieght = y;
        this.happiness = z;
    }
    
}

let fluffy = new Cat("red", 20, 1000);
let grumpy = new Cat("black", 16, 20);
let poopy = new Cat("green", 8, 500);
console.log(fluffy.x, fluffy.y, fluffy.z);

