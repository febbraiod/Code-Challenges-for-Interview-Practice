// Sum Strings

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

var remainder = 0;

function sumStrings(a,b) {
  var arr1 = a.split('');
  var arr2 = b.split('');
  var result = '';
  
  arr1 = stripZeros(arr1);
  arr2 = stripZeros(arr2);
  
  var times = Math.max(arr2.length, arr1.length);
  
  while(times >= 0 ){
     var x = arr1.pop();
     var y = arr2.pop();

     if(x === undefined){
       x = 0;
     }else{
       x = parseInt(x);
     }
     
     if(y === undefined){
       y = 0;
     }else{
       y = parseInt(y);
     }
     
     var z = calcDigit(x, y);
     
     
    result = z + result;
    times--;
  }

  arr3 = stripZeros(result.split(''));
  return arr3.join('');
}

// helpers

function stripZeros(arr){

  while(arr[0] === '0' && arr.length > 1){ 
    arr.shift();                  
  }

  return arr;
}


function calcDigit(x, y){
  z = x + y + remainder;
  
  if(z > 9){
       var r = String(z).charAt(0);
       z = String(z).charAt(1);
       remainder = Number(r);
     }else{
       z = z.toString();
       remainder = 0;
     }
     return z;
}


Test.assertEquals(sumStrings('123','456'),'579');
Test.assertEquals(sumStrings('0', '0'), '0');
Test.assertEquals(sumStrings('0001', '002'), '3');
Test.assertEquals(sumStrings('712569312664357328695151392712569312664357328695151392', '1'), '712569312664357328695151392712569312664357328695151393');