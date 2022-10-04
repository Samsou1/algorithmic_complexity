num1 = [10, 15, 3, 7];
num2 = [1, 8, 10, 21];
num3 = [10, 15, 3, 7, 25, 29];

floor1 = [3, 7, 8, 3, 6, 1];
floor2 = [1, 4, 5, 8];
floor3 = [10, 9, 7, 8, 4, 5, 3, 1];

console.log(sum_quad([...num1], 17));
console.log(sum_quad([...num2], 19));
console.log(sum_quad([...num3], 32));

console.log(floor_quad([...floor1]));
console.log(floor_quad([...floor2]));
console.log(floor_quad([...floor3]));

console.log(sum_linear([...num1], 17));
console.log(sum_linear([...num2], 19));
console.log(sum_linear([...num3], 32));

console.log(floor_linear([...floor1]));
console.log(floor_linear([...floor2]));
console.log(floor_linear([...floor3]));

console.log(sum_const([...num1], 17));
console.log(sum_const([...num2], 19));
console.log(sum_const([...num3], 32));

console.log(floor_const([...floor1]));
console.log(floor_const([...floor2]));
console.log(floor_const([...floor3]));


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
  var num = 1;
  ary = ary.reverse();
  var max = ary[0];
  for(var j = 0 ; j < ary.length ; j++){
    if(ary[j] > max){
      num++;
      max = ary[j];
    }
  }
  return num;
}

function sum_const(ary,int){
  hash = {};
  for(var i = 0; i < ary.length; i++){
    if(hash[int - ary[i]] != undefined){
      return true;
    }else{
      hash[ary[i]] = 1;
    }
  }
  return false;
}


function floor_const(ary){
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