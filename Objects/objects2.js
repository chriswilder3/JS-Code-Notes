// Objects as Singleton (using Constructor)

    const tinderUser = new Object()
    console.log(tinderUser); // remember that Object created this way is 
    // called singleton

    tinderUser.id = 'sad213'
    tinderUser.name = 'sagar'
    tinderUser.isLoggedIn = false

    console.log(tinderUser); // { id: 'sad213', name: 'sagar', isLoggedIn: false }

// We can declare objects inside objects also
    const endUser = {
        id : 'asodw23',
        fullname : {
            userfullname: {
                fname :'ganesh',
                lname : 'sadhak'
            }
        }
    }
    console.log(endUser.fullname.userfullname.fname); // ganesh
    console.log(endUser.fullname.userfullname); // { fname: 'ganesh', lname: 'sadhak' }
    // We can use ? when unsure one of these nested objects contain data or not
    // This useful while handling API response. ex: enduser.fullname?.userfullname
    // More on this later

// To merge object, just like lists we cant directly put them inside each other

    const obj1 = {1: 'h', 2: 'da'}
    const obj2 = {3: 'fs', 4: 'ht'}

    let obj3 = {obj1,obj2}
    console.log(obj3); // { obj1: { '1': 'h', '2': 'da' }, obj2: { '3': 'fs', '4': 'ht' } }
    // Hence it just nestes them using their names as keys

// Objects.assign()
    // We can also use returnTarget = Object.assign(target, source) to 
    // combine objects into single one.
    // It copies elements of one or more iterables into single target object

    obj3 = Object.assign({}, obj1, obj2)
    console.log(obj3); // { '1': 'h', '2': 'da', '3': 'fs', '4': 'ht' }
    // Its good practice to give {} as first arg, otherwise it will modify
    // the object we give it in that place.
    
    obj3 = Object.assign( obj1, obj2) 
    console.log(obj1 == obj3); // true
    // Now obj1 has also got the merged result
    // Hence, Its better to use {} as first arg

// We can also merge objects using SPREAD (...). It is the best method for merge
    obj3 = {...obj1, ...obj2}
    console.log(obj3); // { '1': 'h', '2': 'da', '3': 'fs', '4': 'ht' }

// Array of Objects:

    // In real world projects, objects are passed through as array of objects
    // Ex : database of customers, 

    const users = [
        {
            id: 'malen',
            name : 'chakri'
        },
        {
            id: 'dada',
            name : 'chfefs'
        },
        {
            id: 'uygh',
            name : 'kjhgb'
        },
    ]
    // We can loop through / access individual object values using index
    console.log(users[2].name) // kjhgb

// Object.keys() /.values()

    // Just like we access can collect keys and vals of dict into list
    // in Python, we can use Object.keys(objname) to get array of keys

    const tinderkeys = Object.keys(tinderUser) 
    console.log(tinderkeys); // [ 'id', 'name', 'isLoggedIn' ]
    // We can now loop through keys and vals like this

    for(key of Object.keys(tinderUser)){
        //console.log(key);
    }               // id  name  isLoggedIn
    // Remember to use forof for doing this NOT FOR IN LOOP (since its array now)

    // The same goes for acessing values
    for(val of Object.values(tinderUser)){
        console.log(val);
    }           // sad213 sagar false

// Object.entries()
    // This is very similar to dict.items() in Python, But instead of tuples of key-val pairs
    // it gives nested array of key-val pairs 

    console.log( Object.entries(tinderUser)); 
    // [ [ 'id', 'sad213' ], [ 'name', 'sagar' ], [ 'isLoggedIn', false ]
    // We can see that individual key-val pairs are in nested array inside whole array

// To check whether some property(key) exists we can use .hasOwnProperty()

    console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

    // Useful for checking on unknown objects beforehand

