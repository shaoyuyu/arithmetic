function merge(arr, p, q, r){
    var n1 = q - p + 1,  
        n2 = r - q, arr1 = [], arr2 = [];
    for(var i = 0; i < n1; i++){
        arr1[i] = arr[p + i];
    }
    for(var j = 0; j < n2; j++){
        arr2[j] = arr[q + j + 1];
    }
    arr1[n1] = Infinity;
    arr2[n2] = Infinity;
    i = 0;
    j = 0;
    for(var k = p; k <= r; k ++){
        if(arr1[i] <= arr2[j]){
            arr[k] = arr1[i];
            i++
        }else{
            arr[k] = arr2[j];
            j++
        }
    }  
}
function mergeSort(arr, p, r){
    var q;
    if(p < r){
        q = Math.floor((p + r) /2);
        mergeSort(arr, p, q);
        mergeSort(arr, q + 1, r);
        merge(arr, p, q, r);
    }
}
function sort(arr){
    var leng = arr.length;
    if(!leng) return;
    mergeSort(arr, 0, leng - 1);
}