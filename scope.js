// Why were let created when var existed before?
    // because var doesnt follow block scope
    // note here block means code stmts inside {}, including if,function etc
    {
        var x =12
    }
    console.log(x); // 12

        // Hence var is accessible from anywhere, aslong as its not in function
    function f(){
        var y = 1
    }
    // console.log(y); this gives not defined error
    if( true){
        var z = 34
    }
    console.log(z); // 34 This is perfectly valid

    // Hence except in functions, var never follows block scoping
    // Why this is problem? Because functionality of var is over here
    // It shouldnt exist after that. Imagine several users given different 
    // blocks where they can declare their varibles.
    // If we use var for this, they dont have seperate copies, its the single 
    // object they all keep operating on. A huge problem

    // So let and const were created

// let,const
    if( true){
        let a = 10
        const b =43
        var c =34
    }
    console.log(c); // 34 obiviosly
   // console.log(a); // ReferenceError: a is not defined
   // console.log(b); // ReferenceError: b is not defined

// Hence let and const are block scoped.
// For detailed explaination look at Namaste Javascript by Akshay saini

    // This js script has been linked to scope.html and 
    // going to browser and putting breakpoint we can verify things

    // There 3 scopes :
    // For var - global scope (same window scope started on start of run)
    // For let inside {}, - block scope
    // For let outside {} , - script scope

    // Note that when {} ends ie. block is over, the blockscope variable 
    // is deleted, only script and global scopes persists throughout program
    // Note that if another {} comes, another new blockscope is created 
    // along with let, const inside it.

    let d = 432
    console.log(d); // 432 
    // The above let is in script scope

// Another 2 huge issues to consider is shadowing and modification
    // of global variables by variables inside a block {}

    var op = 23
    {
        var op = 65
        //console.log(op); // 65
    }
    //console.log(op); // 65

    // Redeclaring the var not only shadows the global copy, it even modifies 
    // the original. This happens remeber because var attaches to global/window
    // object. only single copy of var of same name is maintained throughout.

    let tp = 23
    {
        let tp = 65
        //console.log(tp); // 65
    }
    //console.log(tp); // 23

    // Here block let shadows the let outside. Remember this happens since
    // there are two copies of let attached to two different scope objects
    // one let inside block scope prints 65, another which is attached to script
    // prints 23 in its own scope.
    //------------------------------

    var lp = 23
    {
        let lp = 31
        console.log(lp); // 31
    }
    console.log(lp); // 23

    // Let inside block scope shadows the var outside since, its inside
    // its own scope. it can't reach outside its region to modify
    // the var value in the global region. It also cant reach outside to
    // be able to create conflict with var due to same name.
    // So let in the block scope here can shadow var outside but
    // can not modify the var val
    // ------------------------

    let kp = 49
    {
        //var kp = 341
        console.log(kp);
    }
    console.log(kp);

    // SyntaxError: Identifier 'kp' has already been declared

    // Note that var can not shadow the let ouside. Hence
// This is called Illegal Shadowing. But also it cant modify the kp outside.
    
    // Why this happens?
    // Note that var has global scope always. It can be accessed
    // anywhere outside also. hence it can cross regions
    // to create conflict with let outside. Compiler does not know
    // which kp should be referred to.


// Becareful NOt to declare variable inside loops/if etc since the loop/temp
    // var value may persist outside that block and overwrite something same
    // outside

// ALso note that, Global scope inside the browser and inside node.js
    // are different from each other
    
    // In a browser, the global object is window. 
    
    // Variables declared with var at the top level of a script are 
    // properties of the window object. 
    
    // Variables declared with let or const are not added to the window 
    // object. They exist in the global scope but are not attached as
    // properties of the global object. as seen before they are attached 
    // to the script scope.

    // In Node.js, the global object is global, not window.
    // Variables declared with var, let, or const at the top level 
    // in a Node.js module are not properties of the global object. 
    // They are local to the module.






