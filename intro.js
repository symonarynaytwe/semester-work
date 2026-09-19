let A = 20;
let b = 30;
const student_name = "Ogwang";
let isRegistered = false;

let total = A + student_name;
console.log(total);

// how to comment in javascript , we use cntrl backslash e.g

// course work mark
let a = 20;

// final exam mark
let c = 30;

// also dont leave a space while naming variables e.g student name, which is wrong, its is supposed to be student_name.

let coursemarks = 30;
let exammarks = 20;
let totalmarks = coursemarks + exammarks;
console.log(totalmarks);

// if < 50 retake
// if > 50 passed
if (totalmarks >= 50) {
    console.log("You have passed");
} else {
    console.log("you have failed");
}

//calculating the percentage and giving different messages depending on the 
// Calculate the student's total marks
let courseMarks = 30;
let examMarks = 20;
let totalMarks = courseMarks + examMarks;

// Display the total marks
console.log("Total marks: " + totalMarks);

// Check the student's performance
if (totalMarks >= 70) {
    console.log("Excellent performance!");
} else if (totalMarks >= 60) {
    console.log("Good performance!");
} else if (totalMarks >= 50) {
    console.log("You have passed.");
} else {
    console.log("You have failed. You need to improve.");
}