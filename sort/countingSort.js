

function countingSort(source = [], stock = [], k = 0){
    var c = new Array(k).fill(0), item;
    //count
    for(var i = 0, len = source.length;i < len; i++){
        c[source[i]] = c[source[i]] + 1;
    } //c[i] now contains the number of elements equal to i

    for(i = 1; i < k; i++){
        c[i] = c[i] + c[i-1];
    } //c[i] now contains the number of elements less than or equal to i
    
    // fill inside stock
    for(i = source.length - 1; i >= 0; i--){
        stock[c[source[i]] - 1] = source[i];
        c[source[i]] = c[source[i]] - 1;
    }
}

// test example
var buildMaxHeap =  require('./heapSort').buildMaxHeap;

var arr = [2, 8, 7, 88,11, 1,3,3,2,4, 3, 5, 6, 4, 23, 55, 22,2, 8, 7, 88,11, 1,3,3,2,4, 3, 5, 6, 4, 23, 55, 22], arr1 = [],
    k = 0;
    buildMaxHeap(arr);
    k = arr[0] + 1;

console.time("one");
countingSort(arr, arr1, k);
console.timeEnd("one");