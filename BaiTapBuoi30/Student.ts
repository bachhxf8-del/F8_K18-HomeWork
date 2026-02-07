export interface StudentI {
    getName: () => string
    setName: (name: string) => void
    update: (message: string) => void;
    receiveMsg: (message: string) => void
}

export class Student implements StudentI {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }
    update(message: string): void {
        console.log(`Student ${this.getName()} get: ${message}`);
    }
    receiveMsg(message: string) {
        this.update(message)
    }
}
export {};