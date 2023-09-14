//minimum aaray 1

let arr = [5, 2, 8, 9, 2, 65, 2, 2]
if (arr.length != 0) {
    let minimum = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    console.log('Minimum: ' + minimum);
} else {
    console.log('Array is empty');
}
 


// //reverse an array//2
let reverseArray= [10,20,30,40,50,60,] 
let newreverseArray = []
    for (let i = reverseArray.length - 1; i >= 0; i--) {
      newreverseArray.push(reverseArray[i])
    }
    console.log("Reverse of Array", newreverseArray);

//THE AVERAGE OF AN ARRAY 3

  let array2 = [1, 2, 3, 4, 5]
let newArray1 = []
let a = 0;
for (let i = 0; i < array2.length; i++) {
    a += newArray1.push(array2[i]);
}
console.log("Average of array:=>", a / 2);

//REMOVE EVEN NUMBERS//4

let array4 = [1, 2, 3, 4, 5, 6, 7, 8 ,9,10];
if (array4.length != 0) {
    let empty = [];
    for (let i = 0; i < array4.length; i++) {
        if (array4[i] % 2 == 1) {
            empty.push(array4[i])
        }
    }
    console.log("no even number is there=>",empty);

}


//FIND COMMON ELEMENTS 5
let arr5 = [3, 4, 5, 6, 7, 8];
let arr6 = [5, 4, 2, 6, 9, 8];
if (arr5.length != 0 || arr6.length != 0) {
    let common = [];
    for (let i = 0; i < arr5.length; i++) {

        for (let j = 0; j < arr6.length; j++) {

            if (arr5[i] === arr6[j]) {
                common.push(arr5[i]);
            }
        }
    }
    console.log("this are common number:=>", common);
}

  

  
