
var  {findMaxCrossingSubarray} = require( './findMaxCrossingSubarray');

var exports = module.exports

function findMax(arr, low, high){
    var mid ;
    
    if(low === high){
        return [low, high, arr[low]];
    }else{
        mid = Math.floor((low + high) / 2);
        let [letfLow, letHigh, leftSum] =  findMax(arr, low, mid);
        let [rightLow, rightHigh, rightSum] = findMax(arr, mid + 1, high);
        let [crossLow, crossHigh, crossSum] = findMaxCrossingSubarray(arr, low, mid, high);

        
        
        if(leftSum > rightSum && leftSum > crossSum)
            return [letfLow, letHigh, leftSum];
        else if(rightSum > leftSum && rightSum > crossSum)
            return [rightLow, rightHigh, rightSum];
        else 
            return [crossLow, crossHigh, crossSum];
    }
    
}

exports.findMaxSubarray =  function(arr){
    return findMax(arr, 0, arr.length - 1);
}