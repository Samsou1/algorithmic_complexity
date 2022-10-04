const fs = require('fs');

const fileName = process.argv[2];

var list;
try {
    const data = fs.readFileSync(fileName, 'utf8');
    list = data.split(' ').map(element => parseFloat(element));
} catch (error) {
    console.error(error.message);
}

// console.log(sum_quad([...list], 5))
// console.log(sum_quad([10, 15, 3, 7], 17))
// console.log(sum_quad([1, 8, 10, 21], 19))
console.log(floor_quad([3, 7, 8, 3, 6, 1]))
console.log(floor_quad([1, 4, 5, 8]))


function sum_quad(ary, int){
  for(var i = 0; i < ary.length - 1; i++){
    for(var j = i + 1; j < ary.length; j++){
      if(ary[i] + ary[j] == int){
        return true
      }
    }
  }
  return false
}

function floor_quad(ary){
  var num = 0;
  for(var i = 0; i < ary.length; i++){
    var taller = true;
    for(var j = i + 1; j < ary.length; j++){
      if(ary[i] < ary [j]){
        taller = false;
      }
    }
    if(taller == true){
      num++;
    }
  }
  return num;
}