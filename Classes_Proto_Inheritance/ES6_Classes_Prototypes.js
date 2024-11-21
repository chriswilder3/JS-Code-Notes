// Now JS allows creating classes.
// Class is a type of function but is declared using 
    // "class" keyword (small c) instead of function() .

    // Its properties are assigned using its constructor,
    // whose name is also constructor.
    // Again just like functions, we can use "this" keyword
    // to access its properties.

    class Person{
        constructor( name){
            this.name = name
        }
    }

    // Now we can create an instance of the class by calling it
    // along with new keyword.

    // The new keyword is used to instantiate an object, that inherits
    // prototypes and properties defined by either of these
    //           1. a constructor function
    //           2. a class 
    // new also sets up the object to inherit from the constructor's
    // prototype,and initializes it by executing the constructor funcn
    // or the class constructor.

    const p1 = new Person('raju')
    console.log(p1);
    // Person { name: 'raju' }

    // Its a standard to Captilize first letter of classname
    // Ex: Person, Car, Animal etc


// Class vs COnstructor funtion
    // Construtor functions are special functions used to 
    // create and initialze objects. When called with the new keyword, they create new instances of objects, and the properties and methods defined inside the constructor function are attached to those instances.
    // Note that for constructor function, the body itself acts
    // as constructor where you can initialize properties. 
    function Car(brand, year){
        this.brand = brand
        this.year = year
        this.horn = function (){
            console.log('Horninnnggg');
        }
    }
    const car1 = new Car('hyundai', 2011)
    console.log(car1.brand)
    car1.horn()
    // hyundai    
    // Horninnnggg

    // When we invoke(/call constructor functon): 
    //  it: Creates a new empty object.
    //      Sets the prototype of the object to the constructor function's prototype.
    //      Executes the constructor function, binding this to the new object.
    //      Returns the new object (unless the constructor function explicitly returns another object).

    // In ES6, JavaScript introduced classes, which are 
    // syntactically easy over constructor functions. 
    // They allow you to create objects and handle inheritance 
    // in a cleaner and more modern way, but the underlying 
    // mechanism is still based on constructor functions

    // Note that only the variables attached to 'this' are public 
    // and the other local variables like let,var,const are
    // local and private, can not be accessed from outside.
    console.log(Car.prototype);
    console.log(car1.__proto__);


    // JavaScript uses prototypes for inheritance because it is 
    // a prototype-based language (unlike class-based languages 
    // Java or C++). This mechanism allows objects to inherit 
    // methods & properties from other objects, flexibly & efficiently.

// What exactly is a Prototype?
    // A prototype is an object from which other objects can 
    // inherit properties and methods. Every JavaScript object
    // (except the base object) is associated with another object
    // called its prototype. 
    
    // This prototype is defined by the 
    // prototype property of a constructor function or a class.

    console.log(Car.prototype);
    console.log(Person.prototype);
    // {} {} , because we havent set anything yet, its initially empty
    // for both class and constructor funcn.

    // Objects inherit from their prototype through the prototype chain.
    // A prototype is shared among all instances created by a
    // specific constructor.  
    
// Prototype Property:

    // All Functions in JavaScript (including constructor functions)
    // have a prototype property.
    // This property points to an object that will be used as 
    // the prototype for instances created by that constructor.

    function Man (){}
    console.log(Man.prototype); // {} empty by default

    // But we can add properties/ methods to it explicitly

    Man.prototype.talk = function (){
        console.log(' Talking...');
    }
    console.log(Man.prototype);
    // { talk: [Function (anonymous)] }

// Prototype Chain:
    // Objects have an internal link to their prototype,
    // called [[Prototype]], accessible via 
    // Object.getPrototypeOf(obj) or the __proto__ property.

    // When a property or method is accessed on an object,
    // JavaScript first looks for it on the object itself. 
    // If not found, it searches in the object's prototype,
    // then in the prototype's prototype, and so on, until 
    // it reaches null.

    function Bike(make) {
        this.make = make;
    }
    // Note that Bike is a constructor function and currently 
    // has {} empty prototype

    Bike.prototype.drive = function() {
        return `${this.make} is driving!`;
    };
    // But we can add it one. Hence The protype of car has drive function
    console.log(Bike.prototype);
    // { drive: [Function (anonymous)] }
    
    const b1 = new Bike("Toyota");

    // But Note that b1's protype has access to all methods 
    // and properties of Bike which is exactly 1 property :make

    // But due to Prototypal inheritance, using prototype chain,
    // We are able to access the properties/methods of 
    // Bike's prototypes also.

    console.log(b1.drive());
    // Toyota is driving!

    // We can find prototype of a object using __proto__
    console.log(b1.__proto__);
    // { drive: [Function (anonymous)] }

// Shared Methods/ prototypes:

    // Methods defined on the prototype are shared among all 
    // instances. This is memory-efficient because each 
    // instance doesn't create its own copy of the method.

    const b2 = new Bike('TVS')
    console.log( b1.drive === b2.drive);
    // true
    // Hence its the same drive only. not two copies.

    // As already said, All objects/ instances of a construtor
    //  share the same prototype also.

    console.log(b1.__proto__, b2.__proto__);
    // { drive: [Function (anonymous)] } { drive: [Function (anonymous)] }
    console.log(b1.__proto__ === b2.__proto__);
    // true

// Why prototypes over class of other languages?
    // Benefits of prototype
    // code reuse
    // ease, simplicity
    // dynamic inheritance
// ---------------------------------------------


// Class methods :
    // We can add our own methods in the class, We dont
    // need to specify this.method_name/ function here, just write
    // methods directly

    class Vehicle{
        constructor(type, brand){
            this.type = type
            this.brand = brand
        }

        owner(){
            console.log(' John Seed'); 
        }
    }

    const holy_vehicle = new Vehicle('tractor', 'edens gate')
    // DONT forget new keyword above
    holy_vehicle.owner()

    // John Seed

// Class inheritance
    // To create a class inheritance, use the extends keyword.
    // EX : child extends parent
    // A class created with a class inheritance inherits all 
    // the properties/methods from another class:

    // To call the constuctor of its parent/ Get the reference
    // of its parent, use super()

    class AssualtVehicle extends Vehicle{
        constructor(type, horsepower, mileage){
            super(type)
            this.hp = horsepower
            this.mil = mileage
        }
        attack(){
            console.log(' Attacking....');
        }
    }

    const av1 = new AssualtVehicle('truck',800,20)
    // DONT forget new keyword above
    console.log(av1);

    // AssualtVehicle { type: 'truck', brand: undefined, hp: 800, 
    //               mil: 20 }

    av1.owner()
    av1.attack()
    //      John Seed
    //      Attacking....
  
