// While

let i=0; // inicializar el while

// while (i<10) { // Condicion
   
//     console.log('Num '+ i);


//     i++; //Incremento
// }




while (i<100) {
    if (i%3===0 && i%5===0) {
        console.log(i+' FizzBuzz!!!');
    }else
    if (i%3===0) {
        console.log(i+' Fizz');
    }else if (i%5===0){
        console.log(i+' Buzz');
    }
    i++;
}