
// Array
    const arr = [1,2,6]
    console.log(arr[2]); // 0-based index
    // Arrays are shallow-copied whenever copy operations are applie on them

// Shallow Copy Vs Deep Copy:
    // Shallow copy of object is that copy whose properties share references
    // with original oject. In other words, original object and copy both 
    // point to same underlying values. Changing one causes other to change
    
    // In deep copy, the copy doesnt share references.i,e, It references to 
    // completely newer values. Changing anyone doesnt affect the other.

    // AS seen before arrays behave this way since they are objects
    // i.e, (call by reference) types.

    // As seen before we can initialize array as object type format
    const ls = new Array(2,1,4,8)
    console.log(ls);

    // Arrays have length properties along with prototype
    console.log(ls.length);

    // In objects, Prototypes allow us access to properties/methods of parent
    // This is called prototypal inheritance. 
    // We will learn more later.

// Array Methods:
    // Push
    ls.push(14);
    console.log(ls);
    // pop() remove last elem
    ls.pop(0)
    console.log(ls);
    // unshift() inserts elem at the start . NOTE : its O(n) operation
    ls.unshift(9);
    console.log(ls);
    // shift() removes elem at the start
    ls.shift();
    console.log(ls);

    // Arrays also have questionare methods like includes()
    console.log(ls.includes(5)) // false,
    // Hence includes() is like 'in' in python

    // Index of any elem can be obtained using .indexOf()
    console.log(ls.indexOf(4)) //2
    console.log(ls.indexOf(11)) // -1 doesnt exist

// Like in Python, We can join elements of arry into string with join(seperator=',')
    const scores = [1,3,53,24,22]
    console.log(scores.join()); // 1,3,53,24,22
    // Obviously seperator is by default  =','

    console.log(scores.join('')); // 13532422

// Slice VS Splice
// slice(start_pos,end_pos) returns a specific part of the array.
    const a = [84,27,13,15,25]
    const b = a.slice(1,3) // 
    console.log(a," ",b); // [ 84, 27, 13, 15, 25 ]   [ 27, 13 ]

    // Hence slice returns part of the array starting from start_pos elem, 
    // but does not include end_pos elem

// Splice():
    const c = [84,27,13,15,25]
    const d = c.splice(1,3) // 
    console.log(c," ",d); // [ 84, 25 ]   [ 27, 13, 15 ]

    // Hence also returns part of array, starting from start_pos and
    // includes end_pos elem too
// BUT MOST Importantly, splices also removes the same elemts from original array
    // Hence 27,13,15 are first deleted from c, then splice returns these to d

    let e = [84,27,13,15,25]
    let f = e.splice(1,4) // 
    console.log(e," ",f); // [ 84 ]   [ 27, 13, 15, 25 ]

    e = [84,27,13,15,25]
    f = e.splice(0,6) // 
    console.log(e," ",f); // []   [ 84, 27, 13, 15, 25 ]
    
