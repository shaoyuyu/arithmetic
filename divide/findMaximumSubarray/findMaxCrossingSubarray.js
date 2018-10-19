
/**
 * find maximum crossing sum  
**/

var exports = module.exports;

exports.findMaxCrossingSubarray =  function findMaxCrossingSubarray(arr, low, mid, high){
    var leftSum = -Infinity, sum = 0, maxLeft;

    //left maximum sum
    for(var i = mid; i >= 0; i--){
        sum += arr[i];//all left items sum
        if(sum > leftSum){
            leftSum = sum; //maximum left sum
            maxLeft = i //maximum index
        }
    }
    var rightSum = - Infinity, maxRight;
    
    sum = 0;

    //right maximum sum

    for(var j = mid + 1; j <= high; j++){
        sum += arr[j]; // all right items sum
        if(sum > rightSum){
            rightSum = sum; // maximum right sum
            maxRight = j; // maximum right index
        }
    }   
    return [maxLeft, maxRight, leftSum + rightSum];
}