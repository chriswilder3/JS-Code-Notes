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

    
