//get parent index
function parent(i){
    return i >> 1;
}
//get left child index
function left(i){
    return (i << 1) + 1;
}
//get right child index
function right(i){
    return i + 1 << 1;
}

//maintain max heap
function maxHeapify(arr, i){
    var l = left(i),
        r = right(i),
        largest = 0;
    
    if(l < arr.heapSize && arr[l] > arr[i])
        largest = l;
    else
        largest = i;

    if( r < arr.heapSize && arr[r] > arr[largest])
        largest = r;
    if(largest !== i){
        //exchange arr[i]  with arr[largest]
        arr[i] = arr[i] ^ arr[largest];
        arr[largest] = arr[i] ^ arr[largest];
        arr[i] = arr[i] ^ arr[largest];
        //do it for its children
        maxHeapify(arr, largest);
    }
}
// build max heap
function buildMaxHeap(arr){
    arr.heapSize = arr.length;
    for(var i = Math.floor(arr.length / 2) - 1; i >= 0; i--){
        maxHeapify(arr, i);
    }
}
function heapSort(arr){

    buildMaxHeap(arr);
    
    for(var i = arr.length - 1; i > 0; i--){
        //exchange arr[1] with arr[i]
        arr[0] = arr[i] ^ arr[0];
        arr[i] = arr[0] ^ arr[i];
        arr[0] = arr[i] ^ arr[0];
        //reduce heap size
        arr.heapSize = --arr.heapSize;

        maxHeapify(arr, 0);
    }
}

/**
 *  var arr = [4,1,3,2,16,9,10,14,8,7,23];
 *  heapSort(arr);
 *  console.log(arr); 
 */
module.exports = {
    buildMaxHeap: buildMaxHeap,
    heapSort: heapSort,
    maxHeapify:maxHeapify,
    parent: parent,
    left:left,
    right:right
}