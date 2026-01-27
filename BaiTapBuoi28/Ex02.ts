// Create the Employee interface
interface  Employee {
    id: number;
    name: string;
    salary: number;
    getSalary(): number;
}

// Create class FullTimeEmployee
class FullTimeEmployee implements Employee {
    id: number;
    name: string;
    salary: number;
    getSalary(): number {
        return this.salary;
    }
}

// Create class PartTimeEmployee
class PartTimeEmployee implements Employee{
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;
    getSalary(): number {
        return this.salary * this.hoursWorked;
    }
}

// Function calculateTotalSalary
function calculateTotalSalary(employees: Employee[]): number {
    let sum = 0;
    for(const employee of employees) {
        sum += employee.getSalary();
    }
    return sum;
}

// Create examples
const e1 = new FullTimeEmployee();
e1.id = 1;
e1.name = "Hoang Bach Xuan";
e1.salary = 400000;

const e2 = new PartTimeEmployee();
e2.id = 2;
e2.name = "Hoang Xuan Bach";
e2.salary = 20000;
e2.hoursWorked = 7;


const employees: Employee[] = [e1, e2];
console.log(calculateTotalSalary(employees));