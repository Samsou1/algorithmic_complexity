const fs = require('fs');

const fileName = process.argv[2];

var list;
try {
    const data = fs.readFileSync(fileName, 'utf8');
    list = data.split(' ').map(element => parseFloat(element));
} catch (error) {
    console.error(error.message);
}

// console.log(sum_quad([10, 15, 3, 7], 17))
// console.log(sum_quad([1, 8, 10, 21], 19))
// console.log(floor_quad([3, 7, 8, 3, 6, 1]))
// console.log(floor_quad([1, 4, 5, 8]))
// console.log(sum_linear([10, 15, 3, 7], 17));
// console.log(sum_linear([1, 8, 10, 21], 19));
// console.log(floor_linear([3, 7, 8, 3, 6, 1]))
// console.log(floor_linear([1, 4, 5, 8]))
console.log(sum_const([10, 15, 3, 7], 17));
console.log(sum_const([1, 8, 10, 21], 19));


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

function sum_linear(ary, int){
  var hash = {};
  for(var i = 0; i < ary.length; i++){
    if(!hash[ary[i]]){
      hash[ary[i]] = 1;
    }else{
      hash[ary[i]]++;
    }
  }
  var keys = Object.keys(hash).map(element => parseFloat(element));
  for(var j = 0; j < keys.length - 1; j++){
    if(hash[int - keys[j]] > 0){
      return true;
    }
  }
  return false;
}

function floor_linear(ary){
  
}

function sum_const(ary,int){
  hash = {};
  for(var i = 0; i < ary.length; i++){
    if(hash[int - ary[i]] != undefined){
      return true
    }else{
      hash[ary[i]] = i;
    }
  }
  return false;
}


function flood_const(ary){
  var num = 1;
  var max = ary[ary.length - 1];
  for(var i = ary.length - 1; i >= 0 ; i--){
    if(ary[i] > max){
      num++;
      max = ary[i];
    }
  }
  return num;
}