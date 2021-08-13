/*Fix the code to get the largest of three.
Code:*/

aa = (f, s, t) => {
    console.log(f, s, t);
    if (f > s && f > t) {
        console.log(f);
    } else if (s > f && s > t) {
        console.log(s);
    } else {
        console.log(t);
    }
};
aa(1, 2, 3);

// Sum of the Digits
let n = "123";
console.log(add(n));

function add(n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    return sum;
}

// Sum of all the numbers in IIFE
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function() {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
})();

// Generate Title Caps
var arr1 = ["guvi", "geek", "zen", "fullstack"];

var ano = function(arro) {
    for (var i = 0; i < arro.length; i++) {
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
};
ano(arr1);

// Sum of numbers in Array
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b;
const sum1 = num.reduce(sum);
console.log(sum1);

// Rotate array by k-length
var arr2 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr2.length % k;
console.log(`k`, arr2.length, k);

(function() {
    // arrTemp = {};
    out = arr2.slice(k + 1, arr2.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = arr2[i];
        count += 1;
    }
    console.log(out);
})();

var arr3 = ["guvi", "geek", "zen", "fullstack"];
(function() {
    for (var i = 0; i < arr3.length; i++) {
        console.log(arr3[i][0].toUpperCase() + arr3[i].substr(1));
    }
})();

// Print Odd numbers in array
var arr4 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
    for (var i = 0; i < arr4.length; i++) {
        if (arr4[i] % 2 !== 0) {
            console.log(arr4[i]);
        }
    }
})();

// Reverse the string

(function(str) {
    str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd");

// Remove the duplicates
var res = function(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

/* Print the output
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]*/
var array = [
    [
        ["firstname", "vasanth"],
        ["lastname", "Raje"],
        ["age", 24],
        ["role", "JSWizard"],
    ],
    [
        ["firstname", "Sri"],
        ["lastname", "Devi"],
        ["age", 28],
        ["role", "Coder"],
    ],
];
var final = [];
var new_object = {};
while (array.length != 0) {
    var outer_remove = array.shift();

    while (outer_remove.length != 0) {
        var inner_remove = outer_remove.shift();
        var key = inner_remove[0];
        var value = inner_remove[1];
        new_object[key] = value;
    }
    console.log(new_object);
    final.push(new_object);
}

// Sum of Odd numbers
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var oddNum = as.filter((el) => el % 2 !== 0);

var s = oddNum.reduce(function(a, c) {
    return a + c;
});
console.log(s);

// Swap Odd and Even numbers
aa = (data) => {
    var a = data;
    var l = "";
    for (i = 0; i < a.length; i++) {
        var s = a[i + 1];
        var b = a[i];
        l += s;
        l += b;
        i = i + 1;
    }
    if (a.length % 2 != 0) {
        l += a[a.length - 1];
    }
    console.log(l);
};
aa("1234");