//1 ok
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000)

//1

function greeting(func){
    func;
}

function hi(name){
    console.log("Hi, " + name);
}

greeting(hi("Sarbast"));

//2

function sayThree(number) {
    console.log(number + " is divisable by three and pushed to the array")
}

function sayFive(number) {
    console.log(number + " is divisable by five and pushed to the array")
}

function threeFive(startValue, endValue, threeCallback, fiveCallback) {
    let tempArr = [];
    let arrIndex = endValue - startValue;
    for (let i = 0; i <= arrIndex; i++){
        if(startValue % 3 === 0 && startValue % 5 === 0){
            threeCallback(startValue);
            fiveCallback(startValue);
            tempArr.push(startValue);
            startValue++;
        } else if(startValue % 3 === 0){
            threeCallback(startValue);
            tempArr.push(startValue);
            startValue++;
        } else if (startValue % 5 === 0){
            fiveCallback(startValue);
            tempArr.push(startValue);
            startValue++;
        } else{
            startValue++;
        }
    }
    console.log(tempArr);
    return tempArr;
}
let myNumbers = threeFive(10, 15, sayThree, sayFive);
console.log(myNumbers);


//3
//using for loop
function repeatStringNumTimes(str, num, loopType) {
    if(!num < 1){
        if(loopType === "for"){
            for (let i = 0; i < num; i++) {
                console.log(str);
            }
        } else if(loopType === "while"){
            let i = 0;
            while (i < num) {
                console.log(str);
                i++
            }

        } else if(loopType === "do while"){
            let i = 0;
            do {
                console.log(str);
                i++
            } while (i < num);
        }
    } else{
        console.log("the number must be greator than 0")
    }
    return str;
  }
  
  repeatStringNumTimes("abc", 5, "do while");

//4 Ok Done.

//5 Ok Done.

//6
/* 
Nested Arrays are just arrays inside another one, we can simply use [] to access them
arr[i][j] 2D
arr[i][j][k] 3D
arr[i][j][][m] 4D
.
.
.
*/

//7
/* in Javascript Objects are always passed by reference and "y" is an Object so while f2 creates variable "val" 
by copying it from the "y" it will also copy the reference so both "val" and "y" 
have same refenrece so modyifying "val" will also modify "y"
*/
