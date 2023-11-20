let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
//Most common annotation

let now: Date = new Date();
//Built in objects

let colors: string[] = ['Red', 'Blue', 'Red'];
let myNumbers: number[] = [1,2,3,4];
//Array

class Car{
}
let car: Car = new Car();
//Classes

let point: { x: number; y: number } = {
    x: 10,
    y: 20
}
//Object literal

const logNumber: (i: number) => void = (i: number) => {  
//                                  --> Function starts here. Before that is annotations     
    console.log(i);
}
//Function
