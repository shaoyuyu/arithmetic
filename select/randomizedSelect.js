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
function randomizedSelect(arr, p, r, i){
    var k = 0;

    if(p === r) return arr[p];

    q = randomizedPartition(arr, p, r);
    // i start from 1, not 0
    k = q - p + 1;
    
    if(i === k)
        return arr[q];
    else if(i < k)
        return randomizedSelect(arr, p, q - 1, i);
    else
        return randomizedSelect(arr, q + 1, r, i - k );
}

var arr = [2, 8, 7, 1, 3, 5, 6, 4, 9, 0, 1,2];

var item = randomizedSelect(arr, 0, arr.length - 1, 4);

console.log(item);