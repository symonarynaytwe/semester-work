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
