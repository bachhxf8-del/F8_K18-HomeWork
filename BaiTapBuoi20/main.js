// Part 1
// 1.1
let name = "Hoang Xuan Bach"
let age = 21
let isStudent = true
console.log("Name: ", name)
console.log("Age: ", age)
console.log("Is student: ", isStudent)

// 1.2
let a = 5
let b = 10
a = 10
b = 15
console.log(a)
console.log(b)

// Part 2
// A const variable cannot have its value changed, while a let variable can.
// Use const when you are certain that the variable will not be reassigned a value during program execution.
// The following code is incorrect because a constant variable cannot have its value changed.


// Part 3
// 100 (Number)
// "100" (String)
// True (Boolean)
// [1, 2, 3] (Object)
// {name: "An", age: 20} (Object)
// null (Object)
// undefined (undefined)

let student = {
    name: "Ronaldo",
    age: 43,
    scores: [9, 10, 10]
}
console.log(student)

// Part 4
let x = "1000"
x = Number(x)
console.log(x)
console.log(typeof x)

let y = 1000
y = String(y)
console.log(y)
console.log(typeof y)

let isRonaldo = true
isRonaldo = String(isRonaldo)
console.log(isRonaldo)
console.log(typeof isRonaldo)

// Part 5
// Boolean(0) (false)
// Boolean(1) (true)
// Boolean("") (false)
// Boolean("hello") (true)
// Boolean(null) (false)
// Boolean([]) (true)

// Part 6
const numbers = [4, 3, 1, 5, 1]
console.log(numbers[0])
console.log(numbers[4])
// Because numbers already exists in memory, and when you assign a = numbers, a is set to reference that same memory location rather than creating a new copy.