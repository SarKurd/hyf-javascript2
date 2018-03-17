function createBase(base){
    return function(number){
        console.log(base + number);
        return base + number;
    }
}

let addSix = createBase(6);
addSix(10);
addSix(20);
addSix(124);


//Bonus
let numbers = [1, 3, 5, 6, 5, 2, 3, 9, 9, 1];
let chars= ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

console.log(getUniqueArray(numbers));
console.log(getUniqueArray(chars));




//Functions
function sortArray(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        } 
    }
    return arr;
}
function getUniqueArray(arr){
    arr = sortArray(arr);

    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i + 1]){
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}