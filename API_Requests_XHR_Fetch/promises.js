// Promises if we go with its name, is something to do with operations 
    // that we know are will be executed later not now. But there
    // is no guarantee that they will succeed.

// Actually in JS, promise is a JS object. It represents eventual
    // completion (or failure) of an asynchronous operation and its value.

    // Promises are not necessarily just network requests.
    // It could be fileread, database operations, cryptographic opera.ns

// A Promise can exists in 3 states
    // 1. Pending : It is the initial state. The operation associated with
            // the promise is not yet complete and result not available yet
        
    // 2. Fulfilled : It means the operation is completed successfully
            // and promise holds the result of the operation
        
    // 3. Rejected : The operation failed and promise has the reason
            // for failure.

    // Promises also help us deal with callback hell(deep nested callback)
    // Note that We can create Promises or we can consume ones already built.
    // ----------------------------------

// We can create promises using constructor, it takes function callback
    // as param. This callback itself takes 2 arguments resolve and reject
    // These 2 args themselves are callbacks that return with value/ error
    // depending on fate of operation.

    const promiseOne = new Promise( function (resolve, reject){
        // Here we can do the Async tasks
        // ex : DB, file read, Async http request etc
        // For simplicity lets use setTimeout

        setTimeout(function(){
            console.log(' ASYNC done');
        },1000)

    })

    // Now that we created a promise, we will consume it .
    // Note : resolve has direct connection with .then(), reject with .catch()
    // .then() takes a callback that is also executed on success 
    promiseOne.then( function(){
        console.log(" Successful");
    })
    // Op : ASYNC done

// So the setTimeout ran correctly but .then() never executed why?
    // Because we havent connected resolve with .then() 
    // ie, we need to run the resolve within promise callback exactly at
    // the point reaching which would signify Success of Promise completion

    // In promiseOne, We know that its success if we get past log in setTimeout
    // Hence we can call resolve there

    const promiseTwo = new Promise( function(resolve , reject){
            setTimeout( function(){
                console.log('ASYNC OPERAN done');
                resolve()
            }, 2000)
    })
    promiseTwo.then( function(){
        console.log('PromiseTwo Successful');
    })
    // ASYNC OPERAN done
    // PromiseTwo Successful

// Note that its not necessary to store Promise in variable, we can declare
    // promise and also define then(), catch() in one go

    new Promise( function( resolve, reject){
        setTimeout( function (){
            console.log('ASYNC');
            resolve()
        }, 2000)
    }).then( function(){
        console.log('OPERN Success');
    })
    // ASYNC
    // OPERN Success

// AS said earlier, The resolve is not just run for validation, it used to
    // return some result values on successful completion

    const promiseThree = new Promise( function(resolve, reject){
        setTimeout( function(){
            console.log('ASYNC 3 ');
            // Now here we can return result values with resolve
            // Though result can be of any form, in most cases like
            // network call, it will an object. ex: server returns user obj
            resolve({ uname:"sachin", id:123});
        }, 2000)
    })

    // Now the result/returned value is a arg in callback function of then() 
    promiseThree.then( function( user ){
            console.log(user);
    })
    // ASYNC 3
    // { uname: 'sachin', id: 123 }

// Lets look at how to use both resolve and reject whenever 
    // an operation may end up both success or error, We can use
    // condition based checking to call which one.

    const promiseFour = new Promise( function(resolve, reject){
        setTimeout( function(){
            console.log('ASYNC 4');
            let error = true; // We are setting it for demo,but it can F/T both
            if( !error ){
                resolve({ uname:"sachin", id:123});
            }else{
                reject({error:' Internal Error'})
            }
        }, 2000)
    })

    // Note that catch must be attached to the promise after then().
    // That is we must chain them
    promiseFour.then( function( user ){
            console.log(user);
    }). catch( function(err){
            console.log(err);
    })
    // ASYNC 4
    // { error: ' Internal Error' }

// THEN chaining : 
    // What if we wanted to return a value from then()?
    // we cant directly return val from within .then()

