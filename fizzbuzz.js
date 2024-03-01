const numbers = [1, 34, 54, 21, 22, 10, 5, 3, 15, 65, 70];

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];


   if (num % 3 === 0 && num & 5 === 0) {
        console.log(num, "FizzBuzz");
    }

    if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0 ) {
        console.log(num, "Buzz");
    }
}
