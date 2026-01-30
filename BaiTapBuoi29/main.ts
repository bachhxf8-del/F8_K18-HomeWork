// Create interface EmployeeI
interface  EmployeeI {
    getId: () => number;
    getName: () => string;
    setName: (name: string) => void;
    getSalary: () => number;
    setSalary: (salary: number) => void;
    calculateSalary: () => number;
}

// Create abstract class Employee
abstract class Employee implements EmployeeI {
    private id: number;
    private name: string;
    private salary: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    };
    public setName(name: string){
        this.name = name;
    };
    public getSalary(){
        return this.salary;
    };
    public setSalary(salary: number){
        if (salary <= 0){
            console.log("ERROR");
        }
        else this.salary = salary;
    };
    abstract calculateSalary(): number;
}

// Create class Developer
class Developer extends Employee{
    private overtimeHours: number;
    constructor(id: number, name: string, salary: number, overtimeHours: number) {
        super(id, name, salary);
        this.overtimeHours = overtimeHours;
    }
    public getOverTimeHours(){
        return this.overtimeHours;
    }
    public setOverTimeHours(overtimeHours: number){
        this.overtimeHours = overtimeHours;
    }
    public calculateSalary(): number {
        return this.getSalary() + this.overtimeHours * 50000;
    }
}

// Create class Manager
class Manager extends Employee{
    private teamSize: number;
    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary);
        this.teamSize = teamSize;
    }
    public getTeamSize(){
        return this.teamSize;
    }
    public setTeamSize(teamSize: number){
        this.teamSize = teamSize;
    }
    public calculateSalary(): number {
        return this.getSalary() + this.teamSize * 200000;
    }
}

// Testing
const dev = new Developer(1, "Hoang Xuan Bach", 5000000, 4);
dev.setSalary(-999)
// ERROR
dev.setSalary(4000000)
console.log(dev.getSalary());
// 4000000
console.log(dev.calculateSalary());
// 4200000

const manager = new Manager(2, "Bach Hoang Xuan", 4000000, 15);
console.log(manager.calculateSalary());
// 7000000