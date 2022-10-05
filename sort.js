const fs = require('fs');
const fileName = process.argv[2];

let list;
try {
    const data = fs.readFileSync(fileName, 'utf8');
    list = data.split(' ').map(element => parseFloat(element));
} catch (error) {
    console.error(error.message);
}

console.log(bubble_sort([...list]));
console.log(insertion_sort([...list]));
console.log(selection_sort([...list]));
let comparison_quick_sort;
console.log(quick_sort([...list]));
let merge_comparison;
console.log(merge_sort([...list]));

function bubble_sort(ary){
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

function insertion_sort(ary){
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

function selection_sort(ary){
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

function quick_sort(ary){
    comparison_quick_sort = 0;
    var result = qs(ary);
    return `Quick sort: ${comparison_quick_sort} comparisons ` + result;
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
        comparison_quick_sort++;
    })
    return (qs(smaller_than_pivot).concat([pivot], qs(greater_than_pivot)));
}


function merge_sort(ary){
  merge_comparison = 0;
  ary = ms(ary);
  return `Merge sort: ${merge_comparison} comparisons ` + ary;
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
    merge_comparison++;
  }
  if(left.length > 0){
    ary = ary.concat(left);
  }else{
    ary = ary.concat(right);
  }
  return ary;
}