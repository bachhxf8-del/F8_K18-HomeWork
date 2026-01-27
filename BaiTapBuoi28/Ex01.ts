interface PartTimeI {
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;
}
const partTime: PartTimeI = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40
};

const newPartTime: PartTimeI = {
    ...partTime,
    hoursWorked: 45
};
console.log(partTime);
console.log(newPartTime);
// { id: 2, name: 'Binh', salary: 20, hoursWorked: 40 }
// { id: 2, name: 'Binh', salary: 20, hoursWorked: 45 }
