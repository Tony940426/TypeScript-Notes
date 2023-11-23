const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40];
//the annotation after pepsi turns the array into a tuple 

const carSpecs: [number, number] = [400, 3354]

const carStates = {
    horsepower: 400,
    weight: 3354
}
//Object is must more clearer. In general we use object. 