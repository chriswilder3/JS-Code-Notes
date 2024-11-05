// Scope level
// Note that from this point we are only talking about let,const only not var

function one(){
    const usn = 2342 

    function two(){
        const name = 'sachin'
        console.log(usn); // 2342
    }
    // console.log(name); // ReferenceError: name is not defined
    two()
}   
one()
    // Note that, funcn two can can access the variables of the one, since
    // Its lexical environment is the variable and methods of its parent
    // But one can not access the local variable of two,
    // since they are function scoped and in a sense private to its scope

    // This is also a basic understanding of closure, that function is able
    // to access and remember the lexical environment of its parent and its 
    // own code. TOgether these two things are called closure. 

    // The same concept can be observed with blocks like if also

if( true ){
    const username = 'sada223'

    if( username == 'sada223'){

        const address = 'banglore'
        console.log(username + " " + address); // sada223 banglore
    }

    // console.log(address); // ReferenceError: address is not defined
}
// console.log(username); // ReferenceError: username is not defined

// Function statement(Declaration) vs Function Expression

    function addone(num){
        return num+1
    } // This is called funn stamt or declaration

    const addtwo = function ( num ) {
        return num+2 
    } 
    console.log(addtwo(7)); // 9

    // Now this addtwo is called expression, since now function is being 
    // passed around just like any other variable. This ability
    // is also called first class function. I.e functions can be stored as
    // varialbe, passed as arg to another funcn, and returned from another fun

// Hoisting 
    // functions and variable(with some catch) can be accessed even
    // before their declaration stmts.
    // Watch Namaste Javascript for good explain

    console.log(addthree(23)) // 26

    function addthree(num){
        return num +3
    }
    // This is perfectly valid in JS, 
    // this happens since runs code in two phases
    // 1. In this phase Js allocated memory to variables and funcns
    // 2. actual execution of code takes place

    // For vairables, memory is allocated but undefined val is given 
    // in the first phase, before assigning actal vals in 2nd phase

    // Incase of functions, in 1st phase entire code is copied into
    // the memory allocated to it during 1st phase. Hence its ready to
    // to be executed even before control reaches its declaration code.

// Note : The function expressions are treated as any other variable
    // hence are allocated undefined in 1st phase. They cant be
    // run before their declaration

    // console.log(addfour(65));
        // ReferenceError: Cannot access 'addfour' before initialization
    const addfour = function( num ) {
        return num + 4
    }


