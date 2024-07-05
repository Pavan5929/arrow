

//Normal function
function sum(num1, num2) {
    console.log("Normal function")
    let res = num1 + num2;

    return res
}



//Arrow function
let asum = (num1, num2) => {
    console.log("Inside arrow function")
    let res = num1 + num2;

    return res
}


//Arrow function calling
// console.log("sum= "+ asum(6,9) )

//Normal function calling
// console.log("sum= "+ sum(9,9) )




function sum2(num1, num2) {
    return num1 + num2;

}
//Form1 if arrow function has single statement inside body

let asum2 = (num1, num2) => num1 + num2;

// console.log(asum2(7,8))


//Form2 if arrow function has single input

let asum3 = num1 => num1 * num1;

// console.log(asum3(7))


//Form3 if arrow function has no inputs

let asum4 = () => x = 10;

console.log(asum4())

