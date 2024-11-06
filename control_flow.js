// Truthly vs Falsy values

    let myname = ""

    if(myname){
        console.log('yes'); 
    }else{
        console.log('no')
    }
    // no
    // Hence '' empty string is false value

    myname = " "

    if(myname){
        console.log('yes'); 
    }else{
        console.log('no')
    }
    // yes
    // Hence ' ' space or any other non-empty string is truthy value

    myname = []

    if(myname){
        console.log('yes'); 
    }else{
        console.log('no')
    }
    // yes
    myname = [23]

    if(myname){
        console.log('yes'); 
    }else{
        console.log('no')
    }
    // yes
    // Hence any array regardless empty or not is truthy value

    // So here is list of important falsy vals :
    // false (boolean), 0, -0, 0n in BigInt datatype,"", null, undefined, NaN

    // Obvious yet good to know some truthy vals
    // "0", 'false', [], {}, function(){} (empty funcn),

// Comparison of falsy values has some weird behaviours as well

    console.log(false == 0);
    console.log(false == "");
    console.log(0 == "");

//How to check emptyness of objects
    const obj = {}
    // We know that Object.keys(obj_name) gives an array of keys
    // We can use it check whether its length property is 0 or not
    if( Object.keys(obj).length== 0){
        console.log('object...');
    }

// ?? Nullish coallescence operator, used for null / undefined
    // This operator is used when we dont know the type of val
    // that is coming from another source

    // for both real valid vals It just assigns 1st arg
    let num = 10 ?? 20
    console.log(num); // 10

    // For null/ undefined cases
    // if one of the value is valid source val, it assigns is that
    // valid val coming from another source, otherwise it assigns 
    // null/undefined

    num = null ?? 20
    console.log(num); // 20 returns valid real val

    num = null ?? null
    console.log(num); // null 

    //same goes for undefined
    num = undefined ?? 20
    console.log(num); // 20 returns valid real val
    num = undefined ?? undefined
    console.log(num); // undefined

    // It also assigns first valid real val when its chained
    num = null?? 100 ?? 200
    console.log(num); // 100

    // Hence its checking whether some source is returning valid real val
    // or its returning null/undefined val