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
            let error = false; // We are setting it for demo,but it can F/T both
            if( !error ){
                resolve({ uname:"sachin", id:123});
            }else{
                reject({error:' Internal Error'})
            }
        }, 2000)
    })

    // Note that catch must be attached to the promise after then().
    // That is we must chain them

    // promiseFour.then( function( user ){
    //         console.log(user);
    // }). catch( function(err){
    //         console.log(err);
    // })

    // ASYNC 4
    // { error: ' Internal Error' }

// THEN chaining : 
    // What if we wanted to return a value from then()?
    // we cant directly return val from within .then()

    // const userInfo = promiseFour.then( (user) => {
    //     console.log(user['uname']);
    //     return user
    // })
    // It gives u error : ERR_UNHANDLED_REJECTION

    // Hence for returning value from then we use .then() chaining

// Then() chaining is a technique, where multple then() calls are linked
    // together to handle sequential asynchronous operations. Here
    // each then() can process the result of previous one and
    // return the result of then() after it.

    // If a .then() callback returns a value, it is passed to 
    // the next .then().


    // But also dont forget to add catch at the end also

    promiseFour.then( (user) => {
        console.log(user['uname']);
        return user; // As said earlier we cant return as it is
                    // But through chaining, the result of this then
                    // can be passed to next one. Which means
                    // Whatever we are returning here is taken up by the
                    // next then()
    }).then( (user)=> {
            console.log(user['id']);
                    // Now just execute the end
    }).catch( (err) =>{
            console.log(err);
    })

    // ASYNC 4
    // { error: ' Internal Error' }

// What if we change error = false

    // ASYNC 4
    // sachin
    // 123

// Why we use THEN() chaining : 

    // 1. Each then() waits for the previous one to resolve before
    // executing its callback function.

    // 2. If any promise in the chain is rejected, the control jumps
    // to the first .catch() in the chain.

    // Lets look at a complete example to understand How its used

    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from server");
        }, 4000);
    });
    
    fetchData
        .then((data) => {
            console.log(data); // Logs: "Data fetched from server"
            return "Processing data"; // Passing value to the next .then()
        })
        .then((result) => {
            console.log(result); // Logs: "Processing data"
            return "Final result"; // Passing another value
        })
        .then((final) => {
            console.log(final); // Logs: "Final result"
        })
        .catch((err) => {
            console.error("Error occurred:", err);
        });
    // Op : Data fetched from server
    //      Processing data
    //      Final result  

// In essence, it can used to break down asynchronos operation
    // into series of operations, where one executes after other in
    // sequential manner.

// Finally() :
    // Regardless of whether async opern succeded/ failed, finally() will
    // run at the end definitely

    const promiseFive = new Promise( function(resolve, reject){
        setTimeout( function(){
            console.log('ASYNC 4');
            let error = false; // We are setting it for demo,but it can F/T both
            if( !error ){
                resolve({ uname:"sachin", id:123});
            }else{
                reject({error:' Internal Error'})
            }
        }, 5000)
    })

    promiseFive
    .then( function( user){
        console.log(user['uname']);
        return user
    })
    .then( (user) => {
        console.log(user['id']);
    })
    .catch( (error) => {
        console.log(error);
    })
    .finally( () => {
        console.log('I RUN REGARDLESS!');
    })

    // When error = true, Op:
                // ASYNC 4
                // { error: ' Internal Error' }
                // I RUN REGARDLESS! 
        // So promise encountered failure, catch executed and finally() too

    // when error = false, Op:
                // ASYNC 4
                // sachin
                // 123
                // I RUN REGARDLESS!
        // So promise operation succeeded, and then() stmts executed
        // sequentially, at the end finally() ran.

    // Hence finally() runs regardless of resolve/reject.

    // -------------------------------------------------------

// ASYNC AWAIT : 
    // Its not necessary that, we need to handle/consume promises with
    // then() and catch().
    // async, await can also do the same, but pause the execution untill
    // promise is resolved.

    // It seems like synchronous comm. waiting but the difference is,
    // With asyncawait we control when to pause execution, which is where
    // await keyword is declared. 

    // async is actually a keyword applied to function to make it
    // asynchronous. await keyword must be inside async funcn only.
    // whenever control reaches await, function pauses execution untill
    // promise is resolved and returns a value. The return value can be

    const promiseSix = new Promise( function(resolve, reject){
        setTimeout( function(){
            console.log('ASYNC 6');
            let error = true; // We are setting it for demo,but it can F/T both
            if( !error ){
                resolve({ lang:"JS", year:1995});
            }else{
                reject({error:' Internal Error'})
            }
        }, 6000)
    })

    async function getUser(){
        // But the want to store val of result of promise
        const result = await promiseSix;
        console.log(result);
    }   
    // Dont forget to call the async function defined by uncommenting below
    // getUser()

            // ASYNC 6
            // { lang: 'JS', year: 1995 }

