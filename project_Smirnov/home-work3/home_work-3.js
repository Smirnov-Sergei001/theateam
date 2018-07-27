//task1
var source1 = [1,2,3],
    source2 = ['text',2],
    source3 = [1,'text'],
    source4 = [1,'text',3],
    source5 = ['text1','text2'],
    source6 = [];
function isAllTrue(src, fltr) {
	if (src.length == 0) {
		throw new Error('Empty array');
    };
    if(typeof fltr!="function"){
        throw new Error('fn is not a function');
    }
	var result = true;
	for (var i = 0; i < src.length; i++) {
		if (fltr(src[i]) != true) {
			result = false;
		}
	}
    return result;
   
}

function filterFn(arg) {
	return typeof arg === 'number';
}

try {
	var res = isAllTrue(source1, filterFn);
	console.log(res);
} catch(e) {
	console.error(e.message);
};
//task2
function isOneTrue(src, fltr) {
    debugger;
	if (src.length == 0) {
		throw new Error('Empty array');
    };
    if(typeof fltr!="function"){
        throw new Error('fn is not a function');
    }
    
	var result;
	for (var i = 0; i < src.length; i++) {
		if (fltr(src[i]) == true) {
            result==true; 
            return result;    
		} else{
            result=false;
        }
	}
    return result;
   
}

function filter(argy) {
	return typeof argy=== "number";
}

try {
	var resy = isOneTrue(source2, filter);
	console.log(resy);
} catch(e) {
    console.error(e.message);
}
//task 3
console.log("task3")
function returnBadArguments(ffn){
    var q=[];
    if(typeof ffn!="function"){
        throw new Error('fn is not a function');
    }
    for (var i=1;i<arguments.length;i++){
    ffn(arguments[i]);{
   if(ffn(arguments[i])==true){
    q.push(arguments[i]);
     
        }else{continue;}
    }   
        }return q; 
    }
 
function Fn1(arg) {
	return typeof arg === 'number';
}

try {
	var resi = returnBadArguments(Fn1,"r",2,3,"t",4);
	console.log(resi);
} catch(e) {
    console.error(e.message);
}
//task4
// function calculator(number){
//     if(number===undefined){number=0; }
//     if(typeof number!="number"){
//         throw new Error('number is not a number');
//     }
// var obg={
//     sum: function Sum(){
//         for (var i=0;i<arguments.length;i++){
//            number+=arguments[i];
//         }return number;
//                     },
//     dif: function Dif(){
//         for (var i=0;i<arguments.length;i++){
//             number-=arguments[i];
//          }return number;
//                      },
//     div: function Div(){
//         if(arguments[i]==0){
//             throw new Error('division by 0');
//         }
//         for (var i=0;i<arguments.length;i++){
//             return function(){
//                 number/=arguments[i]; 
//                 return number;
//                  }
//          }
//             },
//     mul:function Mul(){
//         for (var i=0;i<arguments.length;i++){
//             number*= arguments[i];
//          }return number;
//     }                        
//     };return obg;
//            }
