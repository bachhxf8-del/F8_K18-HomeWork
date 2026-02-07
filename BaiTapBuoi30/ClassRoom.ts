import { Student, type StudentI } from "./Student";

export interface ClassRoomI {
    getName: () => string
    setName: (name: string) => void
    addStudent: (student: Student) => void
    removeStudent: (studentName: string) => void
    notify: (message: string) => void
    postAnnouncement: (message: string) => void
}

export class ClassRoom implements ClassRoomI {
    private name: string;
    private students: StudentI[];

    constructor(name: string) {
        this.name = name;
        this.students = [];
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    removeStudent(studentName: string): void {
        const index = this.students.findIndex((s: StudentI) => s.getName() === studentName);
        if (index === -1) {
            throw new Error(`Student ${studentName} not found !`);
            return;
        }
        this.students.splice(index, 1);
    }

    notify(message: string): void{
        if (this.students.length === 0) {
            throw new Error(`The class ${this.getName()} has no students yet`);
            return;
        }
        this.students.forEach(student => student.update(message))
    }

    postAnnouncement(message: string): void {
        console.log(`New message: ${message}`);
        this.notify(message);
    }
}
export {};