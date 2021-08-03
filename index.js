const students = [
    { name: "Ahamed", gender: "male", score: 80 },
    { name: "Rutika Kadam", gender: "female", score: 75 },
    { name: "Priyadharsini", gender: "female", score: 60 },
    { name: "adhi", gender: "male", score: 90 },
    { name: "Deepak", gender: "male", score: 35 },
    { name: "Satish", gender: "male", score: 55 },
];

/*>= 80 - A
>= 60 'B'
40-60 C
< 40 - F
*/

const grades = students.map((el) => {
    if (el.score >= 80) {
        return "A";
    } else if (el.score >= 60 && el.score < 80) {
        return "B";
    } else if (el.score >= 40 && el.score < 60) {
        return "C";
    } else if (el.score < 40) {
        return "F";
    }
});

console.log(grades);

const topMark = Math.max(...students.map((el) => el.score));

const topper = students
    .filter((el) => el.score === topMark)
    .map((el) => el.name);

console.log(topper.join(""));

// Another way
const sortedMarks = students.sort((stud1, stud2) => stud2.score - stud1.score);
const topScore = sortedMarks[0].name;
console.log(topScore);

function add() {
    let a = 5;
    var b = 3;
    return a * b;
}

/*console.log(b);
console.log(b);*/

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
    new_string += numsArr[i];
}
console.log(new_string);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
console.log(`Comma Seperated`);
for (var i = 0; i < numsArr.length; i++) {
    new_string += numsArr[i] + ",";
}
console.log(new_string.slice(0, new_string.length - 1));

// Print 11 10 9 8 7 6 5 4 3 2 1
console.log("Print descending no");
var new_string1 = "";

for (var i = 11; i > 0; i--) {
    new_string1 += i + " ";
}
console.log(new_string1);

//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 == 0) {
        numsArr[i] = "even";
    }
}
console.log(numsArr);

//Write a code to replace the array value — If the index is even, replace it with ‘even’.
//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        numsArr[i] = "even";
    }
}
console.log(numsArr);

//Write a code to add all the numbers in the array
//Output: 66
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
    sum += numsArr[i];
}
console.log(sum);

/*Write a code to add the even numbers only
Output: 30*/
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < 10; i++) {
    if (numsArr[i] % 2 === 0) sum += numsArr[i];
}
console.log(sum);

/*Write a code to add the even numbers and subract the odd numbers
Output: 94*/
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 === 0) {
        sum += numsArr[i];
    } else {
        sum -= numsArr[i];
    }
}
console.log(sum);

/*Write a code to print inner arrays
Output:
Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]*/
var numsArr3 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
];
for (let i = 0; i < numsArr3.length; i++) {
    console.log(i, numsArr3[i]);
    for (let j = 0; j < numsArr3[i].length; j++) {
        console.log(i, numsArr3[j]);
    }
}