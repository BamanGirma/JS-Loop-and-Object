// // question one
// function printNumber() {
//   for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// printNumber();

// // question two
// function printSeries(num) {
//   for (var i = num + 1; i <= num + 5; i++) {
//     console.log(i);
//   }
// }
// printSeries(7);

// // question three
// function printSeries(num) {
//     var sum=0;
//   for (var i = num + 1; i <= num + 10; i++) {
//     sum=sum+i;
//   }
//  return sum;
// }
// let result=printSeries(7);
// console.log(result);

// // question four
// function printArray(arr) {
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
//   return arr[i];
// }
// var a = [1, 2, 3, "aman", "girma"];
// printArray(a);

// // question five
// function countElements(arr){
// console.log(arr.length);
// }
// var b = [1, 2, 3, "aman", "girma"];
// countElements(b)

// // question six
// function arraySum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// }
// let array1 = [5, 6, 99, 8, 76, 4, 68, 44];
// arraySum(array1);

// // question seven
// function arrayOperation(arr) {
//   var oddCount = 0;
//   var evenCount = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evenCount += arr[i];
//     } else {
//       oddCount += arr[i];
//     }
//   }
//   var arrayopp = evenCount - oddCount;
//   console.log(arrayopp);
// }
// let array2 = [5, 6, 99, 8, 76, 4, 68, 44];
// arrayOperation(array2);

// // question eight
// function printEven(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// let array3 = [5, 6, 99, 8, 76, 4, 68, 44];
// printEven(array3);

// // question nine
// function arrayManuplation(arr) {
//   console.log(arr.pop());
//   arr.push(32);
//   console.log(arr);
// }
// sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// arrayManuplation(sampleArray);

// // question ten
// function sortAndPrintArray(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(arr);
// }
// const sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// sortAndPrintArray(sampleArray);







let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "javascript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 44,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};

// question 11
evangadiClass.lengthOfCourse = "5 Month";
console.log(evangadiClass.lengthOfCourse);

// question 12
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass.topicsCovered);

// question 13

function calculateAverageAge(evangadiClass) {
  const students = evangadiClass.students;
  const totalStudents = students.length;

  let totalAge = 0;
  for (let i = 0; i < totalStudents; i++) {
    totalAge += students[i].age;
  }

  const averageAge = totalAge / totalStudents;
  return averageAge;
}

let result = calculateAverageAge(evangadiClass);
console.log("Average age of the class: " + result);

// question 14

function calculateMalePercentage() {
  const students = evangadiClass.students;
  const totalStudents = students.length;

  let males = 0;
  for (let i = 0; i < totalStudents; i++) {
    if (students[i].sex === "M") {
      males++;
    }
  }

  const malePercetage = (males / totalStudents) * 100;
  return malePercetage;
}

let res = calculateMalePercentage(evangadiClass);
console.log("the percentage of male students in the class " + res + "%");

// question 15
function printNumber(low, high) {
  for (let i = low; i <= high; i++) {
    if (i % 3 === 0) {
      console.log(i + "div3");
    } else {
      console.log(i);
    }
  }
}
printNumber(1, 10);

// question 16
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
}
fizzbuzz();

// question 17
function isEven(num){
  // Convert the number to a string to iterate through each digit
  const numstr = num.toString();
  for (let i = 0; i < numstr.length; i++) {
    // Get the numeric value of the character
    const a = parseInt(numstr[i]);

    if(a % 2 !== 0){
      console.log(0);
      return;
    }
    
  }
  console.log(1);
}
isEven(2426);
isEven(3234);
