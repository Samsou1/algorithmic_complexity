const fs = require('fs');
const fileName = process.argv[2];

let list;
try {
    const data = fs.readFileSync(fileName, 'utf8');
    list = data.split(' ').map(element => parseFloat(element));
} catch (error) {
    console.error(error.message);
}

let comparisonQuickSort;
let comparisonMerge;


console.log(bubbleSort([...list]));
console.log();
console.log('$'.repeat(50));
console.log();
console.log(insertionSort([...list]));
console.log();
console.log('$'.repeat(50));
console.log();
console.log(selectionSort([...list]));
console.log();
console.log('$'.repeat(50));
console.log();
console.log(quickSort([...list]));
console.log();
console.log('$'.repeat(50));
console.log();
console.log(mergeSort([...list]));

// let timeNow = Date.now();
// bubbleSort([...list]);
// let timeToResolveBubbleSort = Date.now() - timeNow;
// console.log("Bubble Sort : (" + timeToResolveBubbleSort, "ms)");

// timeNow = Date.now();
// insertionSort([...list]);
// let timeToResolveInsertionSort = Date.now() - timeNow;
// console.log("Insertion Sort : (" + timeToResolveInsertionSort, "ms)");

// timeNow = Date.now();
// selectionSort([...list]);
// let timeToResolveSelectionSort = Date.now() - timeNow;
// console.log("Selection Sort : (" + timeToResolveSelectionSort, "ms)");

// timeNow = Date.now();
// quickSort([...list]);
// let timeToResolveQuickSort = Date.now() - timeNow;
// console.log("Quick Sort : (" + timeToResolveQuickSort, "ms)");

// timeNow = Date.now();
// mergeSort([...list]);
// let timeToResolveMergeSort = Date.now() - timeNow;
// console.log("Merge Sort : (" + timeToResolveMergeSort, "ms)");

function bubbleSort(ary){
    var comparison = 0;
    for(var i = 0; i < ary.length; i++){
        for(var j = 0 ; j < ary.length - i - 1 ; j++){
            if(ary[j]>ary[j+1]){
                [ary[j], ary[j+1]] = [ary[j+1], ary[j]];
            }
            comparison++;
        }
    }
    return `Bubble sort: ${comparison} comparisons ` + ary;
}

function insertionSort(ary){
    var comparison = 0;
    for(var i = 1; i < ary.length; i++){
        let current_value = ary[i];
        let j = i - 1;
        while ((j >= 0) && (current_value < ary[j])) {
            ary[j+1] = ary[j];
            j--;
            comparison++;
        }
        ary[j+1] = current_value;
    }
    return `Insertion sort: ${comparison} comparisons ` + ary;
}

function selectionSort(ary){
    var comparison = 0;
    for(var i = 0; i < ary.length; i++){
        var min = ary[i];
        for(var j = i + 1; j < ary.length; j++){
            if(ary[j] < min){
                min = ary[j];
            }
            comparison++;
        }
        ary.splice(i, 0, min);
        // Here we look for the value min to destroy it but we have to be careful not to delete the first value we just copied.
        // Hence the i + 1 stating that we are only looking for the value after index i + 1
        ary.splice(ary.indexOf(min, i + 1), 1)
    }
    return `Selection sort: ${comparison} comparisons ` + ary;
}

function quickSort(ary){
    comparisonQuickSort = 0;
    var result = qs(ary);
    return `Quick sort: ${comparisonQuickSort} comparisons ` + result;
}

function qs(ary){
    if(ary.length <= 1){
        return ary;
    }
    var pivot = ary.pop();
    var greater_than_pivot = [];
    var smaller_than_pivot = [];
    ary.map(function(element){
        if(element < pivot){
            smaller_than_pivot.push(element);
        }else{
            greater_than_pivot.push(element);
        }
        comparisonQuickSort++;
    })
    return (qs(smaller_than_pivot).concat([pivot], qs(greater_than_pivot)));
}


function mergeSort(ary){
  comparisonMerge = 0;
  ary = ms(ary);
  return `Merge sort: ${comparisonMerge} comparisons ` + ary;
}

function ms(ary){
  length = ary.length;
  if(length < 2 ){
    return ary;
  }
  var middle = parseInt(length / 2);
  left_ary = ary.splice(0, middle);
  
  return merge(ms(left_ary), ms(ary));
}

function merge(left, right){
  var ary = [];
  while(left.length > 0 && right.length >0){
    if(left[0] >= right[0]){
      ary.push(right.shift());
    }else{
      ary.push(left.shift());
    }
    comparisonMerge++;
  }
  if(left.length > 0){
    ary = ary.concat(left);
  }else{
    ary = ary.concat(right);
  }
  return ary;
}
