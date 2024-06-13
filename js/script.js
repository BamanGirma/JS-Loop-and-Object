// question one
function printNumber() {
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumber();







// question two
function printSeries(num) {
  for (var i = num + 1; i <= num + 5; i++) {
    console.log(i);
  }
}
printSeries(7);









// question three
function printSeries(num) {
    var sum=0;
  for (var i = num + 1; i <= num + 10; i++) {
    sum=sum+i;
  }
 return sum;
}
let result=printSeries(7);
console.log(result);








// question four
function printArray(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return arr[i];
}
var a = [1, 2, 3, "aman", "girma"];
printArray(a);






// question five
function countElements(arr){
console.log(arr.length);
}
var b = [1, 2, 3, "aman", "girma"];
countElements(b)









// question six
function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
let array1 = [5, 6, 99, 8, 76, 4, 68, 44];
arraySum(array1);








// question seven
function arrayOperation(arr) {
  var oddCount = 0;
  var evenCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenCount += arr[i];
    } else {
      oddCount += arr[i];
    }
  }
  var arrayopp = evenCount - oddCount;
  console.log(arrayopp);
}
let array2 = [5, 6, 99, 8, 76, 4, 68, 44];
arrayOperation(array2);












// question eight
function printEven(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      console.log(arr[i]);
    }
  }
}
let array3 = [5, 6, 99, 8, 76, 4, 68, 44];
printEven(array3);










// question nine
function arrayManuplation(arr) {
  console.log(arr.pop());
  arr.push(32);
  console.log(arr);
}
sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
arrayManuplation(sampleArray);












// question ten
function sortAndPrintArray(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
}
const sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
sortAndPrintArray(sampleArray);