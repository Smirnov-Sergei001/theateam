//task1
function returnFirstArgumenti(argument){
    return ("This is your argument- ") +argument;
}
console.log(returnFirstArgumenti(15));
//task2
function sumWithDefaults(a,b){
    var sum=0;
    if(b==null){
        sum=a+100;
    }else {
        sum=a+b;
    }return sum;
};


console.log(sumWithDefaults(20,10));

//task3
function Fn(){
    return "Привет"
};

function returnFnResult(){
   return Fn();
};
console.log(returnFnResult());
//task4

function One(argument) {
  
    return function() { 
      return argument++;
    };
  };

  var F = One(10);  
console.log(F() ); 
console.log(F() );
console.log(F() ); 
//task5
function sayHi() {
    var q =[]; //вводим пустой масив
    
    for (var i = 0; i < arguments.length; i++) { //arguments.length - псевдо массив 
        q.push(arguments[i]); //добавляем в пустой массив наши аргументы 
    };return q;
  };

console.log (sayHi("Винни", "Пятачок" , 10 ,22));
//task6
function bindFunction(){
    var sum =function(a ,b){
        return a+b;
    }

}

function sum(a, b) {
    return a + b;
  }


function bindFunction(func, a, b){
 var resultFromIncomingFunc = func(a, b); 

 return resultFromIncomingFunc;
}

var newSum = bindFunction(sum, 2, 4);

console.log(newSum);
