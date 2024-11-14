// First of all we must know that JS is by default
    // Synchronous
    // Single threaded
// Still JS doesnt feel slow, since JS enginer always comes with
    // Runtime environment that also handles some of the things

    // In execution context, The execution of code happens line by line
    // using callstack and memory. It doesnt execute next statement untill
    // the current one is completely executed

    // Now apart from default this behaviour, there can be async
    // behaviour also in JS

// Blocking code Vs Non-blocking Code
    // In blocking code, flow of execution is blocked. For Ex: When an
    // I/O is being served(say file read in sync mode), then other
    // code statements can not run in the mean time. ( imagine batch O.S)

    // In  Non-blocking code, flow of execution can be stopped when a code
    // stmt has to do something else (like serving I/O) ex: read file in 
    // Async. Hence other code can execute in its place, while its busy.
    // ( imagine it like multi-programming O.S)

    // While Non-blocking code may seem better due to its efficiency, it
    // has its disadvantages. For Ex: A user wants to write infon into DB
    // Now while the file is being written into DB, if we chose Async
    // Non-blocking mode, A code corresponding to responding user with
    // success message may execute. Which means you have already sent user
    // that Write was successful even before write operation is completed.
    // This is huge problem.

    // Hence both blocking and non blocking code are good when used 
    // with appropriate use cases.

// At this point look at a diagram of event loop : Js_Async_Event_Loop.PNG
    // We can see that RUNtime environments have manythings apart from
    // JS engine(which contains callstack and memory heap only)

    // Note that DOM api is not available on NODE environ.
    // The task queue makes the Async so fast. The timer callbacks, and 
    // and event callbacks etc are pushed onto the task queue,

    // Also look at diagram by Namaste Javascript in video Event Loop.

    // The event loop is the one responsible for monitoring task queue.
    // Whenever it sees that callstack is empty / not running anything, 
    // and a task(or callback) is in the task queue, it will push it 
    // onto callstack. Thus introducing Async capability of JS

    // Apart from event/DOM tasks, There are also fetch() API tasks
    // which are called promises, that have their own queue called
    // promise queue or High Priority queue.

    // Note that the async callbacks/tasks such as event handlers, must be
    // registered. There is part in environmt called registerCallback that
    // does this. So that when the timer/ event is tirggered. The callback
    // is generated and pushed onto task queue. Note that how many times
    // trigger happened, those many copies of the callback will pushed.

    // Task queue exists so that, If mutiple of events are triggered in
    // short period, we cant serve them all. Hence queue helps avoid
    // dropping of requests and provide healthy delay.

    // Here is a question? What happens is setTimeout is set with 0 sec?
    // Will it execute quickly or later as usual?

    // Executed the below code in js_async_test.html
    // console.log(1);
    // setTimeout( ()=>{console.log(2);}, 0)
    // console.log(3);

    // Op : 1 3 2 
    // Hence it wasnt executed immediately even though 0 secs delay, 
    // since still it has to back all around 
    // browerAPI ->register callback -> task queue -> callstack
    // The next few statements would have already run by then

    // Now lets test further if we want third stmt inside long for loop
    // will then 2 execute before 3rd
    
    // Executed the below code in js_async_test.html

    console.log(1);
    setTimeout( ()=>{console.log(2);}, 0)
    for(let i=0;i<1000;i++)
     {console.log(3);}

     // 1
     // (1000) 3
     // 2

     // Hence setTimeout definitely executes later only no matter the 
     // delay set. And it executes only after all synchronous code 
     // completes and the call stack is empty. So only after all lines of
     // script are over, will setTimeout be executed.

     //  The same principle applies to event listeners: they also follow 
     // the event loop's rule of waiting until the call stack is empty 
     // before being executed