// Catch/ reject with async await :

    // Note that asyncawait doesnt handle catch/reject gracefully
    // lets set error = true in promiseSix

            // ERROR : This error originated either by throwing 
            // inside of an async function without a catch block, 
            // or by rejecting a promise which was not handled with .catch()

    // Hence we must add try catch block to handle catch gracefully.
    async function getData2(){
        try {
            const res = await promiseSix;
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }
    getData2() // Dont forget calling the funcn
        // ASYNC 6
        // { error: ' Internal Error' }

    // The reject() function in promise is directly related to 
    // catch of trycatch in async function.  Heres How.
    
    // Rejected Promise Throws an Error. Using await on a rejected promise
    // automatically throws the rejection reason as an error. The catch 
    // block catches this error and handles it appropriately.

    //-------------------------------------------

// Practical with fetch(), async():

    // Lets consume promise that does network call to API
    // url : https://jsonplaceholder.typicode.com/users

    // For doing API request we can use fetch(), note that it is used
    // just like any other promise , just pass url to it. Hence
    // we dont need to create new promise, we just consume fetch()
    // inside async funcn

    const fetchUserData = async function(){
        try {
            const data =
            await fetch('https://jsonplaceholder.typicode.com/users')

            // The form of data received will depend of this API/server
            // But the the response we get is an object of fetch()
            // This response oject is not in json format. We
            // need to convert in to json, for which
            // we will use its own method called .json()

            // convert it to json
            console.log(typeof data) // object
            console.log(data.json());

        }
        catch(err){
            console.log(err);
        }
    }
    fetchUserData();

    // Promise { <pending> }

    // So whats wrong? The JS is saying it is still awaiting a promise
    // But we already put await onto fetch.

 // IMP : complex computation & functions like .json() are asychronous
    // return a promise not a value. This is the promise that was 
    // printed on the console. Hence we need to await for .json() too

    const fetchUserData2 = async function(){
        try {
            const data =
            await fetch('https://jsonplaceholder.typicode.com/users')

            // The data received will be in the form of string for this API
            // convert it to json
            data_json = await data.json()
            console.log('type : ',typeof data_json); // type :  object 
            console.log(data_json);

        }
        catch(err){
            console.log(err);
        }
    }
    fetchUserData2();

    // [
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',     
    //     username: 'Bret',
    //     email: 'Sincere@april.biz',
    //     address: {
    //       street: 'Kulas Light',   
    //       suite: 'Apt. 556',       
    //       city: 'Gwenborough',     
    //       zipcode: '92998-3874',   
    //       geo: [Object]
    //     },
    //     phone: '1-770-736-8031 x56442',
    //     website: 'hildegard.org',
    //     company: {
    //       name: 'Romaguera-Crona',
    //       catchPhrase: 'Multi-layered client-server neural-net',
    //       bs: 'harness real-time e-markets'
    //     }
    //   },
    //   ...}]


    // We cant use JSON.parse for response data of fetch, need to .json()

// JSON.parse VS JSON.stringify() VS .json()

    // Look at JSON_VS_json().PNG for comparison

    //.json() is a method available on the Response object returned by fetch(). 
    // It parses the JSON string in the response body into a JS object.
    // Use when working with response of an HTTP request 

    // JSON.parse() is a global JS method that converts a JSON string
    // into a JavaScript object.
    // Use it when you have a JSON string (e.g., received from an API,
    // loaded from local storage) and need to work with it as a JS object.

    // JSON.stringify() is a global JS method that converts a JS object
    // or value into a JSON string.
    // Use when you want to send a JS object as JSON (e.g., in an API request)
    // or store it as a string (e.g., in local storage).

// Fetch() with .then()

    // We can write the same above code with then, catch
    // Note that we cant use await to for .json() here

    // But instead we can use .then() chaining
    // As said before, If we assume fetchingdata is one big operation
    // we can break into into two async operations we can 
    // serially execute

    // CONTINUED in promise2.js

    // Note that, In each then(), what is being passed is an object
    // ie, outcome of a promise/ promise. In first then() response is a
    // promise object and in second response.json() is a promise

    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => {
        console.log('ASYNC 7')
       return response.json()
    })
    .then( (response_json) => {
        console.log('ASYNC 7 json')
        console.log(response_json);
    })
    .catch( (error)=>{
        console.log(error);
    })

    // ASYNC 7
    // Promise { <pending> }

    // Again give await to json / or we can 
