let apple: number = 5;
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

let apples: number = 5
//Type Inference only happens if it is on the same line. If it is on a sperate line, the type becomes any.
//Type inference: We rely on it everytime

//when to use type annotation manually
//***First One ***
const json = '{"x": 10, "y": 11}'
const coordinates: {x: number; y: number}= JSON.parse(json);
console.log(coordinates)
//in this case, JASON.parse returns a any type. 
//any is a type. It means TS has no idea what the type is. It is not  a good thing.
//Avoid ANY at any cost
//To avoid it, you put a type annotation in front (in this case it is the {x: number; y: number})

//***Second One ***
//When we declare a variable but initialize it later. 
let words = ['Red','Green','Blue']
let foundWord;

for (let i = 0; i < words.length; i++){
    if(words[i]=== 'Green'){
        foundWord = true;
    }
}

//To rectify this issue
//let foundWord: boolean = false

//***Third Case ***
//Variables whose type cannot be inferred correctly.
let numbers = [-10, -5, 5];
let numbersAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numbersAboveZero = numbers[i]
    }
}
