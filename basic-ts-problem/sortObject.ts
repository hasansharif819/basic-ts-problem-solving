type Car  = {
    make: string;
    model: string;
    year: number;
}

const cars: Car[] = [
    { make: 'Toyota', model: 'Corolla', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2018 }
];

function sortCarsByYear(cars: Car[]): Car[] {
    return cars.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
