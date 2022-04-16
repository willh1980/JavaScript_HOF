console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {

    return function (plusnumber =0){
        return number + plusnumber;
    }
}

const plus15 = plus(15);

console.log(plus15(10))
