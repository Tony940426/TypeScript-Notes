const add = (a: number, b: number): number => {
//          Type annotation for argument/The type the function will return 
//When writing functions we always do annotation for the arguments. 
    return a + b;
};

function divide(a: number, b: number): number{
    return a/b;
}

const logger = (message: string): void => {
    console.log(message);
}
//we use void to say that the functon will not return anything

const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'Sunny'
}



const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(forecast.date)
}

