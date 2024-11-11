// Note that Foreach loop is funtion of array object type.
    // But it doesnt return anything
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
    // of array based on a condition, filter is used inside the callbak
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

// Array of Objects
    // Sometimes data is passed from a database, or user inputs, as array of objects
    // we may need to filter a specific subset of data only, Hence
    // We can use Foreach/ Filter here

    const books = [
        
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
    ]

    // Now lets retrieve the books belonging to History genre only

    let myBooks = books.filter( (bk) => bk['genre'] === 'History')
    console.log(myBooks);
    // [
    //         {
    //             title: 'Book Three',
    //             genre: 'History',
    //             publish: 1999,
    //             edition: 2007
    //         },
    //         {
    //             title: 'Book Seven',
    //             genre: 'History',
    //             publish: 1986,
    //             edition: 1996
    //         }
    // ]
    // Note, filter returns array, and correctly there are only 2 histoy books

    // We can combine different conditions in the filters body using &&
    // Lets select books on history published before 1990

    myBooks = books.filter( (bk) => {
        return bk['genre'] == 'History' && bk['publish'] <= 1990
        }
    )
    console.log(myBooks);
    // [
    //     {
    //       title: 'Book Seven',
    //       genre: 'History',
    //       publish: 1986,
    //       edition: 1996
    //     }
    //  ]
    // Correctly only 1 book

// Map 
    // Its very similar to Foreach and filter.
    // unlike filter which applies condn and filters, map performs actions
    
    const scores = [10,20,30,40,50,60]
    const cheatedScores = scores.map( (mark) => mark +10)
    console.log(cheatedScores); 
    // [ 20, 30, 40, 50, 60, 70 ]

    // Hence map is same as foreach except it has some differences

// Map vs Foreach :
    // Foreach doesnt return anything, it just applies callback on elements
    // Map creates array, applies callback, returns modified elements into array
    // Map never modifies contents of original array
    // But in Foreach, if we modiy the elemnts, original array will be modified

// Map Chaining and Combined Map- filter

    // Since Map returns new modified array, It can be chained multiple times
    let overCheater = scores.map( (mark) => mark+10).map( (mark) => mark+5)
    console.log(overCheater);
    // [ 25, 35, 45, 55, 65, 75 ]
    
    // Chained maps will apply from Left to RIght
    overCheater = scores
                .map( (num) => num*10)
                .map( (num) => num+50)
    console.log(overCheater);
    // [ 150, 250, 350, 450, 550, 650 ]
    // Hence map which was written first was applied first on the array

    // We can combine maps and filters 
    overCheater = scores
                .map( (num) => num*10)
                .map( (num) => num+50)
                .filter( (num) => num< 500)
    console.log(overCheater);
    // [ 150, 250, 350, 450 ]

// Reduce 
    // It is used to accumulate array elems into single value using some pattern
    // This is also called reduction, (Remember HPC)
    // Its useful for summing,averaging arrays etc
    
    // Syntax : array.reduce(callback(accumulator, currentValue, currentIndex(opt), array(opt)), initialValue) 
    // It has callback which takes accumulator, currentValue params compulsorily
    // Other 2 params currentIndex and array are optional
    
    // accumulator: Holds the accumulated result of previous iterations.
    // currentValue: The current element being processed in the array.
    // initialValue : The initial value of the accumulator. If omitted, 
    // the first element of the array is used as the accumulator and iteration starts from the second element.
    // Note that the single value returned is acc val after all loops run

    // Lets say we want to find total sum in below arr.
    const gdp = [5,10,15,20,25]

    let initialValue = 0
    const totalGdp = gdp.reduce( (acc, curr) =>
        {
           return  acc + curr // We want to add the prev acc val with curr
                                  // elem val in each iteration. We can use 
                                  // acc += curr also here, but updation of acc is
                                  // already understood so we directly write acc+curr
        },initialValue
    )
    console.log(totalGdp); // 75

    // Hence we can say: Acc is given initial value, its value is updated
    // using curr element of array in each iteration.
    // At the end final Acc value is returned

    // And as with others, callback can be full funcn or single line arrow func
    const countryCount = gdp.reduce( (acc,curr) => acc + 1,0 )

    const averageGdp = totalGdp/ countryCount
    console.log(totalGdp, countryCount, averageGdp); // 75 5 15

    // We can print acc, curr inside callback too
    initialValue = 0
    const totalGdp2 = gdp.reduce( function(acc, curr){
        console.log(` acc: ${acc}, curr: ${curr}`);
        return acc+curr
    },initialValue)

    // acc: 0, curr: 5          Here acc -init val(0), curr - 1st elem val
    // acc: 5, curr: 10
    // acc: 15, curr: 15
    // acc: 30, curr: 20
    // acc: 50, curr: 25

    console.log(totalGdp2); // 75

// Reduce on Array of Objects
    // Here each curr param is an object on which we can use . or [] to
    // access its attributes
    
    const cart =  [ {
                itemName: "js course",
                price: 2999
            },
            {
                itemName: "py course",
                price: 999
            },
            {
                itemName: "mobile dev course",
                price: 5999
            },
            {
                itemName: "data science course",
                price: 12999
            },
    ]
    const cartPrice = cart.reduce( 
        (acc, curr) => {
           return acc + curr['price']
        },0
    )
    console.log(cartPrice); // 22996

    

