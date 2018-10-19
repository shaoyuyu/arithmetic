//start front to end
function insertionSort(arr){
    var i, j = 1, leng = arr.length, key,
        newArr = Array.from(arr);

    for(;j < leng; j++){
        i = j - 1;
        key =  newArr[j];
        while(i >= 0 && newArr[i] > key){
            newArr[i + 1] = newArr[i];
            i--;
        }
        newArr[i + 1] = key;
    }
    return newArr;
}
//start end to front
function insertionSort2(arr){
    var i, leng = arr.length, j = leng - 2, key,
        newArr = Array.from(arr);

    for(;j >= 0; j--){
        i = j + 1;
        key =  newArr[j];
        while(i < leng && newArr[i] < key){
            newArr[i - 1] = newArr[i];
            i++;
        }
        newArr[i - 1] = key;
    }
    return newArr;
}
insertionSort([2,23,9,3,17,12,55,24]);

//descend
function insertionSortDes(arr){
    var i, j = 1, leng = arr.length, key,
        newArr = Array.from(arr);

    for(;j < leng; j++){
        i = j - 1;
        key =  newArr[j];
        while(i >= 0 && newArr[i] < key){
            newArr[i + 1] = newArr[i];
            i--;
        }
        newArr[i + 1] = key;
    }
    return newArr;
}