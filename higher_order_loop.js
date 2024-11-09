// These loops are applied on arrays/objects

// For of loop
    // It works only on iterable objects
    // Here are iterables : 
    // Arrays, Strings, Maps, Sets, Typed arrays etc
    // IMP : Plain JS object like below is not iterable

    const person = { name : 'sac',
    score : 64,
    wt : 74}

    // for (const i of person) {
    //     console.log(i);
    // }   // TypeError: person is not iterable

    // Lets try for iterable like array

    const scores = [1,4,5,2,6,3]

    for (const i of scores) {
        console.log(i);
    } // 1 4 5 2 6 3

    // When using const in a for...of loop, you're creating a new const variable
    // for each item in the iterable. Each time the loop moves to the next item,
    // it makes a fresh const variable, so there's no need to reassign it. 
    // This is why const works in for...of loops, even though the loop goes 
    // through multiple values.

// Maps
    // Its a object type that holds key-val pairs
    // But unlike objects which dont guarantee the order of entries in them
    // Maps actually remember the order in which items are inserted
    // Similar to maps in C++
    // The datatype they take are keys(immutable) - vals(any)

    const countrycodes = new Map();

    // set() is used to add new elements or modify existing values
    countrycodes.set('IND', 91)
    countrycodes.set('US', 1)
    countrycodes.set('France', 16)

    // We can print the maps directly to log
    console.log(countrycodes); // Map(3) { 'IND' => 91, 'US' => 1, 'France' => 16 }
    
    // Lets try to ensure it holds unique values only by trying 
    // to add duplicates
    
    countrycodes.set('IND',91)
    console.log(countrycodes);
    // Map(3) { 'IND' => 91, 'US' => 1, 'France' => 16 }

    // Lets try to modify already existing items with 
    countrycodes.set('IND',92)
    console.log(countrycodes);
    // Map(3) { 'IND' => 92, 'US' => 1, 'France' => 16 }

    // We can iterate through maps with forof
    for (const m of countrycodes) {
        console.log(m); // 
    }
    // [ 'IND', 91 ]
    // [ 'US', 1 ]
    // [ 'France', 16 ]

    // To get the key,vals seperately. We can use [] which destructures items
    for (const [keys, vals] of countrycodes) {
        console.log(keys + " --> " +vals+ " , ");
    }
    // IND --> 92 , 
    // US --> 1 , 
    // France --> 16 , 

// For in Loops 
    // Since objects dont works with For of loops, We can use for in
    // It stores keys in the loop variable, which can used to access values
    // Lets try it for person object from earlier

    for (const key in person) {
       console.log(key, " -> ", person[key]);
    }
    // name  ->  sac
    // score  ->  64
    // wt  ->  74

    // With Arrays, For in loop variable gives indices only.
    // Why ? Because arrays are object types too and index themselves
    // act as keys here
    // Hence we can acess array like this
    const score =[ 12,32,43,55]
    for (const index in score) {
        console.log(index, score[index]);
    }
    // 0 12
    // 1 32
    // 2 43
    // 3 55

    // Can we apply For in for Maps too?

    const car = new Map()
    car.set('model' , 'toyota')
    car.set('series' , '22')

    for (const key in car) {
        console.log(key);
    } // O/p : 
    // So nothing was printed. 
    // Hence is not iterable thorugh For in loop

// For each loop
    // For Each loop is a HIGHER ORDER LOOP
    // Note that foreach loop are inherent property of array objects
    // We can verify this through browser console
    
    const langs = ["c", "Python", "JS"]

    // Syntax : forech(callback_function)
    // Note that callback function is executed on each element of the array
    // hence the param to callback function we write is treated
    // as items of array

    langs.forEach( function (item){
        item = item + " Lang."
        console.log(item);
    } )
    // c Lang.
    // Python Lang.
    // JS Lang.

    // We can also apply arrow function to foreach loop

    langs.forEach(  (item) => {
        console.log(item.toLowerCase());
    })
    // c
    // python
    // js

    // We dont have to necessarily pass whole definition callback into foreach
    // We can define it elsewhere, pass its name to foreach

    function capsMaker(item){
        console.log(item.toUpperCase());
    }
    langs.forEach(capsMaker);
    // C
    // PYTHON
    // JS

    // In reality foreach has acess to more than just the items of array
    // Callback of Foreach can have 3 type of arguments
    // Items, Index, Array(entire)

    langs.forEach( (item, ind, arr) => {
        console.log(item, ind , arr);
    })
    // c 0 [ 'c', 'Python', 'JS' ]
    // Python 1 [ 'c', 'Python', 'JS' ]
    // JS 2 [ 'c', 'Python', 'JS' ]

// For each is very userfull for acessig array of objects
    const allCars = [ 
                        {model : 'bmw', power : 900, year : 97},
                        {model : 'alto', power : 700, year : 93},
                        {model : 'ford', power : 300, year : 95},
                    ]
    // Here each item in the callback is treated as individual object 
    allCars.forEach( ( car ) => {
        car['year'] += 1
        car['power'] += 100
        car['model'] = car['model'].toUpperCase()
        console.log(car['model'], car['power'], car['year']);
    })
    // BMW 1000 98
    // ALTO 800 94
    // FORD 400 96



