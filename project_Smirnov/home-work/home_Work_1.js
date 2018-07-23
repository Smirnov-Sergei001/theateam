//arithmetic
console.log("Арифметика");
//task1
console.log((80/2-4)-((80/2-4)/3));
//task2
var i = 9, j= 1,c=2017;
if(c % 2===0){
   var d = i+ j+6;
}
else{
    var d =i+j;
}
console.log(d);
//task3
console.log(5+5*2+2*5*2+2*2*5*2);
//lines
console.log("Строки");
console.log("Hello " + "javaScript");
console.log("quick brown fox jumped over lazy dog".indexOf('j')) ;
console.log("Goodbye javascript".replace("Goodbye" , "Hello"));
console.log("mississippi".replace(/i/g, "!"));

//unchangeable
console.log("переменные");
//task1
var red= 10, blue= 20, yellow= 40;
var green = yellow + blue;
var orenge = yellow + red;
var purple = blue + red;
var black = green + orenge + purple;
console.log(black);
//task2
 var hello ="Привет,", goodbye =" Пока," , name=" Петр.";
    console.log(hello+ name + goodbye + name )

    //function
    console.log("Функции");
//task1
    var lastTotal= function seconds(total){
        return total % 60;
    }
    console.log(lastTotal(50));
//task№2

    function perimeter(side,count){
        return (side*count);
    }
    console.log(perimeter(3,6));
//task№3
  function pedestrianFlowRate(cycleLength, trafficLength, turningLength){
      var time = cycleLength - trafficLength - turningLength;
      return (time *100 / cycleLength);
  }  
  console.log(pedestrianFlowRate( 4,2,1)) ;

  //Branching
  console.log("Ветвления");
  //task1
   function fizzbuzz(number){
       if( number%3 === 0 ){   
           return "fizz" ;
       }else if( number%5 === 0){     
            return "bulzz";
       } else if(number%15===0){      
              return "fizzbulzz";
          }else {
              return number;
          }    
   }
   console.log(fizzbuzz(121));

   //task2

   function  iGoToNorth(number){
  if (number>10
        && number<30
         && number%7===0){
      return console.log("good");
     } else{
       return  console.log("bad");
     }
    };
   console.log(iGoToNorth(14)); 

   //cycles 
   console.log("Циклы");
//task1
function isPlain(number){
    if(number==1){
        return false;
    };
    for (var i = 2;i<number; i++){
        if (number % i === 0){
            return false;

        }else {
            return true;
        };
    };

};
console.log(isPlain(12)); 
//task2
function fib(number){
    var a =1, b=1; 
    for (i=3;i<=number;i++){
       var c=a+b,
        a=b,
        b=c;
        
    }return c;
};

console.log(fib(5));
// task3

function digitSumm(number) {
    var strNum = number.toString(); // меняем метод number на .toString
    var strLen = strNum.length;
    var sum = 0;

    for (var i = 0; i < strLen; i++) {
        sum += parseInt(strNum[i]);//Принимаем строку, возвращаем число 
    }
    if (sum < 10){
        return sum;
    }else{
        return digitSumm(sum);
    }
   
};
console.log(digitSumm(32));

   console.log("Объекты");
    

//object

var book = {
name :"Программирование на Javascript",
type :"book",
};

//task2

var cat= {
    name :"Garphield",
    likes: "milk",

};
function isACat(cat){
    if ( cat.name == "Garphield"||cat.likes == "milk"){
        return true;
    }; 
};
console.log(isACat(cat));

//arrays
console.log("Массивы");
//task1
var array=[7,8,9,10,11,12,13];
console.log(array);
//task2
function sum(array){
    var suma = 0;
    for(var i= 0; i<array.length; i++){
        suma+=array[i];
    };return suma;
};

console.log(sum(array));
//можно и так
// var sum1=array.reduce(function(acc , element,index){
//     return acc + element;
// });
// console.log(sum1);

// task3
function evens(array){
    var newArray=[];
for (var i= 0 ;i<array.length;i++){
    
    if (array[i] % 2===0) {
     newArray.push(array[i]);
    }
} return newArray
};
console.log(evens(array));

//task4

 function combination(array1 , array2){
    var newArray=[];
    for (var i =0;i<array1.length; i++ ){
        for(var j = 0;j<array2.length;j++){
            newArray.push([
                array1[i],
                array2[i]
            ]);

        }
    }return newArray;
};

console.log([1,2],[3,4,5]);//не совсем уверен что это должно работать так:(


//str
console.log ( "Hello".concat(" ","coding"," ","in"," ","javascript" ));

//task2
console.log("Coding in javascript".substr(5,8) );
console.log("Coding in javascript".substring(5,13));