// class Car{
//     constructor(brand,type,color){
//         this.brand = brand
//         this.color = color
//         this.type = type
//     }
//     display(){
//         console.log(`my car brand ${this.brand}`)
//     }
// }

// const car = new Car("rolls royce")
// car.display();



// class
// class ToyotaCar {
//     start(){
//         console.log("start")
//     }
//     stop(stop){
//         this.stop = stop
//     }
//     setBrand(brand){
//        this.brand = brand;
//     }
// }

// let fortuner =  new ToyotaCar();
// fortuner.setBrand("alto");

// let forl = new ToyotaCar();
//  forl.stop("brake")
//  console.log(forl)

//  inheritance

// class parent {
//     hello(){
//         console.log("hello")
//     }
// }

// class child extends parent {
// }
// let obj = new child()


// class Car {
//     constructor(brand, color, type){
//         this.brand = brand
//         this.color = color
//         this.type = type
//     }
//     display(){
//         console.log(`my car brand ${this.brand}`)
//         console.log(`my car color ${this.color}`)
//         console.log(`my car type ${this.type}`)
//     }
// }
//  const car = new Car("scorpio", "black", "suzuki")
//  car.display()


// function greet(name, callback){
//     console.log("good mor", name)
//     callback();
// }

// function goodby(){
//     console.log("good by")
// }

// greet("bhanu", goodby)

// inherit

class parent {
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(`my name is ${this.name}`)
    }
}
 class Child extends parent {
    constructor(name, age){
        super(name)
        this.age = age
    }
    showAge(){
        console.log(`my age ${this.age}`)
    }
 }

 const child = new Child("harsh", 21)
 child.greet()
 child.showAge()