// Immediately Invoked Function Expressions

    // Some Functions need to be run as soon as they created 
    // Ex : DB connection funn. IIFE are those funcs

    // But since global scopes tend to add too many variables/fuctions objects
    // to the scope thus producing conflicts and weird behaviours.
    // IIFEs help us avoid that

    // For this, just like in arrow functions, add () to the whole definition
    // of object which encapsulates the funcn and add another () to execute it
    // also makesure to add ;
    (function (){
        console.log('printing.....');
    }) (); // printing.....

    // (function_defn) ();

// IMP : Always make sure IIFE ends with ; otherwise it wont know how to stop
    // It will give errors

    // We can also use arrow function to simply it further

    ( () => console.log('Hello') )();

// We can even pass args to the IIFEs
    // just add parameters to function defn part and correspoding
    // args to execution part () at the end

    (( num1, num2) => console.log(num1 + num2))( 10, 20); // 30

// We can even give names to IIFE called named IIFes

    ( function adder() {
        console.log('adding..')
    })(); // adding..

// Again dont forget ;  at the end