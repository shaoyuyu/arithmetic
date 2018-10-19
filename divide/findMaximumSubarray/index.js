var  {findMaxSubarray} = require( './findMaxSubarray');

var textArray = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];

console.log( '[' + textArray.toString() + ']', findMaxSubarray(textArray));

const readline = require('readline');  
const rl = readline.createInterface({  
    input: process.stdin,  
    output: process.stdout  
}); 
rl.on('line', function (input) {  
    inputArr = input.split(",");  
    inputArr.forEach(function(item,index){  
        inputArr[index] = +item;
    });

    console.log( '[' + inputArr.toString() + ']', findMaxSubarray(inputArr)); 
    inputArr = [];  
    rl.close();  
}); 