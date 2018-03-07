//1
let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);

console.log(newNumbers);

//2

let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat(tuesday);


//A
let sumOfTasks = tasks.reduce((sumSoFar, task) =>{
    return sumSoFar + task.duration;
}, 0  );

console.log(sumOfTasks);

//B
tasks.filter(task => {
    task.duration = task.duration / 60;
})

console.log(tasks);

//C
let tasksLessThanTwoHour = tasks.filter(task => task.duration < 2 );
console.log(tasksLessThanTwoHour);

//D
// tasks.forEach(element => {
//     element.bill = "";
// });

tasks.filter(task => task.bill = task.duration * 15);
console.log(tasks);

let overallSumOfBills = tasks.reduce((sumSoFar, number) => {
    return sumSoFar + number.bill;
}, 0 );

console.log("Maartje would make overall \€" +  overallSumOfBills);