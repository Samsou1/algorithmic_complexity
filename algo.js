num1 = [10, 15, 3, 7];
num2 = [1, 8, 10, 21];
num3 = [10, 15, 3, 7, 25, 29];

floor1 = [3, 7, 8, 3, 6, 1];
floor2 = [1, 4, 5, 8];
floor3 = [10, 9, 7, 8, 4, 5, 3, 1];

console.log(sumQuad([...num1], 17));
console.log(sumQuad([...num2], 19));
console.log(sumQuad([...num3], 32));

console.log(floorQuad([...floor1]));
console.log(floorQuad([...floor2]));
console.log(floorQuad([...floor3]));

console.log(sumLinear([...num1], 17));
console.log(sumLinear([...num2], 19));
console.log(sumLinear([...num3], 32));

console.log(floorLinear([...floor1]));
console.log(floorLinear([...floor2]));
console.log(floorLinear([...floor3]));

console.log(sumConst([...num1], 17));
console.log(sumConst([...num2], 19));
console.log(sumConst([...num3], 32));

console.log(floorConst([...floor1]));
console.log(floorConst([...floor2]));
console.log(floorConst([...floor3]));


function sumQuad(ary, int){
  for(var i = 0; i < ary.length - 1; i++){
    for(var j = i + 1; j < ary.length; j++){
      if(ary[i] + ary[j] == int){
        return true
      }
    }
  }
  return false
}

function floorQuad(ary){
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

function sumLinear(ary, int){
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

function floorLinear(ary){
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

function sumConst(ary,int){
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


function floorConst(ary){
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