// Dates 
    //JS Dates start from 1st Jan 1970

    const date = new Date()
    console.log(date);   // Raw date (complicated) includes date and time
    console.log(date.toString()); // Simpler easy to read string form
    console.log(date.toDateString()); // simple form and includes only date
    console.log(date.toLocaleString()); // date and time according to system format (PC)
    // Rememeber : Date is an Object type like array
    console.log(typeof date);

    // Months actually start from 0 not 1.
    let myDate2 = new Date(2024,0,15);
    console.log(myDate2.toDateString()); // Fri Jan 15 2024
    // So Jan - 0, Feb -1 and so on

    // Making day also 0 makes the date go back to last date of that month
    myDate2 = new Date(2024,1,0);
    console.log(myDate2.toDateString()); // Sun Dec 31 2023
    myDate2 = new Date(2023,5,0);
    console.log(myDate2.toDateString()); // Sun Apr 30 2023

    // But making day and month both 0 makes it go back to last date of prev.year.
    myDate2 = new Date(2021,0,0);
    console.log(myDate2.toDateString()); // Thu Dec 31 2020

    myDate2 = new Date(0,0,0);
    console.log(myDate2.toDateString()); // Sun Dec 31 1899

    // We can Declate time along with Date too.
    let myDate = new Date(2024,2,15,6,30);
    console.log(myDate.toString()); // Fri Mar 15 2024 06:30:00 GMT+0530

    // We can pass date as 'YYYY-MM-DD' string format, but note that now month
    // uses 1-indexing only not 0.
    myDate = new Date("2012-11-23")
    console.log(myDate.toString());
    // We can also use 'MM-DD-YYYY' form
    myDate = new Date('10-16-2007')
    console.log(myDate.toDateString()); // Tue Oct 16 2007

    // Sometimes we need timestamp that we can use to compare with others.
    // Ex: during Polling we can find who voted first 
    currTm = Date.now();
    console.log(currTm); // 1730642325809 
    // Its displays time as milliseconds passed from 1 Jan 1970

    // We can get timestamps from any date variables.
    console.log(myDate.getTime()); //1192473000000
    // We can pass timestamps&now() to Date() while declaring variable 
    // to set that time and date
    myDate2 = new Date(currTm);
    console.log(myDate2.toString());


    // We can get individual month,day,hour,min etc from date var using getters.
    myDate = new Date(Date.now())
    console.table([myDate.getHours(), myDate.getMinutes(), myDate.getSeconds()]);
    // Make sure to add 1 to month before printing to endusers
    console.log(myDate.getMonth()+1)

    // .toLocaleString() gives more options along with 1st arg : region(called locale in this context)
    console.log(myDate.toLocaleString('default',{
        weekday:"long"
    })); // weekday means english format

    console.log(myDate.toLocaleString('default',{
        timeZoneName:"long"
    })); // weekday means english format

