// Add your functions here
const map = function (array, fun){
  return array.map(fun);
}
const reduce = function (array,fun,startPoint=0){
  return array.reduce(fun,startPoint);
}
