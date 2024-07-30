function square(num: number): number {
    return num * num;
}

function double(num: number): number {
    return num * 2;
}

function addFive(num: number): number {
    return num + 5;
}

function composeFunctions(num: number): number {
    return addFive(double(square(num)));
}

const res = composeFunctions(3);
console.log(res);
