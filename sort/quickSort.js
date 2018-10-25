/**
 * bad is 𝚯(n^2)  average is O(n𝙡𝙜n)
 * 
 * @param {Array} arr 
 * @param {int} p 
 * @param {int} r 
 */
function partition(arr, p, r){
    var x = arr[r], i = p - 1;

    for(var j = p; j < r; j++){
        if(arr[j] <= x){
            i += 1;
            if(i === j)
                continue;
            arr[i] = arr[i]^arr[j];
            arr[j] = arr[i]^arr[j];
            arr[i] = arr[j]^arr[i];
        }
    }
    i += 1;
    if(i === r)
        return i;
    arr[i] = arr[i]^arr[r];
    arr[r] = arr[i]^arr[r];
    arr[i] = arr[r]^arr[i];
    
    return i;
}


function quickSort(arr, p, r){
    var q;
    if(p < r){
        q = partition(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }
}

// var arr = [2, 8, 7, 11, 1,3,3,2,4, 3, 5, 6, 4, 23];

// quickSort(arr, 0, arr.length - 1);

// console.log(arr);

function randomizedPartition(arr, p, r){
    //random sampling
    var i = Math.round(Math.random()*(r-p)) + p;
    if(i !== r){
        arr[i] = arr[i]^arr[r];
        arr[r] = arr[i]^arr[r];
        arr[i]  = arr[i]^arr[r];
    }
    return partition(arr, p, r);
}

function randomizedQuickSort(arr, p, r){
    var q = 0;
    if(p < r){
        q = randomizedPartition(arr, p, r);
        randomizedQuickSort(arr, p, q - 1);
        randomizedQuickSort(arr, q + 1, r);
    }
}
var arr = [2, 8, 7, 11, 1,3,3,2,4, 3, 5, 6, 4, 23];

randomizedQuickSort(arr, 0, arr.length - 1);

console.log(arr);