type Human = {
    name: string;
    age: number;
}

const newPeople: Human[] = [
    { name: 'Mughdo', age: 22 },
    { name: 'Karim', age: 25 },
    { name: 'Sayed', age: 25 }
];

function findAndModify(newPeople: Human[], targetName: string, newAge: number): Human[] {
    return newPeople.map(human => {
        if (human.name === targetName) {
            return { ...human, age: newAge };
        }
        return human;
    });
}

const updatedPeople = findAndModify(newPeople, 'Sayed', 10000);
console.log(updatedPeople);
