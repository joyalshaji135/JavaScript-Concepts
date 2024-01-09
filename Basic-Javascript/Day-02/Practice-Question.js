// Get User to input a number using prompt("Enter a Number"). Check if the Number is a Multiple of 5 or not 

let CheckNumber;
//CheckNumber = prompt("Enter the Number :");

if (CheckNumber % 5 == 0) {
    console.log("It is a Multiple of 5 :",CheckNumber);
}else{
    console.log("It is not Multiple of 5 :",CheckNumber);
}

// Write a code which can give grades to students according to their scores.
//  80 to 100 - A Grade , 70 to 79 - B Grade , 60 to 69 - C Grade , 50 to 59 - D Grade , 0 - 49 - F Grade

let StudentMarks = prompt("Enter the Mark");

if ( StudentMarks >= 80 || StudentMarks >=100 ) {
    console.log("A - Grade");
}else if ( StudentMarks >= 70 || StudentMarks >= 79 ) {
    console.log("B - Grade");
}else if ( StudentMarks >= 60 || StudentMarks >= 69 ) {
    console.log("C - Grade");
}else if ( StudentMarks >= 50 || StudentMarks >= 59 ) {
    console.log("D - Grade");
}else{
    console.log("F - Grade");
}