
exports.min = function min (array = []) {
  let a = Infinity;
  if (array.length === 0){
    return 0;
  }
  for (let i = 0; i < array.length; i++){
    if (array[i] < a ){
      a = array[i];
    }
  }
  return a;
}
exports.max = function max (array = []) {
  let a = -Infinity;
  if (array.length === 0){
    return 0;
  }
  for (let i = 0; i < array.length; i++){
    if (array[i] > a ){
      a = array[i];
    }
  }
  return a;
}
exports.avg = function avg (array = []) {
  let a = 0;
  if (array.length === 0){
    return 0;
  }
  for (let i = 0; i < array.length; i++){
    
      a += array[i];

  }
    a = a/array.length;
  return a;
}
