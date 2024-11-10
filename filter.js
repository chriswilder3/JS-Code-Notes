// Note that Foreach loop is funtion of array object type.
    // But if we it doesnt return anything
    // So if we try to collect the result of foreach into a variable,
    // following happens
    const arr = [ 12, 42, 53, 24, 34]
    const vals = arr.forEach( (item) => {
        return item+4
    })
    console.log(vals);
    // undefined
    // Hence return doesnt work in Foreach 

// Filter 
    // Just like Foreach, but if we want to filter the elements 
    // of array based on a condition filter is used inside the callbak
    // Hence body of the filter is a condition applied on each elemt

    let bignums = arr.filter( (num) => num>30)
    // Above filters the numbers greater than 30 from arr, into var bignums
    console.log(bignums);
    // [ 42, 53, 34 ]

    // WARN : In arrow fun, If we use {} then return statement is necessary
    bignums = arr.filter( (num) => { num>30})
    const bignums2 = arr.filter( (num) => {
        return num>30
    })
    console.log(bignums); // []
    console.log(bignums2); // [ 42, 53, 34 ]

    // We can implement filter() functionality using foreach too
    // But it will be more complicated.


