function selectMaxMin(arr){
    var len = arr.length - 1, min = 0, max = 0, i = 0, mini = 0, maxi = 0;
    if(len%2){
        min = arr[0];
        max = arr[1];
        i = 2;
    }else{
        min = max = arr[0];
        i = 1;
    }
    for(;i < len; i += 2){
        if(arr[i] > arr[i + 1]){
            mini = arr[i + 1];
            maxi =  arr[i];
        }else{
            maxi = arr[i + 1];
            mini =  arr[i];
        }
        if(min > mini){
            min = mini
        }
        if(max < maxi){
            max = maxi
        }
    }
    return [min, max];
}

var arr = [2, 8, 7, 11, 1,3,3,2,4, 3, 5, 6, 4, 23, 88];
//console.time('log')
var [min, max] = selectMaxMin(arr);
//console.timeEnd('log');
console.log(min, max);