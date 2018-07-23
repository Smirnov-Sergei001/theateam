var arr = ["One", "Two", "Three", "Four"];
//task1
function ForEach (){
    for (let i = 0; i < arr.length; i++) {
  console.log((` ${i} : ${arr[i]} (массив: ${arr})`));
}
}
console.log(ForEach());
//tsk2

function map(arr){
    var arrLength = [];
    for (var i = 0; i < arr.length; i++) {
      arrLength[i] = arr[i].length;
    }return arrLength;
}


console.log( map(arr) );

//task3
var reduce = function(arr, callback, startValue) {
    var i, length = arr.length, result = startValue; 
    for (i = 0; i < length; i++) {
      result = callback( result, arr[i], i, arr);
    }
    return result;
  };
  var arrResults = reduce(arr, function(result, current) {
    return result.concat(current);
  }, []);

console.log(arrResults)
//task4
var obj={
    name:"Сергей",
    lastName:"Петров"
};
console.log(obj.lastName)

function propertiesObj(){
    var q=[];
    for ( var name1 in obj){
        q.push(name1.toUpperCase());
    }return q;
}
console.log(propertiesObj());

//task5
function slice( start, end){
  
   var length = arr.length; 
   var result = []; 
   start |= 0; //приводим к int
       if(typeof end === 'undefined') 
          end = length;
        else { 
           end |= 0; //приводим к int
        if(end === 0 || -end >= length) //если конец перед нулевым элементом
              return result; 
   
        if(end < 0) 
           end += length; 
        if(end > length) 
            end = length; 
      }
         if(start < 0)  
         
         start = -start > length ? 0 : start + length; //если начало перед нулевым элементом то начинаем с нуля иначе вычитаем из длины
         for (var start=0;start< end;start++){
            result.push(arr[start] )
        }
      return result 
    31
    }
console.log(slice(0,2))
