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