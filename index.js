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

console.log(b);
console.log(b);