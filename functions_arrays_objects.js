// Functions 
    // When we dont the number of parameters being passed onto function,
    // we can handle them all like **arg in python, using Rest operator (...) 
    // which is the same as Spread operator, but changes meaning in this context

    function calculatedCartPrice(num1) {
        return num1
    }
    console.log(calculatedCartPrice( 4)); // 4

    // Wt if there are 4 items in cart?10, 100 etc then the above fails,
    // Hence ... rest operator becomes useful

    function calculatedCartPrice(...num1){
        return num1  // we need to use ... only once in the params
    }
    console.log(calculatedCartPrice(5,3,25)); // [ 5, 3, 25 ]

    // Hence Rest(...) collects all the arguments passed into single array

    // Just like positional and kwargs in python Here also position matters
    function calculatedCartPrice(val1, val2, ...num1){
        return num1
    }
    console.log(calculatedCartPrice(5,24,52,13,32,42)); // [ 52, 13, 32, 42 ]

    // Above we can see that only last 4 values are collected num1,
    // Because val1 ,val2 act positionally collecting one params each

// Passing Objects to fucntions
    const tinderUser ={
        id : 'dasd',
        name : 'sadad'
    }
    function printUser( user){
        console.log(` the user id is ${user.id} and name is ${user.name}`);
    }
    // Note that the function above doesnt know what is being passed into it
    // untill we pass something into it
    console.log( printUser( tinderUser)); // the user id is dasd and name is sadad

    // What if id is changed to ID in object, then function runs with error
    // because it cant validate types of object by itself
    // So becarefull and validate objects as developer before acting on them

// Passing arrays to functions
    const marks = [98, 48, 42,58, 40]
    // passed similar to objects
    function calculateAvg( scores){
        let sum = 0, len = 0
        for(let e of scores){
            sum = sum+ e
            len += 1
        }
        return sum/len
    }
    console.log(calculateAvg(marks)); // 57.2

// IMP : NOTE that arrays/ Objects are passed as reference not value
    // It means their address is given to funtions not their copy
    // If we modify the array passed into funtion, it will reflect on original
    function cheater( scores){
        scores[0] = 100
        scores[1] = 99
    }
    cheater(marks)
    console.log(marks); // [ 100, 99, 42, 58, 40 ]

    // Hence arrays/objects are passed by reference not value
