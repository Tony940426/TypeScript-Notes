const carMarkers: string[] = ['Ford', 'Toyota','BMW'];
const dates = [new Date(), new Date()];
//Normally it is good it annotate the array if we initialize it as empty



const carsbyMake = [
    ['f150'],
    ['Corolla'],
    ['camaro']
];
//const carsByMake: string [][]

//Help with inference when extracting values

const myCar = carMarkers[2];

carMarkers.map((car: string): string => {
    return car.toUpperCase();
})

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('string')