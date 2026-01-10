// Lesson 1

const getTriangleType = (a, b, c) => {
    if (typeof a !== "number" || a <= 0 ||
        typeof b !== "number" || b <= 0 ||
        typeof c !== "number" || c <= 0) {
        return "Invalid input";
    }
    if(a + b <= c || a + c <= b || b + c <= a){
        return "Not a triangle"
    }
    else if(a === b && b === c){
        return "Equilateral triangle";
    }
    else if(a === b || b === c || a === c){
        return "Isosceles triangle";
    }
    else if(a**2 === b**2 + c**2 || b**2 === a**2 + c**2 || c**2 === a**2 + b**2) {
        return "Right triangle";
    }
    else return "Scalene triangle";
}
console.log(getTriangleType(3, 3, 3));


// Lesson 2
const checkPerfectSquare = (n) => {
    if(typeof n !== "number"){
        return "Invalid input";
    }
    else if((n ** 0.5) ** 2 !== n){
        return "Not a perfect square";
    }
    else return "Perfect square";
}
console.log(checkPerfectSquare(16));