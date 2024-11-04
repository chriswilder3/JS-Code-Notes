// Objects destructure and JSON

    const course = {
        name: 'django',
        courseInstructor: 'kailey',
        year : 2021
    }
    // console.log( course.courseInstructor);
    // Now while accessing its hassle to write as below everytime
    // Destructuring allows us to break the objects into its parts
    // We need to give all keys or the keys we need inside {}

    const { courseInstructor, year} = course;
    // Now it has broken down RHS into LHS, but there are only 2 keys which 
    // these broken down and other are ignored

    console.log(courseInstructor); // kailey
    console.log(year); // 2021

    // We can rename the destructure items to give easier names
    const {courseInstructor: teacher} = course;
    console.log(teacher); // kailey

// JSON are similar to object exept : their keys are strictly strings
    // ie. (need double quotes)
    // and their values allows basic types like strings, numbers, booleans 
    // and arrays. JSON values CAN NOT be : functions, comments, NaN, Null etc


