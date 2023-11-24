interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return 'This is the name'
    }
};




const printVehicle = (vehicle: Vehicle): void => {
    console.log(`${vehicle.name}`);
    console.log(`${vehicle.year}`);
    console.log(`${vehicle.broken}`);
}

printVehicle(oldCivic)