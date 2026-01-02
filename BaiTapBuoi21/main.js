// Task 1
const classA = ["An", "Binh", "Chi"];
const classB = classA;
classB[0] = "An Updated";
console.log(classA);
// When classB is assigned from classA, both variables point to the same memory address (for example, 0x01). Therefore, changing the array through classB updates the same data in memory, causing classA to change as well.



// Task 2
let x = "10";
let y= 2;
console.log(x + y);
console.log(x - y);
console.log(x * "3");
console.log("Hello" - y);
// In JavaScript, the + operator can perform string concatenation as well as numeric addition. Since x is a string ("10"), y is converted to a string, resulting in "102". On the other hand, operators like - and * only work with numbers, so JavaScript converts the string "10" to the number 10, giving the result 8.
// NaN means Not a Number. It occurs because JavaScript tries to convert "Hello" into a number for the subtraction operation, but the conversion fails, so the result is NaN.


// Task 3
let age, mathScore, isVIP, canEnter

// 3.1
age = 9
mathScore = 10
isVip = false
canEnter = (age >= 10 && mathScore > 7) || isVip
console.log(canEnter)

// 3.2
age = 9
mathScore = 10
isVip = true
canEnter = (age >= 10 && mathScore > 7) || isVip
console.log(canEnter)

// Yes. The expression age < 10 checks for ages below 10. When the NOT operator (!) is applied, it reverses the condition, making the result true for ages 10 and above. Therefore, !(age < 10) is logically equivalent to age >= 10.

// Task 4
const laptop = {
    brand: "Dell",
    price: 1000,
    spec: { ram: "8GB", ssd: "256GB" }
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand);
console.log(laptop.spec.ram);
// Predict results:
// Apple
// 16GB

// When myLaptop is assigned from laptop, both variables point to the same memory location. As a result, updating myLaptop.brand changes the value stored at that memory location, so laptop.brand is updated as well.
// Similarly, mySpec references the nested spec object inside laptop. Updating mySpec.ram directly modifies the same nested object, so laptop.spec.ram is updated as well.

