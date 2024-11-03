 //Merge Arrays
 
    const marvel = ['ironman','spiderman','captain']
    const dc = ['batman', 'bane' , 'superman']

    //marvel.push(dc)
    console.log(marvel); // [ 'ironman', 'spiderman', 'captain', [ 'batman', 'bane', 'superman' ] ]
    // Hence pushing a array onto another doesnt merge them, 
    // it just pushes array2 as it is
// Concat method
    marvel.concat(dc)
    console.log(marvel); // [ 'ironman', 'spiderman', 'captain' ]
    // Didnt change anything?
    // Note : concat doesnt modify original arr, it just returns modified arr  
    console.log(marvel.concat(dc)); // [ 'ironman', 'spiderman', 'captain', 'batman', 'bane', 'superman' ]  
    //But marvel is const, So cant assign it another arr.

    heroes = marvel.concat(dc)
    console.log(heroes);  // [ 'ironman', 'spiderman', 'captain', 'batman', 'bane', 'superman' ] 

// Spread operator (...)
    // Spread operator disperses(spreads) indivual elements of iterable like 
    // array inside another collectible/iterable like array, object
    // It is denoted by ... Ex:
    const a = [1,2,4,9]
    const b = [7,8,3,...a]
    // console.log(b); // [ 7, 8, 3, 1, 2, 4, 9 ]

// Because of its ease of use, We can use spread to 
    //merge any number of arrays 
    const heroes2 = [...marvel,...dc]
    console.log(heroes2);

// Array Flattening :
    // We flatten nested arrays into simpler arrays using arr.flat(d)
    const arr = [1,2,[2,4,5], [6,3,5,[9,2,6]]]
    let arr2 = arr.flat(1)
    // arg 'd' specifies how much depth of nesting we want to simplify
    console.log(arr2); // [ 1, 2, 2, 4, 5, 6, 3, 5, [ 9, 2, 6 ] ]
    // Hence d = 1 flatten 1st level nested arrays only
    arr2 = arr.flat(2)
    console.log(arr2) // [ 1, 2, 2, 4, 5, 6, 3, 5, 9, 2, 6 ]
    
    // To flatten all depth nesting, give d= Infinity

// Array Conversion
    // We may need to convert many differest unknown objects while coding.
    // But first, How to check whether that object is array or not?
    // We use .isArray() method part of Array type

    console.log(Array.isArray(marvel)) // true
    console.log(Array.isArray("sachin")); // false

    // We can use .from() method to convert other types to array
    console.log(Array.from("sachin")); //[ 's', 'a', 'c', 'h', 'i', 'n' ]

    // Note : It will try to convert to best of its ability only.
    // Hence it may lead to unexpected results.
    console.log(Array.from(Date.now())) // 
    console.log(Array.from({name:'sach',price:10})) //
    // We use .from() primarily for : string, NodeList, Maps or Sets

// Just like merging, we can containerize different variables,object into 
    // single array using Array.of( o1, o2, o3 etc)
    const k = 19
    const l = 'm'
    const m = {name : "sachin", grade : 100}
    console.log(Array.of(k,l,m)); // [ 19, 'm', { name: 'sachin', grade: 100 } ]
