// Continue From Last ...

// In this chapter we will see, more on promises, difference bw callbacks
// and promises, Event loop etc


// Fetch() with .then()

    // We can write the same above code with then, catch
    // Note that we cant use await to for .json() here

    // But instead we can use .then() chaining
    // As said before, If we assume fetchingdata is one big operation
    // we can break into into two async operations we can 
    // serially execute


    // Note that, In each then(), what is being passed is an object
    // ie, outcome of a promise/ promise. In first then() response is a
    // promise object and in second response.json() is a promise

fetch('http://api.github.com/')
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
    // ASYNC 7 json
    // {  current_user_url: 'https://api.github.com/user',
    // current_user_authorizations_html_url: 'https://github.com/settings/connections/applications{/client_id}',
    // authorizations_url: 'https://api.github.com/authorizations',
    // and so on ....}
    

// General Rule for .then() Chaining :

    // If a Promise is returned from within a .then(), 
    // next .then() will wait for that Promise to resolve before executing.
    // And this resolved value is passed as the argument to the callback 
    // function in that next .then().
    
    // If a simple value is returned, 
    // next .then() immediately receives that value.

    // If the callback in .then() returns:
        // A value → The next .then() receives that value.
        // A Promise → The next .then() waits for that Promise to resolve.
        // Nothing (undefined) → The next .then() receives undefined.
        // An error (via throw) → The .catch() in the chain handles it.

// Functions returning promises
    // We generally dont store promises in varible, instead we declare
    // functions that define promises inside and return them. So
    // everytime we call the funcn we get new instance of promise

    function getData(){
        return new Promise( function (resolve, reject){
            let x = true;
            if(x = true){
                resolve('async success')
            }else{
                reject('error')
            }
        })
    }
    // now we can instantiate it and get new promise

    getData()
    .then( (message) =>{
        console.log(message);
    })
    .catch( (err) =>{
        console.log(err);
    })
        // async success
    // Remember the above syntax


// Callbacks vs Promises
    // Before Promises and the async/await syntax were introduced, callbacks
    // were the primary way to handle asynchronous code.
    // A callback function is passed as an argument to another function, 
    // which executes the callback once an asynchronous task is complete

    // Ex : setTimeout(() => {
        //      console.log('This runs after 2 seconds');
        //  }, 2000);

    // Callback Hell: Deeply nested callbacks (especially for sequential tasks)
    // Error Handling:  repetitive and scattered.
    // Note that not all async operations took callbacks.

// Callback hell :

        // doSomething(function (result1) {
        //     doSomethingElse(result1, function (result2) {
        //         doAnotherThing(result2, function (result3) {
        //             doFinalThing(result3, function (result4) {
        //                  console.log('Done!');
        //              });
        //         });
        //      });
        // });

    // Not only is this complex now, if we try to handle error we must
    // do it every lvl of callback adding hell of work

    // Promises and async/await provide a higher-level abstraction that
    // wrap any async operations to make the code readable and manageable.
    // Hence we can avoid callback hell. Here is above code but with promise

        // doSomething()      // As seen before its a fucn returing promise
        // .then( (result1) => { 
        //     return doSomethingElse(result1);
        // })
        // .then( (result2) => {
        //     return doAnotherThing(result2);
        // })
        // .then( (result3) => {
        //     return doFinalThing(result3);
        // })
        // .then( (result4) => {
        //     console.log(result4);
        // })
        // .catch( (error) => {
        //     console.error('An error occurred:', error)
        // });

    // Its more structured and easily we can check erros with catch()

// ----------------------------------

// Event Loop : Callback vs Promises( Refer : Js_Async_Event_Loop.PNG)

    // Event loop handles asynchronous tasks in JS. It handles both 
    // callbacks and promises but differently. It has several phases, 
    // but the two most relevant are:

    // 1. Macro-task Queue: Handles tasks like setTimeout, setInterval, 
    //     I/O ops like mouseclk, other DOM events etc. It is also just
    //     called the 'task queue'.

    // 2. Micro-task Queue: Handles Promise callbacks (like .then, .catch
    //     , .finally) and queueMicrotask. These are given higher priority 
    //     and are executed before the next macro-task. Its also called
    //     high priority/promise queue.

// IMP : Note that, Callbacks and events are not queued to perform 
    // asynchronous operations themselves. Instead, when they are 
    // registered as callbacks or Promises, the browser APIs handle 
    // their asynchronous tasks outside the JavaScript engine or 
    // synchronous call stack. Once these operations are complete, 
    // the results and their associated callbacks are queued in
    // and processed by the event loop, allowing them to execute in the 
    // JavaScript engine’s synchronous environment.

    // When you use callbacks, they are typically queued in the
    // queue after the asynchronous operation complete. Lets elaborate further

// For Macro Callbacks like setTime, DOM event etc here is step by step
// Procedure.

    // 1. Register the Asynchronous Operation:
    //     When you call something like setTimeout or make an HTTP request, 
    //     you register a callback that will run once the asynchronous 
    //     task is done.
    //     The actual asynchronous operation (like counting down the timer
    //     or fetching data from the network) happens outside the JS engine
    //     (in the browser or Node.js environment).

    // 2. Complete the Asynchronous Operation:

    //     When the asynchronous task finishes (Ex : the timer expires, or 
    //     the HTTP response is received), the callback is queued in the macro
    //     -task queue.
        
    // 3. Event Loop Processes the Callback:

    //     The callback in the macro-task queue waits until:
    //         The call stack (current running JavaScript) is clear.
    //         All micro-tasks (like .then callbacks of Promises) are executed.
    //     Once the event loop reaches the macro-task phase, it dequeues 
    //     and executes the callback.

// For Promises, the procedure differs slightly since Promise callbacks 
// like .then() are queued in the micro-task queue

    // 1. Register the Asynchronous Operation:
        // When a Promise is created, its executor function starts immediately,
        // potentially initiating an asynchronous operation (Ex: fetch or setTimeout)
        // The .then or .catch callback is registered to handle the resolution 
        // or rejection of the Promise.

    // 2. Complete the Asynchronous Operation:
        // Once the asynchronous task is complete (e.g., network response is 
        // received), the Promise is resolved or rejected.
        // The associated .then, .catch, .finally callback is queued in the
        // micro-task queue.

    // 3. Event Loop Processes the Micro-task Queue
        // The micro-task queue is processed after the current JavaScript 
        // call stack is cleared.
        // Before the event loop moves on to the next macro-task (e.g., 
        // setTimeout callbacks or DOM events), all pending micro-tasks are 
        // executed.
