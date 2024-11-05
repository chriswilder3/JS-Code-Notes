// This keyword
    
    // Whenever we access members of object inside object functions, we 
    // use this keyword to refer to current context, which is the
    // reference of current object

    const user ={
        name : 'sachin',
        usn : 12042,
        showMessage : function (){
            //console.log(` users name is ${this.name} and usn : ${this.usn}`);
        },
        printinfo :function(){
            console.log(this);
        }
    }

    user.showMessage() //  users name is sachin and usn : 12042

    // Note that inside functions, objects etc, this has its own context 
    // So what does 'this' refer in outermost level, ie, in global space

    user.printinfo() 
    // Note that this function prints the context ie, meaning of 'this' in
    // which the object itself
    // o/p :  {
            // name: 'sachin',
            // usn: 12042,
            // showMessage: [Function: showMessage],
            // printinfo: [Function: printinfo]
            // }

    user.name = 'akshay'
    // Now we modified the object, but note that we are outside the object
    // So this inside object gives name 'sachin' what will this here give?

    user.printinfo()
    // Op:   {
            // name: 'akshay',
            // usn: 12042,
            // showMessage: [Function: showMessage],
            // printinfo: [Function: printinfo]
            // }

    console.log(this); // {}
    // In the Node.js this in the global will point to empty object
    // its empty because we havent added anything to it.

    // But in the browsers, this will point to global object called window

// AS said before this depends on context. for functions it gives very 
    // different response

    function sample(){
        console.log(this);
    }
    sample()
        // Op : Object [global] {
                // global: [Circular *1],
                // clearImmediate: [Function: clearImmediate],
                // ........so on....}
    // So inside function this gives huge list of parameters, 
    // But Does this also hold properties as in the object?

    function demo(){
        const name = 'jane'
        console.log(this.name);
    }
    demo() // undefined
    // hence we are not able to access properties inside funcn using this
    console.log('----------------------');

// Arrow Function : 
    // While declaring function expression or being passed as parameter
    // or while being returned in another funcn, if we remove funtion keyword 
    // and use => after () we get arrow functions

    const carDrive = () => {
        const name = 'toyota'
        console.log(this.name); 
        console.log(this);
    }
    carDrive() 
    // undefined
    // {}
    // Hence inside the Arrow funtion, this is empty object and properties
    // also can not be accessed using this

// Implicit return arrow funcn :
    // Just like lambda fun in Python we dont have to give {}, and return 
    // keyword in Arrow function, if its single line and returns immediately

    const quickadder = (num1,num2) => num1 + num2
    console.log(quickadder(8,2)) // 10

    // if we use {} we have to use return this is called Explicit Return
    // we can use () for clarity

    const quickadder2 = (num1,num2) => (num1+num2+100)
    console.log(quickadder2(8,2)) // 110

    // If we want to return JS object from implicit return arrow function
    // we need to add () since they have {} in themselves

    const receiver = () => { name : 'sachin'}
    console.log(receiver()) // undefined

    const receiver2 = () => ({ name : 'sachin'})
    console.log(receiver2()) // { name: 'sachin' }
    
// Arrow functions are used where shorthand quick functions are needed
// ex : loop foreach, etc 