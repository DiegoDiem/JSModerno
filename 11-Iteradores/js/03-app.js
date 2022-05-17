// Fizz Buzz

// 3 6 9 12... Fizz
// 5 10 15 20 ... buzz
// 15 30 45... FizzBuzz!

for (let i = 1; i < 100; i++) {
    if (i%3===0 && i%5===0) {
        console.log(i+' FizzBuzz!!!');
    }else
    if (i%3===0) {
        console.log(i+' Fizz');
    }else if (i%5===0){
        console.log(i+' Buzz');
    }
    
}