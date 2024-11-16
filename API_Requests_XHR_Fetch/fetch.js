// unlike XMLHttpRequest, which uses callbacks, Fetch is promise-based.
    
    // You pass it a Request object or a string containing the URL 
    // to fetch, along with an optional argument to configure the request.

    // The fetch() function returns a Promise which is fulfilled with 
    // a Response object representing the server's response. 
    // You can then check the request status and extract the body 
    // of the response in various formats, including text and JSON

   async function f1( ){
        try{
            const url = 'https://catfact.ninja/fact'
            const response = await fetch(url)
            // We passed only URL string with no extra options.

            const data = await response.json()
            console.log(data['fact'].slice(0,100));
        }
        catch(err){
            console.log(err);
        }
   }
   f1(); // The normal body temperature of a cat is between 100.5 °.....

// Fetch Status() and .ok() :

   // The promise returned by fetch() will reject on some errors, such as
   // a network error or a bad scheme. However, if the server responds
   // with an error like 404, then fetch() fulfills with a Response,
   // so we have to check the status before we can read the response body.

   // Response.status property tells us the numerical status code, 
   // Response.ok property returns true if the status is in the 200 range.

   async function f2(){
     const url = 'https://catfact.ninja/fact'
     try{

        const response = await fetch(url)
        // Even though promise is not rejected, there could be server
        // errors like 404. Hence check them first
        if( !response.ok ){
            // Now either throw new error or just print status in log
            throw new Error(`error encountered : ${response.status}`)
        }else{
            console.log(`success : ${response.status}`);
            const data = await response.json()
            console.log(data['fact'].slice(0,100));
        }
     }
     catch(err){
        console.log();
     }
   }
   f2()
   // success : 200
   // In just 7 years, one un-spayed female cat and one un-neutered 
   // male cat and their offspring...



// fetch() function in JavaScript operates in two phases. 

//   1. Initial Phase (Setting up variables and making a request):
//    When the fetch statement is executed, it initiates a network request. 
//    At this point:
//         fetch sets up internal variables to track the request.
//         It immediately returns a Promise, which will eventually resolve 
//         with a Response object (if the request is successful) or 
//         reject (if there’s an error).

//  2. Second Phase (Fetching and loading data):
//      The actual network request is sent, and the browser waits for 
//      the server's response. During this time:

//          The data is fetched from the server (the "fetching" part).
//          Once the response is received, the returned promise is resolved 
//          with the response object.
//          The response object can be processed (e.g., converting it to JSON, 
//          text, or another format) further.

// -------------------------

// Promise Mechanism and Fetch :

   // When you call fetch or any function that returns a Promise, 
   // two callback queues are involved:

    // onFulfilled: Holds callbacks to execute when the Promise is resolved successfully.
    // onRejected: Holds callbacks to execute when the Promise is rejected (e.g., due to a network error or a non-200 status).

    // These callbacks are registered when you call .then() or .catch().
    // So here is summary of promise mechanism with 2 phases from before

// As we know, Promises can be in 3 states:

    //     Pending:     The initial state; 
    //     Fulfilled:   The operation completed successfully, and the 
    //                  onFulfilled handlers are executed.
    //     Rejected:    The operation failed, and the onRejected handlers 
    //                   are executed.

    // onFulfilled: A queue of success callbacks, triggered when the promise
    // is resolved. all then() callbacks are appended to this.

    // onRejected: A queue of failure callbacks, triggered when the promise 
    // is rejected. all catch() callbacks are appended to this.

    // Chaining:
    // Each .then() or .catch() returns a new Promise, allowing for chaining
    // and composition of asynchronous logic.

// Complete Fetch() lifecycle : 

// Initial Phase:
    // fetch() returns a Promise in the pending state.
    // A request is initiated, but the actual network operation hasn't
    // completed yet.
    // A Response object is prepared in the global memory, but it is 
    // empty at this point since the data hasn't arrived yet.

    // Two empty arrays are maintained internally:
    //     onFulfilled: []
    //     onRejected: []

    // Registering Callbacks: When .then() or .catch() is called:
    // onFulfilled: [callback1]
    // onRejected: [callback2]

// Success Scenario:
    //     When the network request succeeds:
    //     The Promise is resolved, moving to the fulfilled state.
    //     All functions in onFulfilled are executed sequentially.

    //     The HTTP status code, headers, and body (if any) are received.
    //      These values are assigned to the Response object prepared earlier in the global memory.

// Error Scenario:
    //     If the network request fails:
    //     The Promise is rejected, moving to the rejected state.
    //     All functions in onRejected are executed sequentially.

    //     An Error object containing information about the failure 
    //     is passed to the first rejection callback.

// Note that variable, queue creation are done by synchronous part of fetch
   // actual network operation is done asynchronously by the Web/ node env.
