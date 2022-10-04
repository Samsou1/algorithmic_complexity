const fs = require('fs');
const fileName = process.argv[2];

var list;
try {
    const data = fs.readFileSync(fileName, 'utf8');
    list = data.split(' ').map(element => parseFloat(element));
} catch (error) {
    console.error(error.message);
}

var merge_comparison = 0;
console.log(merge_sort([...list]));

function merge_sort(ary){
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