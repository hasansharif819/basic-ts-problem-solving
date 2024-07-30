// Array Filtering and Mapping

type Person = {
    name: string;
    age: number;
    gender: 'male' | 'female';
}

const people: Person[] = [
    { name: 'Tonni', age: 30, gender: 'female' },
    { name: 'Sayed', age: 25, gender: 'male' },
    { name: 'Hasina', age: 35, gender: 'female' },
    { name: 'Kader', age: 40, gender: 'male' }
];

function filterAndMap(people: Person[]): string[] {
    return people
        .filter(person => person.gender !== 'female')
        .map(person => person.name);
}

const result = filterAndMap(people);
console.log(result);