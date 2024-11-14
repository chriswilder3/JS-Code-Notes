// Objects 
    const car = {
                    model:'toyota',
                    price:1000.0,
                    year:1996,
                    country:'Korea'
                }
// When Object are created using Constructors they form :  Singletons ( Objects.create)
    // When they are created using literals(like car) :they dont form singletons

    // Object creation
    const myobj = {} // empty object
    const user = {
        'name' : "akash",
        state : 'Orissa',
        debt: 1000 
    } // Here Each entry is key,val pair ( like dict in python)
    // NOTE : Unlike in Python, here keys are identifier string but 
    //     But while declaring, keys NEED NOT be given in "quotes", 
    // Js recognizes them as strings automatically
    
    // We can access entries using keys
    console.log(user['name']); // keys need to quoted if we access this way
    console.log(user.name); // This needs no quotes
    // Always try to use 1st method, it works everywhere
    // Ex : when key is defined as "full name": "sachin sd", . method fails

// While declaring symbols as keys, we cant use them directly 
    // Ex : 
    const mySymb = Symbol('key1') // Remember new keyword not used here
    const user2 = {
        'name' : "akash",
        state : 'Orissa',
        debt: 1000,
        mySymb: 'some_val'
    }
    console.log(user2[mySymb]); // undefined
    // Hence symbol itself is not being used as key here. 
    // We need to use [Symbol] while declaring key itself
    const user3 = {
        'name' : "akash",
        state : 'Orissa',
        debt: 1000,
        [mySymb]: 'some_val'
    }
    console.log(user3[mySymb]); // some_val

// What is Symbol? (Brief Explain)
    // AS seen before , they are immutable datatypes used to give
    // properties of objects, unique identifiers, even when they have same name

    const sym1 = Symbol("key1");
    const sym2 = Symbol("key1");
    console.log(sym1 === sym2); // false

    // Hence even though both are key1, their symbols are unique
    // We can now use sym1 and sym2 as keys of an object. 
    // But as seen earlier, with [] : [symb1], [symb2]

// Update Objects
    car["model"] = 'hyundai'
    console.log(car); // { model: 'hyundai', price: 1000, year: 1996, country: 'Korea' }

// IMP : Data security
    // We can FREEZE objects to ensure data modifications are not possible
    Object.freeze(car);
    car['price'] = 2000
    console.log(car); // { model: 'hyundai', price: 1000, year: 1996, country: 'Korea' }
    // Even though it didnt give any error, it silently rejected changes made
    
    // NOte: Once frozen we cant unfreeze it, we can only deep/shallowcopy 
    // to work on it. Ex: use .../assign to shallowcopy only top level properties
    const car2 = {...car}
    car2['price']=2000
    console.log(car2); // { model: 'hyundai', price: 2000, year: 1996, country: 'Korea' }

// Object Methods( Functions):
    const car3= {   model:'toyota',
                    price:1000.0,
                    year:1996,
                    country:'Korea'
                }
    car3.drive = function(){
        console.log('driving..');
    }
    console.log(car3.drive); // [Function (anonymous)]. Since we have not 
        // given any name, JS declares it anonymous. note that in browsers
        // along with this, we get actual function defn back in console.

    console.log(car3.drive()); // undefined. Since the method doesnt return anything
        // non returning functions return undefined.
    car3.drive() // driving.. Actual o/p printed by funcn

// we can access properties of object using this keyword

    car3.drive2 = function drives(){
        this.price -= 10;
        return this.price
    }
    console.log(car3.drive2); // [Function: drives]. This function has name now
    console.log(car3.drive2()); // 990. as expected